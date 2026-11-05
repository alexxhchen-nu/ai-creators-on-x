# 产品卡片 · ai-creators-on-x

![product card](./card.png)

> 生成方式：APIMart 最快生图模型 `z-image-turbo`（`size: "16:9"`, `resolution: "2K"` → 2048×1152，实测耗时 **10 秒**，费用 **$0.01/张**）。
> 定稿任务：`task_01M6PPB5HDBQ7PP5NNFVMQFPY4`（`card.png` / `card-v2.png`）；首版备选稿：`task_01M6PG5NT6X5W92DXYHJDT6V6W`（`card-v1.png`）。
> CDN 链接有效期为 72 小时，已完整下载持久化至本地 `product-card/card.png`。

## 一句话卖点

把 20 位中文 X（Twitter）头部 AI 创作者的 **1,145 条技术实战帖与开源仓库**，蒸馏并经 Darwin v2.1 自动进化为一套随叫随到的全栈作战 Skill：**Agent 软件工厂 → 出海 SEO/GEO 引擎 → Video as Code 视觉流水线 → 全栈去 AI 味协议 → 产物级 Benchmark 路由 → 企业 FDE 与一人公司工作台**。

## 它解决什么痛点

1. **AI 写码太快，人审不过来、项目越改越乱**：Codex/Claude 狂塞几千行大文件与冗余防御代码、乱写 `useState/useEffect`、Xcode 多分支排队编译慢如蜗牛。
2. **出海工具站有流量却零出单，不知道怎么做 GEO**：上线一周来了 2,000 UV（ChatGPT 占 700）却一单不出；不知道怎么让 ChatGPT / Perplexity 优先引用自家网站。
3. **做视频和海报还在手搓剪映/AE，AI 生图字全乱码**：多镜头人物老变脸、生图做海报文字乱码且二维码扫不出、不知道怎么让 Agent 写代码自动卡点剪片。
4. **前端界面、配图和文章一股浓重「AI 味」**：紫色渐变三栏卡片一眼假、照片精致塑料感、文章全是「LLM Voice 恐怖谷」正确废话。
5. **官方跑分榜失真 & 企业 FDE 交付踩坑亏钱**：不知道怎么压测模型稳定性、怎么防「早期智商债」，或者给传统制造业做 AI 定制被 ERP/MES 接口和未校验的充值回调坑惨。

## 六大核心能力卡（RIA++ 六段结构）

| # | 能力卡 ID | 核心战法与量化护栏 | 来源创作者 |
|---|---|---|---|
| 1 | `agent-software-factory` | 一项目一专属 Bot + Git Worktree 并行 + Xcode 独立 `DerivedData`/全局 CAS **1 分钟冷编译** + `make preview` 视图截图/E2E 录屏自检 + Pre-commit **5,000-token** 硬拦截 | `@vikingmute` · `@waylybaye` · `@vista8` · `@bozhou_ai` |
| 2 | `seo-geo-growth-engine` | 网站按「Entity → Topic Map → URL 三层」与「代码/CMS/`toolKey` 三页分离」规划；严守「**一词一页 TDH** + **首屏生成器优先**」；用 **Fan-out 轨迹**与**意图组**双吃 Google 与 ChatGPT 流量 | `@gefei55` · `@CoderJeffLee` · `@yaojingang` · `@AI_Jasonyu` |
| 3 | `video-and-design-as-code` | **粗糙白模预演**定运镜（拉长再裁剪省积分）+ **BGM 节拍先行**排时间轴 + Claude/Codex 写 **Remotion / Renoise MCP** 自动剪辑 + **三图分工**锁一致性 + **HTML/CSS 渲染截图**做无乱码二维码海报 | `@MANISH1027512` · `@TanLuAI` · `@joshesye` · `@Adam38363368936` · `@op7418` · `@jinchenma_ai` |
| 4 | `de-ai-taste-and-writing` | 前端 `impeccable` 拉黑 Inter/紫渐变/三栏卡片等 **62 项特征**并转原生 Apple Design System；视觉保留**手抖/后视镜灰尘/直闪**；写作**禁 AI 初稿**，坚持人出原稿/口喷观点再按章润色 | `@sitinme` · `@waylybaye` · `@Adam38363368936` · `@TanLuAI` · `@vikingmute` · `@jinchenma_ai` |
| 5 | `agent-benchmark-and-model-routing` | 用「**从 0 写向量数据库实际性能** + **同一 Prompt 连抽 6 次稳定性** + **260MB 真实提权日志**」压测；长线工程锁 SOTA 防**早期智商债**，ToB 交付锁高稳国模（DeepSeek/GLM），OpenCodex 10100 端口解耦模型 | `@karminski3` · `@waylybaye` · `@cnzhihao` · `@sitinme` |
| 6 | `enterprise-fde-and-one-person-ops` | 制造业 FDE 先算 **5–8 万/系统**地基成本并卡死 **20 人天上限**，配「代码→Agent→人工」**三层报错**；高管**一周不登飞书审核制** + 视觉代理接管微信；**本地索引+Notion 正文**知识库；Stripe 未付款**直达收银台链接**召回 | `@cnzhihao` · `@FuSheng_0306` · `@jinchenma_ai` · `@sitinme` · `@icycat` |

## Darwin v2.1 进化与实测战绩

| 指标 | 结果 | 验证方式 |
|---|---|---|
| **Paired 盲评胜率** | **3/3 全票胜出（margin: clear）** | 3 个独立 `scout` 子代理随机互换 A/B 标签盲评（Commit `ea37fb8`） |
| **9 维 Triage 分数** | **65.8 → 88.9（+23.1 分）** | dim2 工作流 +3.4、dim3 失败恢复 +4.6、dim4 检查点 +4.0、dim9 黑名单 +5.5 |
| **路由与输出断言** | **路由 3/3 命中 · 断言 18/18 (100%)** | 对比无 Skill 基线（3/18 = 16.7%），提升 **+83.3 pp** |
| **静态与中立性校验** | **0 errors / 0 warnings / 0 红灯** | `validate_skill_pack.py` + Runtime Neutrality 正则扫描通过 |

## 全局安装路径（已在本机 4 端同步生效）

```text
C:\Users\xiaohanchen\.config\magpie\library\skills\ai-creators-on-x   # 实体主库 (Magpie Library)
C:\Users\xiaohanchen\.agents\skills\ai-creators-on-x                  # 全局 Junction (.agents)
C:\Users\xiaohanchen\.magpie\pi\skills\ai-creators-on-x               # 全局 Junction (omp / Pi)
C:\Users\xiaohanchen\.claude\skills\ai-creators-on-x                  # 全局 Junction (Claude Code)
```
