# 前沿账号与信息源雷达 · 分层订阅与降噪路由协议

## R — 原文 (Reading)

> Best accounts to follow from each frontier lab to stay constantly up to date. Anthropic: @karpathy — must-follow account for AI; recently joined Anthropic. @bcherny — Claude Code creator, always shares great tips. @trq212 — also a Claude Code developer; writes amazing articles on CC. OpenAI: @polynoamial — works on reasoning research, shares a lot of technical details. @gabriel1 — Sora developer, great career path. @jxnlco — works on dev experience, shares a lot about Codex. Google AI: @OfficialLoganK — all the major Google Gemini and AI Studio updates. @ammaar — product and design; shares great things about vibe-coding in Google AI Studio. @fofrAI — cool use cases for generative models. Cursor: @leerob — the loudest voice behind Cursor updates. @ericzakariasson — shares great insights on using Cursor. @mntruell — Cursor's CEO; major releases and usage updates. xAI: @milichab — recently joined xAI, shares updates on Grok. @skcd42 — also covers major Grok releases.
> — @ai_explorer25, 2026-11-06

> 在插件里按流速阈值（如 1k+，可配置）在首页/列表/详情/博主主页只展示热帖以对标学习，同时按关键词规则过滤黄推与广告。
> — @icycat, 2026-06-01（X 高流速热帖对标与降噪法）

> 与其手动刷关注，不如扒垂直公开数据做窄赛道首个情报库（如 KOL Hunter，追踪 3,600+ 博主与 4 万条商单），让「谁值得看」变成可查询的数据资产，而非凭感觉维护的关注列表。
> — @AI_Jasonyu, 2026-11-02（转述）

---

## I — 方法论骨架 (Interpretation)

「前沿动态跟不跟得上」，本质上不是「关注了多少账号」的量问题，而是「能否把某个账号稳定映射成某类决策信号」的**路由问题**。

@ai_explorer25 的原始清单按实验室（Anthropic / OpenAI / Google AI / Cursor / xAI）排列，但按公司排只回答「他属于哪个厂」，回答不了「我为了拿什么才看他」。真正可复用的骨架，是把「人」重组为「信号域」——每个账号是一类信号的固定发射源，按你要拿的东西分层：

1. **底层原理信号**（@karpathy、@polynoamial）：拿「为什么」。用于校准对模型能力的长期判断，而非追单次发布；这类信源更新频率低但半衰期长。
2. **Agent 工具实操信号**（@bcherny、@trq212、@jxnlco）：拿「怎么用」。Claude Code / Codex 的作者与深度使用者，发的是工具设计与最佳实践的一手情报，是提升日更效率的主粮。
3. **生成视觉信号**（@gabriel1、@fofrAI）：拿「能做出什么」。Sora 开发者与跨模型创意用例，用于前瞻视频/图像产品形态。
4. **产品与 vibe-coding 信号**（@ammaar、@OfficialLoganK）：拿「产品往哪走」。AI Studio / Gemini 的产品设计与用法更新，用于判断平台风向与产品机会。

光有信号源不够，还需两条降噪与沉淀机制（来自本书语料）：

- **流速阈值过滤**（@icycat）：只在高流速阈值之上才看，滤掉黄推与广告，把时间线从「信息流」压成「对标样本」——你不是在追热点，而是在采样被市场验证过的内容。
- **数据库化而非订阅化**（@AI_Jasonyu）：与其手动 follow，不如把「谁、发什么、值多少」扒成结构化情报库，让「该看谁」变成一个可查询、可更新的资产，而非一次性收藏夹。

骨架一句话：**「账号 → 信号域」路由 + 「流速阈值」降噪 + 「情报库」沉淀**，三者合起来才是可持续的前沿跟踪，而非吃灰的 follow 列表。

---

## A1 — 应用示例 (Application Example)

### 示例 1: 把一条 KOL 关注清单重排成「信号域路由表」
- **类型与来源**: 新增长内容实操（`@ai_explorer25` `2026-11-06` 帖文，经本卡二次重组）
- **问题/输入**: 收到一份按实验室排的 15 人「值得关注」清单，直接照单全收会变成收藏夹垃圾，也无法回答「遇到某类问题时该先看谁」。
- **方法论的使用**: 先剔除你已有稳定信源、或与你工作无关的组（本卡保留 4 组 9 人，去掉 Cursor / Grok）；再按「要拿什么信号」重排为底层原理 / Agent 实操 / 生成视觉 / 产品设计四域，给每个账号写清「跟他是为了拿什么」；最后只在需要某类信号时才定向查对应账号，而不是无差别刷整条时间线。
- **结论**: 清单从「15 个名字」变成「4 个信号域 × 各 2–3 个信源」的查询表，信息到达路径从被动刷流变成主动取号。

### 示例 2: 用流速阈值 + 关键词过滤给时间线降噪（@icycat）
- **类型与来源**: 原书实操案例（`@icycat` `2026-06-01` 帖文）
- **问题/输入**: 在 X 上刷博主主页/时间线时，被黄推、广告与低质碎帖淹没，无法快速定位到值得对标学习的真内容。
- **方法论的使用**: 在浏览器插件中按流速阈值（如 `1k+`，可配置）过滤，首页/列表/详情/博主主页只展示高流速热帖；再叠加关键词黑名单过滤黄推与广告；把「刷时间线」变成「刷被市场验证过的对标样本」。
- **结论**: 同样时长的浏览，信息密度大幅提升，且对标样本可直接用于自己的选题与内容形态参考。

