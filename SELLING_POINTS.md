# AI-CREATORS-ON-X · 核心卖点与能力矩阵（Selling Points）

> **一句话定位**：把 20 位中文 X（Twitter）头部 AI 创作者的 **1,145 条技术实战帖与 60+ 开源仓库/站点**，经 **Cangjie v2.5 拆解 + Darwin v2.1 自动进化（Paired 3/3 全票胜出，65.8 → 88.9 分）**，铸造成一套全栈可调用的 Agent 实战军火库。


## 🎬 横屏宣传片（16:9 Horizontal · 1920×1080 · 36.2s · 无旁白 + 电影级 SFX/BGM）

<video src="./promo/out/promo-readme.mp4" poster="./product-card/card-openscience.png" width="100%" controls autoplay loop muted playsinline>
  Your markdown viewer does not support HTML5 video.
</video>

[![AI-CREATORS-ON-X horizontal 16:9 promo, 36.2s, no narration](./promo/out/promo-readme.gif)](./promo/out/promo-readme.mp4)

![[promo/out/promo-readme.mp4]]

- **轻量内嵌有声版（`<10MB`，7.01 MB，1920×1080 16:9）**：[`promo/out/promo-readme.mp4`](./promo/out/promo-readme.mp4)
- **纯 Markdown 横屏动图（6.11 MB，960×540 16:9）**：[`promo/out/promo-readme.gif`](./promo/out/promo-readme.gif)
- **无损母版（约 20.2 MB）**：刻意不入库，可在本地 `promo/` 内复现：`npx remotion render src/index.ts AiflPromo out/promo-bgm.mp4 --props=props-bgm.json`
---

## 一、核心痛点 vs 本 Skill 交付的终极解法

| 你每天都在撞墙的真实痛点 | `ai-creators-on-x` 给你的实证解法 |
| --- | --- |
| **1. AI 写码太快，人审不过来、仓库迅速腐化**：Codex/Claude 狂塞几千行单文件、写满无用防御代码与 `useState/useEffect`，Xcode 多分支排队编译慢如蜗牛。 | **Agent 软件工厂（`agent-software-factory`）**：一项目一专属 Bot + Git Worktree 并行 + Xcode 独立 `DerivedData`/全局 CAS **1 分钟冷编译** + `make preview` 视图截图与 E2E 录屏验收 + Pre-commit **5,000-token** 硬拦截。 |
| **2. 出海工具站有流量却零出单，不懂 GEO 怎么被 ChatGPT 引用**：上线一周来了 2,000 UV（ChatGPT 占 700）却一单没出；多语言页面机翻后毫无排名。 | **SEO & GEO 增长引擎（`seo-geo-growth-engine`）**：按「一书三层（Entity → Topic Map → URL）」与「代码/CMS/`toolKey` 三页分离」建站；严守「**一词一页 TDH** + **首屏生成器优先**」；用 **Fan-out 轨迹**与**意图组**双吃 Google 与 ChatGPT 流量。 |
| **3. 做视频和海报还在手搓剪映/AE，AI 生图文字必乱码**：多镜头人物总是变脸、生图做海报文字乱码且二维码扫不出、不知道怎么让 Agent 写代码自动卡点剪片。 | **Video & Design as Code（`video-and-design-as-code`）**：**粗糙白模预演**定运镜（拉长再裁剪省积分）+ **BGM 节拍先行**排时间轴 + Claude/Codex 写 **Remotion / Renoise MCP** 自动剪片 + **三图分工**锁一致性 + **HTML/CSS 渲染截图**导出无乱码二维码海报。 |
| **4. 前端 UI、生成图和文章一股浓重「AI 味」**：紫色渐变三栏卡片一眼假、照片精致塑料感、文章全是「LLM Voice 恐怖谷」正确废话。 | **全栈去 AI 味协议（`de-ai-taste-and-writing`）**：前端 `impeccable` 拉黑 Inter/紫渐变/三栏卡片等 **62 项 AI 味**并还原原生 Apple Design System；视觉注入**手抖/后视镜灰尘/直闪狼狈感**；写作**严禁 AI 写初稿**，坚持人出原稿/口喷观点再按章润色。 |
| **5. 官方跑分榜失真、换模型被锁死或背上「智商债」**：不知道怎么测新模型真实工程力，早期便宜模型留下的错误 Spec 被新模型盲信放大。 | **产物级压测与算力路由（`agent-benchmark-and-model-routing`）**：用「**从 0 写向量数据库实际性能** + **同一 Prompt 连抽 6 次稳定性** + **260MB 真实提权日志**」压测；长线工程锁 SOTA 防**早期智商债**，ToB 交付锁高稳国模（DeepSeek/GLM），OpenCodex 10100 端口解耦模型。 |
| **6. 企业 FDE 交付亏钱踩坑 & 一人公司被杂事淹没**：给传统制造业做 AI 被 ERP/MES 接口拖死；AI 写的充值回调漏校验被刷空积分；未付款订单召回率低。 | **企业 FDE 与一人公司工作台（`enterprise-fde-and-one-person-ops`）**：制造业 FDE 先算 **5–8 万/系统**地基成本并卡死 **20 人天上限** + **代码/Agent/人工三层报错**；高管**一周不登飞书审核制** + 视觉代理接管微信；**本地索引+Notion 正文**自生长知识库；Stripe 未付款**直达收银台链接**召回。 |

