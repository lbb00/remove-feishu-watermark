// ==UserScript==
// @name         移除飞书水印
// @description  移除飞书水印
// @version      0.0.1
// @match        https://*.feishu.cn/*
// @grant        GM_addStyle
// @author       lbb00
// ==/UserScript==

GM_addStyle('div[style|=z]:not([class]):not(:has(*)) {opacity: 0;}')
