import fs from 'node:fs';

// Parse one account archive markdown file into { header, posts[] }.
// Posts are delimited by lines matching: ### <n>. [...](url)

export function parseAccount(raw, file) {
  const lines = raw.split(/\r?\n/);
  const handle = (raw.match(/^handle:\s*(.+)$/m)?.[1] || file.replace(/\.md$/i, '')).trim();
  const display = (raw.match(/^display_name:\s*"?([^"\n]+)"?$/m)?.[1] || '').trim();
  const track = (raw.match(/^learning_track:\s*"?([^"\n]+)"?$/m)?.[1] || '').trim();
  const declared = Number(raw.match(/^posts_captured:\s*(\d+)/m)?.[1] || 0);

  let first = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^###\s+\d+\./.test(lines[i])) { first = i; break; }
  }
  const headLines = first === -1 ? lines : lines.slice(0, first);
  const header = headLines.join('\n').replace(/\s+$/, '') + '\n';
  const rest = first === -1 ? [] : lines.slice(first);

  const posts = [];
  let cur = null;
  const push = () => {
    if (!cur) return;
    cur.raw = cur.lines.join('\n').replace(/\s+$/, '');
    posts.push(cur);
  };
  for (const line of rest) {
    const m = /^###\s+(\d+)\.\s*(.*)$/.exec(line);
    if (m) {
      push();
      cur = { n: Number(m[1]), head: m[2], lines: [line] };
    } else if (cur) {
      cur.lines.push(line);
    }
  }
  push();

  for (const p of posts) {
    p.date = (p.head.match(/^\[([^\]]+)\]/)?.[1] || '').trim();
    p.url = (p.head.match(/\((https?:\/\/[^)]+)\)/)?.[1] || '').trim();
    p.pinned = /置顶|Pinned/.test(p.head);
    const body = p.raw.replace(/^###.*$/m, '').replace(/^—\s.*$/gm, '').replace(/\n{3,}/g, '\n\n').trim();
    const own = body.replace(/^>\s?.*$/gm, '').replace(/\n{3,}/g, '\n\n').trim();
    // Prefer what the creator wrote; a post that is nothing but a quoted repost
    // falls back to the full block so nothing is silently skipped.
    p.jevText = own.length >= 12 ? own : body;
  }
  return { handle, display, track, declared, header, posts };
}
