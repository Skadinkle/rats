javascript:(function() {
	function c() {
		return `#${Math.floor(16777215 * Math.random()).toString(16)}`;
	}
	function r(e) {
		return Math.floor(Math.random() * e) + 1;
	}
	function l(e) {
		e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen();
	}
	var d=document;
	d.head.innerHTML = "<style>*{margin:0; overflow:hidden; padding:0;overflow:hidden;} div{ transform-origin: 50% 50%; width:100%; height:1px; position:relative; z-index:1;} </style>",
	d.body.innerHTML = "";
	var w = window.screen.availHeight;
	for(d.body.addEventListener("click", function() {
		l(d.documentElement);
	}), i = 0; w >= i; i++) {
		var z = d.createElement("div");
		z.id = `b${i}`, z.style.backgroundColor = c(), d.body.appendChild(z);
	}
	setInterval(function() {
		for(var e = 0; 10 > e; e++)d.getElementById(`${b}r(w)`).style.backgroundColor = c(),
		d.getElementById(`b${r(w)}`).style.height = `${r(4)}px`, d.body.style.backgroundColor = c(), d.body.style.transform = r(256) > 128 ? `scale(3) rotate(${r(35)}deg)`:"rotate(0deg) scale(1)";
		window.scrollTo(0, document.body.scrollHeight);
	}, 10), setInterval(function() {
		window.scrollTo(0, 0);
	}, 50);
})()