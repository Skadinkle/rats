javascript:(function() {
	var script = document.createElement("script");
	script.onload = function() {
		var stats = new Stats();
		document.body.appendChild(stats.dom);
		requestAnimationFrame(function loop() {
			stats.update();
			requestAnimationFrame(loop);
		});
	};
	script.src = "https://mrdoob.github.io/stats.js/build/stats.min.js";
	document.head.appendChild(script);
})()