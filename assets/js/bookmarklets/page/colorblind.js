javascript:(function() {
	var s = document.getElementById("colourblind-styling");
	var x = document.getElementById("colourblind-filters");
	if(!s) {
		s = document.createElement("style");
		document.body.appendChild(s)
	}
	if(!x) {
		x = document.createElement("div");
		x.setAttribute("style", "height: 0; padding: 0; margin: 0; line-height: 0;");
		x.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="protanopia"> <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0 0.242,0.758,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="protanomaly"> <feColorMatrix type="matrix" values="0.817,0.183,0,0,0 0.333,0.667,0,0,0 0,0.125,0.875,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="deuteranopia"> <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="deuteranomaly"> <feColorMatrix type="matrix" values="0.8,0.2,0,0,0 0.258,0.742,0,0,0 0,0.142,0.858,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="tritanopia"> <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="tritanomaly"> <feColorMatrix type="matrix" values="0.967,0.033,0,0,0 0,0.733,0.267,0,0 0,0.183,0.817,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="achromatopsia"> <feColorMatrix type="matrix" values="0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> <filter id="achromatomaly"> <feColorMatrix type="matrix" values="0.618,0.320,0.062,0,0 0.163,0.775,0.062,0,0 0.163,0.320,0.516,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>';
		document.body.appendChild(x);
	}
	var l = ["protanopia", "protanomaly", "deuteranopia", "deuteranomaly", "tritanopia", "tritanomaly", "achromatopsia", "achromatomaly"];
	var p = "";
	for(var i in l)p += `${parseInt(i) + 1}: ${l[i]}; `;
	var c = parseInt(prompt(`0: off; ${p}`)) - 1;
	if(isNaN(c))return;
	if(c >= l.length)return;
	if(c == -1) {
		s.innerHTML = "body { -webkit-filter: none; -moz-filter: none; -ms-filter: none; -o-filter: none; filter: none; }";
		return;
	}
	c = l[c];
	if(document.getElementById(c))s.innerHTML = "body{ -webkit-filter: !!; -moz-filter: !!; -ms-filter: !!; -o-filter: !!; filter: !!; }".replace(/!!/g, `url(#${c})`);
	else s.innerHTML = "body { -webkit-filter: none; -moz-filter: none; -ms-filter: none; -o-filter: none; filter: none; }";
})();