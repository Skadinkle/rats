javascript:(function() {
	window.mcbmRootURI = "https://luphoria.com/MCanywhere/";
	window.mcbmScriptURI = "mcbm.min.js";
	window.mcbmLang = "eng";
	var s, ss = window.mcbmRootURI + "js/mcbm-load.min.js";
	s = document.createElement("script");
	s.src = ss;
	document.body.appendChild(s);
})();