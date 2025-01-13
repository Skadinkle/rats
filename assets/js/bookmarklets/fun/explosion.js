javascript:(function() {
	var countdown = 3;
	var gifUrl = "https://i.gifer.com/origin/a0/a07ad08920f303f655251b1a0b353b86_w200.gif";
	var countdownEl = document.createElement("div");
	countdownEl.setAttribute("style", "position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); font-size:4rem; color:#fff; text-shadow:1px 1px #000;");
	countdownEl.innerHTML = countdown;
	document.body.appendChild(countdownEl);
	var countdownInterval = setInterval(function() {
		countdown--;
		countdownEl.innerHTML = countdown;
		if (countdown <= 0) {
			clearInterval(countdownInterval);
			document.body.removeChild(countdownEl);
			explode();
		}
	}, 1000);
	function explode() {
		var explosionEl = document.createElement("div");
		explosionEl.setAttribute(`position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); width:100vw; height:100vh; background-color:#fff; background-image:url('${gifUrl}'); background-repeat:no-repeat; background-position:center; background-size:contain; animation:explode 1s forwards;`);
		document.body.appendChild(explosionEl);
		var elements = document.querySelectorAll("*");
		for (var i = 0; i < elements.length; i++) {
			var rect = elements[i].getBoundingClientRect();
			var dx = rect.left - window.innerWidth / 2;
			var dy = rect.top - window.innerHeight / 2;
			var distance = Math.sqrt(dx * dx + dy * dy);
			var angle = Math.atan2(dy, dx);
			var force = 10000 / distance;
			var fx = Math.cos(angle) * force;
			var fy = Math.sin(angle) * force;
			elements[i].setAttribute("style", `transition:transform 1s; transform:translate(${fx}px, ${fy}px);`);
		}
	}
})();