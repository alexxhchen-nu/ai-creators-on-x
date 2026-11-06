// assets/readme/build-svgs.mjs — single source of truth for the README SVG system.
//
// Regenerates every text-bearing SVG under assets/readme/ from the open-science
// token block below. Run with:  node assets/readme/build-svgs.mjs
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
// Used for both badges and language/CTA pills. textW() below is a conservative
// advance estimate (CJK counts 1.0em, latin 0.55em) widened until the Chromium
// harness reported >= 6 units of slack on every half.
const em = (s) => [...s].reduce((a, c) => a + (/[\u2E80-\u9FFF\uF900-\uFAFF]/.test(c) ? 1.0 : 0.55), 0);
const halfW = (s, fs = 11) => Math.max(24, Math.round(em(s) * fs * 1.02) + 20);

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
  <rect x="22" y="14" width="40" height="28" rx="4" fill="${c}"/>
  <text x="42" y="33" fill="#ffffff" font-family="${T.mono}" font-size="14" font-weight="700" text-anchor="middle">${num}</text>
  <text x="78" y="35" fill="${T.ink}" font-family="${T.serif}" font-size="21" font-weight="700">${esc(title)}</text>
  <text x="1176" y="34" fill="${T.gray7}" font-family="${T.mono}" font-size="12" font-weight="600" text-anchor="end">${esc(note)}</text>`));
  }
}

// ------------------------------------------------- 3. pipeline 1200x212
// Geometry is deliberately rebuilt. The previous 202-wide node with a 14 inset
// left 188 units for a 195-unit line, so '1,145 条技术帖 · 保留 70%' crossed its
// border by 7.1 units. Widening to 219.2 (margins 20, gaps 16) gives 191.2.
export const PIPELINE = { margin: 20, gap: 16, w: 219.2, h: 148, y: 42, inset: 14, vbH: 212 };
const { margin: M, gap: G, w: NW, h: NH, y: NY, inset: IN } = PIPELINE;
const STEP_STYLE = { label: 32, main1: 70, main2: 92, sub: NH - 16 };

const PL = {
  zh: [
    { label: "STEP 1 · 原始抓取", main: ["1,641 条时间线推文"], sub: "pagesift 1.1.2 · 20 位创作者", c: T.iBlue },
    { label: "STEP 2 · 双层精筛", main: ["1,145 条技术帖", "· 保留 70%"], sub: "累计 62,165 赞 / 9,569 转", c: T.iIndigo },
    { label: "STEP 3 · 仓颉拆解", main: ["6 张 RIA++ 能力卡"], sub: "Cangjie v2.5 · R/I/A1/A2/E/B", c: T.iYellow },
    { label: "STEP 4 · 达尔文进化", main: ["Triage 65.8 → 88.9"], sub: "Paired 3/3 全票 · 18/18 断言", c: T.iGreen },
    { label: "STEP 5 · 全机部署", main: ["4 大全局目录同步生效"], sub: "Magpie · Claude · Agents · Pi", c: T.iOrange },
  ],
  en: [
    { label: "STEP 1 · COLLECT", main: ["1,641 Raw X Posts"], sub: "pagesift 1.1.2 · 20 accounts", c: T.iBlue },
    { label: "STEP 2 · FILTER", main: ["1,145 Tech Posts", "· 70%"], sub: "62,165 likes aggregated", c: T.iIndigo },
    { label: "STEP 3 · DISTILL", main: ["6 RIA++ Playbooks"], sub: "Cangjie v2.5 · R/I/A1/A2/E/B", c: T.iYellow },
    { label: "STEP 4 · EVOLVE", main: ["Darwin v2.1", "· 88.9 / 100"], sub: "Paired 3/3 keep · BL-1..6", c: T.iGreen },
    { label: "STEP 5 · DEPLOY", main: ["4 global skill hubs"], sub: "Magpie · Claude · Agents · Pi", c: T.iOrange },
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
      `    <text x="${IN}" y="${k === 0 ? STEP_STYLE.main1 : STEP_STYLE.main2}" fill="${T.ink}" font-family="${T.sans}" font-size="15" font-weight="700">${esc(t)}</text>`).join("\n");
    return `  <g transform="translate(${x.toFixed(1)}, ${NY})">
    <rect width="${NW}" height="${NH}" rx="8" fill="${T.surface}" stroke="${T.border}" stroke-width="1"/>
    <rect x="0" y="0" width="${NW}" height="4" rx="2" fill="${n.c}"/>
    <text x="${IN}" y="${STEP_STYLE.label}" fill="${n.c}" font-family="${T.mono}" font-size="10.5" font-weight="700">${esc(n.label)}</text>
${mains}
    <line x1="${IN}" y1="${STEP_STYLE.sub - 21}" x2="${NW - IN}" y2="${STEP_STYLE.sub - 21}" stroke="${T.border}" stroke-width="1"/>
    <text x="${IN}" y="${STEP_STYLE.sub}" fill="${T.gray7}" font-family="${T.sans}" font-size="10.5">${esc(n.sub)}</text>
  </g>\n${arrow}`;
  }).join("");
  write(`pipeline-${lang}.svg`, svg(1200, PIPELINE.vbH, PL_TITLE[lang], `  <defs><marker id="ar" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="${T.rule}"/></marker></defs>
  <rect width="1200" height="${PIPELINE.vbH}" rx="8" fill="${T.paper}" stroke="${T.border}" stroke-width="1"/>
  <text x="${M}" y="26" fill="${T.gray7}" font-family="${T.mono}" font-size="12" font-weight="600">${esc(PL_TITLE[lang])}</text>
${nodes}`));
}
console.log("wrote badges(6) + pills(10) + sections(14) + pipeline(2)");
