javascript:(function() {
	const newWindow = window.open();
	newWindow.document.title = "Clever | Portal";

	const favicon = newWindow.document.createElement("link");
	favicon.rel = "shortcut icon";
	favicon.type = "image/png";
	favicon.href = "https://raw.githubusercontent.com/Skadinkle/rats/refs/heads/main/assets/images/branding/clever.ico";
	newWindow.document.head.appendChild(favicon);

	const iframe = newWindow.document.createElement("iframe");
	iframe.src = "https://skadinkle.github.io/rats";
	iframe.setAttribute("style", "position:fixed; top:0; left:0; width:100%; height:100%; border:none;");
	newWindow.document.body.appendChild(iframe);
})();