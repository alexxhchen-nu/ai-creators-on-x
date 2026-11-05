## §4 跨创作者共识与分歧

把 20 人的 1,145 条技术帖放在同一时间截面（2026-08 至 2026-11）横向对齐，可以看到中文 AI 一线实践者已经在 **6 件事上达成强共识**，同时在 **5 个关键工程与商业问题上出现鲜明分歧**。

### 一、六条跨赛道强共识

1. **Agent 的瓶颈已从「模型不够聪明」转移到「人类审核带宽与注意力上限」**
   - @vista8 引述并验证：人类一般只能同时跟进 3–5 个活跃 session，项目一多连找某个迭代都要翻半天（`2026-11-01`）。
   - @vikingmute 指出代码量大到人工根本读不过来，传统逐行 PR Review 已沦为「点绿灯的仪式感」，必须改为 Git worktree 并行 + 多 Agent 交叉审查 + E2E 录屏验收（`2026-10-16`、`2026-10-28`）。
   - @jinchenma_ai 与 @FuSheng_0306 从组织端印证：AI 产出的高严谨材料越多，人越审不过来；人的角色必须收缩为「在关键闸门做审核与改进 Agent」（@sitinme 的飞书审稿人工闸、@FuSheng_0306 的一周不登飞书只审呈批件）。

2. **「为 AI 重写接口」：CLI、MCP 与代码同构正在取代 GUI 点击**
   - 创作者普遍放弃让 AI 看截图点 GUI，转而把软件与后台改造成 Agent 原生可读写的接口：@gefei55 提出把网站后台通过 MCP 重做一遍，「不是给人用，而是给 Claude Code 用，人类只看数据」（`2026-11-02`）；@vikingmute 选用走 OS 无障碍树而非截图 Vision 的 `agent-desktop`，并用支持 `/llms.txt` 与 `/mcp` 的 Nimbus Docs 写文档；@MANISH1027512 将一万多条视觉风格与运镜库封装为 VSC Plugin 供 Codex/Claude Code 直接调阅；@FuSheng_0306 因开源修图软件 Compositor 支持 Agent 直接读写 `.comp` 目录实时更新画布而考虑退订 Adobe。

3. **视频与设计正在全面「代码化」（Video / Marketing as Code）**
   - 跨越编程组与视觉组的共同趋势是不再手搓剪映、AE 或 Figma：@MANISH1027512 用 Claude 写 Remotion/HyperFrames 完成定格抠像、卡点与调色；@joshesye 用 Codex 接 Renoise MCP 自动拆镜剪辑；@icycat 用 `p5.js + Remotion` 和 `auto-motion` 自动生成竖屏 MG 动画；@waylybaye 践行 Marketing as Code，所有 App Store 截图与引导动画全用真实 SwiftUI 代码绘制；@jinchenma_ai 用 HTML/CSS 写海报嵌入二维码再截图，彻底绕开生图模型的文字乱码。

4. **Skill 与岗位级 Bot 成为新的「知识封装与分发单位」**
   - 开源项目与个人经验的交付形态已从「写教程文档」变成「一行命令让 Agent 装上就会」：@vista8 把 Mac App 开发打包成 `npx skills add joeseesun/qiaomu-macos-dev`；@CoderJeffLee 开源 `open-growth-skills`；@sitinme 强调把散在个人聊天里的提示词沉淀为可统一更新的「岗位级 Shared Bot」。同时 @karminski3 给出关键提醒：不能把 Skill 写成死文档，必须保持代码/数据同构才能应付未见过的格式（`2026-09-14`）。

5. **「去 AI 味」成为代码、UI、视觉与写作的共同刚需**
   - **代码层**：@vikingmute 引入 OpenCode `AGENTS.md`，严禁 AI 为罕见边缘情况擅自加防御性代码与单次 helper，并用 Pre-commit Hook 拦截超 5,000 tokens 的大文件。
   - **前端 UI 层**：@sitinme 用 `frontend-design` 与 `impeccable` 拉黑 Inter 字体、紫色渐变与三栏卡片等 62 种 AI 味；@vista8 试用 Hallmark 后自研 UI 学习插件；@waylybaye 坚持还原原生 Apple Design System。
   - **视觉与视频层**：@TanLuAI 与 @Adam38363368936 一致指出真实感来自「不完美」——保留手抖、压缩感、曝光波动、后视镜灰尘与直闪狼狈感。
   - **文本写作层**：@vikingmute 与 @jinchenma_ai 均反对让 AI 直接生成初稿（痛批「LLM Voice 恐怖谷」与「无增量的正确废话」），主张人出核心观点/口喷初稿，AI 仅做提纲或遵循原稿润色（@CoderJeffLee 亦要求 Codex「别脱离原稿表达、别 YY」）。

