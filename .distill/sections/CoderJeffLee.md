## @CoderJeffLee · 写增长的子木

**摘要**：常驻新加坡的增长黑客与全干码农，在 GitHub 开源《AI 工具站 SEO 小册子》，把 SEO 从认知、站点规划、基建到外链拆成 24 章可执行步骤，并做 GEO 开源 Skill。价值是可照着抄的 SEO／GEO 作业流程。

| 粉丝 | 关注 | 学习方向 | 抓取 | 主页 |
| --- | --- | --- | --- | --- |
| 7,743 | 432 | AI 工具站 | 30/82（2026-11-04） | [bysocket.com](https://bysocket.com) |

### 画像

自称「增长黑客，全干码农」，做 AI 软件行业的出海增长，日常聊 SEO、GEO、内容与广告。发帖明显偏「写书」式：一篇长文配一条推文预告，章节按执行顺序编号，同时把源文件开源到 GitHub。与本组其他人相比，他很少晒营收，产出物是方法论本身——一套可以按章执行的建站 SOP。

### 核心方法论

1. **把网站当一本书来规划** — Entity 是这本书讲什么，Topic Map 是全书大纲，URL Structure 按大纲划分目录，Keyword-to-Page 把关键词簇落实到具体章节；URL 结构至少分三层：有哪些主目录、每个目录放什么页面、每页 Slug 怎么命名。依据（`2026-10-22` + [第 7 章](https://bysocket.com/saas-seo-playbook/07-url-structure/)）。边界：要先有 Page Owner 才能分目录。
2. **按「变不变」把页面分三类** — 首页和核心功能页直接写代码，结构稳、不乱变；博客用无头 CMS（如 Payload）管，持续加改文章不动代码；工具页内容放 CMS、功能留代码，用 toolKey 对接。依据（`2026-10-27` + [原帖](https://x.com/CoderJeffLee/status/2115023629398487110)）。边界：适合工具站与 SaaS 官网，纯内容站用不上第三条。
3. **新开目录先过四关** — 这个主题是否只在大纲里、还不够单独开频道，要先回答：①符合产品定位吗 ②承接的是长期、相对独立的需求吗 ③能支撑多个页面吗 ④这些页面能用相对一致的模板吗。他以 `/compare`、`/alternatives` 为例。依据（`2026-10-22` + [原帖](https://x.com/CoderJeffLee/status/2113111736492687442)）。
4. **多语言页面先映射主词，再翻译全文** — 链路是「英文 Top Keyword → 日语 Top Keyword → 围绕日语主词本地化全文」，而不是 AI 直译一遍就结束。依据（`2026-10-28` + [原帖](https://x.com/CoderJeffLee/status/2115291750705295494)）。
5. **用 Fan-out 报告做 GEO 选题** — 给 Skill 一个真实问题，保留 Responses API 返回的可见搜索轨迹，提取搜索词、来源 URL、最终引用并生成离线 HTML 报告；再对照站内内容，找「已覆盖／覆盖太浅／完全缺失」的主题。依据（`2026-10-14` + [文章](https://bysocket.com/chatgpt-fanout-queries/)）。边界：单次结果只是选题线索，不代表搜索量或排名难度，需多组问题重复跑并结合 GSC 与业务相关性。
6. **让 AI 写作别脱离原稿** — 创作流程三段：Codex 托管（带全部 SEO 项目记忆）＋已有原稿＋每章重点，明确要求「别脱离原稿表达、别 YY」。依据（`2026-10-30` + [原帖](https://x.com/CoderJeffLee/status/2116055901149040649)）。

### 工具与产品清单

| 名称 | 类别 | 用途 / 评价 | 出处 |
| --- | --- | --- | --- |
| 《AI 工具站 SEO 小册子》 | 开源教程 | 24 章、MIT，含目录与源文件 | [GitHub](https://github.com/JeffLi1993/saas-seo-playbook) |
| chatgpt-fanout-queries | Agent Skill | 抓 ChatGPT 可见搜索轨迹，输出搜索词/来源/引用/HTML 报告 | [文章](https://bysocket.com/chatgpt-fanout-queries/) |
| open-growth-skills | Skill 合集 | MIT，除 fan-out 外还有长文转社媒爆款帖 | [GitHub](https://github.com/JeffLi1993/open-growth-skills) |
| Payload | 无头 CMS | 承载博客内容，持续更新不动代码 | `2026-10-27` 帖 |
| Codex | 写作托管 | 带 SEO 项目记忆，按章节重点扩写 | `2026-10-30` 帖 |
| ToneBird | 写作润色 | 输入想法关键词一键润色 | `2026-10-18` 帖 |
| new-term-radar | 新词雷达 | 蹭新模型词找下游通用需求词（帖中转引） | `2026-10-12` 帖 |

### 可复用片段

```text
新站SEO怎么落地工程：三种页分开
1、首页和核心功能页：直接写代码，结构稳交互强，不乱变。
2、博客用无头CMS（如Payload）管，方便一直加改文章，不用动代码。
3、工具页内容放CMS、功能放代码，用toolKey对接。
```
出处：`2026-10-27` 原帖（节选）。

```text
英文 Top Keyword → 日语 Top Keyword → 围绕日语主词本地化全文
```
出处：`2026-10-28` 多语言 SEO 翻译技巧。

```text
Topic Map 决定网站写什么 → Keyword-to-Page 决定哪个页面承接 → URL Structure 决定页面放在哪里
```
出处：`2026-10-22` 第 7 章说明（节选）。

### 判断与趋势

- **GEO 不是 SEO 的子集**：两者是「两个有交集的圈」，目标不同但底层能力共通；在 Google 生态里不能说 GEO 包含 SEO（`2026-10-27`）。
- **AI Coding 只解决确定性部分**：SEO 基建的「1 是 1、2 是 2」很好解决，但实践里难的是「不知道该改什么就直接让 AI 改 SEO」（`2026-10-28`）。
- **AI 应用还没真正爆发**：看几个月营收榜，持续商业化的仍是老玩家，利润率很差，本质是卖模型、卖 token，要等基础设施再升级才有应用层百花齐放（`2026-10-22`）。
- **套壳站的窗口还在但变短**：转引的案例是买域名后 72 小时出单、Stripe 流水近 7200 刀（`2026-10-19`）。
- **蹭模型词有法务风险**：新模型词带品牌风险，通用场景词没有，所以新词雷达应瞄准下游通用需求（`2026-10-12`）。
- **重心转向 GEO**：小册子争取今年更完，明年写 GEO（`2026-10-20`）。

### 代表原帖

- [2026-10-22] 第 7 章 URL Structure：把网站规划成一本书 — https://x.com/CoderJeffLee/status/2113108963701244071
- [2026-10-27] SEO 建站三种页面分开：代码、CMS、toolKey 各管一段 — https://x.com/CoderJeffLee/status/2115023629398487110
- [2026-10-28] 多语言 SEO：先映射主词再翻译全文 — https://x.com/CoderJeffLee/status/2115291750705295494
- [2026-10-14] chatgpt-fanout-queries：跑真实问题建立 GEO 竞品池 — https://x.com/CoderJeffLee/status/2110224776086368470
- [2026-10-30] 第 12 章关键词优先级，并公开自己的写作流水线 — https://x.com/CoderJeffLee/status/2116055901149040649

### 链接资产

| 链接 | 类型 | 内容摘要 | 状态 |
| --- | --- | --- | --- |
| [bysocket.com/saas-seo-playbook/](https://bysocket.com/saas-seo-playbook/) | 教程目录 | 《AI 工具站 SEO 小册子：图解入门》全书目录，从 0.1 到第 23 章 SEO 与 GEO，声明「暂不卖课」 | 已抓取 |
| [bysocket.com/saas-seo-playbook/07-url-structure/](https://bysocket.com/saas-seo-playbook/07-url-structure/) | 教程章节 | 第 7 章：目录按页面类型划分，`/tools` 与 `/blog` 的语义差异，Slug 命名与多层结构 | 已抓取 |
| [github.com/JeffLi1993/saas-seo-playbook](https://github.com/JeffLi1993/saas-seo-playbook) | GitHub 仓库 | MIT，176 stars；chapters/ 下 24 个 Markdown，附全部插图 | 已抓取 |
| [bysocket.com/chatgpt-fanout-queries/](https://bysocket.com/chatgpt-fanout-queries/) | 文章 | Fan-out Skill 原理：Responses API + Web Search 取 queries/sources/url_citation；四种内容用法与局限 | 已抓取 |
| [github.com/JeffLi1993/open-growth-skills](https://github.com/JeffLi1993/open-growth-skills) | GitHub 仓库 | MIT，55 stars；含 chatgpt-fanout-queries 与 long-blog-to-viral-social-posts 两个 Skill | 已抓取 |
| [tonebird.ai](https://tonebird.ai) | 产品 | 邮件/聊天回复助手，按关系与历史对话起草，支持 Gmail、Slack 等 | 已抓取 |
| [github.com/zhuyansen/new-term-radar](https://github.com/zhuyansen/new-term-radar) | GitHub | 新词雷达开源项目（帖中转引，未打开） | 未验证 |
