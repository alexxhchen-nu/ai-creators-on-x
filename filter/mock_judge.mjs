import fs from 'node:fs';

// Local keyword baseline used ONLY to sanity-check the pipeline plumbing and to
// give a cheap reference the real jev judgments can be compared against.
const IN = process.argv[2] || 'posts.jsonl';
const OUT = process.argv[3] || 'judged.mock.jsonl';

const RULES = {
  ai: /(AIGC|GPT|LLM|Claude|Gemini|Grok|DeepSeek|Midjourney|Sora|Seedance|Nano Banana|提示词|prompt|大模型|模型|智能体|Agent|生成式|文生图|文生视频|算力|微调|RAG|embedding|MCP|Cursor|Copilot|\bAI\b)/i,
  deepdev: /(代码|编程|开发者|程序|开源|GitHub|API|SDK|部署|架构|数据库|前端|后端|Python|JavaScript|TypeScript|Rust|Docker|Kubernetes|命令行|框架|重构|调试|算法|Linux|服务器|npm|pip)/i,
  techbiz: /(融资|估值|创业|公司|发布|产品|芯片|硬件|招聘|职位|行业|市场|收购|发布会|手机|电脑|苹果|谷歌|微软|英伟达|OpenAI|字节|腾讯|阿里)/i
};

const lines = fs.readFileSync(IN, 'utf8').split(/\r?\n/).filter(l => l.trim());
const out = [];
let i = 0;
for (const line of lines) {
  const row = JSON.parse(line);
  const t = row.text || '';
  const applied = [];
  const probabilities = {};
  for (const k of ['ai', 'deepdev', 'techbiz']) {
    const hit = RULES[k].test(t);
    probabilities[k] = hit ? 0.9 : 0.05;
    if (hit) applied.push(k);
  }
  probabilities.life = applied.length ? 0.15 : 0.92;
  if (!applied.length) applied.push('life');
  out.push({
    index: i,
    id: row.id,
    ok: true,
    failed: false,
    result: { probabilities, applied },
    meta: { handle: row.handle, file: row.file, n: row.n, url: row.url }
  });
  i++;
}
fs.writeFileSync(OUT, out.map(r => JSON.stringify(r)).join('\n') + '\n', 'utf8');
console.log(JSON.stringify({ rows: out.length, tech: out.filter(r => r.result.applied.some(l => l !== 'life')).length }));