6. **基础设施风控（支付校验、API 密钥泄露、账号封禁）是 Vibe Coding 的最大暗礁**
   - @gefei55 亲历 AI 写的充值回调漏掉签名校验，被伪造 23 笔订单刷走上万美金积分（`2026-10-26`）；@waylybaye 总结 AI 永远优先写 Happy Path，「未虑胜先虑败」才是专业程序员不可替代的护城河；@vista8 引述 725 万个 Gitee 仓库中平均每 275 个就泄露一个云或模型 API Key；在账号防封上，@vista8 与 @vikingmute 均采用「Cloudflare 域名邮箱路由 + 固定纯净环境」替代折腾廉价黑号。

---

### 二、五个核心分歧与路线对立

| 争议焦点 | 路线 A（激进 / 自动化 / 铺量） | 路线 B（克制 / 精品化 / 人工把关） | 背后的场景差异 |
| --- | --- | --- | --- |
| **1. 软件开发：全自动「软件工厂」 vs 拒绝全自动与防范「智商债」** | **@vikingmute、@bozhou_ai、@vista8**：推崇「许愿式编程」与一项目一 Bot 半自动流水线，甚至一句话把小说变成电影、3 分钟出速记工具第一版，认为终局是 Agent 自写自测自动合入。 | **@waylybaye、@jinchenma_ai**：明确「不让 AI 全自动开发软件」；@waylybaye 警告早期/性价比模型留下的错误 Spec 会被新模型盲信并继承放大（「早期智商债」），坚持只用 SOTA 模型且不让 AI 写长 Spec。 | Web 工具站/内部插件容错高、可靠快速回滚兜底；而长线维护的原生商业 App 与涉企财务系统一旦埋下架构或账目隐患，修复成本远超重写。 |
| **2. 出海建站：AI 批量堆新词站 vs 少而精「一书一规划 / 一词一页」** | **@AI_Jasonyu、@vista8、@cnzhihao（转引 shipwords）**：单日连上 4 个新词站，或把 12G 公开数据集两三天拆成 5 个垂直子站，「先把数量堆够，起量的继续迭代，没起来的放着不管」。 | **@gefei55、@CoderJeffLee、@waylybaye**：@gefei55 强调小站不靠铺海量页，而靠「一词一页」少而精拿 90% CTR；@CoderJeffLee 要求把网站当一本书规划，新开目录先过四关；@waylybaye 则坚持无长期 PMF 的小产品绝不发布。 | 博短期搜索新词红利（72 小时出单窗口）适合铺量漏斗；做长期自然流量资产与品牌复利则必须控页面质量。 |
| **3. SEO 与 GEO 的关系：同源双吃 vs 独立工程链路** | **@gefei55**：认为 SEO 与 GEO 底层同构，按「一词一页 + TDH + 长尾裂变」做好的内页，上线 4 天即可同时从 Google 与 ChatGPT 拿流量。 | **@CoderJeffLee、@yaojingang**：@CoderJeffLee 指出「GEO 不是 SEO 的子集，而是两个有交集的圈」；@yaojingang 实证显示 Perplexity/Google 重引用广度，ChatGPT 重单页吸收深度（需定义/数字/对比/步骤，单纯堆 Q&A 无效），且平台引用份额会剧烈漂移（如 Reddit 份额暴跌 86.4%）。 | 工具站长尾词在搜索引擎与 AI 搜索中重合度高；而品牌声誉与行业推荐词（如「哪双鞋适合我」）在生成式引擎中遵循意图组与信源权威度逻辑。 |
| **4. 模型与性价比策略：高低搭配省钱 vs 锁死 SOTA / 锁死稳定国模** | **@bozhou_ai、@karminski3**：@bozhou_ai 用 `/advisor opus` 让便宜 Sonnet 干活、只在关键节点请 Opus；@karminski3 实测推荐 Agent 用 `Qwen3.8-27B + reasoning_effort=low`，并指出过度思考反而先升后降。 | **@waylybaye** 坚持只用 SOTA（Opus 5.5 / Astra）以防智商债；**@cnzhihao** 在企业交付中则走向另一极端——「稳定性比智能重要一万倍」，只选 DeepSeek 与 GLM 作基模，宁可不炫也绝不能让客户早起遇到 403 或模型抽风。 | 个人高频实验需算 Token 账本；核心代码库怕低智商债；而 ToB 企业交付怕海外 API 封号与网络抖动。 |
| **5. 桌面/个人 Agent 载体：Grok Bot 派 vs Muse 派 vs WorkBuddy 派** | **@vikingmute、@sitinme、@op7418**：重度押注 **Grok Bot**（整合 X 生态、Marketplace 岗位模板、配合 Cursor CLI 管项目与归档推文）。 | **@FuSheng_0306** 实测认为 **Muse（Meta）** 自带虚拟机与强浏览器控机能力远超 Grok Bot；**@cnzhihao、@liyue_ai、@jinchenma_ai** 则在国内办公与交付场景主推 **WorkBuddy** 與 **DeepSeek Harness**（能直接爬公众号、接本地表格、给传统老板做插件定制）。 | 出海开发者工作流围绕 X/GitHub/Vercel 展开，Grok Bot 最顺手；跨端生活采购需要云端虚拟机浏览器（Muse）；国内公众号运营与传统企业交付则受限于本土生态接口与网络环境。 |
