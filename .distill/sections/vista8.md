## @vista8 · 向阳乔木

**摘要**：前字节跳动商业化 AI 产品经理、《AI领导力》合著者，自称已做 100 个上线网站与开源项目。可复用价值：一份公开数据集如何拆成多个垂直站点，以及「把踩坑过程写成 Skill、一句话让 Agent 装出来」的打法。

| 粉丝 | 关注 | 学习方向 | 抓取 | 主页 |
| --- | --- | --- | --- | --- |
| 136.4K | 1,683 | AI 编程 / vibe coding | 71/81 | [qiaomu.ai](https://www.qiaomu.ai/) |

### 画像

产品经理出身而非纯工程师，强项是信息组织与分发：先找到可用数据，再用 Agent 快速做成站点/插件/Mac App，最后统一配官网做 GEO/SEO。发帖节奏中等，单条常带完整因果（数据集多大、几天做完、装机量多少）。与本组其他人的差异：Viking 讲工程流水线，Baye 讲 App 商业闭环，他讲「用 Agent 把公开信息变成可分发资产」——内容与产品是同一条流水线的两端。

### 核心方法论

1. **一份数据集拆成多个垂直站点** — 用 HuggingFace 上的 12G HackerNews 数据（2006–2026），两三天内做出 hackerbooks（1.5 万本书评分）、hackerbiz（954 个赚钱/亏钱案例）、hn-writing（写作文章）、hackerurls（多次上首页的链接）、hackerpapers（论文 + 中文导读）。可执行顺序：确认数据集体量 → 按主题切分（书 / 商业案例 / 写作 / 链接 / 论文）→ 一个主题一个子域 → 每个子域单独配官网。依据 `2026-11-02`（[帖](https://x.com/vista8/status/2117176698336842027)）、`2026-11-03`（[帖](https://x.com/vista8/status/2117476713504604365)）。边界：依赖别人已整理好的大语料，重复做同类站点边际收益递减。
2. **每个自用工具都配官网，Build & Sell 两手抓** — 剪藏、阅读器、闪记都上线独立站点，他给的理由直白：「做一个官网，用于 GEO 和 SEO」。依据 `2026-10-27`（[帖](https://x.com/vista8/status/2115081949958316244)）。
3. **把过程写成 Skill，让 Agent 一句话生成 Mac App** — 把开发自用 Mac App 的经验、步骤固化成 skill：`npx skills add joeseesun/qiaomu-macos-dev`；能力点包括用 Lucide 图标库组合设计 icon、借 GitHub 实现在线更新、有开发者证书则自动公证 DMG。依据 `2026-11-04`（[帖](https://x.com/vista8/status/2117999413076246730)）。适用：单功能菜单栏/小窗口工具；不适用需要复杂架构的产品。
4. **许愿式编程：一句需求 + 「你搜索最佳实践来做」** — 需求描述里只给交互（快捷键、可拖入图片视频、存到当天日记），把技术选型完全交给 Agent。实测 3 分钟出第一版 Obsidian 全局速记工具，但本人补了一句「打磨还是需要时间」。依据 `2026-11-03`（[帖](https://x.com/vista8/status/2117649850837942529)）、`2026-11-03`（[帖](https://x.com/vista8/status/2117682826313339095)）。
5. **用定时任务治「上游天天变」** — DeepSeek Harness 每天更新导致插件不兼容，他让 Codex 建每日定时任务：检查最新版本号并自动迭代更新。依据 `2026-11-04`（[帖](https://x.com/vista8/status/2117981228574163179)）。这是本组最可直接抄的一条：把「跟进上游版本」外包给 cron + agent，而不是自己盯 release。
6. **账号稳定性靠基础设施而非技巧** — 自购域名邮箱经 Cloudflare Email Routing 指向 Gmail，两个 $20 档账号轮换使用，自称从未被封。依据 `2026-10-28`（[帖](https://x.com/vista8/status/2115487808404230154)）。

### 工具与产品清单

| 名称 | 类别 | 用途 / 评价 | 出处 |
| --- | --- | --- | --- |
| qiaomu-macos-dev | Agent Skill | 一句话开发 Mac App：图标、设置页、自动更新、公证 DMG、GitHub 发布；Swift + MIT，14 stars | `2026-11-04` |
| 乔木闪记 Jot | macOS App | ⌘⇧J 随手记（Markdown 实时渲染）、⌘⇧K 选中即存并带来源链接、截图本地 OCR；Swift/MIT，47 stars | `2026-11-03` |
| 乔木剪藏 Clipper | Chrome 扩展 | 文章/视频/播客阅读 + 双语字幕 + 笔记存入 Obsidian；快捷键 `aaa`/`iii`/`qqq`；MIT，免费开源 | `2026-10-27` |
| qiaomu-ui-learn-dsh | DSH 插件 | 13561 设计参考、106 交互标本、审美测验与 Markdown 笔记；TS/MIT，81 stars | `2026-10-28` |
| qiaomu-reader | Obsidian 插件 | 安装量破万，内置 HackerBooks 书库 | `2026-11-03` |
| qiaomu-rss / reader / home | DSH 插件 | AI RSS 阅读、电子书阅读、个人工作台，均由 Obsidian 插件移植 | `2026-10-27` |
| Codex + 飞书 CLI | 组合 | 多维表格收集 Logo 后一句话批量生成不同风格海报 | `2026-10-27` |
| Hallmark | 前端 Skill | 去「前端 AI 味」；他评价「丑到没有 AI 味」，随后自研版本 | `2026-10-27` |
| qiaomu-poster | Skill | 商业宣传海报生成，需配合 Codex | `2026-10-27` |

### 可复用片段

```
npx skills add joeseesun/qiaomu-macos-dev
```
出处 `2026-11-04`。装的不是一个 App，而是一套「怎么造 App」的步骤。

```
帮我开发一个 mac 软件，实现按快捷键换起（可自定义组合快捷键），
输入内容，拖入图片、视频，自动保存到当天的 Obsidian 日记中。
你搜索最佳实践来做
```
出处 `2026-11-03`。关键是最后一句把技术选型让渡出去，需求里只留交互约定。

```
帮我增加一个类似 X 发帖功能，支持图片、视频粘贴上传，
发布的内容可点击同步到 X 或小红书
```
出处 `2026-10-29`。原帖结论：「AI 变强后，真的是许愿式编程」，调试优化几轮即可。

```
Cloudflare → Email Service → Email Routing → Routing
（自有域名邮箱转发到 Gmail）
```
出处 `2026-10-28`，用于账号注册与稳定性；同一套路由思路也被他用来给 Bot 分配不同职能的收件地址。

### 判断与趋势

- **Agent 的下一个瓶颈是人，不是模型**：他引 DeepSeek 团队观察——一般人只能同时跟进 3–5 个活跃 session，自己也承认「项目多了想找某个迭代要翻好久」，因此押注「主 Agent 管所有项目」（`2026-11-01`，本人观点）。
- **两个拐点**：2025 年 11 月 Opus 4.5 / GPT-5.1 让 Vibe Coding 成立；2026 年 10 月 Opus 5.5 让 Vibe Gaming（3D 游戏）成立（`2026-10-28`，本人观点）。
- **PA 类产品存在结构性矛盾**：任务拆解与调度做得越好越烧算力，商业上难 PMF（`2026-11-04`，本人观点）。
- **安全面在恶化且可量化**：他引一项分析——725 万个 Gitee 仓库中平均每 275 个就能找到一个云资源或模型 API key（`2026-10-30`，转述他人数据）。
- **分发方式在变**：开源项目的安装说明正在变成「跟 Agent 说：安装这个项目 <URL>」，可被 Agent 一句话安装成为新的传播单位（`2026-10-27`，本人实践）。

### 代表原帖

- [2026-11-03] 用 12G HackerNews 数据一天内做出四个垂直站点 — https://x.com/vista8/status/2117476713504604365
- [2026-11-04] 把 Mac App 开发流程做成 skill，一条 npx 命令装走 — https://x.com/vista8/status/2117999413076246730
- [2026-11-03] 许愿式编程：一句需求 3 分钟出第一版，但打磨要时间 — https://x.com/vista8/status/2117682826313339095
- [2026-11-04] 让 Codex 建每日定时任务，自动跟进 DSH 版本并迭代插件 — https://x.com/vista8/status/2117981228574163179
- [2026-11-01] Agent 的瓶颈是人类只能同时跟进 3–5 个 session — https://x.com/vista8/status/2116918131067351427

### 链接资产

| 链接 | 类型 | 内容摘要 | 状态 |
| --- | --- | --- | --- |
| https://hackerbooks.qiaomu.ai | 站点 | 「黑客书架」：Hacker News 评论中被提及的 1.5 万多本书（2007–2026），按提及人数排序，另有「最多真心推荐」「上升最快」「为你推荐」视图，支持 `/`、`j/k`、`g h` 等键盘导航 | 已抓取 |
| https://clipper.qiaomu.ai | 站点 | 乔木剪藏官网：Chrome 扩展，读文章/看视频听播客（双语字幕、时间戳跳转）、选中提问、笔记追加到 Obsidian 日记；MIT 开源，标称不提供模型、用你自己的账号 | 已抓取 |
| https://www.qiaomu.ai/ | 站点 | 个人主页：前字节 AI 产品经理，列出 100 个上线网站与开源项目、8 期 Next Token 播客、GitHub 10,683 stars，并聚合博客/RSS 最新条目 | 已抓取 |
| https://github.com/joeseesun/qiaomu-jot | 仓库 | 乔木闪记源码：Swift + MIT，47 stars；Resources 内含 Geist 字体与品牌图标集，README 描述为「按一下快捷键把想法/选中内容/截图收进 Obsidian 或任意 Markdown 文件夹（macOS）」 | 已抓取 |
| https://github.com/joeseesun/qiaomu-macos-dev | 仓库 | Mac App 开发 skill：含 SKILL.md、Swift Package 模板（Theme/Toast/Updater/SettingsView）、build.sh / release.sh / 公证与 Sparkle 脚本、references 下 9 篇细则（图标、自动更新、权限、坑位等） | 已抓取 |
| https://github.com/joeseesun/qiaomu-ui-learn-dsh | 仓库 | UI 学习 DSH 插件：TS + MIT，81 stars，data 目录含 catalog/demos/learnui 三份数据，docs 记录了 DSH 0.2.2 到 RC5 的兼容性适配 | 已抓取 |
| https://rss.qiaomu.ai | 站点 | 「乔木 AI 资讯」，聚合并重写 AI 文章（含 ProductHunt、GitHub Trending 频道）；本轮未逐个打开验证内容 | 未验证 |
| https://aicodinghunt.qiaomu.ai | 站点 | 收集网友 Vibe Coding 作品的展示站，用 Grok Bot 读评论自动整理生成 | 未验证 |
