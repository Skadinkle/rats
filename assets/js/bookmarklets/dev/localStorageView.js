javascript:(function() {
	function l(a, b) {
		b = a.target, a.preventDefault();
		var d = b.getAttribute("data-k");
		switch(b.className) {
			case "lc": h.removeItem(d), k();
			break;
			case "lv": b.parentNode.innerHTML = `<pre>${h[d]}</pre>`;
			break;
			case "lca": h.clear(), k();
			break;
			case "sc": i.removeItem(d), k();
			break;
			case "sv": b.parentNode.innerHTML = `<pre>${i[d]}</pre>`;
			break;
			case "sca": i.clear(), k();
			break;
			case "x": c.style.display = "none";
		}
	}
	function k() {
		e = j + "<tr><th colspan=3><h1>localStorage inspector</h1><th><a href=# class=x>close</a><tr><th>storage key<th>size<th><th><a href=# class=lca>clear all</a>",e += h.length ? "":"<tr><td>No Data";
		for(d = 0; d < h.length; d++)g = h.key(d), e +=("<tr><td>$<td>" + h[g].length + "<td><a href=# data-k=\"$\" class=lv>view</a><td><a href=# data-k=\"$\" class=lc>clear</a>").replace(/\$/g,g);
		e += "<tr><th colspan=3><h1>sessionStorage</h1><tr><th>storage key<th>size<th><th><a href=# class=sca>clear all</a>",e+=i.length?"":"<tr><td>No Data";
		for(d = 0; d < i.length; d++)g = i.key(d), e += ("<tr><td>$<td>" + i[g].length + "<td><a href=# data-k=\"$\" class=sv>view</a><td><a href=# data-k=\"$\" class=sc>clear</a>").replace(/\$/g,g);
		c.innerHTML = e;
	}
	var a = document, b = "localStorageList", c = a.getElementById(b), d, e, f, g, h = window.localStorage, i = window.sessionStorage, j = "<style>$ th, $ td {padding: 0 1em; text-align: left;}$ th {font-weight: bold}$ pre {max-width: 400px; max-height:300px; overflow: auto; white-space: pre-wrap;}$ h1 {font: 16px/32px sans-serif;}</style>".replace(/\$/g,"#" + b);
	c || (c = a.createElement("table"), a.body.appendChild(c), c.addEventListener("click", l, !1)), c.setAttribute("id", b), c.setAttribute("style", "position: fixed; top: 20px; right: 20px; padding: 20px; background: #ffffff; font: 12px/20px monospace; z-index: 99999; max-height: 100%; overflow: auto; border-radius: 10px; border: 2px solid #000000;"), c.style.display = "block", k();
})()