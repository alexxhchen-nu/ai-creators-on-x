## @karminski3 · karminski-牙医
**摘要**：KCORES 联合创始人、前金山办公/掘金技术负责人；不转官方跑分，而是自建可复现 benchmark（从 0 写向量数据库、小模型天梯、Agent 游戏测试）给国模打分，并公开原始数据与失败案例。

| 粉丝 | 关注 | 学习方向 | 抓取 | 主页 |
| --- | --- | --- | --- | --- |
| 40.1K | 1,563 | 大模型性能实测 | 78/83 | https://kcores.com |

### 画像
自述「coder, road bike rider, server fortune teller, electronic waste collector」，KCORES 联合创始人，做过 IllaSoft、金山办公、掘金的技术负责人，现居北京。内容三块：新模型实测速报、推理与硬件优化、Agent 工程实践；新模型发布当天基本就出结论，密度很高。与本组的差别是他把评测当工程做——写测试代码、留日志、开榜单，而不是拿演示效果说话。

### 核心方法论
1. **用产物性能计分，而非题集正确率** — 让模型从 0 实现一个向量数据库，再按这个数据库的实际性能排名；结论明确限定「只说我这个测试」。依据 `2026-09-14` https://x.com/karminski3/status/2099375198986461418 ；榜单见 vector-db-bench，Fable-5.1 写出的库约为第二名 2x。边界：只覆盖后端 Agentic Coding，不能外推到前端或通用能力。
2. **多次抽卡看稳定性** — 前端测试同一套提示连跑 6 次，比较实现细节；6/6 一致才判「稳」，并据此怀疑 opus 5.5 是 fable 5.1 的量化/蒸馏版。依据 `2026-09-22` https://x.com/karminski3/status/2102479290420048093 。
3. **统一 reasoning_effort 口径** — benchmark 不因模型差异单独调档（「不能因其他模型都用 max，然后 deepseek 单独用 high 测」）；并指出厂商用 max 刷分、再反手说 max 不适合普适场景，等于把算力与计费风险转给用户。依据 `2026-09-14` https://x.com/karminski3/status/2099767043155218568 。
4. **矩阵化小模型横评** — 8 款模型 × 4 种量化 × MTP 开/关 × low/medium/xhigh 三档，单卡 H100 NVL + llama.cpp；结论落到具体组合：Agent 用 Qwen3.8-27B-UD-Q4_K_XL + reasoning_effort=low。依据 `2026-08-31` https://x.com/karminski3/status/2094311103987581033 。
5. **用真实日志压测 Agent** — 120 万条日志（约 260MB，含 Zenodo 真实提权攻击日志）让 Apodex 1.1 找出攻击方式并写防火墙规则；前提是单线 thinking 必然注意力丢失/幻觉，需 harness 分担。依据 `2026-08-27` https://x.com/karminski3/status/2092894838492655713 。
6. **游戏化多智能体测试** — 从「送外卖 Agent」升级为控制角色打怪 + 召唤 SubAgent 协作，观察是否自发学会团战、堵门；后端分 Hy3 仅 16，Hy4 明显跃升。依据 `2026-09-04` https://x.com/karminski3/status/2095817216159867242 。

### 工具与产品清单
| 名称 | 类别 | 用途 / 评价 | 出处 |
| --- | --- | --- | --- |
| vector-db-bench | 评测榜 | 从 0 写向量数据库的后端 Agent 榜 | 2026-09-14 |
| llama.cpp / MLX | 推理 | 小模型横评底座；另做 MTP 优化，称可再提约 16% | 2026-10-20 |
| H100 NVL | 硬件 | 小模型竞技场单卡测试环境 | 2026-08-31 |
| Jev / laya-mlx | 决策模型 | 非自回归、只输出决策；70ms、输入 $0.042/百万 token、输出免费 | 2026-09-17 |
| MiniCPM5-2B-WebGPU-Pi | 浏览器 Agent | 打开网页即得带终端与 tool_call 的 Coding Agent，免 Docker/Node | 2026-09-14 |
| VibeOffice | 浏览器办公套件 | 本地编辑 .docx/.xlsx/.pptx，无账号、不上传 | 2026-10-10 |

