javascript:(function(c) {
	var a = c.body.style;
	c.documentElement.style.background = a.background = "black";
	a.color = "yellow";
	a.height = a.width = "100%";
	a.position = "fixed";
	a.overflowY = "scroll";
	a.top = "-15%";
	a.webkitTransform = a.MozTransform = a.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, -0.0015, 0, 0, 1, 0, 0, 0, 0, 1)";
	for(var a = c.body.children, b = 0; b < a.length; b++)"SCRIPT" != a[b].nodeName && (a[b].style.overflowY = "scroll", a[b].style.maxHeight = "100%");
	var b = new Audio();
	b.src = "https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star Wars Theme Song By John Williams.mp3";
	var f = function() {
		for(var a, b = 0; a = c.body.children[b]; b++)"SCRIPT" != a.nodeName && (a.scrollTop += 2);
		setTimeout(f, 50);
	};
	setTimeout(f, 1000);
	b.load();
	b.play();
})
(document);