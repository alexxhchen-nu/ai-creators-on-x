# Agent 软件工厂与多分支并发工程

## R — 原文 (Reading)

> "每个任务一个 worktree，每个 wt 一个单独的 simulator 和 DerivedData，Source Packages 全局项目级共享。冷编译可以压缩到几分钟内。再开全局共享的 CAS，冷编译基本到 1 分钟级别了。"
> — @waylybaye, 2026-08-20

> "Create a pre-commit hook that prevents files over 5,000 tokens. Tokens = bytes/4."
> — @vikingmute, 2026-10-19

> "Cut taglines, helper text and secondary labels. If a screen needs them to make sense, fix the layout."
> — @vikingmute, 2026-11-03

## I — 方法论骨架 (Interpretation)

当代码生成速度远超人类逐行阅读带宽时（人类通常只能同时跟进 3–5 个活跃会话，参见 `@vista8`），传统的长分支开发与人工逐行 PR Review 会退化为形式化的“点绿灯仪式”。**Agent 软件工厂与多分支并发工程**的核心机制是将人类的职责从“逐行写码与肉眼审 Diff”重构为“工作区物理隔离 + 规则硬门禁 + 自动化视觉/E2E 验收 + 跨模型分级调用”的流水线控制：

1. **一项目一专属 Bot 与 Worktree 物理隔离（`@vikingmute`、`@waylybaye`）**
   - **项目级上下文锚定**：每个独立产品配置专属主控 Bot，持久记忆仓库结构、测试规则与环境变量（存入 Vault），不拆细碎角色，由 Ticket tracker 每日巡检 Issue、每周一集中规划需求。
   - **多 Worktree 并发与缓存分层**：同项目多特性摒弃排队与长分支，采用 Trunk-based Development + Git Worktree 并行。在重编译环境（如 Xcode）中，每个 Worktree 绑定独立模拟器（Simulator）与独立 `DerivedData` 防止锁冲突，同时在全局项目级共享 `Source Packages` 并开启全局内容可寻址存储（CAS, Content-Addressable Storage），将冷编译压缩至 1 分钟级别。
2. **代码与状态护栏：反过度工程 + 体积拦截 + 状态收敛（`@vikingmute`、`@bozhou_ai`）**
   - **`AGENTS.md` 反过度工程与极简 UI 约束**：引入 OpenCode 风格约束，严禁 Agent 为罕见竞态或假设性边缘情况静默扩张范围或提取单次 helper；修改前必须先陈列具体故障模式、发生概率与复杂度成本。UI 层砍掉冗余 tagline、helper text 与 secondary labels。
   - **Pre-commit 5,000-Token 体积硬门禁**：配置仅检查暂存区（staged）文件的 Git Pre-commit Hook（按 `bytes/4.` 估算，豁免 lockfile 与 codegen），一旦单文件超过 5,000 tokens 立即阻断提交并给出模块拆分指引。
   - **面向 Agent 的 React 状态收敛**：禁用裸 `useEffect` 与复杂本地 `useState`（仅允许简单布尔开关），强制规定全局共享状态用 Zustand（与组件树解耦）、本地复杂交互用 `useReducer`、服务端异步数据用 React Query，从根源消除 Agent 堆砌 `useState` 导致的同步死循环。
   - **规则体检与高低模型搭配**：定期对项目内指令与规则文件执行提示词审计（如 `/doctor prompt-audit`），清理冲突规则；日常编码由高性价比主力模型执行，仅在定方案前、同一错误反复出现、宣布完成前挂载高阶顾问模型（如 `/advisor opus`）把关，兼顾质量与防止“早期智商债”（`@waylybaye` 亦强调不让 AI 写冗长 Spec，只记关键 Points 以保留系统随模型升级的自愈能力）。
