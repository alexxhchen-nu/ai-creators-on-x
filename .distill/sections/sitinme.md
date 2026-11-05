## @sitinme · sitin
**摘要**：增长黑客/社群运营出身，做了几十个站、自称月入 10K 美金，品牌站 HiAPI；把出海获客拆成岗位级 Bot、支付召回链接、Agent 换模型这类可执行动作。

| 粉丝 | 关注 | 学习方向 | 抓取 | 主页 |
| --- | --- | --- | --- | --- |
| 32.8K | 536 | AI 出海网站 | 74/80 | https://hiapi.ai |

### 画像
简介「增长黑客 / 社群运营 / AI 出海赚美刀」，做过几十个站，自称月入 10K 美金，品牌站 hiapi.ai，2012 年注册 X。内容三条线：工具实测（常从「一个具体缺口」切入）、可共享的 AI 工作流、出海转化细节。与本组差别：唯一以「收到钱」为主线的作者，关心职责分层与转化，而不是模型能力本身。

### 核心方法论
1. **岗位级 Shared Bot** — 把「早报 / 热点 / 素材→推文草稿」拆成岗位 Bot，规则沉淀为可共享、可一次更新的技能，而不是散在各人聊天里；每个 Bot 要给四样东西（缺一就容易胡说）。依据 `2026-10-28` https://x.com/sitinme/status/2115344818230489539 。
2. **自动流程在关键处留人工闸** — Grok 搜集素材进飞书素材库 → 固定时间 bot 挑题 → 写分享体 → 只进飞书审稿；自动任务在此停下等人说话。依据 `2026-11-03` https://x.com/sitinme/status/2117603701783400692 。
3. **召回靠链接而非文案** — 监听 Stripe 未付款并发召回邮件：有恢复链接就直达收银台，没有就回充值页、默认上次金额与支付方式；发信前接好 expired/completed hooks。依据 `2026-10-30` https://x.com/sitinme/status/2116117911299670032 。
4. **解耦 Agent 与模型** — OpenCodex 在本机 10100 端口做双向翻译（Codex 只认 Responses API，别家给 Chat Completions 或自家协议）；或用 magpie Agent 页统一写 provider/model，只改一个键。依据 `2026-10-31` https://x.com/sitinme/status/2116476022916817092 、https://x.com/sitinme/status/2116345411979944198 。
5. **把「AI 味」写成规则再验收** — frontend-design 先把 Inter 字体、紫色渐变、三栏卡片拉黑；impeccable 再补项目上下文（首次跑 `/impeccable init`）、62 种 AI 味规则与「写完有没有真躲开」的检查。依据 `2026-11-01` https://x.com/sitinme/status/2116706539927212085 。
6. **动态工作流替代重复 Skill** — 岗位先钉死、流程落成可改的 JS、反复跑的用工作流、Skill 负责教本事；十来个 subagent 就够。依据 `2026-10-30` 转述 Lydia Hallie https://x.com/sitinme/status/2116154150576652583 。

### 工具与产品清单
| 名称 | 类别 | 用途 / 评价 | 出处 |
| --- | --- | --- | --- |
| HiAPI | API 聚合 | 图像/视频/音频一个 endpoint，产物给持久链接，自带 MCP/Skills | 主页 |
| OpenCodex | 本地代理 | 给 Codex / Claude Code 换模型，界面不换只换脑子 | 2026-10-31 |
| magpie | Agent 管理 | 一张表管所有 Agent 的 provider/model | 2026-10-31 |
| Agent Reach | 内容获取 | 同任务配多工具，失败自动降级（Jina→Exa） | 2026-11-04 |
| impeccable / frontend-design | 设计 Skill | 去 AI 味 + 项目上下文 + 验收 | 2026-11-01 |
| PPT Master | 开源 Skill | 先理逻辑再排版，产出可改的 .pptx | 2026-10-28 |
| diagram-design | 开源 Skill | 先回短方案（图型/尺寸/砍复杂度）再画，输出 SVG | 2026-10-29 |
| Open Notebook | 开源 | NotebookLM 平替，模型随便换、数据自持 | 2026-11-04 |
| Grok Bot / Shared Bot | 岗位 Agent | 早报/热点/素材→推文草稿，按岗位共享 | 2026-11-03 |
| Strata | MoE 推理 | 12G 显存装 125B，给专家「排座位」 | 2026-10-29 |
| CLI-Anything | 开源 | 把软件变成 Agent 可调用的 CLI | 2026-10-26 |

