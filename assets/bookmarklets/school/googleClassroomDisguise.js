javascript:function gcloak() {
	var link = document.querySelector("link[rel*='icon']") || document.createElement("link");
	link.type = "image/x-icon";
	link.rel = "shortcut icon";
	link.href = "https://ssl.gstatic.com/classroom/favicon.png";
	document.title = "Home";
	console.log(document.title);
	document.getElementsByTagName("head")[0].appendChild(link);
};
gcloak();
setInterval(gcloak, 1000);