// ==UserScript==
// @name              移除飞书网页水印 | Remove watermarks for Lark
// @description       移除飞书网页水印
// @name:zh-CN        移除飞书网页水印
// @description:zh-CN 移除飞书网页水印
// @name:en           Remove watermarks for Lark
// @description:en    Remove watermarks for Lark.
// @version           0.7.3
// @license           The Unlicense
// @author            lbb00
// @homepage          https://github.com/lbb00/remove-feishu-watermark
// @updateURL         https://raw.githubusercontent.com/lbb00/remove-feishu-watermark/main/remove-feishu-watermark.user.js
// @downloadURL       https://raw.githubusercontent.com/lbb00/remove-feishu-watermark/main/remove-feishu-watermark.user.js
// @match             https://*.feishu.cn/*
// @match             https://*.larksuite.com/*
// @match             https://*.larkoffice.com/*
// @run-at            document-start
// @grant             GM_addStyle
// ==/UserScript==

// GM_addStyle has removed from Greasemonkey v4.0
// https://groups.google.com/g/greasemonkey-users/c/KW71DL6Yjng
if (typeof GM_addStyle === 'undefined') {
  this.GM_addStyle = (aCss) => {
    'use strict'
    const head = document.getElementsByTagName('head')[0]
    if (head) {
      const style = document.createElement('style')
      style.setAttribute('type', 'text/css')
      style.textContent = aCss
      head.appendChild(style)
      return style
    }
    return null
  }
}

const bgImageNone = '{background-image: none !important;}'
function genStyle(selector) {
  return `${selector}${bgImageNone}`
}

// global
GM_addStyle(genStyle('[class*="watermark"]'))
GM_addStyle(genStyle('[style*="pointer-events: none"]'))

// 飞书文档
GM_addStyle(genStyle('.ssrWaterMark'))
GM_addStyle(genStyle('body>div>div>div>div[style*="position: fixed"]:not(:has(*))'))
// firefox not support :has()
GM_addStyle(genStyle('[class*="TIAWBFTROSIDWYKTTIAW"]'))

// fixed for https://github.com/lbb00/remove-feishu-watermark/issues/3
GM_addStyle(genStyle('body>div[style*="position: fixed"]:not(:has(*))')) // for readonly

// 工作台
GM_addStyle(genStyle('#watermark-cache-container'))
GM_addStyle(genStyle('body>div[style*="inset: 0px;"]:not(:has(*))'))

// Web 聊天
GM_addStyle(genStyle('.chatMessages>div[style*="inset: 0px;"]'))