### 可复用片段
```text
监听未付款，发召回邮件。关键不在文案，在跳转链接。
```
Stripe 召回的核心（`2026-10-30`）。

```text
Make me an architecture diagram of my app:
frontend, backend, database, Redis cache.
```
diagram-design 的用法：agent 先回短方案，再动手（`2026-10-29`）。

```text
先让 AI 稳定交出一份你能审核的结果，再逐步扩大自动执行的范围。
```
自动化的推进顺序（`2026-10-27`）。

### 判断与趋势
- **AI 自动化不是堆工具，而是职责分层**（置顶，`2026-02-02`）。
- **拼的是交付与销售速度**：「现在拼的不是技术多深，而是谁更快把东西做出来、卖出去」（`2026-02-02`）。
- **岗位级 Bot 把个人经验变成组织资产**：规则可共享、可一次更新，而不是散在聊天里（`2026-10-28`）。
- **榜单骤降多为换考纲**：Artificial Analysis 上 Kimi K3.1 Pro 55→46、DeepSeek V4.1 Flash 45→32，是换了考试标准而非模型退化（`2026-10-30`）。
- **中转 API 的真伪需要凭证**：Anthropic 的 FlashProve 想为「回答你的真是它」提供可验证凭据（`2026-11-04`）。
- **出海差距在细节**：收款召回、SEO 巡检这类环节比功能更决定收入（`2026-10-30`、`2026-11-03`）。

### 代表原帖
- [2026-02-02] 成都线下聚会：AI 自动化是职责分层，拼交付速度 — https://x.com/sitinme/status/2018273187763720352
- [2026-10-30] Stripe 未付款召回，关键在跳转链接 — https://x.com/sitinme/status/2116117911299670032
- [2026-10-31] OpenCodex：给 Codex / Claude Code 解耦模型 — https://x.com/sitinme/status/2116476021213954063
- [2026-11-01] impeccable：把 62 种 AI 味写成规则 — https://x.com/sitinme/status/2116706539927212085
- [2026-11-03] Grok Bot 跑完 X 内容工作流，只留两道人工闸 — https://x.com/sitinme/status/2117603701783400692

### 链接资产
| 链接 | 类型 | 内容摘要 | 状态 |
| --- | --- | --- | --- |
| https://gameartstyle.loopyhop.com | 图鉴 | 37 种游戏美术风格、104 款游戏的视觉索引，按 Pixel/Paint/3D 分类 | 已抓取 |
| https://gameartstyles.com | 图鉴 | 451 款游戏、153 种风格，含截图、系列时间线与每日更新 | 已抓取 |
| https://bestof.games/en/styles | 图鉴 | 按视觉风格归类 Steam 游戏，37 种风格，取截图最匹配的作品 | 已抓取 |
| https://game-oracle.com/research-tools/art-explorer | 工具 | 用自然语言/参考图/色板搜 Steam 截图，单次最多 1000 张，可导入 Lospec | 已抓取 |
| https://lospec.com/palette-list | 资源 | 2500+ 像素画色板，支持 PNG/PAL/ASE/GPL/HEX 导出 | 已抓取 |
| https://starpixel.wiki | 资源 | 像素画技法百科：抖动、色板构建、子像素动画 | 已抓取 |
| https://github.com/HKUDS/CLI-Anything | GitHub | 58,293 stars、Apache-2.0，把软件做成 Agent-native CLI | 已抓取 |
| https://hiapi.ai | 产品 | 图像/视频/音频统一 API，持久产物链接，注册送 200 credits | 已抓取 |
