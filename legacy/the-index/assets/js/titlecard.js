window.addEventListener("scroll", function() {
	let value = window.scrollY;
	document.getElementById("sky").style.top = `${value * 0.5}px`;
	document.getElementById("ground").style.top = `${value * 0.2}px`;
	document.getElementById("funky-title-small").style.marginTop = `${value * -0.1}px`;
	document.getElementById("funky-title-large").style.marginTop = `${value * -0.125}px`;
	document.querySelector("header").style.top = `${value}px`;
});