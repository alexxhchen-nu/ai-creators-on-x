import fs from 'node:fs';
import path from 'node:path';
import { parseAccount } from './posts.mjs';

const SRC = process.argv[2];
const OUT = process.argv[3] || 'posts.jsonl';
const MINLEN = Number(process.argv[4] || 8);

const files = fs.readdirSync(SRC)
  .filter(f => f.toLowerCase().endsWith('.md') && f.toLowerCase() !== 'index.md')
  .sort();

const rows = [];
const stats = [];

for (const f of files) {
  const raw = fs.readFileSync(path.join(SRC, f), 'utf8');
  const a = parseAccount(raw, f);
  for (const p of a.posts) {
    if (!p.jevText) continue;
    rows.push({
      id: a.handle + '#' + p.n,
      handle: a.handle,
      display_name: a.display,
      file: f,
      n: p.n,
      pinned: p.pinned,
      date: p.date,
      url: p.url,
      text: p.jevText
    });
  }
  stats.push({ file: f, handle: a.handle, declared: a.declared, parsed: a.posts.length, sent: a.posts.filter(p => p.jevText).length });
}

fs.writeFileSync(OUT, rows.map(r => JSON.stringify(r)).join('\n') + '\n', 'utf8');
console.log(JSON.stringify({
  files: files.length,
  postsOut: rows.length,
  declaredTotal: stats.reduce((s, x) => s + x.declared, 0),
  countMismatch: stats.filter(s => s.parsed !== s.declared).map(s => s.handle + ':' + s.parsed + '/' + s.declared)
}, null, 2));
