/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	CHARACTERS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
function loadCharacters(opponentAsset, playerAsset) {
	const assets = [opponentAsset, playerAsset];
	assets.forEach((asset, index) => {
		const charStyle = document.createElement("link");
		charStyle.className = "charStyle";
		charStyle.rel = "stylesheet";
		charStyle.type = "text/css";
		charStyle.href = `./assets/images/secret/funked/${asset}_assets.css`;
		document.head.appendChild(charStyle);

		const char = document.createElement("div");
		char.id = `funked${index + 1}`;
		document.querySelector("section").appendChild(char);
	});
}
window.addEventListener("scroll", function() {
	let varWinY = window.scrollY || 0;
	document.getElementById("funked1").style.transform = `translate(${varWinY * .045}px,${varWinY * .2}px) scale(${1 - (varWinY * .00025)})`;
	document.getElementById("funked2").style.transform = `translate(${-varWinY * .045}px,${varWinY * .2}px) scale(${1 - (varWinY * .00025)})`;
});
loadCharacters("elGordo", "player");

function playAnimation(char, animName, animSpeed, loopType) {
	if (!animSpeed) animSpeed = 1;
	if (!loopType) loopType = "forwards";
	document.getElementById(`funked${char}`).setAttribute("style", `animation: ${animName} ${animSpeed}s steps(1) ${loopType}`);
}
document.addEventListener("keydown", (event) => {
	switch (event.key) {
		case "a": playAnimation(1, "oppoLeft", 1, "forwards"); break;
		case "s": playAnimation(1, "oppoDown", 1, "forwards"); break;
		case "k": playAnimation(1, "oppoUp", 1, "forwards"); break;
		case "l": playAnimation(1, "oppoRight", 1, "forwards"); break;
		default: break;
	}
});