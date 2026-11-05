## @bozhou_ai · 泊舟
**摘要**：「AI Coding / Agent 实战派」，面向编程新手和老板；把 Claude Code 的官方命令、省钱配置、多 Agent 编排拆成一步一动，并用自己做小游戏、3D 游戏和视频来验证交付。

| 粉丝 | 关注 | 学习方向 | 抓取 | 主页 |
| --- | --- | --- | --- | --- |
| 32.8K | 852 | AI 编程 | 62/81 | https://leaprai.com/course |

### 画像
简介「AI Coding / Agent 实战派，帮编程新手和老板用 AI 把想法做成工具、产品」，常驻杭州，在 leaprai.com 卖 AI 编程课。内容三层：官方命令与配置、工具速报、自己用 AI 交付作品（小游戏、3D 游戏、口播视频）。帖短、频率高，常直接贴命令。与本组差别：最贴「照着做」的操作层，不做模型评测，也不追求视频审美。

### 核心方法论
1. **给 CLAUDE.md 做体检** — 先 `claude update` 到 v2.1.283+，在项目里运行 `/doctor prompt-audit`，它会读取 CLAUDE.md、AGENTS.md、.claude/ 与 ~/.claude/ 中的规则、技能和命令。依据 `2026-11-04` https://x.com/bozhou_ai/status/2117967500965294219 。
2. **/advisor 顾问模式省钱** — 平时让便宜的 Sonnet 干活，只在定方案前、同一错误反复出现、宣布完成前请 Opus 出主意；`/advisor opus` 开启，`/advisor off` 关闭。依据 `2026-11-02` https://x.com/bozhou_ai/status/2117231911835988140 。
3. **多 Agent 分工且互检** — 5 个 agent：找词员（每天 3 个候选词）、判词员（按 5 条标准判）、唱反调（专挑判词员毛病）、SEO 巡检员（丢网址就查）、报告员（做成工作台）。依据 `2026-11-03` https://x.com/bozhou_ai/status/2117619932003459560 。
4. **/delta share 多人协作** — 运行后同事可从自己的会话加入，拿到完整上下文与未提交改动，两人在同一 thread 上干活，背后由 DeltaDB 支撑。依据 `2026-10-28` https://x.com/bozhou_ai/status/2115417242758439203 。
5. **router/worker 分层** — 用户只跟 router 对话，router 把活交给 worker，自己从不干活。依据 `2026-11-02` 转述 DeepSeek 公开的 agent 设计 https://x.com/bozhou_ai/status/2117184225598394439 。
6. **一句话交整段工作** — 素材拷进文件夹，说「把这些片段剪成一支 10 分钟的 vlog，发 X 和 YouTube」；或写完小说只补一句「现在把它做成一部电影，我知道你能做好。自己想办法。」依据 `2026-11-02` https://x.com/bozhou_ai/status/2117208558416658681 、`2026-11-03` https://x.com/bozhou_ai/status/2117566540925239471 。

### 工具与产品清单
| 名称 | 类别 | 用途 / 评价 | 出处 |
| --- | --- | --- | --- |
| Claude Code（Opus 5.5） | Agent | 主力：剪辑、建岛、做游戏；20 美元套餐比 GPT 100 美元耐用 | 2026-10-14 |
| Codex | Agent | 与 Claude 交替跑；Terra 用量是 6.1 Sol 的 2 倍 | 2026-10-27 |
| Grok Bot | Agent | 「跨时代」，让他重新捡起出海 SaaS | 2026-11-02 |
| Delta（/delta） | 协作 | Claude Code 多人共享会话与未提交改动 | 2026-10-28 |
| Teamily | 多 Agent | 5 个岗位 agent 组成工作台 | 2026-11-03 |
| DeepSeek Harness | Agent 平台 | Creator Mode：一句话把想法做成插件 | 2026-11-03 |
| Cursor（Muse Wonder） | IDE | CursorBench 46.1%，$4/$20 每百万 token | 2026-10-16 |
| agent-desktop | Computer Use | 给任意 coding agent 加上操作整台电脑的能力 | 2026-10-31 |
| looseleaf | UI 组件 | 手绘风 shadcn/ui，123 个可访问组件 | 2026-11-03 |

