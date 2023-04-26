// ==UserScript==
// @name              Remove lark watermark | 移除飞书网页水印
// @description       移除飞书网页水印
// @name:zh-CN        移除飞书网页水印
// @description:zh-CN 移除飞书网页水印
// @name:en           Remove lark watermark
// @description:en    Remove lark watermark
// @version           0.4.2
// @license           The Unlicense
// @author            lbb00
// @homepage          https://github.com/lbb00/remove-feishu-watermark
// @updateURL         https://github.com/lbb00/remove-feishu-watermark/raw/main/remove-feishu-watermark.user.js
// @downloadURL       https://github.com/lbb00/remove-feishu-watermark/raw/main/remove-feishu-watermark.user.js
// @match             https://*.feishu.cn/*
// @match             https://*.larksuite.com/*
// @run-at            document-start
// @grant             GM_addStyle
// ==/UserScript==

// global
GM_addStyle('[class*="watermark"]{opacity: 0;}')

// 飞书文档
GM_addStyle('.ssrWaterMark{opacity: 0;}')
GM_addStyle('body>div>div>div>div[style*="position: fixed"]:not(:has(*)){opacity: 0;}')

// fixed for https://github.com/lbb00/remove-feishu-watermark/issues/3
GM_addStyle('body>div[style*="position: fixed"]:not(:has(*)){opacity: 0;}') // for readonly

// 工作台
GM_addStyle('#watermark-cache-container{opacity: 0;}')
GM_addStyle('body>div[style*="inset: 0px;"]:not(:has(*)){opacity: 0;}')


