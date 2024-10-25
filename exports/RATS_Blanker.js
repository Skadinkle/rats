javascript:(function() {
	const newWindow = window.open();

	var favicon = newWindow.document.createElement("link");
	favicon.rel = "shortcut icon";
	favicon.type = "image/png";
	favicon.href = "https://raw.githubusercontent.com/Skadinkle/rats/refs/heads/main/assets/images/branding/clever.ico";
	newWindow.document.head.appendChild(favicon);

	newWindow.document.title = "Clever | Portal";

	var skexlet = newWindow.document.createElement("iframe");
	skexlet.id = "skexlet";
	skexlet.src = "https://skadinkle.github.io/rats";
	skexlet.setAttribute("style", "position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 9999999;");
	newWindow.document.body.appendChild(skexlet);
})();