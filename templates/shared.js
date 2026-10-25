const TICK = '<svg viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5" fill="none" stroke="#2F7BFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// *word* in a headline becomes the single blue key word
function withKeyWord(s) {
  return escapeHtml(s).replace(/\*(.+?)\*/, '<span class="key">$1</span>');
}

function renderWordmark(el) {
  const img = new Image();
  img.onload = () => { el.innerHTML = ""; el.appendChild(img); };
  img.src = "../brand/rlj-wordmark.png";
  el.innerHTML = '<span class="letters">RLJ</span>' +
    '<svg viewBox="0 0 150 34"><polyline points="0,20 70,20 80,4 92,32 102,20 150,20"/></svg>';
}

function renderPost(post) {
  document.querySelectorAll(".wordmark").forEach(renderWordmark);
  document.querySelectorAll("[data-field]").forEach(el => {
    const key = el.dataset.field;
    const value = post[key];
    if (value == null) { el.remove(); return; }
    if (key === "headline") el.innerHTML = withKeyWord(value);
    else if (key === "points") {
      el.innerHTML = value.map(p =>
        `<div class="point">${TICK}<p><b>${escapeHtml(p.bold)}</b> ${escapeHtml(p.text)}</p></div>`).join("");
    } else el.textContent = value;
  });
}