### 示例 3: 把「关注谁」升级成可查询情报库（@AI_Jasonyu）
- **类型与来源**: 原书实操案例（`@AI_Jasonyu` `2026-11-02` 帖文，KOL Hunter）
- **问题/输入**: 手工维护关注列表，账号一多就失控，也无法回答「这赛道谁最值、哪些博主在接什么商单」这类量化问题。
- **方法论的使用**: 扒取垂直公开数据（如 3,600+ 博主与 4 万条商单），建成窄赛道首个情报库；「谁值得看」从凭感觉的 follow 变成可查询、可排序的数据资产。
- **结论**: 关注行为从「消费内容」升级为「运营情报」，信源管理变成可复利、可交付的产品。

---

## A2 — 触发场景 (Future Trigger) ★

### 语言信号 (用户的话里出现这些就应激活)
- 「给我推荐几个值得关注的 AI 账号 / 大 V / 信息源」「谁讲 X 领域最靠谱」
- 「我关注了一堆人但时间线全是噪音」「怎么过滤黄推和广告」「刷 X 很浪费时间又怕漏掉重要更新」
- 「怎么跟踪 Claude Code / Codex / Gemini / Sora 的最新动态」「有哪些一手信源而不是二手搬运」
- 「把这些人按领域重排 / 分组一下」「这个 KOL 说的到底靠不靠谱、要不要信」

### 与相邻 skill 的区分
- 与 `agent-software-factory` 的区别：该卡解决「如何一个人并发开发多个项目」，本卡解决「如何搭建并维护自己的前沿信息源」。
- 与 `agent-benchmark-and-model-routing` 的区别：该卡解决「如何亲自实测与选型模型」，本卡解决「如何从外部信源提前拿到信号、并甄别其可信度」；两者互补——本卡是「听谁讲」，该卡是「自己测」。
- 与 `de-ai-taste-and-writing` 的区别：该卡解决「内容生产时如何去除 AI 味」，本卡解决「内容消费时如何降噪与路由信号」，一出一进。

---

## E — 可执行步骤 (Execution)

**必需输入**:
- `signal_domains`（必填，用户关心的信号域列表，如 `底层原理 | agent 实操 | 生成视觉 | 产品设计`）
- `candidate_accounts`（必填，候选账号清单，可来自用户给的 KOL 清单、或你要为用户补全的领域信源）
- `verify`（可选，布尔，默认 `true`：是否在给建议前核验账号身份/归属，防止照搬未经验证的清单）

**交付物与完成标准**:
- 一份「信号域 → 账号 → 跟他是为了拿什么」的路由表；若 `verify=true`，须附每条账号归属/身份的核验结果或「未验证」标记。

当此能力被激活后，按以下步骤执行：

1. **确定信号域并剔除非目标组**
   - 问清用户关心哪几类信号（原理 / 工具 / 视觉 / 产品 / 生态），剔除用户已有稳定信源或明确不需要的组；不默认全量照单收下。

2. **按「信号域」而非「公司」重组账号**
   - 对每个账号写一行「跟他是为了拿什么」（一句话用途），禁止只写「XX 公司员工」这类无法指导使用的标签。

3. **核验关键归属（回到一手信源）**
   - 对清单中的每一条「谁加入哪家 / 谁是某工具作者」等事实性归属做抽查核验，且必须以**当事人原文/官方来源**为准，而非评论区或二手转述；无法核验的显式标注「未验证」。

4. **叠加降噪与沉淀机制**
   - 引导用户用流速阈值 + 关键词过滤降噪（参照 `@icycat`）；若信源规模变大，建议升级为结构化情报库而非手工 follow（参照 `@AI_Jasonyu`）。

---

## B — 适用边界与反例 (Boundaries & Counter-examples)

### 适用前提
- 用户目标是「持续跟踪某领域前沿动态」，而非一次性查某个事实或某一篇内容。
- 存在可识别的稳定信源（工具作者、研究员、产品负责人）；若某领域信源高度碎片化，本卡只提供框架，不保证穷尽。

### 常见误用与反例
- **照单全收式订阅**：把 KOL 清单原样 follow 一遍，不做信号域重组，结果时间线爆炸、清单吃灰。
- **把二手「打假」当核验**：`@ai_explorer25` 帖中「@karpathy — recently joined Anthropic」曾被评论区一人斥为「LLM 幻觉滑过编辑审核」，但核验 @karpathy 本人 2026-06 原帖（「Personal update: I've joined Anthropic」）证实该归属**属实**——错的是那个未查一手信源就「打假」的评论者。教训：归属类表述要回到**当事人原文/官方来源**核验，别轻信评论区或二手转述；连「打假」本身也可能未经核验。
- **把「关注」当「能力」**：follow 了 100 个账号 ≠ 建立了信息优势；没有流速阈值与沉淀机制，关注本身就是另一种噪音。

### 自检清单
- [ ] 每个账号是否都有一句「跟他是为了拿什么」的用途标签？
- [ ] 是否按信号域重组，而非照搬公司/实验室排序？
- [ ] 关键归属（谁在哪家、谁是作者）是否已核验或标注「未验证」？
- [ ] 是否给出了降噪（流速阈值）与沉淀（情报库/路由表）的落地方式，而非止步于名单？
