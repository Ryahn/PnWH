jQuery.get("https://politicsandwar.com/nation", function(response) {
	var data = jQuery.parseHTML(response);
	var nID = jQuery(response).find("td")[5];
	var pwhNationID = jQuery(nID).text();
	GM_xmlhttpRequest({
		method: "GET",
		url: "https://politicsandwar.com/nation/id="+ pwhNationID +"&debug=1",
		headers: {
			"User-Agent": "Mozilla/5.0",
		},
		onload: function(response2) {
			var debug = $_GET("debug");
		}
	});
});
