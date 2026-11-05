import fs from 'node:fs';
import path from 'node:path';
import { parseAccount } from './posts.mjs';

const SRC = process.argv[2];
const JUDGED = process.argv[3];
const OUT = process.argv[4] || 'out';
const TECH = new Set(['ai', 'deepdev', 'techbiz']);

const verdict = new Map();
for (const line of fs.readFileSync(JUDGED, 'utf8').split(/\r?\n/)) {
  if (!line.trim()) continue;
  let o;
  try { o = JSON.parse(line); } catch { continue; }
  const applied = (o.result && o.result.applied) ? o.result.applied : [];
  const probs = (o.result && o.result.probabilities) ? o.result.probabilities : {};
  verdict.set(o.id, { applied, probs, isTech: applied.some(l => TECH.has(l)) });
}

for (const sub of ['clean', 'dropped', 'unjudged']) {
  fs.mkdirSync(path.join(OUT, sub), { recursive: true });
}

const files = fs.readdirSync(SRC)
  .filter(f => f.toLowerCase().endsWith('.md') && f.toLowerCase() !== 'index.md')
  .sort();

const report = [];
let cleanTotal = 0;
let dropTotal = 0;
let unjudgedTotal = 0;

for (const f of files) {
  const raw = fs.readFileSync(path.join(SRC, f), 'utf8');
  const a = parseAccount(raw, f);
  const clean = [];
  const dropped = [];
  const unjudged = [];
  for (const p of a.posts) {
    const v = verdict.get(a.handle + '#' + p.n);
    if (!v) unjudged.push(p);
    else if (v.isTech) dropped.push(p);
    else clean.push(p);
  }
  const render = (list) => a.header + '\n' + (list.length ? list.map(p => p.raw).join('\n\n') + '\n' : '');
  fs.writeFileSync(path.join(OUT, 'clean', f), render(clean), 'utf8');
  fs.writeFileSync(path.join(OUT, 'dropped', f), render(dropped), 'utf8');
  if (unjudged.length) fs.writeFileSync(path.join(OUT, 'unjudged', f), render(unjudged), 'utf8');

  report.push({ file: f, handle: a.handle, total: a.posts.length, clean: clean.length, dropped: dropped.length, unjudged: unjudged.length });
  cleanTotal += clean.length;
  dropTotal += dropped.length;
  unjudgedTotal += unjudged.length;
}

fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify({ cleanTotal, dropTotal, unjudgedTotal, perAccount: report }, null, 2), 'utf8');

const md = ['# 过滤报告', '', '| 账号 | 总数 | 保留(非科技) | 剔除(AI/技术) | 未判定 |', '| --- | --- | --- | --- | --- |']
  .concat(report.map(r => '| ' + r.handle + ' | ' + r.total + ' | ' + r.clean + ' | ' + r.dropped + ' | ' + r.unjudged + ' |'))
  .concat(['| 合计 |  | ' + cleanTotal + ' | ' + dropTotal + ' | ' + unjudgedTotal + ' |', ''])
  .join('\n');
fs.writeFileSync(path.join(OUT, 'report.md'), md, 'utf8');

console.log(JSON.stringify({ cleanTotal, dropTotal, unjudgedTotal }));
