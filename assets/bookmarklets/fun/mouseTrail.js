javascript:var opt = 0.1;
var pen = "block";
var size = 10;
var clr = "blue";
var rate = 0.005;
var userrate = 5;
alert("Press C To Change The Color And R To Change The Rate.");
function mousemove(event) {
	var x = event.clientX;
	var y = event.clientY;
	x = x - 8;
	y = y - 8;
	(function() {
		var elem = document.createElement("div");
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(elem);
		elem.style.position = "fixed";
		elem.style.top = "" + y + "px";
		elem.style.left = "" + x + "px";
		elem.style.margin = "10px";
		elem.style.paddingTop = "10px";
		elem.style.width = "" + size + "px";
		elem.style.height = "" + size + "px";
		elem.style.zIndex = 10000;
		elem.style.opacity = opt;
		elem.style.color = "" + clr + "";
		elem.style.backgroundColor = "" + clr + "";
		elem.style.border = "0px solid white";
		elem.style.textAlign = "center";
		elem.id = "paint";
		elem.style.display = "" + pen + "";
		elem.innerText = "";
		function repeat() {
			elem.style.opacity = elem.style.opacity - rate;
		}
		setInterval(repeat, 15);
	}());
}
window.addEventListener("keydown", function(event) {
	if (event.key == "r") {
		userrate = prompt("What Would You Like The Rate To Be? The Lower The Number, The Faster The Trail Disappears! recommended: 5");
		rate = userrate / 1000;
	}
	if (event.key == "c") {
		clr = prompt("What Would You Like The Color To Be? ex: blue");
	}
});
window.addEventListener("mousemove", mousemove); 