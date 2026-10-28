// Syncs the shared header/footer partials into every page.
// Usage: node build.js
const fs = require('fs');
const path = require('path');

const root = __dirname;
const parts = ['header', 'footer'];
const partial = Object.fromEntries(
  parts.map((p) => [p, fs.readFileSync(path.join(root, 'partials', p + '.html'), 'utf8').trim()])
);

for (const file of fs.readdirSync(root).filter((f) => f.endsWith('.html'))) {
  const full = path.join(root, file);
  let html = fs.readFileSync(full, 'utf8');
  for (const p of parts) {
    const re = new RegExp(`(<!-- ${p} -->)[\\s\\S]*?(<!-- /${p} -->)`);
    html = html.replace(re, `$1\n${partial[p]}\n$2`);
  }
  fs.writeFileSync(full, html);
  console.log('built', file);
}
