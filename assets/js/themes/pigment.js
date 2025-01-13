var randColor = `hsl(${Math.random() * 360}, 80%, 75%)`;
if (typeof(pigmentArray) == "undefined" || pigmentArray == null) {
	pigmentArray = ["--t-skyUpper", "--t-skyLower", "--g-textLight", "--g-textEmphasis", "--g-textDim"];
}
for (let i = 0; i < pigmentArray.length; ++i) {
	document.documentElement.style.setProperty(pigmentArray[i], randColor);
}

window.addEventListener("click", function(event) {
	randomizeColor();
});
function randomizeColor() {
	console.log(localStorage.rats_pageTheme)
	if (localStorage.rats_pageTheme !== JSON.stringify(["pigment","true"])) return;

	randColor = `hsl(${Math.random() * 360}, 80%, 75%)`;
	for (let i = 0; i < pigmentArray.length; ++i) {
		document.documentElement.style.setProperty(pigmentArray[i], randColor);
	}
}
randomizeColor();

function removeThemeScript() {
	for (let i = 0; i < pigmentArray.length; ++i) {
		document.documentElement.style.removeProperty(pigmentArray[i]);
	}
	document.getElementById("themeScript").remove();
}