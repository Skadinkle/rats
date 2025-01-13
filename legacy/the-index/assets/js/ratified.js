function message() {
	console.info("click me");
}

function rat() {
		// Fullscreen
	var elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) { /* Safari */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE11 */
		elem.msRequestFullscreen();
	}

		// Title
	var link = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement("link");
		link.rel = "icon";
		document.head.appendChild(link);
	}
	link.href = "./assets/noimage.png";
	document.title = "leave";

		// Body
	document.getElementsByClassName("main-body")[0].remove();
	document.getElementsByTagName("*")[0].className = "ratified";
	document.getElementsByTagName("header")[0].remove();
	document.getElementsByTagName("footer")[0].remove();
	document.getElementById("sky").remove();
	document.getElementById("funky-title-small").remove();
	document.getElementById("funky-title-large").innerHTML = "!̴̗̿̂͠";
	console.warn("leave");
}