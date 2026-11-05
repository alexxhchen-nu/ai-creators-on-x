## @vikingmute · Viking
**摘要**：上海全栈独立开发者，TinyShip（双市场三框架 SaaS 底座）、TinyOwl（Mac 本地图片压缩与图床上传）、简单简历（easycv.cn）作者。深度实践以 Grok Bot 为中枢的半自动“软件工厂”流水线、E2E+录屏验收、AGENTS.md 反过度工程与 React 状态约束。

| 粉丝 | 关注 | 学习方向 | 抓取 | 主页 |
| --- | --- | --- | --- | --- |
| 69.6K | 281 | SaaS | 66/80 | https://tinyship.cn |

### 画像
上海独立开发者与自由职业者，2011 年 5 月加入 X，作品包括全栈 SaaS 模板平台 TinyShip、Mac 本地图片压缩工具 TinyOwl 与简单简历（easycv.cn）。内容聚焦于个人 SaaS 持续迭代（支付退款、Recipe 技能、自研微信支付库）、Grok Bot 自动化工程（开发、SEO、素材同步）及前端与 Agent 规范（AGENTS.md、Code Review、React 状态管理）。发帖高频且重工程实操，偏好分享真实跑通的半自动工作流。与本组其他人相比，他以单人维护多个商业项目为试验田，把 Agent 当作具备环境权限的“软件工厂”来压榨工程吞吐。

### 核心方法论
1. **一项目一专属 Grok Bot 的半自动“软件工厂”** — 每个产品配独立 Grok Bot，各自记 repo、测试规则与上下文（不拆细碎角色），直接在 Bot 机器跑 Cursor CLI；流程闭环：① Ticket tracker 每日搜 issue、每周一规划提需求；② Agent 编码、跑 E2E 并交付操作录屏作完工证据；③ 人仅在最初需求确认和最终上线推送时介入。依据：`2026-10-19` https://x.com/vikingmute/status/2112189220790100125 、`2026-10-23` https://x.com/vikingmute/status/2113615617958002698 、`2026-10-24` https://x.com/vikingmute/status/2113897633542758516 ；适用边界：适合 E2E 基建完备的中小全栈项目，不适合无自动化测试或强人工审计系统。
2. **Worktree 多分支 + 多 Agent 审查取代传统 PR** — 摒弃长分支与流于形式的人工 PR，主推 Trunk-based Development；同项目多 feature 采用 Git worktree 多分支并行，大 feature 启动双/三 Agent 交叉 Review 配合 CI 拦截，人工不再逐行读源码 diff，聚焦低回滚率与快修。依据：`2026-10-16` https://x.com/vikingmute/status/2111003256646504772 、`2026-10-28` https://x.com/vikingmute/status/2115258961293410490 、`2026-10-31` https://x.com/vikingmute/status/2116518147893190783 ；适用边界：适合高频交付的 AI 辅助团队，不适用于外部非授信提交或高危底层代码。
3. **AGENTS.md 反过度工程与 Pre-commit 体积硬拦截** — 针对 Codex 等爱写冗余防御代码与大文件：① 引入 OpenCode 风格指南，要求为罕见竞态或安全边界加复杂度前必须先向用户说明故障模式、概率与成本并获批；② UI 要求砍掉多余 tagline、helper text 和 secondary labels；③ 配置仅检查 staged 文件的 pre-commit hook（跳过 lockfile/codegen），拦截超 5000 tokens 的文件并提示拆分方法。依据：`2026-10-19` https://x.com/vikingmute/status/2112164433854373986 、`2026-10-24` https://x.com/vikingmute/status/2113982577925353743 、`2026-11-03` https://x.com/vikingmute/status/2117502355096674545 ；适用边界：适用于所有 AI Coding 仓库，生成物需显式豁免。
4. **面向 AI 的 React 状态收敛（禁裸 useEffect 与复杂 useState）** — 防止 AI 狂塞本地 `useState` 导致同步翻车：在项目规范与 Skill 中禁用 `useEffect`，除简单开关外禁用复杂 `useState`；规定全局共享用 Zustand（与 React 解耦），本地复杂交互用 `useReducer`，服务端数据用 React Query。依据：`2026-10-29` https://x.com/vikingmute/status/2115797935401369801 、`2026-10-29` https://x.com/vikingmute/status/2115798862699155704 、`2026-10-30` https://x.com/vikingmute/status/2115983184425054328 ；适用边界：适用于中大型 React 交互模块，纯展示组件无需强上 `useReducer`。
5. **Grok Bot + GSC MCP 全自动闭环运营 SEO** — 为 Grok Bot 挂载 `mcp-gsc`，在 Vault 存环境变量，授予代码、直接部署、看线上日志与回滚权限；设每周定时任务自主看 GSC 数据、改代码并通过 E2E 后直接上线。依据：`2026-10-18` https://x.com/vikingmute/status/2111814559942197535 、`2026-10-30` https://x.com/vikingmute/status/2116137815951991091 ；适用边界：适合内容站与 SaaS 落地页，前提是有 E2E 门禁与回滚能力。
6. **用 `/grill-me` 做高成本架构与人生决策拷问** — 在代码方案或个人抉择（如裁员后做自由职业/一人公司）想法模糊、试错成本高时，用 `/grill-me` 让 AI 毫不留情地追问漏洞。依据：`2026-10-25` https://x.com/vikingmute/status/2114171137488023765 ；适用边界：适合模糊探索期，不适用确定性执行任务。