3. **非人工肉眼验收：视图截图自检 + 多 Agent 交叉审查 + E2E 录屏（`@waylybaye`、`@vikingmute`）**
   - **测试驱动的 UI 截图自检闭环**：绕开不稳定且难以并发的 GUI 预览插件，基于单元测试封装命令行渲染指令（如 `make preview FILES=AnyView.swift` 调用 `xcodebuild test`），将视图直接渲染为静态图片；Agent 每次改完 UI 自动跑命令看图自检迭代。
   - **多 Agent 交叉审查与 E2E 录屏交片**：大特性合入前启动 2–3 个独立 Agent 交叉 Review 配合 CI 门禁；Agent 完成编码后必须跑通端到端测试（E2E）并产出操作录屏作为完工凭证，人类仅在最初需求确认与最终上线推送两道闸门介入。
4. **过程资产化与上游自愈（`@vista8`）**
   - **踩坑过程打包为可安装 Skill**：将特定平台开发全流程（如图标生成、设置页、GitHub 在线更新、签名公证 DMG）固化为一行命令即可安装的技能包（如 `npx skills add <owner>/<skill>`）。
   - **Cron 定时跟进上游变更**：针对宿主平台或依赖库每日更新导致插件失配的问题，建立每日定时任务（Cron + Agent）自动检查上游最新版本号并执行兼容性迭代。

## A1 — 应用示例 (Application Example)

### 示例 1: 全栈 SaaS 底座的半自动软件工厂与防膨胀门禁
- **类型与来源**: 真实案例 — `@vikingmute` 在全栈 SaaS 底座 `TinyShip` 与日常独立开发中的工程流水线（`2026-10-16`、`2026-10-19`、`2026-10-23`、`2026-10-24`、`2026-10-29`）
- **问题/输入**: 单人维护支持 Next.js/Nuxt.js/TanStack Start 及 7 大支付认证的商业代码库，AI 编写代码极快，但常擅自添加罕见边缘情况的防御性代码、生成超大单文件，或在 React 组件中滥用 `useState` 导致状态同步翻车，且人工已无法逐行阅读全部 PR Diff。
- **方法论的使用**:
  1. 为项目配置专属 Grok Bot（内建仓库记忆与测试规范），按 Git Worktree 开启多分支并行开发；
  2. 在 `AGENTS.md` 写入反过度工程规则（未经批准不得为低概率边缘情况增加复杂度）与 React 状态铁律（禁 `useEffect` 与复杂 `useState`，强制 `useReducer + Zustand + React Query`）；
  3. 部署仅针对 staged 源码文件的 Pre-commit Hook，按 `bytes/4.` 拦截超过 5,000 tokens 的大文件并提示拆分；
  4. 大功能开启双/三 Agent 交叉 Review，要求 Agent 跑通 E2E 测试并录制操作视频后才触发人工上线确认。
- **结论**: 用前置规则门禁（AGENTS.md + Token Hook + 状态约束）叠加后置自动化证据（多 Agent Review + E2E 录屏），可彻底替代人工逐行审 PR。
- **结果**: 单人稳定推进多条商业产品线（TinyShip、TinyOwl、简单简历），大幅压低线上回滚率，将人工介入收缩至需求确认与最终发版两个节点。

### 示例 2: Apple 生态多任务并发编译与 SwiftUI 截图自检闭环
- **类型与来源**: 真实案例 — `@waylybaye` 在开发维护 `DAMA`、`ServerCat` 等 Apple 原生应用时的编译与 UI 迭代基建（`2026-08-20`、`2026-09-30`）
- **问题/输入**: 多个编码 Agent 并行开发 iOS/macOS 特性时，`xcodebuild` 无法在同一工程目录并发运行，排队编译耗时长，且官方 Xcode MCP Preview 在多并发下频繁失效或返回旧截图。
- **方法论的使用**:
  1. 为每个并发任务创建独立 Git Worktree，每个 Worktree 分配独立的 Simulator 实例与独立的 `DerivedData` 目录；
  2. 将 `Source Packages` 设为全局项目级共享，并开启全局共享 CAS（Content-Addressable Storage）；
  3. 弃用 GUI 预览插件，基于 `xcodebuild test` 封装 `make preview FILES=AnyView.swift`，直接将目标 SwiftUI 视图渲染为图片文件，供 Agent 每次修改后看图自检。
