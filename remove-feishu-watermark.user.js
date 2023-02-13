// ==UserScript==
// @name         移除飞书文档水印
// @description  让飞书文档干净一些
// @version      0.0.2
// @match        https://*.feishu.cn/*
// @grant        GM_addStyle
// @author       lbb00
// @homepage    https://github.com/lbb00/remove-feishu-watermark
// @updateURL   https://github.com/lbb00/remove-feishu-watermark/raw/main/remove-feishu-watermark.user.js
// @downloadURL https://github.com/lbb00/remove-feishu-watermark/raw/main/remove-feishu-watermark.user.js
// ==/UserScript==

GM_addStyle('div[style|=z]:not([class]):not(:has(*)) {opacity: 0;}')