### 可复用片段
```text
我做的是 benchmark, 不是日常使用. 不能因其他模型都用 max
然后 deepseek high 好单独用 high 测.
```
评测口径声明（`2026-09-14`）。

```text
你让它脚本跑10次然后生成统计报告 —— 正确的方法是用脚本循环10次(harness).
```
Agent 预算计数陷阱（`2026-10-24`）。

```text
万一遇到个 skill 中没有的格式就炸了. 这其实就是把 skill 写成了文档.
```
skill 与文档的分界：代码/数据同构才能做元编程（`2026-09-14`）。

### 判断与趋势
- **SOTA 是信息压缩器**（本人观点）：用最少 token 解决最难问题；并引 2506.04210 佐证「想得更多」会先升后降、并行思考可高约 20%。
- **reasoning_effort 是营销手段**：把算力/精度权衡与计费风险一起转给用户（`2026-09-14`）。
- **opus 5.5 ≈ fable 5.1 的量化/蒸馏**：肉眼几乎无差别，但 6 次抽卡全稳（`2026-09-22`）。
- **文本与视频模型出现上下游**：从「显式符号/几何模拟」转向「隐式统计生成」（`2026-09-07`）。
- **benchmark 生态失效**：鹈鹕骑自行车、three.js 演示、精美 PPT 成了「模型不错」的证据，专业榜单被刷榜与 OpenRouter 用量污染（转述并认同，`2026-09-21`）。
- **看指纹辨新旧**：今年模型普遍已迭代到 three.js r160，匿名模型 union-alpha 停留在旧版本，故判非旗舰（`2026-09-17`）。

### 代表原帖
- [2026-09-14] 后端 Agent 榜：从 0 写向量数据库，Fable-5.1 是第二名 2x — https://x.com/karminski3/status/2099375198986461418
- [2026-09-22] opus 5.5 前端 6 次抽卡 6 次同质，怀疑是蒸馏版 — https://x.com/karminski3/status/2102479290420048093
- [2026-10-24] DeepSeek-v4.1-Flash-1017：能力大涨但 Agent 训练得过「抠门」 — https://x.com/karminski3/status/2113979126256402587
- [2026-10-29] Kimi-K3.1-Pro 实测：前端/3D 最强国模，Agent 更自知 — https://x.com/karminski3/status/2115895561836720236
- [2026-09-04] Hy4：多智能体测试里学会团战与堵门 — https://x.com/karminski3/status/2095817216159867242

### 链接资产
| 链接 | 类型 | 内容摘要 | 状态 |
| --- | --- | --- | --- |
| https://github.com/karminski/deepseek-v4.1-flash-1017-issue-pov | GitHub | 22 stars 的 Agent 问题 POV 仓库：AGENT-CAPABILITY-REPORT.md、log-replay 脚本、blind-box/team-auction 探针与 a0–a5 变体 | 已抓取 |
| https://arxiv.org/abs/2506.04210 | 论文 | 《Does Thinking More always Help?》：过度思考使性能先升后降，并行思考最多 +20% | 已抓取 |
| https://arxiv.org/abs/2604.13602 | 论文 | 《Reward Hacking in the Era of Large Models》综述，提出 Proxy Compression Hypothesis | 已抓取 |
| https://mimo.xiaomi.com/rl/ | 页面 | 小米 MiMo-v2.6 的 RL 训练指标实时页，数据来自训练日志 | 已抓取 |
| https://vibeoffice.work | 产品 | 浏览器内 .docx/.xlsx/.pptx 办公套件，无账号、文件不出本机 | 已抓取 |
| https://github.com/tcchen2026/VibeOffice | GitHub | 1,260 stars、Apache-2.0 的同款开源仓库 | 已抓取 |
| https://vector-db-bench.kcores.com | 榜单 | 向量数据库评测榜；两次抓取均因证书校验失败，未读到页面 | 未验证 |
| https://b23.tv/1xwx1Ha | 视频 | 重定向到 B 站后被验证码拦截，未读到内容 | 未验证 |