- **结论**: 编译缓存与状态目录的“读写分离”（独立 DerivedData/Simulator + 共享 Source Packages/CAS）配合命令行渲染截图，是解决原生客户端多 Agent 并发阻塞的标准解法。
- **结果**: 冷编译时间从数十分钟压缩至 1 分钟级别，多个 Worktree 下的 Agent 可互不干扰地并发完成 SwiftUI 界面编写与视觉自检。

### 示例 3: Mac 工具开发过程 Skill 化与上游版本自动巡检
- **类型与来源**: 真实案例 — `@vista8` 开发 `乔木闪记 Jot`、`qiaomu-macos-dev` 与维护 DSH 插件（`2026-11-03`、`2026-11-04`）及 `@bozhou_ai` 的规则审计与顾问分级实践（`2026-11-02`、`2026-11-04`）
- **问题/输入**: 独立开发者反复开发单功能 Mac 菜单栏/速记工具时，每次都要重踩图标制作、Sparkle/GitHub 自动更新、DMG 签名公证的坑；同时宿主平台（如 DeepSeek Harness）每日发版导致已发布插件频繁报错。
- **方法论的使用**:
  1. 将 Mac App 从零到发版的完整模板（Theme/Toast/Updater/SettingsView）与 `build.sh` / `release.sh` 公证脚本沉淀为 `qiaomu-macos-dev` 技能包，后续新项目直接通过 `npx skills add joeseesun/qiaomu-macos-dev` 装配；
  2. 针对高频变动的上游底座，配置每日 Cron 定时任务驱动编码 Agent 检查上游最新 Release 版本号（如从 0.2.2 演进至 RC5），自动修改适配代码并提交更新；
  3. 配合 `/doctor prompt-audit` 定期巡检仓库规则文件，并在日常迭代中开启顾问分级模式（日常用轻量模型，关键节点调用 `/advisor opus`）。
- **结论**: 把“怎么造软件的踩坑过程”封装成可执行 Skill、把“跟进上游破坏性更新”交给定时任务，能将一次性经验转化为零边际成本的复利资产。
- **结果**: 3 分钟即可产出 Obsidian 全局速记工具第一版，81 stars 的 UI 学习插件跨多个上游 RC 版本实现无人值守兼容更新。

### 示例 4: Claude Code 工具作者的官方交互纪律与共享记忆闭环
- **类型与来源**: 一手方法论 — `@bcherny`（Boris Cherny，Claude Code 作者）的 Claude Code Playbook（168 条团队 tips，`2026-01`）
- **问题/输入**: 即使工程基建（Worktree/Pre-commit/AGENTS.md）已到位，Agent 仍会产出平庸代码或擅自改动；且团队/项目里每个人用法各异，个人踩坑经验无法沉淀共享、反复重踩。
- **方法论的使用**:
  1. **让 Agent 自证而非自吹**：要求「Grill me on these changes and don't make a PR until I pass your test」（让 Claude 当评审质询你，过不了就不发 PR）、「Prove to me this works」（让 Claude diff 对比 main 与 feature 分支行为差异来自证）；
  2. **共享记忆文件**：维护一份团队级 `CLAUDE.md`，把「每次 Claude 犯错/踩坑」都追加进去（转述：作者团队的做法是"见到 Claude 做错一次，就写进共享 CLAUDE.md"），经验从个人口头记忆变为团队资产；
  3. **交互语气与计划模式**：把 Claude 当同事而非工具对话，用 Plan mode 先对齐方案再动手；并明确「there is no one right way to use Claude Code — everyone's setup is different」，鼓励各自实验而非照搬唯一正解；
  4. **subagents 卸载上下文**：对独立任务「use subagents」，把子任务 offload 出去，保持主 agent 上下文「clean and focused」。
