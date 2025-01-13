let sky = document.getElementById("sky");
let text = document.getElementById("text");
let ground = document.getElementById("ground");
let character = document.getElementById("character");
let btn = document.getElementById("btn");
let header = document.querySelector("header");

window.addEventListener("scroll", function() {
	let value = window.scrollY;
	sky.style.top = value * 0.5 + "px";
	text.style.marginLeft = value * 1 + "px";
	text.style.marginTop = value * 0.2 + "px";
	ground.style.left = value * 0.2 + "px";
	character.style.left = value * 0.2 + 504.1 + "px";
	btn.style.marginTop = value * -0.2 + "px";
	header.style.top = value + "px";
});