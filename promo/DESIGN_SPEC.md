# DESIGN SPEC & STORYBOARD — AI-CREATORS-ON-X Promo (36.2s · 1085f @ 30fps)

## Phase 0：产品简报与执行决策表（Product Brief & Execution Constraints）

- **产品名称**：`AI-CREATORS-ON-X`（20 位中文 X 技术创作者实证蒸馏 Skill · Cangjie v2.5 × Darwin v2.1）
- **核心价值主张**：把 20 位头部中文 AI 创作者的 **1,145 条高纯度技术帖与 60+ 开源仓库**，蒸馏并经 Darwin v2.1 自动进化（Paired 3/3 全票胜出，9 维评分 **65.8 → 88.9**，实测断言 **18/18 = 100%**），浓缩为 6 张随叫随到的 RIA++ 能力卡。
- **音频与旁白硬约束**：
  - **无人声旁白（No Narration / No Voiceover）**：严格遵循用户指令 `no narration but can use sound`。
  - **声音设计（Sound Design）**：使用 30+ 处逐帧钉死在动效节拍上的电影感 SFX（`transition-soft`、`whoosh-fast`、`whoosh-big`、`sparkle`、`transition-snap`、`swoosh-quick`、`keyboard`、`click-camera`、`pop`、`riser-cine` → `impact-cine` → `sparkle` 结尾三连）+ 可选律动 BGM（`bgm-tech-house.mp3`），终渲同步交付 **无 BGM 纯享 SFX 版（`promo-sfx.mp4`）** 与 **带 BGM 混音版（`promo-bgm.mp4`）**。
- **数据安全口径**：展示的 20 位创作者数据均取自公开推文统计快照与已脱敏占位符，零私有密钥或个人隐私暴露。

---

## Phase 1：视觉方向与动效 Tokens（Visual Direction & Motion Tokens）