- **结论**: 工具作者自己的用法与普通用户不同——核心不是堆更多规则，而是「让 Agent 自证 + 把每次犯错沉淀进共享记忆」的双闭环；这与本卡既有「AGENTS.md 反过度工程」形成互补（一个防膨胀，一个防平庸与知识流失）。
- **结果**: 一套 168 条、可直接复用的 Claude Code 团队最佳实践，成为 Claude Code 深度用户的交互纪律母本。

## A2 — 触发场景 (Future Trigger) ★

### 用户会在什么情境下需要这个 skill?
- 用户同时推进多个功能分支或多个中小型软件项目，抱怨“AI 写得太快、PR 根本看不过来”“不知道怎么验收 AI 写的大批代码”。
- 用户的代码库在引入编码 Agent 后迅速腐化：出现几千行的巨型文件、大量毫无必要的 `try/catch` 和防御性 helper，或者 React 前端状态混乱、频繁出现渲染死循环。
- 用户在客户端/原生开发（如 iOS/macOS Xcode 工程）中尝试让多个 Agent 并行干活，但遭遇编译锁死、冷启动极慢或 UI 预览无法自动闭环。
- 用户希望把团队或个人反复执行的项目搭建、打包公证、上游版本兼容及模型省钱策略固化成可自动运转的工程基建。

### 语言信号 (用户的话里出现这些就应激活)
- “怎么同时开几个 Agent 并行写功能还不冲突？” / “Git worktree 怎么配 AI 编程？”
- “AI 总是乱加防御性代码 / 单文件越写越大怎么拦住？” / “AGENTS.md 或 CLAUDE.md 该怎么写规范？”
- “PR 太多审不过来了，怎么让 Agent 自己测完交差？”
- “Xcode 多个 Agent 一起跑编译巨慢/锁死怎么办？” / “怎么让 AI 自己看 SwiftUI 界面效果并改对？”
- “怎么省 token 又不降代码质量？” / “上游框架天天更新，插件老是坏怎么自动跟进？”

### 与相邻 skill 的区分
- **若用户聚焦于评测不同大模型的编码跑分、量化损失或单题 Benchmark** → 转用模型硬核实测基准方法（如 `@karminski3` 的 `vector-db-bench` 与连抽 6 次稳定性测试），而非本卡的软件工程流水线。
- **若用户聚焦于传统企业内部业务流程改造、ERP/MES 对接或高管飞书审批办公流** → 转用企业 FDE 交付与 AI Native 组织改造方法（如 `@cnzhihao`、`@FuSheng_0306`），本卡仅处理软件研发与代码仓库工程化。
- **若用户聚焦于网站上线后的关键词布局、TDH 优化或搜索流量获取** → 转用 `seo-geo-growth-engine`（出海工具站 SEO/GEO 与流量裂变引擎）。

## E — 可执行步骤 (Execution)

**必需输入**:
- 目标代码仓库路径、技术栈类型（如 Web 全栈 React/Next.js、原生客户端 Swift/Xcode 等）及现有构建/测试命令；
- 当前研发痛点清单（如：多任务编译冲突、单文件膨胀、前端状态失控、缺乏自动验收手段、模型调用成本过高等）。

**交付物与完成标准**:
1. **仓库级 Agent 规范文件（`AGENTS.md`）**：包含反过度工程条款、技术栈专属状态收敛规则（如 React 状态分层）与简洁 UI 规范，且通过规则冲突审计；
2. **Git Pre-commit 体积拦截脚本**：仅扫描 staged 源码文件、自动豁免生成物与锁文件、超 5,000 tokens（按 `bytes/4.` 计）即阻断并输出拆分指引的可执行 Hook；
3. **多 Worktree 并发与自动化自检流水线配置**：支持多分支独立运行、秒级/分钟级增量或冷编译共享缓存，以及命令式视图截图（`make preview`）或 E2E 录屏验收脚本。

**执行步骤**:

