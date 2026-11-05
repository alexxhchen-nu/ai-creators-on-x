## @waylybaye · Baye
**摘要**：知名 Apple 生态独立开发者（164.4K 粉丝），代表作熊猫吃短信、DAMA、ServerCat、OpenCat、Miley。深度分享 Xcode 多 Worktree 极速并发编译、测试驱动 SwiftUI 视图截图自检、本地 DuckDB 数据湖赋能 AI 决策、Apple 原生设计系统还原与“未虑胜先虑败”的工程风控。

| 粉丝 | 关注 | 学习方向 | 抓取 | 主页 |
| --- | --- | --- | --- | --- |
| 164.4K | 555 | 一人做 App（独立开发） | 57/82 | https://x.com/waylybaye |

### 画像
资深自由程序员，2009 年 3 月加入 X，以独立开发并售卖 Apple 生态 App 为生，边全球旅居边做产品，代表作有熊猫吃短信、DAMA、ServerCat、OpenCat、Miley 及 Cleaner for Xcode。内容聚焦于 iOS/macOS 27 与 iPhone Duo 原生设计适配、Xcode 并发编译与 UI 预览基建、前沿模型（Opus 5.5、GPT 6 Astra、Fable 5.1）在编程与 3D 建模中的实战对比，以及长线商业产品的工程风控。发帖短小精炼，全部来自一手实验与踩坑总结。与本组全自动 Vibe Coding 狂热者不同，他坚持“不让 AI 全自动开发软件”，把核心精力放在异常预防、像素级原生审美与 Marketing as Code 上。

### 核心方法论
1. **Xcode 多 Worktree 并发编译与全局 CAS 提速方案** — 针对 AI Coding 多任务并行时 `xcodebuild` 无法并发、排队或冷编译极慢的痛点，放弃排队编译，改为：① 每个任务一个独立 Git worktree；② 每个 worktree 配独立 Simulator 与独立 `DerivedData`；③ `Source Packages` 全局项目级共享，并开启全局共享 CAS（Content-Addressable Storage），将冷编译压缩到 1 分钟级别。依据：`2026-08-20` https://x.com/waylybaye/status/2090288526231531712 ；适用边界：适用于多 Agent 并行开发 Xcode 工程，但极吃本地硬件性能（M2 Max 亦会受编译等待困扰，见 `2026-10-27`）。
2. **`xcodebuild test` 驱动的 SwiftUI 视图截图自迭代闭环** — 针对 Xcode 官方 MCP Preview 难用且并发易出问题的缺陷，基于 `xcodebuild test` 封装 `make preview FILES=AnyView.swift`，通过测试直接把 View 渲染成图片；AI 每次改完 UI 自动跑该命令看图迭代，天然支持多 worktree 并发。依据：`2026-09-30` https://x.com/waylybaye/status/2105197113600786917 ；适用边界：适用于 SwiftUI 界面迭代，强依赖真机硬件交互的视图需额外构造测试桩 `[INFERENCE]`。
3. **自建本地 DuckDB 数据湖替代零散平台 MCP** — 不给 AI 挂载各平台零散 MCP 去实时查数据，而是用 DuckDB 自建本地数据湖，把所有数据统一导入；让 AI 按需随时查询分析，以极低成本让数据直接参与产品决策循环。依据：`2026-09-17` https://x.com/waylybaye/status/2100476149742911759 ；适用边界：适合一人公司或中小产品跨平台数据分析，不适用于高并发在线事务写入（OLTP）。
4. **坚持 SOTA 模型 + 只记关键 Points 防范“早期智商债”** — 针对早期模型因能力不足遗留事实错误文档、且新模型盲目信任遗留文档导致错误被继承放大的问题：① 坚持用 SOTA 模型，少用性价比模型以减少长期债务；② 不让 AI 生成冗长 spec，只记关键 points，给模型升级后留出系统“自愈”机会。依据：`2026-09-17` https://x.com/waylybaye/status/2100433001771634984 、`2026-09-17` https://x.com/waylybaye/status/2100436733309673836 ；适用边界：适用于长线维护的核心代码库，一次性脚本可放宽。
5. **原生 Apple Design System 转换与 Marketing as Code** — 拒绝 AI 默认“网页风”UI 与用 AI 操作 Figma：① 将 iOS/macOS 27 UIKit 转换为 Apple Design System（含攻克基于 HDR 实现的 Liquid Glass 高光），让 AI 直出像素级 Apple 原生设计；② 适配 iPhone Duo 时把工具栏纯文字按钮改为“图标+文字”，让系统按屏幕状态自动排布；③ 践行 Marketing as Code，App 内引导动画、App Store 截图与物料全部用真实 UI 代码绘制。依据：`2026-08-11` https://x.com/waylybaye/status/2087064266906210502 、`2026-09-11` https://x.com/waylybaye/status/2098357786912686518 、`2026-09-17` https://x.com/waylybaye/status/2100410971852505305 ；适用边界：适用于追求极致原生体验的 Apple 应用，不适用低成本跨端套壳项目。
6. **“未虑胜先虑败”的工程风控与商业闭环过滤** — 鉴于 AI 总是优先写 Happy Path，专业程序员应凭借风险直觉将大量精力投入在预防和处理错误上；同时若小产品没有商业模式与 PMF、无法支撑未来几年长期更新，哪怕做时再快乐也克制不发布。依据：`2026-10-14` https://x.com/waylybaye/status/2110226080548474999 、`2026-10-20` https://x.com/waylybaye/status/2112451338080801247 、`2026-10-29` https://x.com/waylybaye/status/2115662469163286934 ；适用边界：适用于重视品牌商誉与长期维护的独立开发者。

