# Auto Poster for Instagram

Makes on-brand RLJ Instagram posts from templates and (soon) publishes them on a schedule.

## How it works

- `brand/`: brand rules ([BRAND.md](brand/BRAND.md)) and colour/type tokens taken from the RLJ Brand Book.
- `templates/`: one HTML template per post type (`feature.html` so far), sized for Instagram.
- `posts/`: one JSON file per post: on-image copy, caption, hashtags and status (`draft` → `approved` → `posted`).
- `scripts/render.js`: turns each post into a PNG in `out/`, using your installed Chrome or Edge.

Wrap the one blue key word of a headline in `*asterisks*`.

## Render posts

```bash
npm install
npm run render
```

## Still to build

- Approval page
- Publishing through the Instagram API on a schedule
