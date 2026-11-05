# 核心术语词典（Glossary）

| 术语 | 定义与出处 |
| --- | --- |
| **软件工厂（Software Factory）** | `@vikingmute` 提出的单人多项目开发模式：每个项目配独立常驻 Grok Bot 跑 Cursor CLI，Ticket tracker 搜 issue 提需求，Agent 编码并跑 E2E + 交付操作录屏，人仅在需求确认与上线推送时介入。 |
| **早期智商债（Early IQ Debt）** | `@waylybaye` 提出的风险概念：早期或低性价比模型因能力不足留下含事实错误的 Spec/文档，后续强模型盲目信任遗留文档导致错误被继承放大；对策是坚持用 SOTA 模型且只记关键 Points。 |
| **Video as Code** | `@MANISH1027512`、`@joshesye`、`@icycat` 实践的视频生产范式：不再手动操作剪映或 AE，而是由 Claude/Codex 编写 Remotion、HyperFrames、p5.js 代码或调用 Renoise MCP 完成抠像、卡点、转场、调色与动效合成。 |
| **Marketing as Code** | `@waylybaye` 实践的营销物料生产方式：拒绝用 AI 操作 Figma，App 内引导动画、App Store 截图与宣传物料全部使用真实 SwiftUI/UI 代码绘制渲染。 |
| **白模预演（White-Model Previz）** | `@TanLuAI` 的 AI 视频工作流核心：先用粗糙立方体或无脸白模预演镜头运动、构图与人物走位（越粗糙越不污染转绘），拉长预演时长再裁剪，确认调度后再做风格转绘。 |
| **TDH 与「一词一页」** | `@gefei55` 的出海 SEO 核心法则：摒弃传统 TDK 中的 Keywords（K），专注做好 Title、Description、H 标签（TDH），且每个页面严格围绕一个关键词（组）构建，以少而精的内页拿高排名与高 CTR。 |
| **GEO（Generative Engine Optimization）** | 面向 ChatGPT、Perplexity、豆包等生成式 AI 引擎的可见性与引用优化。`@yaojingang` 将其拆解为「提问→搜索触发→信源选择→内容吸收→实体曝光→跨端差异」六环节，主张按**意图组**而非单条 Query 布局。 |
| **Fan-out Queries（扇出查询）** | `@CoderJeffLee` 用于 GEO 选题的技术：通过 Responses API 提取模型在回答真实问题时派生的可见搜索词、来源 URL 与最终引用，对照自身网站找出未覆盖或覆盖过浅的主题。 |
| **FDE（Forward Deployed Engineer，前线部署工程师）** | `@cnzhihao` 从事的企业 AI 交付角色：深入传统企业业务现场，完成「咨询诊断 + 技术实施（先接 ERP/MES 等地基）+ 培训陪跑」全流程，而非仅交付 Demo。 |
| **地基成本（Foundation Cost）** | `@cnzhihao` 用于筛选制造业 FDE 客户的标尺：在搭 Agent 前，单接通一个 CRM/SRM/ERP/MES/WMS 系统需 5–8 万元；只愿为顶层简单 Agent 付费而不愿付地基成本的客户直接拒接。 |
| **高管审核制（AI Native 2.0）** | `@FuSheng_0306` 实践的组织形态：高管一周不登飞书，审批、消息、邮件全由 Agent 先处理，人只负责最终复杂审核与改进 Agent。 |
| **三图分工（Three-Image Role Split）** | `@Adam38363368936` 控制图生视频多镜头一致性的技法：同时上传人物三视图、道具/宠物三视图与首帧场景图，并在 Prompt 开头显式声明「图 1 管场景、图 2 只管人脸、图 3 只管道具」。 |
| **去 AI 味（De-AI Taste）** | 横跨代码、UI、视觉与写作的反模板化约束：代码层禁过度防御与 >5000 tokens 大文件（`@vikingmute`）；UI 层用 `impeccable` 拉黑 Inter 字体/紫色渐变/三栏卡片（`@sitinme`）；视觉层保留手抖、压缩感与后视镜灰尘（`@TanLuAI`、`@Adam38363368936`）；写作层禁 AI 写初稿，坚持人出原稿/口喷观点再由 AI 润色（`@vikingmute`、`@jinchenma_ai`）。 |