### 工具与产品清单
| 名称 | 类别 | 用途 / 评价 | 出处 |
| --- | --- | --- | --- |
| DAMA（getdama.app） | 自研 iOS/iPadOS 产品 | 端侧自动打码 App（获 App Store 首页推荐），含长按选词、粒子消字、墨迹笔刷、彩虹马赛克及“压缩相似颜色”去截图盲水印彩蛋 | 2026-08-10 / 2026-08-12 / 2026-08-22 / 2026-10-12 |
| Cleaner for Xcode | 自研 macOS 工具 | 维护九年的 Xcode 磁盘清理工具（v26.7.0 修复 `CompilationCache` 大小计算错误） | 2026-07-28 |
| 熊猫吃短信 / ServerCat / OpenCat / Miley | 自研产品矩阵 | 长期运营的主力商业 App 矩阵 | 个人简介 |
| DuckDB | 分析数据库 | 赞“设计太优雅”，用于自建本地数湖汇总数据，供 AI 低成本自主查询参与决策 | 2026-09-17 |
| Claude Opus 5.5 / Claude Code | 编程与设计模型 | Opus 5.5 编程超越 Fable 5.1，能力、成本与 3D 程序化建模均胜 GPT 6 Astra；极爱用 Opus 画矢量 Logo；Claude Code 换 Apple 系统字体后更原生 | 2026-09-22 / 2026-09-23 / 2026-10-20 / 2026-10-23 |
| GPT 6 Astra | 编程与 3D 模型 | 与 Fable 5.1 不相上下，找 Bug 强于同级 Claude，具 3D 牛逼、速度快、同 $200 订阅更耐用三大优势（调 Blender 会自己把简中改成英文），但建人物模型仍很呆 | 2026-09-07 / 2026-09-15 |
| Fable 5 / 5.1 | 编程模型 | Fable 5 调查面面俱到、极少横跳；Fable 5.1 普通任务用 `medium` 即可，但耗额极快（一天用掉 85% 周额度） | 2026-07-25 / 2026-09-02 / 2026-09-03 |
| Godot + Blender | 游戏与 3D 工具 | 开发独立 3D 游戏，配合 Astra / Opus 5.5 解决 3D 资产风格统一与建模，但骨骼动画与光影仍需反复调 | 2026-08-31 / 2026-09-07 / 2026-09-24 |

### 可复用片段
```makefile
make preview FILES=AnyView.swift
```
用 `xcodebuild test` 将 SwiftUI View 渲染为图片供 AI 自检迭代，支持多 worktree 并发（`2026-09-30`）。

```text
每个任务一个 worktree，每个 wt 一个单独的 simulator 和 DerivedData，Source Packages 全局项目级共享。冷编译可以压缩到几分钟内。再开全局共享的 CAS，冷编译基本到 1 分钟级别了。
```
Xcode 多任务并发编译最优配置方案（`2026-08-20`）。

```text
把工具栏上纯文字的按钮改成图标+文字，这样 iPhone Duo 就会根据当前的屏幕状态，自动把它们放到推荐的位置上。
```
适配 iPhone Duo 多屏态收益最高的 SwiftUI 改造技巧（`2026-09-11`）。

