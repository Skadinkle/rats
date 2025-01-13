javascript: (function () {
	var elem = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(elem);
	elem.style.position = "fixed";
	elem.style.top = "0";
	elem.style.right = "0";
	elem.style.margin = "10px";
	elem.style.paddingTop = "10px";
	elem.style.width = "200px";
	elem.style.height = "40px";
	elem.style.zIndex = 10000;
	elem.style.opacity = .9;
	elem.style.color = "white";
	elem.style.backgroundColor = "black";
	elem.style.border = "1px solid white";
	elem.style.textAlign = "center";
	elem.style.cursor = "pointer";
	elem.id = "elem";
	elem.style.display = "block";
	elem.innerText = "Z";
}());
var safety = prompt("What tab do you want to open when a teacher comes by? Click 'Z' to go to that tab. Warning: May have to click out of element for it to work.");
window.addEventListener("keydown", function(event) {
	if (event.key == "z") {
		window.location.href = safety;
	}
});
document.getElementById("elem").addEventListener("click", function() {
	window.location.href = safety;
}); 