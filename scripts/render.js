// Renders post JSON files to Instagram-ready PNGs.
// Usage: node scripts/render.js [posts/some-post.json ...]   (default: every file in posts/)
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");
const puppeteer = require("puppeteer-core");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "out");
const SIZES = { feed: [1080, 1350], square: [1080, 1080], story: [1080, 1920] };

const CHROME_PATHS = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

async function main() {
  const files = process.argv.slice(2).length
    ? process.argv.slice(2)
    : fs.readdirSync(path.join(ROOT, "posts")).filter(f => f.endsWith(".json")).map(f => path.join("posts", f));

  const executablePath = CHROME_PATHS.find(p => fs.existsSync(p));
  if (!executablePath) throw new Error("No Chrome or Edge found. Set CHROME_PATH.");

  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ executablePath, headless: true });
  try {
    for (const file of files) {
      const post = JSON.parse(fs.readFileSync(path.resolve(ROOT, file), "utf8"));
      const [width, height] = SIZES[post.size || "feed"];
      const page = await browser.newPage();
      await page.setViewport({ width, height, deviceScaleFactor: 1 });
      await page.evaluateOnNewDocument(p => { window.POST = p; }, post);
      await page.goto(pathToFileURL(path.join(ROOT, "templates", `${post.template}.html`)).href, { waitUntil: "networkidle0" });
      await page.evaluate(() => document.fonts.ready);
      const out = path.join(OUT, path.basename(file, ".json") + ".png");
      await page.screenshot({ path: out, clip: { x: 0, y: 0, width, height } });
      await page.close();
      console.log("rendered", path.relative(ROOT, out));
    }
  } finally {
    await browser.close();
  }
}

main().catch(err => { console.error(err); process.exit(1); });