```text
坚持要用 SOTA 模型，少用性价比模型，SOTA 模型不仅是更加节省时间，它带来的长期债务也更少。另外不要让 AI 生成 spec，我现在只记关键 points，模型升级后系统有自愈的机会。
```
防范 AI 代码库“早期智商债”固化的工程原则（`2026-09-17`）。

### 判断与趋势
- **专业程序员被低估的核心能力是“预知危险（未虑胜，先虑败）”**：本人观点，AI 优先实现 Happy Path，Vibe Coding 易致天价账单与故障，人类专家的核心价值在于预防和处理异常（`2026-10-14`）。
- **警惕 AI Coding 的“早期智商债”**：本人观点，早期模型留下的错误文档会被新模型直接信任并继承放大，只记关键 points 才能让系统随模型升级自愈（`2026-09-17`）。
- **设计多废稿，骨骼动画与光影仍是 3D AI 短板**：本人观点，写代码正反馈强而设计多废稿；Astra / Opus 5.5 虽解决了静态建模与风格统一，但灯光阴影及可响应、可组合的骨骼动画系统仍是模型盲区（`2026-08-31`、`2026-09-07`、`2026-09-24`、`2026-10-29`）。
- **Claude 系审美占优，GPT 系找 Bug 与耐用度占优**：本人观点，Claude 系代码审美胜于同级 GPT，GPT 系找 Bug 更强且 Astra 比 Fable 5.1 耐用得多；而 Opus 5.5 在编程、成本与 3D 程序化建模上实现了全面反超（`2026-09-03`、`2026-09-07`、`2026-09-23`）。
- **Apple 生态动向：App Store 疑似机器秒审、IAP 支持多席位与跨开发者订阅、iPhone Duo 完成度高**：本人观点，普通更新几分钟审完；官方支持多席位与跨开发者订阅让 IAP 可直接做 SaaS 收款与联名包；看好 iPhone Duo 销量，尽管多状态适配极具挑战（`2026-09-10`、`2026-10-15`、`2026-10-30`）。

### 代表原帖
- [2026-08-20] Xcode 多任务并发编译终极方案：独立 Worktree/Simulator/DerivedData + 全局共享 Source Packages 与 CAS — https://x.com/waylybaye/status/2090288526231531712
- [2026-09-17] 用本地 DuckDB 自建数据湖代替零散平台 MCP，让 AI 低成本随时查数据参与决策 — https://x.com/waylybaye/status/2100476149742911759
- [2026-09-17] 警惕 AI Coding 的“早期智商债”：坚持 SOTA 模型、不让 AI 生成 Spec 以保留系统自愈能力 — https://x.com/waylybaye/status/2100433001771634984
- [2026-09-30] 用 `xcodebuild test` 实现 `make preview` 渲染图片，解决多 Worktree 并发下 AI 预览与迭代 SwiftUI 难题 — https://x.com/waylybaye/status/2105197113600786917
- [2026-10-14] 为什么专业程序员的核心能力是“预知危险（未虑胜，先虑败）”而非只写 Happy Path — https://x.com/waylybaye/status/2110226080548474999

### 链接资产
| 链接 | 类型 | 内容摘要 | 状态 |
| --- | --- | --- | --- |
| https://getdama.app | 产品页（App Store） | Baye 开发的《DAMA - Auto Redact Privacy》（Early Moon, LLC，4.7 分），端侧 CoreML/Vision 离线自动识别打码人脸、手机号、证件号、二维码与聊天头像，支持墨迹笔刷、粒子消字、全屏水印与剥离 EXIF，已适配 iOS 27 与 iPhone Duo | 已抓取 |
| https://fatbobman.com/zh/posts/letting-ai-see-swiftui/ | 技术博客 | 肘子（Fatbobman）博文《让 AI 看见 SwiftUI：Xcode Preview MCP 的实践、陷阱与期待》，详解 Xcode 26.3/27 Preview MCP 无法指定设备、SPM 改代码返回旧截图（20%–40% 概率）及用枚举名 `SourceFingerprint` 强制重编译校验方案 | 已抓取 |
| https://apps.apple.com/us/app/cleaner-for-xcode/id1296084683 | 产品页（Mac App Store） | Baye 开发的免费 Mac 工具《Cleaner for Xcode》（3.1 MB），清理 Xcode 冗余缓存与模拟器释放空间；2026-07-28 发布 v26.7.0 修复 `CompilationCache` 大小计算错误 | 已抓取 |