---

## 二、八大核心能力模块速览（6 Executable Playbooks）

| 模块编号 | 能力名称 | 英文标签 | 核心量化指标与护栏 | 实证来源创作者 |
| --- | --- | --- | --- | --- |
| **[01]** | **Agent 软件工厂与并发工程** | `AGENT FACTORY` | 1 分钟 Xcode CAS 冷编译 · 5,000-token Pre-commit 门禁 · 3–5 并发会话上限 · E2E 录屏验收 | `@vikingmute` · `@waylybaye` · `@vista8` · `@bozhou_ai` |
| **[02]** | **出海 SEO & GEO 流量引擎** | `SEO & GEO ENGINE` | 1 词 1 页 TDH · 90% 精准词 CTR · 首屏生成器承接 · Fan-out 搜索轨迹选题 · 英→日主词映射 | `@gefei55` · `@CoderJeffLee` · `@yaojingang` · `@AI_Jasonyu` |
| **[03]** | **代码渲染视频与参数化视觉** | `VIDEO AS CODE` | 粗糙白模预演省 60% 积分 · BGM 节拍先行 · Remotion/Renoise MCP 零剪映出片 · 三图分工锁脸 | `@MANISH1027512` · `@TanLuAI` · `@joshesye` · `@Adam38363368936` · `@op7418` |
| **[04]** | **全栈「去 AI 味」与高密写作** | `DE-AI TASTE` | 62 项前端 AI 味黑名单 · Apple Liquid Glass 原生还原 · 物理瑕疵四选二 · 零 AI 初稿原则 | `@sitinme` · `@waylybaye` · `@Adam38363368936` · `@vikingmute` · `@jinchenma_ai` |
| **[05]** | **产物级 Benchmark 与算力路由** | `REAL BENCHMARK` | Vector-DB 2x 性能差 · 6/6 连抽稳定性检验 · 260MB 真实提权日志压测 · 10100 端口协议解耦 | `@karminski3` · `@waylybaye` · `@cnzhihao` · `@sitinme` |
| **[06]** | **企业 FDE 交付与一人公司工作台** | `ENTERPRISE FDE` | 5–8 万/系统地基成本筛客 · ≤20 人天红线 · 三层报错拦截 80% 异常 · 23 单伪造回调签名门禁 | `@cnzhihao` · `@FuSheng_0306` · `@jinchenma_ai` · `@sitinme` · `@icycat` |

---

## 三、硬核数据背书（Why Trust This Skill）

- **1,641 → 1,145 条高纯度技术帖**：剔除一切鸡汤与纯新闻复述，保留率 69.8%，覆盖 **62,165 赞 / 9,569 转**。
- **Darwin v2.1 盲测 3/3 全票胜出**：3 个独立 Judge 随机互换 A/B 顺序盲评一致判胜（`margin: clear`），9 维 Triage 分从 **65.8 跃升至 88.9（+23.1 分）**。
- **18/18（100%）实测断言通过**：在全栈并发、出海 SEO/GEO 转化、多镜头广告与海报三大复合压测场景中，路由命中率 **100%**，输出断言通过率从无 Skill 基线的 **16.7%（3/18）提升至 100%（18/18）**。
- **全机 4 端即装即用**：已同步部署至 Magpie Library、`.agents/skills`、`.magpie/pi/skills` 与 `.claude/skills`，通过 `validate_skill_pack.py` **0 errors / 0 warnings** 校验。
