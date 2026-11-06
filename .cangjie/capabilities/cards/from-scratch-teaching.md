# 「从零重建」学习法与 AI 教育内容生产协议

## R — 原文 (Reading)

> Personal update: I've joined Anthropic. I think the next few years at the frontier of LLMs will be especially formative. I am very excited to join the team here and get back to R&D. I remain deeply passionate about education and plan to resume my work on it in time.
> — @karpathy, 2026-06（加入 Anthropic 原帖）

> Vibe coding is amazing. But Agentic + Opus 5.5 harness engineering is the next level. 99% of my coding routine is automated by AI agents.
> — @karpathy, 2026-11（转述自 30 分钟 talk）

> Neural Networks: Zero to Hero —— 从微积分与反向传播讲起，逐个**从零手写** Transformer/GPT 组件，而非教人背 API。
> — @karpathy, 长期系列（转述：micrograd → nanoGPT → llm.c → autoresearch 等 7 个教学仓库）

---

## I — 方法论骨架 (Interpretation)

karpathy 的可复用资产不在「他懂多少」，而在「**用『从零重建』代替『读文档 / 背 API』来建立真理解**」这一套学习与教学协议。骨架有三条：

1. **理解 = 重建（learn by rebuilding）**：对一个概念（反向传播、注意力机制、Transformer、训练循环）的「真掌握」，标志是能**不查资料、从零手写出来**——micrograd 用几十行纯 Python 写出自动微分，nanoGPT 从零重写 GPT，llm.c 再一路下探到 CUDA。背接口是假懂，能重建才是真懂。
2. **最小可运行单元 + 逐层叠加**：教学不从「完整系统」讲起，而是先给一个最小可用实现（几十行 micrograd），每加一层复杂度都保持「可运行、可验证」，把陡峭的学习曲线拆成可复现的台阶。
3. **教学是最高杠杆的 AI 技能**：在模型能力每几个月就翻新的周期里，「把新东西讲透」的价值 ≥ 「做出新东西」——教育内容就是把混沌压缩成最小可复现路径，且其半衰期远长于单条工具速报。

**边界划分（重要）**：karpathy 近期公开重心已从「教学」转向「agent harness 工程」（99% 编码自动化、HackerTube 用 Claude Code 2 小时搭产品）。**后者与 `agent-software-factory` 高度重叠，不属于本卡**；本卡只取他独有、且未被原有 6 卡覆盖的「从零重建 + 教学讲解」这一面。

一句话骨架：**「学一个东西 = 从零重建一个最小版」+「讲给别人听 = 把重建路径压缩成可复现教程」**。

---

## A1 — 应用示例 (Application Example)

### 示例 1: Zero to Hero —— 用「逐层重建」吃透深度学习
- **类型与来源**: 一手教学系列 — `@karpathy` `Neural Networks: Zero to Hero`（长期）
- **问题/输入**: 学深度学习的人陷入两个极端：要么刷 API 教程只会 `import torch` 调库却不懂原理，要么啃论文卡在数学推导寸步难行。
- **方法论的使用**: 从微积分与反向传播讲起，**逐行从零手写**神经元、多层感知机、反向传播，再逐步重建 Transformer / GPT 等组件；每一讲产出一个最小可运行的实现，作为下一讲的地基。
- **结论**: 「从零重建」把「懂不懂」从模糊感觉变成可验证的硬指标——能不看参考手写出来才叫会。
- **结果**: 成为全球深度学习入门的事实标准路径之一，被大量课程与复刻仓库引为母本。

### 示例 2: micrograd → autoresearch —— 把「教学仓库」做成递进式开源资产
- **类型与来源**: 一手开源资产 — `@karpathy` 的 `micrograd`、`nanoGPT`、`llm.c`、`minGPT`、`autoresearch` 等 7 个仓库（长期）
- **问题/输入**: 单篇教程是一次性的，学完即弃；如何让「从零重建」的成果沉淀为可复用、可迭代的资产。
- **方法论的使用**: 同一主题做成**梯度递进**的仓库链——`micrograd`（几十行自动微分）→ `nanoGPT`（最小可训练 GPT）→ `llm.c`（纯 C/CUDA 训练），复杂度逐级提升，但每个仓库都可独立 clone、运行、魔改。
- **结论**: 教学资产化的正解不是「一篇长文」，而是「一组难度递增、各自最小可运行的开源仓库」。
- **结果**: 这些仓库成为海量「从零实现 XXX」的脚手架与范本，`autoresearch` 等新仓库还在持续把最新研究逆向重建为教学代码。

