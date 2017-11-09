// ==UserScript==
// @name						Politics and War Helper 2
// @author					Ryahn aka Praximus Cladius
// @description			Adds useful functions to the Game Politics and War
// @include					https://politicsandwar.com/*
// @version					0.7.4
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


//Checks for update once every 10 minutes
if(stamp > (lastUpdate + 600000)){
	GM_setValue("lastUpdate", stamp);
	GM_xmlhttpRequest({
		method: "GET",
		url: "https://greasyfork.org/en/scripts/34969-politics-and-war-helper-2",
		headers: {
			"User-Agent": "Mozilla/5.0",
		},
		onload: function(response) {
			GM_setValue("pwhCurrentVersion", jQuery(response.responseText).find("dd[class='script-show-version']").text());
		}
	});
}
var pwhCurrentVersion = GM_getValue("pwhCurrentVersion");

console.log("Script Version: " + pwhThisVersion + "\nUpdate: " + lastUpdate + "\nStamp: " + stamp + "\nCurrent: " + pwhCurrentVersion);
