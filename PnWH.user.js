// ==UserScript==
// @name						Politics and War Helper 2
// @author					Ryahn aka Praximus Cladius
// @description			Adds useful functions to the Game Politics and War
// @include					https://politicsandwar.com/*
// @version					0.7.3
// @updateURL				https://github.com/Ryahn/PnWH/raw/master/PnWH.user.js
// @downloadURL			https://github.com/Ryahn/PnWH/raw/master/PnWH.user.js
// @grant						GM_setValue
// @grant						GM_deleteValue
// @grant						GM_getValue
// @grant						GM_xmlhttpRequest
// @namespace				https://github.com/Ryahn/PnWH
// ==/UserScript==

//Get script versions
var d = new Date();
var stamp = d.getTime();
var lastUpdate = GM_getValue("lastUpdate", 0);
var pwhThisVersion = GM_info.script.version;

console.log("Script Version: " + pwhThisVersion + "\nUpdate: " + lastUpdate + "\nStamp: " + stamp);