1. **编写并审计仓库级 `AGENTS.md` 工程护栏**
   - 在仓库根目录创建或更新 `AGENTS.md`，写入三条核心硬约束：
     - **反过度工程条款**：明确规定“在为假设性或极低概率的竞态/安全边缘情况增加复杂度前，必须先向开发者说明具体故障模式、发生概率与复杂度代价并获得批准，严禁静默扩张需求范围；禁止为单次调用提前抽离 helper”。
     - **架构与状态收敛条款**：若为 React/前端项目，明确禁用裸 `useEffect` 与复杂本地 `useState`（仅限简单布尔开关），强制规定全局状态用 Zustand、组件内复杂交互用 `useReducer`、服务端缓存用 React Query；UI 层面规定“砍掉多余 tagline、helper text 与 secondary labels，若界面需要靠解释文字才能看懂，必须重修布局”。
     - **文档防智商债条款**：不让 Agent 生成冗长 Spec 文档，只记录关键决策点（Key Points），防止次等模型留下的事实错误被后续模型盲信放大。
   - 运行规则体检工具（或等效的提示词冲突审计流程，如 `/doctor prompt-audit`）扫描项目级与全局级规则文件，剔除互相矛盾或冗余的指令。
   - **如果仓库属于重度遗留系统且已有大量违反新规的存量文件 →** 在 `AGENTS.md` 中声明“存量文件按增量修改原则演进，禁止在未授权情况下全量重写无关历史文件”。

2. **部署 Pre-commit 5,000-Token 体积硬门禁**
   - 在 `.git/hooks/pre-commit`（或 Husky/Lefthook 配置）中部署体积检查脚本：
     - 仅获取 `git diff --cached --name-only --diff-filter=ACM` 中的暂存（staged）文件；
     - 显式排除非 Agent 编写的锁文件与生成产物（如 `pnpm-lock.yaml`、`package-lock.json`、`Podfile.lock`、`*.generated.*`、`dist/`、快照文件等）；
     - 使用 `Tokens = bytes/4.` 计算每个暂存文件的 Token 数；
     - 当任一文件 `> 5000` tokens 时，以非零状态码退出阻断提交，并在终端打印具体的拆分建议（按职责拆分子模块、抽离纯函数/类型定义或独立子组件）。
   - **如果单次提交必须包含合法的超大数据字典或静态 Schema →** 引导将其移入独立的 `.json` / `.sql` 数据目录并加入 Hook 白名单，严禁混入业务逻辑源码文件。

3. **搭建 Git Worktree 多分支并发环境与共享缓存**
   - 摒弃长周期 Feature 分支，基于主干（Trunk）为每个并发任务创建独立的工作树：`git worktree add ../<repo>-wt-<feature> -b feat/<feature>`。
   - 为项目配置统一的主控 Agent 会话管理上下文（凭证统一存入安全 Vault，不写入代码库）。
   - **如果项目为 Xcode / iOS / macOS 原生客户端工程 →**
     - 为每个 Worktree 分配专属的 Simulator UDID 与独立的 `-derivedDataPath` 目录，彻底消除多 Agent 并发编译锁冲突；
     - 将 `-clonedSourcePackagesDirPath` 指向全局项目级共享目录，并在构建配置中开启全局共享 CAS（Content-Addressable Storage），确保新 Worktree 冷编译控制在 1 分钟级别。
   - **如果项目为 Web 全栈工程 →**
     - 使用支持内容寻址硬链接的包管理器（如 `pnpm` 全局 store）并在启动脚本中按 Worktree 哈希动态分配本地开发端口与测试数据库 Schema，防止端口争抢。

