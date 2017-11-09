// ==UserScript==
// @name						Politics and War Helper 2
// @author					Ryahn aka Praximus Cladius
// @description			Adds useful functions to the Game Politics and War
// @include					https://politicsandwar.com/*
// @require					https://raw.githubusercontent.com/Ryahn/PnWH/master/functions.js
// @version					0.7.6.05
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
if (stamp > (lastUpdate + 600000)) {
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

jQuery.get("https://politicsandwar.com/nation", function(response) {
	var data = jQuery.parseHTML(response);
	var nID = jQuery(response).find("td")[5];
	var pwhNationID = jQuery(nID).text();
	GM_xmlhttpRequest({
		method: "GET",
		url: "https://politicsandwar.com/nation/id="+ pwhNationID +"&test=1",
		headers: {
			"User-Agent": "Mozilla/5.0",
		},
		onload: function(response2) {
			console.log($_GET("test"));
		}
	});
});


console.log("Script Version: " + pwhThisVersion + "\nUpdate: " + lastUpdate + "\nStamp: " + stamp + "\nCurrent: " + pwhCurrentVersion);