### 工具与产品清单
| 名称 | 类别 | 用途 / 评价 | 出处 |
| --- | --- | --- | --- |
| TinyShip | 自研 SaaS 底座 | 支持 Next.js/Nuxt.js/TanStack Start 与双市场 7 大支付认证（¥299 终身），含 9 个 Skills 与 6+ Recipes | 2025-12-10 / 2026-11-02 |
| TinyOwl | 自研 Mac 工具 | 基于 Rust 的 Apple Silicon 本地图片压缩与 R2/S3/OSS/COS/MinIO 上传工作流工具（早鸟 $9 / ¥49） | 2026-10-20 / 2026-10-28 |
| better-wechatpay | 自研开源库 | 现代化 Node.js 微信支付库，已全量替换进 TinyShip | 2026-11-02 |
| Grok Bot | Agent 中枢 | 跑 Cursor CLI、SEO、晨间素材入 Obsidian、Tailscale 插件、Vault 凭证及 CF 域名邮箱路由转发 | 2026-10-19 / 2026-10-24 |
| Herdr / Ghostty | 终端工具 | 重度用 Herdr TUI（桌面版粗糙卡顿且会话不互通）；主力终端 Ghostty 1.4.0，看好 `libghostty` | 2026-10-28 / 2026-11-03 |
| Nimbus Docs | 文档框架 | Cloudflare 基于 Astro 的文档框架，MDX 编写，同步输出 HTML、Agent MD、`llms.txt` 与 MCP | 2026-11-03 |
| agent-desktop | 桌面自动化 | Vercel 出品，走 OS 无障碍树而非截图+Vision，省 Token 且速度快 | 2026-11-01 |
| Stageshow | Agent UI 技能 | 帮 Coding Agent 生成高质量产品级 Faux UI 静态图与循环动画（适用 Bento Grid / Hero 区） | 2026-11-01 |
| Pele | 图表渲染库 | Obsidian CEO 写的零依赖 Mermaid 转可换肤 SVG 库，gzip 230 kB（小 6 倍），渲染快最高 500 倍 | 2026-10-18 |
| UseVitrum | 3D 图标工具 | 免费本地化网页工具，把 SVG/PNG Logo 转多材质 3D 图标并导出 PNG/GLB/STL | 2026-11-01 |
| ThinkRail | Agentic IDE | JetBrains 开源套壳 Pi IDE，围绕 `SPEC.md` 管理工作区，不夹带私货 Prompt | 2026-10-26 |
| ChatGPT Images 2 | 生图模型 | 配合 Codex CLI 出设计图主力，汉字与效果优于 Grok Imagine | 2026-10-16 |
| Postman | API 工具 | 差评：未经许可装 Codex/Claude Code 插件、MCP 与 CLI，并强改 Hook 为 trusted | 2026-11-04 |

### 可复用片段
```text
"Before adding complexity for a speculative or vanishingly unlikely race or security edge case, explain the concrete failure mode, likelihood, and complexity cost to the user and get their buy-in. Do not silently expand scope"
```
节选自 OpenCode `AGENTS.md`，用于默认提示词根治 Codex 过度防御设计（`2026-10-24`）。

```text
"Cut taglines, helper text and secondary labels. If a screen needs them to make sense, fix the layout."
```
写入 `AGENTS.md` 的 UI 极简约束（`2026-11-03`）。

```text
你现在是一个 self imporvement 的 SEO 机器，我给了你大部分的权限， GSC 的数据，代码的权限，直接部署和查看线上 log 和回滚的权限，环境变量在 vault 中，现在你要通过不断的迭代提升 SEO 的水平，只需要在上线的时候通过 E2E
```
给 Grok Bot 赋权全自动迭代 SEO 的提示词（`2026-10-30`）。

```text
Create a pre-commit hook that prevents files over 5,000 tokens. Tokens = bytes/4.
Run only on staged files. Ignore files which are not authored by agents, like lockfiles or codegen.
Provide explicit instructions on how to split files in the error message.
```
拦截超过 5000 tokens 单文件的 Pre-commit Hook 提示词（`2026-10-19`）。

```bash
npx skills add TinyshipCN/tinyship-skills
npx skills add benjitaylor/skills --skill stageshow
```
安装 TinyShip 与 Stageshow 技能包的命令（`2026-11-01`）。

