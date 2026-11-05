---
title: "AI 垂直账号 20 · 技术内容过滤视图"
type: index
source: "[[Projects/x_creators/accounts/index|accounts/index]]"
updated: 2026-11-05
filter: 主模型逐条主题判定，保留 coding / ai_agent / tech_tools
tags:
  - x-creators
  - index
---

# 技术内容过滤视图

从 1,641 条抓取结果中筛出编程 / AI Agent / 技术工具相关内容。原始归档 [[Projects/x_creators/accounts/index|accounts/index]] 未改动。

| 账号 | 抓取 | 保留 | 保留率 | 主题 | 过滤视图 |
| --- | --- | --- | --- | --- | --- |
| @TanLuAI | 84 | 83 | 99% | AI Agent 80、技术工具 2 | [[Projects/x_creators/tech/TanLuAI\|TanLuAI]] |
| @karminski3 | 83 | 78 | 94% | AI Agent 66、技术工具 10 | [[Projects/x_creators/tech/karminski3\|karminski3]] |
| @sitinme | 80 | 74 | 92% | AI Agent 58、技术工具 15 | [[Projects/x_creators/tech/sitinme\|sitinme]] |
| @vista8 | 81 | 71 | 88% | 技术工具 35、AI Agent 25 | [[Projects/x_creators/tech/vista8\|vista8]] |
| @op7418 | 83 | 71 | 86% | AI Agent 42、技术工具 26 | [[Projects/x_creators/tech/op7418\|op7418]] |
| @Adam38363368936 | 81 | 69 | 85% | AI Agent 59、技术工具 10 | [[Projects/x_creators/tech/Adam38363368936\|Adam38363368936]] |
| @vikingmute | 80 | 66 | 82% | AI Agent 30、技术工具 23 | [[Projects/x_creators/tech/vikingmute\|vikingmute]] |
| @bozhou_ai | 81 | 62 | 77% | AI Agent 26、技术工具 22 | [[Projects/x_creators/tech/bozhou_ai\|bozhou_ai]] |
| @yaojingang | 84 | 60 | 71% | AI Agent 41、技术工具 18 | [[Projects/x_creators/tech/yaojingang\|yaojingang]] |
| @waylybaye | 82 | 57 | 70% | AI Agent 26、技术工具 23 | [[Projects/x_creators/tech/waylybaye\|waylybaye]] |
| @liyue_ai | 81 | 56 | 69% | AI Agent 53、技术工具 3 | [[Projects/x_creators/tech/liyue_ai\|liyue_ai]] |
| @jinchenma_ai | 82 | 54 | 66% | AI Agent 37、技术工具 11 | [[Projects/x_creators/tech/jinchenma_ai\|jinchenma_ai]] |
| @joshesye | 82 | 52 | 63% | AI Agent 46、技术工具 6 | [[Projects/x_creators/tech/joshesye\|joshesye]] |
| @MANISH1027512 | 81 | 49 | 60% | 技术工具 28、AI Agent 21 | [[Projects/x_creators/tech/MANISH1027512\|MANISH1027512]] |
| @cnzhihao | 83 | 50 | 60% | AI Agent 33、技术工具 12 | [[Projects/x_creators/tech/cnzhihao\|cnzhihao]] |
| @FuSheng_0306 | 83 | 48 | 58% | AI Agent 38、技术工具 7 | [[Projects/x_creators/tech/FuSheng_0306\|FuSheng_0306]] |
| @icycat | 83 | 47 | 57% | AI Agent 25、技术工具 17 | [[Projects/x_creators/tech/icycat\|icycat]] |
| @AI_Jasonyu | 82 | 37 | 45% | 技术工具 18、AI Agent 15 | [[Projects/x_creators/tech/AI_Jasonyu\|AI_Jasonyu]] |
| @CoderJeffLee | 82 | 30 | 37% | 技术工具 19、AI Agent 9 | [[Projects/x_creators/tech/CoderJeffLee\|CoderJeffLee]] |
| @gefei55 | 83 | 30 | 36% | 技术工具 14、AI Agent 9 | [[Projects/x_creators/tech/gefei55\|gefei55]] |

合计 1641 条 → 保留 1144 条（70%）。

## 方法

1. 规则层（关键词正负分）先跑一遍，得到 keep / drop / border 三桶，作为低成本基线。
2. 边界桶用 `judge_batch`（tiny 模型）裁决时发现其「是」率恒为 77%、与内容几乎无关，遂弃用。
3. 改用主模型逐批判定（每批 25 条，JSON schema 约束），1,641 条全部标注，规则层误判的 249 条被纠正。
4. 判定口径：编程/AI Agent/技术工具 → 保留；纯商业运营（流量、变现、涨粉、广告收入）与生活娱乐 → 丢弃。

重跑：`python ~/.x-cookies/tech_filter.py`（规则层）→ 主模型批标注 → `python ~/.x-cookies/tech_apply.py`（出稿）。
