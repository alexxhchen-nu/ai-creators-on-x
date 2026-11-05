## @icycat · 冷酷小猫 IcyCat

**摘要**：武汉在读神经科学博士、Chrome 插件与 AI 全栈独立开发者（人称「插件小王子」），X 爆款监测插件 XVM 作者。提供社媒插件开发、个人全量会话数据沉淀 SOP 及低成本 AI 订阅与网络基建方案。

|粉丝|关注|学习方向|抓取|主页|
|---|---|---|---|---|
|8,402|724|浏览器插件开发|47/83（2026-11-04）|[icy-cat.com](https://icy-cat.com)|

### 画像

白天读神经科学博士，晚上用 AI 做全栈与浏览器插件开发，主页展示 3 年累计交付 120+ 项目、20+ 款 Chrome 扩展。内容侧重 X 增长插件迭代（X-Viral-Monitor）、AI Agent 与 Skill 实测、个人数据本地沉淀及算力省钱技巧。发帖高频且偏一线实操反馈与工具种草，与本组偏长文体系化输出的创作者相比，更像高频试错的「插件游击队」。

### 核心方法论

1. **四源个人数据本地化沉淀法** — 通过四条链路持续留痕个人上下文：① 用微信 CLI 抓取所有与自己相关的会话并总结所做事项；② 将本地 Agent 历史会话定期总结沉淀到知识库；③ 用开源仓库导出 QQ 聊天记录并总结；④ 记录本地文件修改历史。依据（`2026-10-20` + [原帖](https://x.com/icycat/status/2112490442562642418)）。适用边界：适合重度依赖本地 Agent 构建长期记忆的开发者；需注意本地隐私与平台风控 `[INFERENCE]`。
2. **社媒内容被动采集插件法** — 针对小红书、抖音等内容采集，放弃易触发验证码或警告的主动 Agent 爬虫，改用自研浏览器插件在人工浏览搜索时被动收集内容。依据（`2026-10-21` + [原帖](https://x.com/icycat/status/2112827426451656784)、`2026-10-31` + [原帖](https://x.com/icycat/status/2116384591393280088)）。适用边界：适合风控极严的国内社媒（如小红书弄两下即弹警告）；不适合无人值守全量爬取。
3. **X 高流速热帖对标与降噪法** — 在插件中按流速阈值（如 1k+，可配置）在首页/列表/详情/博主主页仅看热帖以对标学习，同时按关键词规则过滤黄推广告，移动端适配悬浮面板与贴标隐藏。依据（`2026-06-01` + [原帖](https://x.com/icycat/status/2061474874049306666)）。适用边界：适合 X 创作者日常对标与信息流净化；AI 评论功能需克制使用以免加剧人机噪音。
4. **外包报销与低成本 AI 订阅组合法** — 接外部项目时要求甲方报销高额 AI 订阅会员；个人日常用一个 200 美金账号实现 Token 自由（Codex 除外），或借 AWS Lightsail 6 个月免费 VPS 保持纯净 DNS/IP 稳定用 Claude Pro，以及用美区 Apple ID 礼品卡或 GamsGo 支付宝合租降本。依据（`2026-10-20` + [原帖](https://x.com/icycat/status/2112453716767121572)、`2026-10-29` + [原帖](https://x.com/icycat/status/2115771207203299385)、`2026-11-02` + [原帖](https://x.com/icycat/status/2117265179956408598)）。适用边界：适合独立接单开发者；第三方合租需优先选平台自营以防售后风险。

### 工具与产品清单

|名称|类别|用途 / 评价|出处|
|---|---|---|---|
|X-Viral-Monitor (XVM)|自研插件|X 爆款检测（1.7.13），支持流速 1k+ 热帖筛选、黄推过滤、移动端面板与 AI 评论|[置顶帖](https://x.com/icycat/status/2061474874049306666)|
|XMP / WxCRM / CommunityHunt|自研产品|Markdown 一键贴 X 长文插件、微信本地 AI 人脉管理、中文 X 社群发现站|[主页](https://icy-cat.com)|
|Cursor / Claude Code|AI 编程|主力工具；遇到 Cursor 后告别手写 Vue 前端，评价 Claude Code 远胜频繁压缩上下文的 GPT|`2026-10-21` / `2026-10-18` 帖|
|p5.js + Remotion|视频编程|结合《蔚蓝》像素画风生成趣味科普动画视频|`2026-10-16` 帖|
|auto-motion|开源工作流|SRT 字幕经 Codex 拆镜 + Claude Code + FFmpeg 自动生成竖屏 MG 动画，质感极佳|`2026-11-01` 帖|
|x-reply-guard|开源插件|识别 X 评论区 AI 自动回复（0–100 评分）并一键隐藏/拉黑|`2026-10-20` 帖|
|cyber-xiaowan|开源 Skill|安装在主 Bot 上的思考与结构化决策 Skill（赛博小晚）|`2026-10-14` 帖|
|Amazon Lightsail|VPS 主机|利用 AWS 6 个月免费计划保持纯净 IP/DNS，零成本稳定用 Claude Pro|`2026-11-02` 帖|

### 可复用片段

```text
以<牛排从多高的地方扔下来，落地的时候刚好被空气摩擦烤熟> 为主题 使用p5.js和remotion 做一个趣味科普视频 画面风格是像素游戏风格 可以参考《蔚蓝》（Celeste）游戏的画风 、使整个视频变得有趣味性
```
出处：`2026-10-16` p5.js + Remotion 像素风科普视频提示词。

```text
1 微信cli 抓取所有与我相关的会话 留痕 总结出我做的事情
2 本地agent历史会话记录 定期总结沉淀到知识库
3 qq聊天记录 用开源仓库导出聊天记录总结
4 本地的文件修改历史
```
出处：`2026-10-20` 个人全量数据留痕与知识库沉淀清单（节选）。

```text
优先复用成熟库、组件源代码可控、统一设计语言、严格限制重复依赖。
UI 风格统一使用 譬如 shadcn/ui Nova
图标统一使用 譬如 Lucide
动画统一使用 譬如 Motion
布局库 譬如 react-resizable-panels
```
出处：`2026-10-20` 转引前端 One-shot 提示词规范，本人最常指定 Lucide 图标（节选）。

### 判断与趋势

- **AI 编程已彻底替代手写常规前端**：从钻研 Vue 到经历 Copilot、Cursor 后，彻底告别传统手写前端（`2026-10-21`）。
- **个人日常 Token 自由门槛在 $200/月（Codex 除外）**：体感 200 美金账号足够日常 Token 自由，但高消耗的 Codex 除外且近期体验差（`2026-10-21`、`2026-10-13`）。
- **GPT 5.6 Sol 激进压缩上下文严重损害体验**：频繁重试报 `full of capacity`，切到 5.6 Sol 后甚至三句话或首句即压缩上下文，远不如 Claude Code（`2026-10-18`、`2026-10-19`）。
- **AI 评论泛滥正在反噬 X 生态**：虽做过 AI 评论功能，但见推文下全是人机评论坦言「有点后悔做了这个应用」，转而推荐反 AI 插件（`2026-10-18`、`2026-10-20`）。
- **国内个人开发者无资质碰论坛/UGC 形态**：评价「钱包请等等」小程序时指出，涉及论坛或 UGC 发布的产品个人在国内缺乏开发资质（`2026-10-13`）。
- **苹果 IAP 渠道税远高于安卓**：以微信虚拟支付为例，安卓抽成 1%，苹果高达 12%（`2026-10-27`）。

### 代表原帖

- [2026-06-01] 发布 X 爆款检测插件 X-Viral-Monitor 1.7.13，支持流速 1k+ 热帖筛选与黄推过滤 — https://x.com/icycat/status/2061474874049306666
- [2026-10-20] 公开个人数据沉淀四步法：微信 CLI、本地 Agent 会话、QQ 记录与文件修改历史 — https://x.com/icycat/status/2112490442562642418
- [2026-10-16] 分享使用 p5.js + Remotion 制作《蔚蓝》像素风科普视频的 Prompt — https://x.com/icycat/status/2111107082862891449
- [2026-10-21] 提出小红书/抖音内容采集用自研插件配合人肉搜索做被动收集最稳妥 — https://x.com/icycat/status/2112827426451656784
- [2026-10-18] 实测吐槽 GPT 与 5.6 Sol 频繁满负载及「三句话压缩一次上下文」问题 — https://x.com/icycat/status/2111794457452708315

### 链接资产

|链接|类型|内容摘要|状态|
|---|---|---|---|
|[icy-cat.com](https://icy-cat.com)|个人主页|展示 3 年 120+ 项目交付、20+ Chrome 扩展，代表作含 XVM、XMP、WxCRM、VersoAI、CommunityHunt|已抓取|
|[github.com/Icy-Cat/communityhunt](https://github.com/Icy-Cat/communityhunt)|GitHub 仓库|CommunityHunt 中文 X 社群发现站的公开 Issue 提交仓库|已抓取|
|[github.com/vibe-motion/auto-motion](https://github.com/vibe-motion/auto-motion)|GitHub 仓库|526 stars；Codex CLI 拆解 SRT 字幕并调度 Claude Code（HyperFrames）+ FFmpeg 合成竖屏 MG 动画工作流|已抓取|
|[github.com/cyberxiaowan/cyber-xiaowan](https://github.com/cyberxiaowan/cyber-xiaowan)|GitHub 仓库|280 stars；面向 Codex / Claude Code / Cursor 的「赛博小晚」结构化思考 Skill 与本地桌宠|已抓取|
|[github.com/Orama-Interactive/Pixelorama](https://github.com/Orama-Interactive/Pixelorama)|GitHub 仓库|10.9K stars；基于 Godot 4 的 MIT 开源像素画与动画工具，支持瓦片地图、特效与 3D 图层|已抓取|
|[littleprince.dev](https://littleprince.dev)|Web 游戏|《小王子：星辰之旅》3D 网页剧情游戏（引用 @Saccc_c 用 Opus 5.5 + Tripo + Blender 16 天开发）|已抓取|
|[ai.engineer/shanghai/2026?lang=cn](https://ai.engineer/shanghai/2026?lang=cn)|会议官网|AI Engineer Shanghai 2026 大会官网（11 月 5–6 日上海，聚焦开源模型、AI Infra 与具身智能）|已抓取|
