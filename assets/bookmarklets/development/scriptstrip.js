javascript:if (frames.length) {
	alert('Sorry, doesn\'t work in frames.');
} else {
	while ((es = document.getElementsByTagName('script')).length) {
		es[0].parentNode.removeChild(es[0]);
	}
	es = document.all;
	for (i = 0; i < es.length; ++i) {
		e = es[i];
		for (p in e) {
			if (!p.indexOf('on') && e[p]) {
				e[p] = null;
			}
		}
	}
	document.write(document.documentElement.outerHTML);
	document.close();
	onerror = function() {
		return true;
	}
} /*4umi.com*/