javascript:
var opt = 1;
alert("Keyboard commands: C = color picker. U = pen up. D = pen down. S = size. O = opacity. Reload to clear.");
var pen = "none";
var size = 10;
function repeat(event) {
	(function() {
		var color = document.createElement("div");
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(color);
		color.setAttribute("style", `position:fixed; bottom:0; right:0; margin:0; padding-top:0; width:1366px; height:20px; z-index:10000; opacity:.8; color:#fff; background-color:#000; border:0 solid #000; text-align:center; cursor:pointer; display:circle;`);
		color.id = "color";
		color.innerText = "By dragon73101";
		document.getElementById("me").addEventListener("click", function() {
			window.open("https://github.com/dragon731012");
		});
	}());
}
function mousemove(event) {
	var x = event.clientX;
	var y = event.clientY;
	x = x - 9 - size;
	y = y - 12 - size;
	(function() {
		var elem = document.createElement("div");
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(elem);
		elem.setAttribute("style", `position:fixed; top:${y}px; left:${x}px; margin:10px; padding-top:10px; width:${size}px; height:${size}px; z-index:10000; opacity:${opt}; color:${clr}; background-color:${clr}; border:0 solid #fff; text-align:center; display:${pen}`);
		elem.id = "paint";
		elem.innerText = "";
	}());
}
window.addEventListener("keydown", function(event) {
	if (event.key == "c") {
		clr = prompt("What color do you want? Must be very broad, and with no caps or special characters. Ex: blue.");
		elem.style.display = "block";
	}
});
window.addEventListener("keydown", function(event) {
	if (event.key == "s") {
		size = prompt("What size do you want? No caps, letters, or special characters. Ex: 10.");
		elem.style.display = "block";
	}
});
window.addEventListener("keydown", function(event) {
	if(event.key == "u") {
		pen = "none";
	}
});
window.addEventListener("keydown", function(event) {
	if(event.key == "d") {
		pen = "circle";
	}
});
window.addEventListener("keydown", function(event) {
	if(event.key == "o") {
		opt = prompt("What do you want the opacity to be? 1 to 0. 1 = none. 0 = a lot.");
	}
});
window.addEventListener("mousemove", mousemove);
repeat();