// ==UserScript==
// @name        移除飞书文档水印
// @description 让飞书文档干净一些
// @version     0.1.0
// @author      lbb00
// @homepage    https://github.com/lbb00/remove-feishu-watermark
// @updateURL   https://github.com/lbb00/remove-feishu-watermark/raw/main/remove-feishu-watermark.user.js
// @downloadURL https://github.com/lbb00/remove-feishu-watermark/raw/main/remove-feishu-watermark.user.js
// @match       https://*.feishu.cn/*
// @run-at      document-start
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle('.ssrWaterMark{opacity: 0;}')
GM_addStyle('div[style|=z]:not([class]):not(:has(*)) {opacity: 0;}')
