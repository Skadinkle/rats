javascript: function repeat(event) {
	(function() {
		var color = document.createElement("div");
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(color);
		color.style.position = "fixed";
		color.style.bottom = "0";
		color.style.right = "0";
		color.style.margin = "0";
		color.style.paddingTop = "0";
		color.style.width = "1366px";
		color.style.height = "20px";
		color.style.zIndex = 10000;
		color.style.opacity = .8;
		color.style.color = "white";
		color.style.backgroundColor = "black";
		color.style.border = "0 solid black";
		color.style.textAlign = "center";
		color.style.cursor = "pointer";
		color.id = "color";
		color.style.display = "circle";
		color.innerText = "By dragon73101";
		document.getElementById("me").addEventListener("click", function() {
			window.open("https://github.com/dragon731012");
		});
	}());
}
var howmany = prompt("How many divs/iframes do you want to make?");
function create() {
	(function () {
		var elem = document.createElement("div");
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(elem);
		var color = prompt("What color do you want it to be?");
		var x = prompt("What do you want the x cord to be?");
		var y = prompt("What do you want the y cord to be?");
		var borderwide = prompt("How many pixels wide do you want the border to be?");
		var bordercolor = prompt("What color do you want the border to be?");
		var width = prompt("How many pixels wide do you want it to be?");
		var height = prompt("How many pixels high do you want it to be?");
		var text = prompt("What do you want the text to be?");
		var textcolor = prompt("What color do you want the text to be?");
		var padding = prompt("How far from the top do you want the text to be?");
		var seethrough = prompt("How transparent do you want it to be? 1 to 0. 1 = none, 0 = not there.");
		elem.style.position = "fixed";
		elem.style.top = `${y}px`;
		elem.style.left = `${x}px`;
		elem.style.margin = "0";
		elem.style.paddingTop = `${padding}px`;
		elem.style.width = `${width}px`;
		elem.style.height = `${height}px`;
		elem.style.zIndex = 10000;
		elem.style.opacity = seethrough;
		elem.style.color = textcolor;
		elem.style.backgroundColor = color;
		elem.style.border = `${borderwide}px solid ${bordercolor}`;
		elem.style.textAlign = "center";
		elem.id = "elem";
		elem.style.display = "block";
		elem.innerText = text;
	}());
}
var x = 0;
while (x < howmany) {
	create();
	x = x + 1;
	if (x != howmany) alert("Next one...");
}
alert("Done!");
repeat();