javascript:(function() {
	var overlay = document.createElement("div");
	overlay.setAttribute("style", "position:fixed; top:0; left:0; width:100%; height:100%; background:#fff; opacity:.95; z-index:9999999;");
	var dialog = document.createElement("div");
	dialog.setAttribute("style", "position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:450px; padding:20px; background:#fff; border:1px solid #333; border-radius:5px; box-shadow:0 0 10px rgba(0,0,0,.5); z-index:99999999;");
	var title = document.createElement("h1");
	title.innerHTML = "Google Chrome Update";
	title.setAttribute("style", "margin-top:0; text-align:center;");
	dialog.appendChild(title);
	var message = document.createElement("p");
	message.innerHTML = "Your version of Google Chrome is outdated. Please click the button below to update now.";
	message.setAttribute("style", "margin:20px 0; text-align:center;");
	dialog.appendChild(message);
	var button = document.createElement("button");
	button.innerHTML = "Update Now";
	button.setAttribute("style", "background:#0078d7; border:none; color:#fff; padding:10px 20px; border-radius:5px; cursor:pointer;");
	button.addEventListener("click", function() {
		window.location.href = "https://google.com/chrome";
	});
	dialog.appendChild(button);
	overlay.appendChild(dialog);
	document.body.appendChild(overlay);
})();