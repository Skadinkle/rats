javascript:(function() {
	const a = document.createElement("div");
	a.style.position = "fixed";
	a.style.top = "5%";
	a.style.left = "50%";
	a.style.transform = "translate(-50%, 0%)";
	a.style.fontSize = "5rem";
	a.style.backgroundColor = "#3a3aff";
	a.style.color = "#ee0000";
	a.style.border = "10px solid #ee0000";
	a.style.zIndex = "9999";
	a.style.lineHeight = "normal";
	a.style.cursor = "not-allowed";
	a.style.userSelect = "none";
	a.textContent = "YOU ARE BEING HACKED BOI :)";
	document.body.appendChild(a);
	const b = ["overline", "line-through", "blink", "underline"];
	let c = 0;
	setInterval(() => {
		a.style.textDecorationLine = b[c];
		const d = a.style.backgroundColor;
		a.style.backgroundColor = a.style.color;
		a.style.color = d;
		a.style.borderColor = d;
		if (c < b.length - 1)c++;
		else c = 0;
	}, 100);
})();