4. **建立“命令式视图截图 + 多 Agent 交叉审查 + E2E 录屏”验收闭环**
   - **视图层自检**：封装命令行渲染入口（如在 `Makefile` 中定义 `make preview FILES=<TargetView>`，底层通过无头测试框架或 `xcodebuild test` 将目标组件/视图直接渲染为本地 PNG 图片），规定编码 Agent 每次修改 UI 后必须调用该命令并读取渲染图自检，严禁盲写样式。
   - **代码与功能层验收**：
     - 配置主力模型与顾问模型的分级策略（日常迭代用高效模型，在架构定稿前、同一报错连续出现 $\ge 2$ 次、或准备宣告完工前切入高阶模型如 `/advisor opus` 复核）；
     - 复杂特性开发完毕后，拉起 2–3 个独立上下文的审查 Agent 针对 Diff 与测试覆盖率做交叉 Review；
     - 强制 Agent 执行端到端自动化测试（Playwright / Cypress / XCUITest）并生成操作录屏（Video Artifact）作为交付物，人工仅审阅录屏与关键架构变动即可合入主干。
   - **如果目标功能重度依赖真机硬件（如相机传感器、蓝牙外设）导致模拟器/无头测试无法覆盖 →** 将硬件交互层抽象为 Mock 接口跑通主流程快照测试，并在交付清单中显式列出需人工真机抽检的最小步骤集。

5. **沉淀可复用 Skill 与配置上游版本自动巡检**
   - 当某一类工程流程（如新应用脚手架、图标生成、签名公证、发版脚本）跑通 $\ge 2$ 次后，将其目录模板、构建脚本与避坑细则打包为标准 Skill 仓库（支持 `npx skills add <repo>` 一键复用）。
   - 若项目依赖高频更新的外部框架或插件底座，配置每日定时任务（Cron）触发 Agent 拉取上游最新 Release/Tag，在独立 Worktree 中运行构建与测试，自动提交兼容性修复。

## B — 适用边界与反例 (Boundaries & Counter-examples)

### 适用前提
- 项目具备（或愿意优先补齐）自动化验证基建，包括无头单元测试、组件快照渲染或 E2E 自动化测试脚本。
- 模块边界支持按文件或目录切分，能够适应单文件 $\le 5,000$ tokens 的模块化约束。
- 研发团队或独立开发者认可 Trunk-based 短分支高频集成模式，愿意用自动化证据（录屏 + CI）替代人工逐行盯梢。

### 不适用场景 / 常见误用
- **无自动化测试的受监管/高危核心系统**：涉及金融资金清算、医疗设备控制或底层密码学内核，以及接收外部非授信贡献者的开源主干，**严禁**取消人工逐行代码审计，不可仅凭 E2E 录屏自动放行。
- **盲目让 AI 全自动生成安全/支付回调逻辑而不做人工风控审计**：正如 `@waylybaye` 所警告，AI 永远优先编写 Happy Path；`@gefei55` 亦曾因 AI 编写的充值回调漏掉签名校验而被伪造 23 笔订单刷走上万美金积分。凡涉及支付签名校验、权限鉴权、计费扣款的代码，必须执行“未虑胜先虑败”的人工逐行风控复核。
- **用性价比小模型生成长篇 Spec 文档供后续模型遵循**：会导致早期模型的幻觉与设计缺陷被固化为“早期智商债”，新模型盲目信任旧文档反而越改越错。
- **对单次简单展示组件强套复杂状态机**：纯静态或仅含单一布尔展开状态的 UI 组件无需强行引入 `useReducer` 或 Zustand。

### 自检清单
- [ ] 仓库根目录是否已配置 `AGENTS.md`，明确禁止未获批的边缘情况防御代码与单次 helper？
- [ ] Pre-commit Hook 是否已生效，能否精准拦截 $> 5,000$ tokens（`bytes/4.`）的 staged 源码文件且不误伤 lockfile？
- [ ] 并发开发是否已通过 Git Worktree 隔离，且构建缓存（如 `DerivedData`/Simulator 与全局共享 `CAS`/`Source Packages`）已做好读写分离？
- [ ] UI 修改是否有命令行渲染图片（如 `make preview`）供 Agent 视觉自检，而非盲改代码？
- [ ] 每次任务交付是否包含通过的 E2E 测试与操作录屏，且支付/鉴权等安全边界已由人工专门复核？
