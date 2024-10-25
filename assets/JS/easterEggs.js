/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	GENERAL  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
if (Math.random() < 0.01 || (Math.random() < 0.05 && this.localStorage.rats_pageTheme == "spinetingler")) {
	jumpscare = document.createElement("img");
	jumpscare.src = "./assets/images/secret/FNAF2OldFoxyJumpscare.gif";
	jumpscare.id = "SPOOK";
	document.body.appendChild(jumpscare);
	console.log("Did I get'cha?");
}
function onCutscene(toggle, timeTilScroll) {
	if (toggle === true) {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}, timeTilScroll * 1000);
		document.querySelectorAll("#cutsceneBar").forEach(element => {
			element.className = element.className + " active";
		});
	}
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	INDEX PAGE  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
function onLogoArgue() {
	if (window.confirm("You're already on the homepage.") == false) {
		if (window.confirm("Did you just cancel me?") == false) {
			onLogoClickLoop();
		} else {
			window.alert("I thought so...");
		}
	}
}
function onLogoClickLoop() {
	if(window.confirm("Stop.") == false) {
		onLogoClickLoop();
	} else {
		window.alert("Thank you.");
	}
}

function onRaidenClassic() {
	raiden = document.getElementById("raidenTheRat");
	raiden.src = "./assets/ratDoodle.svg";
	if (Math.random() < 0.021) {
		raiden.src = "./assets/images/secret/raidenClassic.png";
	}
}
document.addEventListener("DOMContentLoaded", function() {
	onRaidenClassic();
});

const w = 500;
const h = 300;
const dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
const dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
const left = (width / 2 - w / 2) + dualScreenLeft;
const winTop = (height / 2 - h / 2) + dualScreenTop;

let ratHovered = false;
function onRatHover() {
	if (!ratHovered) {
		console.info("Click me");
		ratHovered = true;
	}
}

	// Rat Activated
const idArray = ["mainBody", "sunnySky", "funkyTitleSmall", "funkyTitleSplash"];
function onRatClick() {
	const newWindow = window.open("about:blank", "test", `scrollbars=yes, width=${w}, height=${h}, top=${winTop}, left=${left}`);
	if (newWindow) {
	  // Wait for the new window to load
	  newWindow.document.write(`
		<!DOCTYPE html>
		<html id="popup">
		<head>
		  <meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>come along with me</title>
		<link rel="shortcut icon" type="image/png" href="./../images/branding/embed/ratify.png">
		<link href="./../css/other/ratified.css" rel="stylesheet" type="text/css" id="styles"/>
		<script src="./../js/easterEggs.js"></script>
		  <style>
			body, html { margin: 0; padding: 0; overflow: hidden; }
			iframe { border: none; width: 100vw; height: 100vh; }
		  </style>
		</head>
		<body onload="onPopupHover();">
		  <iframe src="./assets/embeds/ratify.html"></iframe>
		</body>
		</html>
	  `);
	  newWindow.document.close();
	}	onPopupHover();
	document.title = "ㅤ";
	document.querySelector("link[rel~='icon']").href = "./assets/images/transparent.png";
	window.scrollTo(0, 0);

	document.getElementsByTagName("header")[0].remove();
	for (let i = 0; i < idArray.length; ++i) {
		let elem = idArray[i];
		document.getElementById(elem).remove();
	}

	document.getElementsByTagName("*")[0].id = "ratified";
	document.getElementById("funkyTitleLarge").innerHTML = '<a onclick="window.location.reload();">ʞɔeq w,ᴉ</a>';
	console.warn("fool");
}

	// Make Pop-up Move Up & Down
function onPopupHover() {
	xPos = left;
	yPos = winTop + (-10 * Math.sin((performance.now() / 100) * 0.025) * Math.PI);
	window.moveTo(xPos, yPos);
	setTimeout("onPopupHover()", 1);
}

	// Prevent User from Resizing Popup
const popupSize = [window.outerWidth, window.outerHeight];
window.onresize = function() {
	window.resizeTo(popupSize[0], popupSize[1]);
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	SETTINGS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*const supNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const supQuoteArray = ["Why did you click that?", "Stop.", "stop", "please", "it's getting worse", "it is spreading quicker", "dear god", "HELP", "ℍ𝔼𝕃ℙ", "ꫝꫀꪶρ", "🅷🅴🅻🅿", "​🇭​​🇪​​🇱​​🇵​", "CAN YOU EVEN READ THIS?"];
var homedesc = document.getElementById("settings_homedesc");
var member_img = document.getElementById("member-img");
var settings_homeh2 = document.getElementById("settings_homeh2");
numClicked = 0;
function onSupClick() {
	numClicked = numClicked + 1;
	if (numClicked < 15) {
		settings_homeh2.innerHTML = settings_homeh2.innerHTML + " " + settings_homeh2.innerHTML;
	} else {
		onAwardTrophy("sup");
	}
	for (let i = 0; i < supNumArray.length; ++i) {
		if (numClicked == supNumArray[i]) {
			homedesc.innerHTML = supQuoteArray[i];
		}
	}
}

member_img.addEventListener("click", function() {
	var member_img_src = document.getElementById("member-img").src.split("/").pop().split(".")[0]
	if (member_img_src == "scadaddle") {
		alert("no");
	}
	if (member_img_src == "pes") {
		onPageOpen("d3d3LnlvdXR1YmUuY29tL2VtYmVkL3ZqcU5YUDRGTXU4");
	}
	if (member_img_src == "thecevinator") {
		onPageOpen("YXNzZXRzL2ltYWdlcy95ZWFoLmpwZw==", "_self");
	}
});*/

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	GAMES - MINECRAFT PORTS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const targetNode = document.getElementById("funkyTitleLarge");
const config = { childList: true, subtree: true };
const callback = mutationsList => {
	for (const mutation of mutationsList) {
		if (mutation.type === "childList" && targetNode.innerHTML === "Minecraft Ports" && Math.random() < 0.1) {
			targetNode.innerHTML = "Minceraft";
			break;
		}
	}
};
if (targetNode) {
	const observer = new MutationObserver(callback);
	observer.observe(targetNode, config);
}