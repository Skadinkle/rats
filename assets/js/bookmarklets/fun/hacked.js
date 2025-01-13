javascript:(function() {
	const a = document.createElement("div");
	a.setAttribute("style", "position:fixed; top:5%; left:50%; transform:translate(-50%,0); font-size:5rem; background-color:#3a3aff; color:e00; border:10px solid #e00; z-index:9999; line-height:normal; cursor:not-allowed; user-select:none;");
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