### 判断与趋势
- **对强模型不要 Overprompting**：本人观点，最新大模型能力极强，过多规则反而限制发挥；给清晰目标与明确验证条件（E2E + 录屏）即可（`2026-10-27`、`2026-10-30`）。
- **人工逐行 Review 与传统 PR 正在消亡**：本人观点，代码量大到读不过来后，PR 只剩点绿灯的仪式感，重心已转向 Worktree 并行、多 Agent 审查与控制回滚率（`2026-10-16`、`2026-10-17`、`2026-10-28`）。
- **写作绝不能用 AI 写初稿**：本人观点（共鸣 Martin Fowler《LLM Voice》），AI 初稿有难以洗掉的“恐怖谷效应”，可用 AI 列提纲，但正文必须自己写以保持思考（`2026-10-27`、`2026-10-30`）。
- **退订 ChatGPT、弃用国区 Claude、主力转 Grok Bot**：本人观点，痛批 ChatGPT Plus 是“纯纯废物/gateway drug”，GPT 6.1 能动性差、不说人话、常丢上下文；国区用 Claude 难逃封号不退钱；目前 Grok Bot + Cursor CLI 生态整合最好（`2026-10-20`、`2026-10-23`、`2026-10-28`、`2026-10-31`）。
- **上新站最耗时的是手工申请第三方环境变量**：本人观点，写码部署比去后台勾权限申配置还快，期盼所有服务都提供 CLI 或 MCP（`2026-10-16`）。

### 代表原帖
- [2026-10-24] OpenCode 的 AGENTS.md 专治 Codex 过度设计与防御性代码 — https://x.com/vikingmute/status/2113982577925353743
- [2026-10-23] 详解在 TinyShip 开发中落地的 Grok Bot 半自动“软件工厂”流程 — https://x.com/vikingmute/status/2113615617958002698
- [2026-10-29] AI 时代的 React 状态约束：禁用复杂 useState，拥抱 useReducer + Zustand + React Query — https://x.com/vikingmute/status/2115797935401369801
- [2026-10-16] 为什么传统 PR 已经没用了：基于 Worktree 的多分支并行与多 Agent 审查 — https://x.com/vikingmute/status/2111003256646504772
- [2026-10-19] 把编码、晨间素材采集与 SEO 全部迁到 Grok Bot 的实战工作流 — https://x.com/vikingmute/status/2112189220790100125

### 链接资产
| 链接 | 类型 | 内容摘要 | 状态 |
| --- | --- | --- | --- |
| https://tinyship.cn | 产品官网 | Viking 自研全栈 SaaS 底座（¥299 终身），支持 Next/Nuxt/TanStack Start、国内外 7 大支付（Waffo/Dodo/微信/支付宝/Stripe 等）、动态定价、返利与 9 个 Agent Skills | 已抓取 |
| https://tinyowl.app | 产品官网 | Viking 自研 Apple Silicon Mac 本地图片压缩与 R2/S3/OSS/COS/MinIO 上传工具，支持 GUI/粘贴板/CLI，买断早鸟价 $9（¥49） | 已抓取 |
| https://github.com/anomalyco/opencode/blob/dev/AGENTS.md | GitHub 文档 | OpenCode 仓库 `AGENTS.md` 规范，规定边界校验只做一次、禁提前抽单次 helper、禁未经同意为罕见边缘情况增加复杂度 | 已抓取 |
| https://nimbus-docs.com | 产品官网 | Cloudflare MIT 开源文档框架，支持人机共写、自带 `nimbus-docs lint --fix`、同步生成 Markdown、`/llms.txt` 与 `/mcp` | 已抓取 |
| https://agent-browser.dev/desktop | 工具文档 | `agent-desktop` 文档：跨 macOS/Windows/Linux 的桌面自动化 CLI/C 库，读取 OS 无障碍树 JSON 并按元素 Ref 执行 `snapshot -> drill -> act -> wait` | 已抓取 |
| https://benji.org/stageshow | 工具文档 | Benji Taylor 开发的 Stageshow Skill，含 React 套件、7 步流程与 `film.mjs` 分镜序列帧自检，帮 Agent 制作产品级 Faux UI 动画 | 已抓取 |
| https://aicodingdictionary.com | 知识站点 | Matt Pocock 制作的 AI 编程词典，大白话配 3D 图解释 Harness、Prefix Cache、Attention Degradation、Smart Zone、Dark Factory 等术语 | 已抓取 |
| https://claude.dev/blog/solving-code-review-at-anthropic/ | 技术博客 | Addy Osmani 等撰写的 Anthropic 工程文：披露 Claude Code 团队用 7 层自动与分级审查（含收敛轮次上限）将回滚率降低 40%+ | 已抓取 |
| https://pele.run | 工具官网 | Obsidian 开源 Mermaid 转 SVG 库 Pele，零依赖、gzip 230 kB（小 6 倍）、渲染 0.05–0.3 ms（最高快 500 倍），支持 CSS 变量免重绘换肤 | 已抓取 |
| https://martinfowler.com/bliki/LLM-Voice.html | 技术博客 | Martin Fowler 博文《LLM Voice》，剖析 AI 文本“恐怖谷效应”，建议切勿用 LLM 生成初稿以免丧失文风与独立思考 | 已抓取 |
| https://github.com/AminForou/mcp-gsc | GitHub | 第三方 Google Search Console MCP 仓库，用于接入 Grok Bot 做自动 SEO | 未验证 |
