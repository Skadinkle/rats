let sky = document.getElementById("sky");
let ground = document.getElementById("ground");
let funky_text_small = document.getElementById("funky-title-small");
let funky_text_large = document.getElementById("funky-title-large");
let header = document.querySelector("header");

window.addEventListener("scroll", function() {
	let value = window.scrollY;
	sky.style.top = value * 0.5 + "px";
	ground.style.top = value * 0.2 + "px";
	funky_text_small.style.marginTop = value * -0.1 + "px";
	funky_text_large.style.marginTop = value * -0.125 + "px";
	header.style.top = value + "px";
});