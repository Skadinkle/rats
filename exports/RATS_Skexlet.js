javascript:(function() {
	if (!document.getElementById("skexlet")) {
		var skexlet = document.createElement("iframe");
		skexlet.id = "skexlet";
		skexlet.src = "https://skadinkle.github.io/rats";
		skexlet.setAttribute("style", "position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 9999999;");
		document.body.appendChild(skexlet);
	}
})();