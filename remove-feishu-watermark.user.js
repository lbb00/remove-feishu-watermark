// ==UserScript==
// @name              移除飞书网页水印 | Remove watermarks of lark
// @description       移除飞书文档、工作台水印
// @name:zh-CN        移除飞书网页水印
// @description:zh-CN 移除飞书文档、工作台水印
// @name:en           Remove watermarks of lark
// @description:en    Remove watermarks from Lark documents and workspace.
// @version           0.5.1
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
GM_addStyle('[class*="watermark"]{background-image:  none !important:}')

// 飞书文档
GM_addStyle('.ssrWaterMark{background-image:  none !important;}')
GM_addStyle('body>div>div>div>div[style*="position: fixed"]:not(:has(*)){background-image:  none !important;}')

// fixed for https://github.com/lbb00/remove-feishu-watermark/issues/3
GM_addStyle('body>div[style*="position: fixed"]:not(:has(*)){background-image: none !important;}') // for readonly

// 工作台
GM_addStyle('#watermark-cache-container{background-image:  none !important;}')
GM_addStyle('body>div[style*="inset: 0px;"]:not(:has(*)){background-image:  none !important}')