### 示例 3: 边界案例 —— 重心切换后的「教学」与「工程」分家
- **类型与来源**: 一手动态 — `@karpathy` 2026-06 加入 Anthropic 帖 + 2026-11 「99% 编码自动化」talk
- **问题/输入**: 一个长期以「教学」立身的创作者，在加入前沿实验室后，如何在新旧两条路线间划界。
- **方法论的使用**: 公开声明「仍深爱教育、择日重启」，但近期输出重心转为 agent harness 工程与用 Agent 快速造产品（HackerTube）。
- **结论**: 这是本卡边界的活例证——同一人的「教学」内容（从零重建）与「工程」内容（agent 自动化）属于不同能力域，后者应路由到 `agent-software-factory`，不可混入本卡。

---

## A2 — 触发场景 (Future Trigger) ★

### 语言信号 (用户的话里出现这些就应激活)
- 「怎么真正搞懂 Transformer / 注意力 / 反向传播，而不是只会调 API」
- 「想写教程把某个 AI 概念讲透」「怎么设计一套从入门到精通的系列课」
- 「从零实现 XXX（micrograd / nanoGPT / LLM）」「把论文逆向成能跑的教学代码」
- 「AI 时代教别人学 AI 的方法论」「怎么把复杂概念压缩成最小可复现路径」

### 与相邻 skill 的区分
- 与 `agent-software-factory` 的区别：该卡解决「如何用多 Agent 高效生产软件」，本卡解决「如何通过从零重建真正理解概念、并产出教育内容」；karpathy 的 agent harness 内容归前者，教学/从零实现内容归本卡。
- 与 `agent-benchmark-and-model-routing` 的区别：该卡解决「如何实测选型模型」，本卡解决「如何学习与讲解模型内部原理」——一个是外部评测，一个是内部重建。
- 与 `de-ai-taste-and-writing` 的区别：该卡解决「产出内容时去 AI 味」，本卡解决「设计学习路径与教学结构」；本卡的教学内容同样要接受去 AI 味约束，但那是生产环节，不是本卡核心。

---

## E — 可执行步骤 (Execution)

**必需输入**:
- `target_concept`（必填，待理解/讲解的概念，如 `反向传播` | `Transformer` | `RLHF` | `某篇论文`）
- `learner_level`（必填，枚举：`beginner` | `practitioner` | `advanced`，决定最小实现从哪一层抽象起步）
- `output_form`（必填，枚举：`minimal_repo`（从零实现代码）| `tutorial_series`（系列教程）| `both`）

**交付物与完成标准**:
- 一条「最小可运行单元 → 逐层叠加」的阶梯路径；若 `output_form` 含 `minimal_repo`，须给出可直接运行的从零实现骨架，而非调用现成库的示例。

当此能力被激活后，按以下步骤执行：

1. **拆解概念到最小可运行单元**
   - 把 `target_concept` 拆成"第一性组件"（如 Transformer = 自注意力 + 前馈 + 位置编码 + 残差），找到能表达核心思想的最小代码量。

2. **设计递进阶梯（每级可运行）**
   - 按 `learner_level` 定起点抽象层：`beginner` 从纯 Python/NumPy 起，`advanced` 可直下 CUDA/自定义 kernel；每一级都必须是可 clone、可跑、可魔改的独立单元，复杂度逐级叠加而非跳跃。

3. **以「能不看参考手写」为验收线**
   - 学习侧：要求能脱离参考重写核心组件；教学侧：教程每个环节都要附带"你自己试着从零写一遍"的练习，而非只给成品代码。

4. **区分教学与工程边界**
   - 若内容涉及"用 Agent 高效造产品/自动化编码"，路由到 `agent-software-factory`，不塞进本卡的"从零重建"教学主线。

---

## B — 适用边界与反例 (Boundaries & Counter-examples)

### 适用前提
- 目标概念有清晰的「第一性组件」可被从零重建（原理型内容）。
- 学习者愿意投入"手写"的时间，而非只求快速调库出结果。

### 不适用场景 / 常见误用
- **只背 API 不重建**：把"会用库"当"懂原理"，是本卡要纠正的核心假懂。
- **混入工程自动化**：把 karpathy 近期的 agent harness / 快速造产品内容（99% 编码自动化）误当"教学法"，实则归属 `agent-software-factory`。
- **为重建而重建**：对纯工程/业务内容（如某框架的配置技巧）硬套"从零实现"，反而低效——这类内容本就该查文档而非重写内核。

### 自检清单
- [ ] 是否已把概念拆到「最小可运行单元」，而非从完整系统讲起？
- [ ] 阶梯路径每一级是否都可运行、可验证、可魔改？
- [ ] 是否以「能脱离参考手写」作为理解达标的验收线？
- [ ] 是否已把「教学」与「agent 工程」两类内容正确分路由（后者去 `agent-software-factory`）？