- **主视觉主题**：`open-science`（对齐 [aipoch/open-science](https://github.com/aipoch/open-science) 的暖纸墨学术风：暖纸底 `#f1f0ed` + 墨黑正文 `#1a1a1a` + 深青强调 `#0b7285` + Open Color 七色路标 `#2f9e44` / `#4dabf7` / `#f59f00` / `#e8590c` / `#b31b1b` / `#4263eb` / `#7950f2`），同时保留 9 套可编辑主题。
- **动效性格预设**：**专业信赖 × 活力大胆混合（Engineering Precision）**
  - 入场主曲线：`bezier(0.3, 0, 0.2, 1)`（推进/摇臂）与 `bezier(0.34, 1.4, 0.44, 1)`（发牌/落座微过冲）
  - 呼吸留白（Hold 预算）：开场字标落定后静置 **30f (1.0s)**；主角卡悬浮扫描 **54f (1.8s)**；片尾合体字标砸落后静置 **>30f (1.0s)**。

---

## Phase 2 & 3：功能到镜头映射与 10 镜头完整分镜表（Storyboard）

| # | 帧区间 (30fps) | 时长 | 镜头卡 / 场景组件 | 对应核心卖点与画面内容 | 字幕条 / 字卡文案 | 钉帧 SFX |
| --- | --- | --- | --- | --- | --- | --- |
| **S1** | `0–220` | 7.3s | `brand-ink-open` + `spotlight-hero-card` (`SceneOpen.tsx`) | 准星描画 + `AI-CREATORS-ON-X` 字标压印 + `20 CREATORS · 1,145 TECH POSTS` 打字机眉题（静置 1s）→ 推入 10 张核心战法总览台 → 聚光锁定中心主角卡 `04 · Video as Code & Remotion`（2.6x 侧斜推近 + 悬浮光束绕框两周 + 归位） | 悬浮批注：`6 Playbooks,` / `18/18 Verified.`<br>字幕条：`20 X CREATORS · 1,145 TECH POSTS · 62,165 LIKES` | `12f transition-soft`<br>`78f whoosh-fast`<br>`127f whoosh-big`<br>`141f sparkle`<br>`204f transition-snap` |
| **S2** | `220–275` | 1.8s | `paper-title-card` (`PaperTitleCard.tsx`) | 字卡① 呼吸位：浓缩全栈工程与出海增长的核心命题 | `1,145 tech posts distilled into *six* executable playbooks.` | `220f swoosh-quick` |
| **S3** | `275–465` | 6.3s | `deck-deal-flyin` + `type-and-filter` (`SceneFlyIn.tsx`) | 26 张创作者方法论卡堆叠 3D 环绕特写 → 加速发牌飞入全网格槽位 → 下滚浏览 → 顶部搜索框自动键入 `agent-factory` → 筛选命中 `Agent Software Factory` 并点击推近 | `318f`: `5 ORTHOGONAL TRACKS · 20 BUILDERS`<br>`395f`: `ROUTE BY INTENT · LOAD 1 CARD · ZERO BLOAT` | `277f transition-soft`<br>`308f/340f/356f/388f whoosh`<br>`401f keyboard`<br>`451f click-camera` |
| **S4** | `465–565` | 3.3s | `row-embed` (`SceneDetail.tsx`) | 宏观特写切入 `agent-software-factory` 详情页：5 条量化护栏（Worktree+1min CAS、Pre-commit 5000 tokens、禁裸 useState、make preview 视图截图与 E2E 录屏验收）逐行嵌入 | `477f`: `WORKTREE + 1-MIN CAS · 5,000-TOKEN PRE-COMMIT GATE` | `475f transition-soft` |
| **S5** | `565–620` | 1.8s | `paper-title-card` (`PaperTitleCard.tsx`) | 字卡② + `DigitRoll` 滚动数字：展示 SEO/GEO 与 Video as Code 6 大能力卡 | `Six *RIA++* capability cards, battle-tested in production.` (DigitRoll: `6` `of 20 creator tracks unified`) | `565f swoosh-quick` |
| **S6** | `620–725` | 3.5s | `list-stack-press` (`ScenePapers.tsx`) | 5 张核心能力卡（SEO/GEO 一词一页 TDH、Video as Code 白模预演、全栈去 AI 味 62 项黑名单、Vector-DB 产物压测、企业 FDE 三层报错）依次下压堆叠 + 右上角计数器滚动至 5 | `633f`: `1-KEYWORD-1-PAGE TDH · WHITE-MODEL PREVIZ · 62 UI BLACKLISTS` | `623f transition-soft`<br>`648f click-camera` |
| **S7** | `725–775` | 1.7s | `paper-title-card` (`PaperTitleCard.tsx`) | 字卡③：引出 Darwin v2.1 自动进化与红灯门禁 | `Evolved with *Darwin* v2.1 — paired 3-0 blind verdict.` | `725f swoosh-quick` |
| **S8** | `775–885` | 3.7s | `document-typewriter-reveal` (`SceneWbr.tsx`) | Darwin v2.1 进化报告（`65.8 → 88.9`，+23.1 分，4 步 I/O 闭环 + `BL-1..BL-6` 反例黑名单）在画面中央自动书写揭示，左栏 6 大赛道审计记录逐条弹入 | `789f`: `DARWIN SCORE 65.8 → 88.9 · PAIRED 3/3 KEEP · 18/18 ASSERTIONS` | `779f transition-soft`<br>`781f keyboard`<br>`840f–865f pop ×6` |
| **S9** | `885–940` | 1.8s | `paper-title-card` (`PaperTitleCard.tsx`) | 字卡④：全机 4 端全局就绪 | `Installed *globally* across Magpie, Claude, and Agents.` | `885f swoosh-quick` |
| **S10** | `940–1085` | 4.8s | `outro-group-photo-launch` (`SceneOutroLive.tsx`) | 虚焦过渡 → 全片 9 大核心组件从四面八方带残影飞入合体列阵 → 中央 `AI-CREATORS-ON-X` 字标 + `1,145 Posts · 6 Playbooks · Darwin 88.9` 副标重锤砸落并扫光静置 >1s | （片尾保持纯净无底部字幕） | `945f riser-cine`<br>`980f impact-cine`<br>`1005f sparkle` |
