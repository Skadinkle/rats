javascript:(function() {
	var d, b, f, u, L, i, K, t, LL = "zh Chinese-simplified,zt Chinese-traditional,nl Dutch,fr French,de German,el Greek,it Italian,ja Japanese,ko Korean,pt Portuguese,ru Russian,es Spanish".split(",");
	d = open().document;
	b = d.body;
	f = d.createElement("form");
	b.appendChild(f);
	f.action = "http://babelfish.altavista.com/babelfish/trurl_pagecontent";
	u = d.createElement("input");
	u.name = "url";
	u.style.width = "100%";
	u.value = location;
	f.appendChild(u);
	for (i = 0; L = LL[i]; ++i) {
		K = L.split(" ");
		f.appendChild(d.createElement("br"));
		t = d.createElement("button");
		t.name = "lp";
		t.value = `${K[0]}_en`;
		t.innerHTML = `<b>${K[1]}</b> to English`;
		f.appendChild(t);
	}
})()