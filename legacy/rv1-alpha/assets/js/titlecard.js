let text = document.getElementById("text");
window.addEventListener("scroll", function() {
	let value = window.scrollY;
	document.getElementById("sky").style.top = `${value * .5}px`;
	text.style.marginLeft = `${value * 1}px`;
	text.style.marginTop = `${value * 0.2}px`;
	document.getElementById("ground").style.left = `${value * .2}px`;
	document.getElementById("character").style.left = `${value * .2 + 504.1}px`;
	document.getElementById("btn").style.marginTop = `${value * -.2}px`;
	document.querySelector("header").style.top = `${value}px`;
});