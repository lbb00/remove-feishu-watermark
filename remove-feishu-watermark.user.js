// ==UserScript==
// @name        移除飞书网页水印
// @description 移除飞书文档、工作台水印
// @version     0.2.0
// @author      lbb00
// @homepage    https://github.com/lbb00/remove-feishu-watermark
// @updateURL   https://github.com/lbb00/remove-feishu-watermark/raw/main/remove-feishu-watermark.user.js
// @downloadURL https://github.com/lbb00/remove-feishu-watermark/raw/main/remove-feishu-watermark.user.js
// @match       https://*.feishu.cn/*
// @run-at      document-start
// @grant       GM_addStyle
// ==/UserScript==

// 飞书文档
GM_addStyle('.ssrWaterMark{opacity: 0;}')
GM_addStyle('div[style|=z]:not([class]):not(:has(*)) {opacity: 0;}')

// 工作台
GM_addStyle('#watermark-cache-container{opacity: 0;}')
GM_addStyle('body>div[style*="inset: 0px;"]{opacity: 0;}')
