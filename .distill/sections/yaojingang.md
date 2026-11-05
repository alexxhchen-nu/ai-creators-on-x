## @yaojingang · 姚金刚

**摘要**：AI 营销与教育科技创业者，GEOFlow、GEOLab、GEOInflow 等开源 GEO 工具作者，办第二届 GEO 大会并主讲公开课。价值在于把 GEO 拆成「知识库—内容生产—质检—分发—引用测量」的可执行工程链路，并给出实证数据。

| 粉丝 | 关注 | 学习方向 | 抓取 | 主页 |
| --- | --- | --- | --- | --- |
| 23.4K | 429 | GEO | 60/84（2026-11-04） | [hui.ailingdaoli.com](https://hui.ailingdaoli.com) |

### 画像

AI 营销与教育科技创业者，早年做过知识付费 MCN（签约歌手、导演、奥运冠军等 IP）。内容以 GEO 为轴：一边自研并开源工具，一边用公开课、论文库和行业报告输出方法论，发帖密度高、单条常带可点开的产品或仓库。与本组其他人相比，他不做单点技巧，而是把 GEO 当成一条从数据采集到效果归因的产业链来搭基础设施。

### 核心方法论

1. **把优化单位从 query 换成意图组** — 外部拿不到 AI 平台的完整 query 日志，无法证明「哪句话被问得最多」，因此把「推荐一双鞋／给我推荐个鞋子／什么鞋适合我」归并为同一推荐决策意图，按意图组而非单条 query 布内容。依据（`2026-09-15` + [原帖](https://x.com/yaojingang/status/2099759215875367307)）。边界：需要行业语义归类能力，长尾极分散的品类难收敛。
2. **引用广度与吸收深度分开看** — 跨平台实验结论是：Perplexity/Google 平均引用更多信源，ChatGPT 引用更少但所抓页面平均「引用影响力」更高；高影响力页更长、分段清楚、含定义／数字／对比／操作步骤，单纯堆 Q&A 格式不带来吸收优势。依据（`2026-10-28` + [GEOLab](https://github.com/yaojingang/geo-citation-lab)）。边界：静态快照与描述性统计，不等于因果。
3. **六环节链路拆解** — 提问 → 搜索触发 → 信源选择 → 内容吸收 → 实体曝光 → 跨平台与跨终端差异，并做成可视化教学页，用来向客户解释 GEO 到底在优化哪一步。依据（`2026-10-29` + [原帖](https://x.com/yaojingang/status/2115785199573184661)）。
4. **知识库先做扎实，再谈分发** — 一家上市公司年费 200 多万元的 GEO 服务，关键策略不是铺量而是「把知识库做扎实」；配合 GEOFlow 的「知识库—生成—质检—人工复核—多站分发」流水线。依据（`2026-09-11` + [原帖](https://x.com/yaojingang/status/2098227639593148422)）。边界：企业得先有可结构化的事实资产。
5. **先把自己的站点变成可被 AI 读取的信源** — GEO 第一步是收拾个人站，让每个 AI 都认识你，再做友链网络交换，自称「web2.0 GEO 版」。依据（`2026-10-28` + [原帖](https://x.com/yaojingang/status/2115289972018491816)）。边界：只适用于有独立站的主体。
6. **只走白帽路线** — 判断是 AI 能力越强，对白帽 GEO 越有利、对黑帽越不利，因此方法上押注可信信源与真实语料，而非投毒。依据（`2026-09-10` + [原帖](https://x.com/yaojingang/status/2097981782092349821)）。

### 工具与产品清单

| 名称 | 类别 | 用途 / 评价 | 出处 |
| --- | --- | --- | --- |
| GEOFlow | 开源 GEO 系统 | 知识库＋AI 内容生产＋质检＋多站分发＋远程 CLI；PHP，AGPL v3，4,028 stars | [GitHub](https://github.com/yaojingang/GEOFlow) / `2026-09-16` 帖 |
| GEOInflow | 网站与 AI 爬虫分析 | 访客、AI 引荐、抓取日志、内容目录同上下文；MIT、Docker 一键部署 | `2026-10-26` 帖 |
| GEOLab | 研究资料库 | 122 篇论文/18 主题、CN-GEO 214,119 条引用、602 条跨平台 Prompt、30 题能力测试 | [GitHub](https://github.com/yaojingang/geo-citation-lab) |
| yao-open-prompts | 提示词库 | 双语 135 套，含 17 套知识付费场景 | [GitHub](https://github.com/yaojingang/yao-open-prompts) |
| TokEMS | 大会运营平台 | 官网/报名/票务/订单/发票/签到，迭代 140 次 | [GitHub](https://github.com/yaojingang/TokEMS) |
| Profound 复刻 | 逆向参考 | 官网、工作台、后台三系统还原，含 7 个 AI 引擎可视化 | `2026-10-14` 帖 |
| 在线文档分享系统 | 自用工具 | HTML/PDF/Word/PPT 短链分享＋统计看板，HTML 可在线改 | `2026-11-04` 帖 |

### 可复用片段

```text
这是我的开源项目 GEOFlow：
https://github.com/yaojingang/GEOFlow
请以世界顶级4A公司水准，为它创作并制作一个宣传视频
```
出处：`2026-10-08` 原帖，配合 Grok Bot 生成宣传片。

```text
提问 → 搜索触发 → 信源选择 → 内容吸收 → 实体曝光 → 跨平台与跨终端差异
```
出处：GEOLab README 的研究主线（节选）。

```text
L1 入口层 / L2 信源层 / L3 数据层 / L4 技术层 / L5 执行层 / L6 交易层 / L7 治理层
```
出处：《中国 GEO 生态商业模式全景》报告，配套 19 种可独立成立的商业模式。

### 判断与趋势

- **早期红利仍在**：他在数智峰会现场调研，约 95% 企业还没系统部署 GEO，认为 Agent 消费决策时代窗口很大（`2026-09-05`）。
- **GEO 已成官方议题**：央视总台发布 GEO 战略、提出 2027「品牌强国工程」AI 传播方案并推国家品牌可信语料平台；北京日报、新华网也各自发布 GEO 产品（`2026-09-23`、`2026-10-12`）。
- **长期价值在数据与知识资产**：GEO 正汇合搜索、PR、舆情、MarTech 与 Agent 营销，价值会集中在 AI 可见性数据、企业知识资产和「GEO 操作系统」。
- **引用份额会剧烈漂移**：Promptwatch 观察到 Reddit 在 ChatGPT 引用样本中的份额从均值 3.83% 降到 0.52%（相对降约 86.4%），说明押注单一平台有风险。
- **被提及本身有商业价值**：ProFound 基于 2026 年 1—6 月 200 多万次 AI 对话研究「AI Mention Effect」，考察被 AI 提及后 7 天内品牌官网访问概率的变化。
- **平台侧走工具化**：腾讯 AnswerBit 定位 SaaS，只做 GEO 数据监测与内容生成，不做投放、服务与运营。

### 代表原帖

- [2026-10-26] 开源 GEOInflow：把访客、AI 引荐、爬虫日志与内容目录放进同一上下文 — https://x.com/yaojingang/status/2114576054018818536
- [2026-10-28] 论文库更新到 70 篇、分 10 个主题，覆盖引用机制与效果测量 — https://x.com/yaojingang/status/2115340382741405705
- [2026-09-16] GEOFlow v3.2.0：独立远程 CLI 与全局 Skill，AI 可管多实例 — https://x.com/yaojingang/status/2100165248816922868
- [2026-09-29] 开源百度相关搜索词采集 Skill，用下拉框与相关搜索免费拿长尾词 — https://x.com/yaojingang/status/2104744460647067973
- [2026-09-11] GEO 优化的尽头是扎实的知识库，而不是话术 — https://x.com/yaojingang/status/2098227639593148422

### 链接资产

| 链接 | 类型 | 内容摘要 | 状态 |
| --- | --- | --- | --- |
| [github.com/yaojingang/GEOFlow](https://github.com/yaojingang/GEOFlow) | GitHub 仓库 | 开源 GEO 内容工程与多站分发平台，含 AI 质检、托管站点、浏览器辅助发布、签名更新；PHP，AGPL v3，4,028 stars | 已抓取 |
| [github.com/yaojingang/geo-citation-lab](https://github.com/yaojingang/geo-citation-lab) | GitHub 仓库 | 仓库名实为 GEOLab：论文/数据集/实验/白皮书库，含跨平台实验脚本、CN-GEO 数据与 30 题能力测试 | 已抓取 |
| [github.com/yaojingang/yao-open-prompts](https://github.com/yaojingang/yao-open-prompts) | GitHub 仓库 | 双语提示词库，按 AI 方法/工作/学习/营销等目录组织，2,967 stars | 已抓取 |
| [github.com/yaojingang/TokEMS](https://github.com/yaojingang/TokEMS) | GitHub 仓库 | 开源自托管大会运营平台，贯通官网、报名、票务、订单、发票、通知与签到；TypeScript，78 stars | 已抓取 |
| [doc.laoyao.cn/gyn8gr](https://doc.laoyao.cn/gyn8gr) | 行业报告 | 《中国 GEO 生态商业模式全景》：七层产业链、19 种商业模式、5 个未来机会、4 个 GEO OS 引擎 | 已抓取 |
| [hui.ailingdaoli.com](https://hui.ailingdaoli.com) | 活动站 | 第二届 GEO 大会，2026-11-21/22 深圳宝安，¥399 通票，40+ 嘉宾、23 个主题 | 已抓取 |
| [laoyao.cn](https://laoyao.cn) | 个人博客 | 博客与友链网络入口 | 未验证（TLS 证书不匹配，未能打开） |
