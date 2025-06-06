javascript: (function () {
	const css = `:root {--filter-chain: sepia(.9) invert(1) hue-rotate(180deg) blur(.2px) brightness(1.7);} body {background-blend-mode: overlay; background-color: #0a0a0a; text-shadow: 0 0 5px rgba(1, 1, 1, .8), 0 0 1em rgba(255, 200, 200, .6), 0 0 10px rgba(255, 192, 192, .3);	}	body > *:not(.mt-overlay) {	background-blend-mode: overlay;	background-color: transparent; filter: var(--filter-chain) !important; -webkit-filter: var(--filter-chain) !important;	}	img, video { --filter-chain: invert(1) blur(1px) brightness(.8); filter: var(--filter-chain); -webkit-filter: var(--filter-chain);	}	.mt-overlay { position: fixed; top: 0;	left: 0;	width: 100%;	height: 100%;	z-index: 2147483647;	pointer-events: none;	}	#mt-grill {	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAJ1BMVEUAAGwAANkAAP8ALAAANAAAbAAA2QAA3gAA4QAA/wBsAADZAAD/AACoIOABAAAAVUlEQVR42u2RwQ3AIAwDHVoMIew/bxdIJPj14Z91VhRLhxWxOtlhdpQRewfdaa3ZSb4+uJ/EJ68rDp/5gIrDR15UHPPNX1dcHuRBHuRBHuRBHv7r4QOHFTeZ7vvIdwAAAABJRU5ErkJggg==);	background-size: 17px;	mix-blend-mode: soft-light;	}	#mt-noise {	background-image: url(https://gyng.github.io/maketerm/i/noise.gif); /* Too big for a bookmarklet */	background-size: 60px;	mix-blend-mode: hard-light;	opacity: .4;	}	#mt-scanlines {	background-image: url(https://gyng.github.io/maketerm/i/scanlines.gif); /* Too big for a bookmarklet */	background-size: 192px;	mix-blend-mode: screen;	opacity: .1;	}	#mt-orange {	background-color: #fce05f;	mix-blend-mode: color-burn;	opacity: .5;	}%60;`
	const style = document.createElement("style");
	style.type = "text/css";
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	document.head.appendChild(style);
	const makeOverlay = (id) => Object.assign(document.createElement("div"), {
		id, className: "mt-overlay"
	});
	const makeAndAddOverlay = (id) => document.body.appendChild(makeOverlay(id));
	["mt-grill", "mt-noise", "mt-scanlines", "mt-orange"].forEach(makeAndAddOverlay);
	console.log("ＨＥＬＬＯ%E3%80%80ＷＯＲＬＤ");
}());