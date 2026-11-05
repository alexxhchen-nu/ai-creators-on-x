---
title: "AI 垂直账号 20 · 逐账号内容归档"
type: index
source: https://x.com/xiping_ai/status/2117913824556957914
updated: 2026-11-04
source_tool: 登录态 Playwright Chrome（auth_token 会话）；匿名轮次对比用 pagesift 1.1.2 + Lightpanda 1.0.2 与 Steel.dev 云会话
tags:
  - x-creators
  - index
---

# AI 垂直账号 20 · 逐账号内容归档

来自 [[AI-vertical-accounts-20]] 清单。每账号一页：简介、资料、登录态抓取的时间线帖文（链接、时间、正文、引用、互动数）。

| # | 账号 | 名称 | 学习方向 | 粉丝 | 帖文 | 归档 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | [@cnzhihao](https://x.com/cnzhihao) | 智昊 | FDE | 2,531 | 83 | [[Projects/x_creators/accounts/cnzhihao\|cnzhihao]] |
| 2 | [@waylybaye](https://x.com/waylybaye) | Baye | 一人做 App（独立开发） | 164.4K | 82 | [[Projects/x_creators/accounts/waylybaye\|waylybaye]] |
| 3 | [@joshesye](https://x.com/joshesye) | 行者AI视频 | AI 视频 | 25.8K | 82 | [[Projects/x_creators/accounts/joshesye\|joshesye]] |
| 4 | [@op7418](https://x.com/op7418) | 歸藏 | AI 图像 / 视频 / 设计工具 | 185.9K | 83 | [[Projects/x_creators/accounts/op7418\|op7418]] |
| 5 | [@jinchenma_ai](https://x.com/jinchenma_ai) | 金尘马 | 一人公司 | 32.9K | 82 | [[Projects/x_creators/accounts/jinchenma_ai\|jinchenma_ai]] |
| 6 | [@AI_Jasonyu](https://x.com/AI_Jasonyu) | 鱼总 | SaaS & APP 出海 | 72.3K | 82 | [[Projects/x_creators/accounts/AI_Jasonyu\|AI_Jasonyu]] |
| 7 | [@vista8](https://x.com/vista8) | 向阳乔木 | AI 编程 / vibe coding | 136.4K | 81 | [[Projects/x_creators/accounts/vista8\|vista8]] |
| 8 | [@FuSheng_0306](https://x.com/FuSheng_0306) | 傅盛 | 成熟公司 AI Native 转型 | 63.7K | 83 | [[Projects/x_creators/accounts/FuSheng_0306\|FuSheng_0306]] |
| 9 | [@gefei55](https://x.com/gefei55) | 哥飞 | 出海 SEO | 67.7K | 83 | [[Projects/x_creators/accounts/gefei55\|gefei55]] |
| 10 | [@icycat](https://x.com/icycat) | 冷酷小猫 | 浏览器插件开发 | 8,402 | 83 | [[Projects/x_creators/accounts/icycat\|icycat]] |
| 11 | [@yaojingang](https://x.com/yaojingang) | 姚金刚 | GEO | 23.4K | 84 | [[Projects/x_creators/accounts/yaojingang\|yaojingang]] |
| 12 | [@sitinme](https://x.com/sitinme) | sitin | AI 出海网站 | 32.8K | 80 | [[Projects/x_creators/accounts/sitinme\|sitinme]] |
| 13 | [@vikingmute](https://x.com/vikingmute) | Viking | SaaS | 69.6K | 80 | [[Projects/x_creators/accounts/vikingmute\|vikingmute]] |
| 14 | [@TanLuAI](https://x.com/TanLuAI) | 探路AI | AI 视频 | 9,807 | 84 | [[Projects/x_creators/accounts/TanLuAI\|TanLuAI]] |
| 15 | [@liyue_ai](https://x.com/liyue_ai) | 李岳 | 图生视频 / 提示词分享 | 54.7K | 81 | [[Projects/x_creators/accounts/liyue_ai\|liyue_ai]] |
| 16 | [@MANISH1027512](https://x.com/MANISH1027512) | 古一 | AIGC 视觉 | 47.5K | 81 | [[Projects/x_creators/accounts/MANISH1027512\|MANISH1027512]] |
| 17 | [@karminski3](https://x.com/karminski3) | karminski-牙医 | 大模型性能实测 | 40.1K | 83 | [[Projects/x_creators/accounts/karminski3\|karminski3]] |
| 18 | [@CoderJeffLee](https://x.com/CoderJeffLee) | 写增长的子木 | AI 工具站 | 7,743 | 82 | [[Projects/x_creators/accounts/CoderJeffLee\|CoderJeffLee]] |
| 19 | [@bozhou_ai](https://x.com/bozhou_ai) | 泊舟 | AI 编程 | 32.8K | 81 | [[Projects/x_creators/accounts/bozhou_ai\|bozhou_ai]] |
| 20 | [@Adam38363368936](https://x.com/Adam38363368936) | Adam 也叫吉米 | AI 品牌广告 | 18.6K | 81 | [[Projects/x_creators/accounts/Adam38363368936\|Adam38363368936]] |

## 抓取范围与限制

- 登录态：把 x.com 会话的 `auth_token` 注入 Playwright Chrome（缺 `ct0` 时 X 自动补发），无头滚动至累计条目无增长，单账号上限 80 条。
- 结果：20 个账号共 1,641 条（80–84 条/账号），置顶在前、其余按时间倒序；含正文、引用推文与互动数。
- 匿名上限（已实测）：主页 + 最近 5 条，与浏览器栈无关。pagesift+Lightpanda、Scrapling 真实 Chrome、Steel.dev 云会话三种栈结果一致；公共 syndication 接口已失效。
- 本轮未覆盖的路由：`/with_replies`、`/media`、`/articles`；账号时间线本身无限滚动，80 条是本次设定上限，不是 X 的边界。
- 原始数据：匿名轮次 JSON 在 `.pagesift/raw/`（随库），登录态抓取在 `~/.x-cookies/captures/`（vault 之外，含账号凭据，不入库）。
- 说明：链接、时间（UTC）与互动计数均为抓取时点值，之后会变化。