### 可复用片段
```text
claude update
/doctor prompt-audit
```
全局审计 CLAUDE.md 的两步（`2026-11-04`）。

```text
/advisor opus     # 只在关键决策点请 Opus
/advisor off      # 关闭
```
省钱配置（`2026-11-02`）。

```text
找词员：每天找 3 个候选词
判词员：按 5 条标准判能不能做
唱反调：专挑判词员的毛病
SEO巡检员：丢网址就查 SEO 问题
报告员：把结论做成工作台
```
选题工作台的 5 个 agent（`2026-11-03`）。

```text
现在把它做成一部电影，我知道你能做好。自己想办法。
```
从小说到成片只加这一句（`2026-11-03`）。

### 判断与趋势
- **代码审查可能消失**（转述 Hyperbolic 联合创始人兼 CTO，他称之为「一个答案」）：团队已在自动批准大量 AI 写的 PR，终局是一个 agent 自己写、自己证明能跑通（`2026-11-04`）。
- **订阅性价比看实际额度**：Claude 20 美元套餐比 GPT 100 美元耐用；5 分钟视频从逐字稿到剪辑只用掉 5 小时线的 23%（`2026-10-14`）。
- **Grok Bot 改变独立开发者的可行性**：「因为有它，我现在可以重新捡起出海 SaaS」（`2026-11-02`）。
- **知识工作者最先被淘汰**：引 Anthropic 对 2030 年的三档推演（`2026-10-14`）。
- **瓶颈从生产转到分发**：小游戏开发 1.5 天，审核要 10 天（`2026-10-21`）。
- **课程需求在零基础侧**：13 章课件（50 多万字）加 37 万字录制逐字稿，第 1 章就要求「不装任何软件，一句话做出能玩的小游戏」（`2026-10-22`）。

### 代表原帖
- [2026-11-04] /doctor prompt-audit：一条命令体检 CLAUDE.md — https://x.com/bozhou_ai/status/2117967500965294219
- [2026-11-02] Claude Code 省钱两招：/advisor 与按需换模型 — https://x.com/bozhou_ai/status/2117231911835988140
- [2026-11-03] 5 个 agent 搭选题工作台（含唱反调） — https://x.com/bozhou_ai/status/2117619932003459560
- [2026-10-28] /delta share：Claude Code 支持多人协作 — https://x.com/bozhou_ai/status/2115417242758439203
- [2026-11-02] 一句「剪成 10 分钟 vlog」的完整交付过程 — https://x.com/bozhou_ai/status/2117208558416658681

### 链接资产
| 链接 | 类型 | 内容摘要 | 状态 |
| --- | --- | --- | --- |
| https://github.com/kevintngo/looseleaf | GitHub | 手绘风 shadcn/ui：123 个可访问 React 组件，468 stars、MIT，带 shadcn registry | 已抓取 |
| https://delta.dev/blog/claude-code-multiplayer | 博客 | Delta 官方博文：`/delta share` 生成链接、`/delta join` 加入，共享对话与未提交改动 | 已抓取 |
| https://teamily.ai/i/T93CGM | 邀请页 | Teamily AI 的邀请落地页（个人与社交 Agent OS），正文动态加载 | 已抓取 |
| https://littleprince.dev | 产品 | 《小王子：星辰之旅》3D 剧情游戏网页，需 Chrome/Edge 桌面端 | 已抓取 |
| https://chromewebstore.google.com/detail/anywear-pro-%E2%80%94-live-ai-vir/enaaagfjkgengmolhdmogbhimmbidjfo | 插件 | Anywear Pro 实时 AI 换装，912 用户、3.0 分，免费预览+付费时长 | 已抓取 |
| https://chatgpt.com/settings/billing | 页面 | ChatGPT 账单页（领取 Pro/Business 每月最高 $500 API credits 的入口），未抓取 | 未验证 |
