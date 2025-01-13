/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	SET DEFAULT USER VALUES  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const defaultSettings = [
	["masterVolume", 50],
	["bgmVolume", 50],
	["sfxVolume", 50],
	["voxVolume", 50],
	["muteVolume", "true"],
	["pageTheme", JSON.stringify(["default","false"])],
	["tabBranding", "clever"],
	["antialiasing", "true"],
	["cardIcons", "true"],
	["colorCorrection", "default"],
	["dynamicBackground", "true"],
	["oldBackground", "false"],
	["legibleFont", "false"],
	["boldFont", "false"],
	["splashText", "true"],
	["achievements", ""]
]
defaultSettings.forEach(([key, defaultValue]) => {
	const storedValue = localStorage.getItem(`rats_${key}`);
	if (storedValue === null || storedValue === undefined || storedValue === "") localStorage.setItem(`rats_${key}`, defaultValue);
});

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	SETTINGS MENU  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const settingsTabs = [/*"Audio",*/ "Branding", /*"General",*/ "Page Themes", /*"Other",*/ "", /*"Achievements",*/ "Dev. Credits", "Resources"];
function createSettingsMenu() {
	const settingsMenu = document.createElement("div");
	settingsMenu.id = "settingsMenu";
	document.body.appendChild(settingsMenu);

	const setOverlay = document.createElement("div");
	setOverlay.id = "setOverlay";
	settingsMenu.appendChild(setOverlay);

	const setMenuRight = document.createElement("div");
	setMenuRight.id = "setMenuRight";
	setMenuRight.innerHTML = `<div id="setTabs"><ul></ul></div><div id="setMenu"><div id="setMenuSub" class="initialPage"><h2 onclick="supCounter();">Sup.</h2><p>Click on a tab to get started.</p><i>Branding options don't appear in embeds.</i></div></div>`;
	settingsMenu.appendChild(setMenuRight);

	for (let i = 0; i < settingsTabs.length; ++i) {
		const ul = document.querySelector("#setTabs ul");
		if (settingsTabs[i] !== "") {
			const tab = document.createElement("li");
			tab.setAttribute("onclick", `load${settingsTabs[i].replace(/ /g, "").replace(/\./g, "")}();`);
			tab.innerHTML = `<img src="./assets/images/transparent.png" style="background-position: ${-i * 19}px 0;"><a>${settingsTabs[i]}</a>`;
			ul.appendChild(tab);
			if (window !== window.parent && settingsTabs[i] === "Branding") tab.remove();
		} else ul.appendChild(document.createElement("br"));
	}
}
createSettingsMenu();

let settingsOpen = false; // Open & Close Functionality
window.addEventListener("keydown", function(event) {
	if (event.key === "Escape" || event.key === "Backspace") openSettings();
});
function openSettings() {
	const activeElement = document.activeElement;
	if (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA") return;

	settingsOpen = !settingsOpen;
	document.getElementsByTagName("html")[0].className = settingsOpen ? "setActive" : "";
	if (document.getElementsByTagName("html")[0].className === "setActive") {
		playSound("ppt_open.wav");
		onTabBranding("", 3);
	} else {
		playSound("ppt_close.wav");
		funkyTitleLarge.innerHTML === "RATS" ? onTabBranding("", 1) : onTabBranding("", 2);
	}
}
function switchSettingPage(pageToIgnore) { // SwitchPage
	const menuItems = document.querySelectorAll("#setMenuSub");
	menuItems.forEach((item) => {
		if (item.classList.contains(`set${pageToIgnore.charAt(0).toUpperCase() + pageToIgnore.slice(1)}`)) {
			item.setAttribute("style", "transform:none;");
		} else {
			item.setAttribute("style", "transform:translateX(1000px);");
		}
	});
}
function createSubMenu(subClass) {
	const setSubMenu = document.createElement("div");
	setSubMenu.id = "setMenuSub";
	setSubMenu.className = `set${subClass}`;
	setSubMenu.setAttribute("style", "animation: setMenuSubSlideIn .25s ease-in-out forwards;");
	return setSubMenu;
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	AUDIO MANAGER  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
let masterVolume = localStorage.getItem("rats_masterVolume") === 50;
let bgmVolume = localStorage.getItem("rats_bgmVolume") === 50;
let sfxVolume = localStorage.getItem("rats_sfxVolume") === 50;
let voxVolume = localStorage.getItem("rats_voxVolume") === 50;
let muteVolume = "true";

function playSound(filePath, audioType, volumeAdjust = 1) {
	if (muteVolume === "true") return;
	let volume = 1;
	switch (audioType) {
		case "vox":
			volume = voxVolume / 100 * masterVolume / 100;
			break;
		default:
			volume = sfxVolume / 100 * masterVolume / 100;
			break;
	}
	volume *= volumeAdjust;
	const audio = new Audio(`./assets/sfx/${filePath}`);
	audio.volume = Math.min(Math.max(volume, 0), 2);
	audio.play().catch(error => {
		console.error("Cannot Play Sound:", error);
	});
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	BRANDING  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const branding = {
	banzai: [
		"Banzai",
		["Courses: Banzai", "banzai.png"], // Index Page
		["Courses: Banzai", "banzai.png"], // Main Page
		["Profile Page", "banzai.png"], // Settings
		["404: Not Found", "blank.png"] // Error
	],
	bing: [
		"Bing",
		["Bing", "bing.png"],
		["Bing", "bing.png"],
		["Bing", "bing.png"],
		["Bing", "bing.png"]
	],
	chrome_calculator: [
		"Chrome Calculator",
		["calculator.apps.chrome", "blank.png"],
		["calculator.apps.chrome", "blank.png"],
		["calculator.apps.chrome", "blank.png"],
		["calculator.apps.chrome", "blank.png"]
	],
	chrome_new_tab_dark: [
		"Chrome New Tab <i>(Dark)</i>",
		["New Tab", "chromeNewTabDark.png"],
		["New Tab", "chromeNewTabDark.png"],
		["New Tab", "chromeNewTabDark.png"],
		["New Tab", "chromeNewTabDark.png"],
	],
	chrome_new_tab_light: [
		"Chrome New Tab <i>(Light)</i>",
		["New Tab", "chromeNewTabLight.png"],
		["New Tab", "chromeNewTabLight.png"],
		["New Tab", "chromeNewTabLight.png"],
		["New Tab", "chromeNewTabLight.png"]
	],
	chrome_web_store: [
		"Chrome Web Store",
		["Chrome Web Store", "chromeWebStore.png"],
		["Chrome Web Store - Extensions", "chromeWebStore.png"],
		["Chrome Web Store - My items", "chromeWebStore.png"],
		["Chrome Web Store", "chromeWebStore.png"]
	],
	clever: [
		"Clever",
		["Clever | Log in", "clever.ico"],
		["Clever | Portal", "clever.ico"],
		["Privacy policy | Clever", "cleverAlt.png"],
		["Page not found – Clever", "cleverAlt.png"]
	],
	cursive: [
		"Cursive",
		["Cursive", "cursive.png"],
		["Note - Cursive", "cursive.png"],
		["Cursive", "cursive.png"],
		["404 Not Found", "blank.png"]
	],
	desmos: [
		"Desmos",
		["Desmos | Graphing Calculator", "desmos.ico"],
		["Desmos | Graphing Calculator", "desmos.ico"],
		["Desmos | Graphing Calculator", "desmos.ico"],
		["Desmos | Error 404: Page not found", "desmosAlt.ico"]
	],
	google: [
		"Google",
		["Google", "google.ico"],
		["Google", "google.ico"],
		["Search Settings", "google.ico"],
		["Error 404 (Not Found)!!1", "google.ico"]
	],
	google_classroom: [
		"Google Classroom",
		["Home", "googleClassroom.png"],
		["Home", "googleClassroom.png"],
		["Classroom Settings", "googleClassroom.png"],
		["Error 404 (Not Found)!!1", "google.ico"]
	],
	google_docs: [
		"Google Docs",
		["Google Docs", "googleDocs.ico"],
		["Untitled document - Google Docs", "googleDocs.ico"],
		["Google Docs", "googleDocs.ico"],
		["Not Found", "googleDriveAlt.png"]
	],
	google_drive: [
		"Google Drive",
		["My Drive - Google Drive", "googleDrive.png"],
		["My Drive - Google Drive", "googleDrive.png"],
		["Settings - Google Drive", "googleDrive.png"],
		["Not Found", "googleDriveAlt.png"]
	],
	google_forms: [
		"Google Forms",
		["Google Forms", "googleForms.ico"],
		["Untitled form - Google Forms", "googleForms.ico"],
		["Google Forms", "googleForms.ico"],
		["Not Found", "googleDriveAlt.png"]
	],
	google_sheets: [
		"Google Sheets",
		["Google Sheets", "googleSheets.ico"],
		["Untitled spreadsheet", "googleSheets.ico"],
		["Google Sheets", "googleSheets.ico"],
		["Not Found", "googleDriveAlt.png"]
	],
	google_sites: [
		"Google Sites",
		["Google Sites", "googleSites.ico"],
		["Untitled site - Google Sites", "googleSites.ico"],
		["Untitled site - Google Sites", "googleSites.ico"],
		["Not Found", "googleDriveAlt.png"]
	],
	google_slides: [
		"Google Slides",
		["Google Slides", "googleSlides.ico"],
		["Untitled presentation - Google Slides", "googleSlides.ico"],
		["Google Slides", "googleSlides.ico"],
		["Not Found", "googleDriveAlt.png"]
	],
	ixl: [
		"IXL",
		["IXL | Dashboard", "ixl.png"],
		["IXL | Dashboard", "ixl.png"],
		["Profile and settings", "ixl.png"],
		["Sorry, page not found", "ixl.png"]
	],
	kahoot: [
		"Kahoot!",
		["Enter Game PIN - Kahoot!", "kahoot.ico"],
		["Kahoot!", "kahoot.ico"],
		["Edit profile - Settings - Kahoot!", "kahoot.ico"],
		["Page not found | Kahoot!", "kahootAlt.ico"]
	],
	kami: [
		"Kami",
		["Kami", "kami.png"],
		["Kami", "kami.png"],
		["Kami - Settings", "kami.png"],
		["web.kamihq.com/web/error", "kami.png"]
	],
	progressbook: [
		"ProgressBook",
		["Sign In - ProgressBook", "progressbook.ico"],
		["Planner - ProgressBook", "progressbook.ico"],
		["Activities - ProgressBook", "progressbook.ico"],
		["Error - ProgressBook", "progressbook.ico"]
	],
	savvas_easybridge: [
		"Savvas EasyBridge",
		["Savvas Sign In", "savvas.ico"],
		["Savvas Easybridge", "savvas.ico"],
		["Savvas Easybridge", "savvas.ico"],
		["Savvas Easybridge", "savvas.ico"],
	],
	savvas_realize: [
		"Savvas Realize",
		["Savvas Sign In", "savvas.ico"],
		["Savvas Realize", "savvasRealize.png"],
		["Savvas Realize", "savvasRealize.png"],
		["Savvas Realize", "savvasRealize.png"]
	],
	schoolinks: [
		"SchooLinks",
		["Log in - SchooLinks", "schoolinks.ico"],
		["SchooLinks", "schoolinks.ico"],
		["Account Settings - SchooLinks", "schoolinks.ico"],
		["SchooLinks", "schoolinks.ico"]
	],
	yahoo: [
		"Yahoo",
		["Yahoo | Mail, Weather, Search, Politics, News, Finance, Sports & Videos", "yahoo.ico"],
		["classroom - Yahoo Search Results", "yahoo.ico"],
		["classroom - Yahoo Search Results", "yahoo.ico"],
		["classroom - Yahoo Search Results", "yahoo.ico"]
	]
}
function loadBranding() {
	switchSettingPage("siteBranding");
	if (document.getElementsByClassName("setSiteBranding")[0]) return;
	const newMenu = createSubMenu("SiteBranding");
	const brandList = document.createElement("ul");
	for (const category in branding) {
		const brand = document.createElement("li");
		brand.innerHTML = `<a id="brandName">${branding[category][0]}</a><button onclick="onTabBranding('${category}', 3);"></button><button onclick="onBlankBranding('${category}');"></button>`;
		brandList.appendChild(brand);
	}
	newMenu.appendChild(brandList);
	document.getElementById("setMenu").appendChild(newMenu);
}

const tabBranding = localStorage.getItem("rats_tabBranding") === "clever";
function onTabBranding(brandName, brandNumber) {
	brandName === "" ? brandName = lastBrand : lastBrand = `${brandName}`;
	if (branding[brandName]) {
		const [title, favicon] = branding[brandName][brandNumber];
		document.title = title;
		document.querySelector("link[rel~=\"icon\"]").href = `./assets/images/branding/${favicon}`;
		localStorage.setItem("rats_tabBranding", brandName);
	} else {
		console.error(`Brand name '${brandName}' not found in branding object.`);
	}
}
onTabBranding(localStorage.rats_tabBranding, 1);

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	GENERAL STUFF  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
let isAntialiased = localStorage.getItem("rats_antialiasing") === "true"; // ANTIALIASING
if (localStorage.getItem("rats_antialiasing") === null) localStorage.setItem("rats_antialiasing", "true");
function toggleAntialiasing(saveData = true) {
	if (saveData) isAntialiased = !isAntialiased;
	const styleElement = document.getElementById("antialiasing");
	if (isAntialiased) {
		if (styleElement) styleElement.remove();
	} else {
		const newStyleElement = document.createElement("style");
		newStyleElement.id = "antialiasing";
		newStyleElement.innerHTML = "img {-ms-interpolation-mode:nearest-neighbor; image-rendering:-webkit-optimize-contrast; image-rendering:-moz-crisp-edges; image-rendering:-o-pixelated; image-rendering:pixelated; -moz-osx-font-smoothing:grayscale; text-rendering:optimizeLegibility; -webkit-font-smoothing:antialiased;}";
		document.head.appendChild(newStyleElement);
	}
	if (saveData) localStorage.setItem("rats_antialiasing", isAntialiased.toString());
}

let isCardIcons = localStorage.getItem("rats_cardIcons") === "true"; // TOGGLEABLE CARD ICONS
if (localStorage.getItem("rats_cardIcons") === null) localStorage.setItem("rats_cardIcons", "true");
function toggleCardIcons(saveData = true) {
	if (saveData) isCardIcons = !isCardIcons;
	if (saveData) localStorage.setItem("rats_cardIcons", isCardIcons.toString());	
}

const colorblindValues = [ // COLOR CORRECTION
	["achromatomaly", ".618, .320, .062,0,0 .163, .775, .062,0,0 .163, .320, .516,0,0"],
	["achromatopsia", ".299, .587, .114,0,0 .299, .587, .114,0,0 .299, .587, .114,0,0"],
	["deuteranomaly", ".800, .200, .000,0,0 .25833, .74167, .000,0,0 .000, .14167, .85833,0,0"],
	["deuteranopia", ".625, .375, .000,0,0 .700, .300, .000,0,0 .000, .300, .700,0,0"],
	["protanomaly", ".81667, .18333, .000,0,0 .33333, .66667, .000,0,0 .000, .125, .875,0,0"],
	["protanopia", ".56667, .43333, .000,0,0 .55833, .44167, .000,0,0 .000, .24167, .75833,0,0"],
	["tritanomaly", ".96667, .03333, .000,0,0 .000, .73333, .26667,0,0 .000, .18333, .81667,0,0"],
	["tritanopia", ".950, .050, .000,0,0 .000, .43333, .56667,0,0 .000, .475, .525,0,0"],
]
let colorCorrectionType = localStorage.getItem("rats_colorCorrection") === "default";
function colorCorrect(colorValue, saveData = true) {
	const colorDiv = document.getElementById("colorDiv");
	const colorHeadFilter = document.getElementById("colorHeadFilter");
	if (colorCorrectionType === colorValue) return;
	if (colorValue === "default") {
		if (colorDiv) colorDiv.remove();
		if (colorHeadFilter) colorHeadFilter.remove();
		if (saveData) localStorage.setItem("rats_colorCorrection", "default");
	} else {
		if (!colorDiv) {
			const colorDivNew = document.createElement("div");
			colorDivNew.id = "colorDiv";
			document.body.appendChild(colorDivNew);
		}
		if (!colorHeadFilter) {
			const colorHeadFilterNew = document.createElement("style");
			colorHeadFilterNew.id = "colorHeadFilter";
			document.head.appendChild(colorHeadFilterNew);
		}
		colorblindValues.forEach(([type, data]) => {
			if (colorValue === type) {
				const colorDiv = document.getElementById("colorDiv");
				const colorHeadFilter = document.getElementById("colorHeadFilter");
				colorDiv.innerHTML = `<svg style="display: none;"><defs><filter id="${type}"><feColorMatrix type="matrix" values="${data} 0,0,0,1,0" in="SourceGraphic"/></filter></defs></svg>`;
                colorHeadFilter.innerHTML = `header, section, #mainBody, #settingsMenu {-webkit-filter: url(#${type});-moz-filter: url(#${type});-ms-filter: url(#${type});-o-filter: url(#${type});filter: url(#${type});}`;
				if (saveData) localStorage.setItem("rats_colorCorrection", type);
            }
        });
    }
}
window.onload = function() {colorCorrect(localStorage.getItem("rats_colorCorrection"));};

let dynamicBackground2 = localStorage.rats_dynamicBackground || "true"; // OLD & DYNAMIC BACKGROUNDS
let oldBackground2 = localStorage.rats_oldBackground || "false";
function dynamicBackground() {
	
}
function oldBackground() {
	
}

let isBolderFont = localStorage.getItem("rats_bolderFont") === "false"; // LEGIBLE & BOLDER FONT
let isLegibleFont = localStorage.getItem("rats_legibleFont") === "false";
function bolderFont() {
	
}
function legibleFont() {
	if (saveData) isLegibleFont = !isLegibleFont;
	const styleElement = document.getElementById("legibleFont");
	if (!isLegibleFont) {
		if (styleElement) styleElement.remove();
	} else {
		const newStyleElement = document.createElement("style");
		newStyleElement.id = "legibleFont";
		newStyleElement.innerHTML = `:root {--f-fontMain:font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif; --f-fontAlt:font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;}`;
		document.head.appendChild(newStyleElement);
	}
	if (saveData) localStorage.setItem("rats_legibleFont", isLegibleFont.toString());
}

let splashTextEnabled2 = localStorage.rats_splashTextEnabled || "true"; // SPLASH TEXT?
function splashTextEnabled() {
	document.getElementById("funkyTitleSplash").remove();
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	PAGE THEMES  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const themesArray = [
	["default", "Default", "The look you all know.", "0x0"],
	["aPortrait", "A Portrait", ".wonk lla uoy kool ehT", "32x0"],
	["astralDrifter", "Astral Drifter", "Just floatin' about.", "64x0"],
	["awake", "覚ます", "Select Your Player!", "96x0"],
	["bliss", "Bliss", "Why does it taste like bubblegum?", "128x0"],
	["chatty", "Chatty", "If it exists, then there's links to it.", "0x32"],
	["classicDark", "Classic Dark", "I'd make a joke here, but it's dark enough.", "32x32"],
	["classicLight", "Classic Light", "No pain, no gain.", "64x32"],
	["cleverest", "Cleverest", "Something seems familiar.", "96x32"],
	["crystalis", "Crystalis", "It's not just a phase, mom.", "128x32"],
	["daysGoneBy", "Days Gone By", "Same as it ever was.", "0x0"],
	["deadSkies", "Dead Skies", "Don't go outside. Lock your doors. Close your blinds.", "0x0"],
	["downhill", "Downhill", "We're only falling apart from here.", "0x0"],
	["easternHusky", "Eastern Husky", "Long gone days passed me by.", "0x0"],
	["framework", "Framework", "alert('Cheaty cheaty...');", "0x0"],
	["freshMint", "Fresh Mint", "You need one. Trust me.", "0x0"],
	["frostbitten", "Frostbitten", "The season comes early enough.", "0x0"],
	["gardenOfEgress", "Garden of Egress", "Trim it down.", "0x0"],
	["goldenGlow", "Golden Glow", "This is not a piss joke, okay?", "0x0"],
	["goodOleTimes", "Good Ole Times", "There had been many simple things.", "0x0"],
	["halfLight", "Half-Light", "I have vision problems; thank you very much.", "0x0"],
	["handheld", "Handheld", "Been dieting. Lost a few kilobytes.", "0x0"],
	["handstitched", "Handstitched", "Blood, sweat, tears, and nothing better to do.", "0x0"],
	["innerZen", "Inner Zen", "Glance within your inner machinations.", "0x0"],
	["meloncholy", "Meloncholy", "I still really hate this damn joke.", "0x0"],
	["monospace", "Monospace", "All or nothing.", "0x0"],
	["paintbrush", "Paintbrush", "Not Windows compatitble. 3DS, however...", "0x0"],
	["pigment", "Pigment", "Tinga-ting ting, jing.", "0x0", true],
	["projectB", "Project-B", "Only for 1 penny does it work.", "0x0"],
	["redacted", "███████", ";)", "0x0"],
	["rugburn", "Rugburn", "AAAAHHHH! MY F*@$%#G LEG HURTS!", "0x0"],
	["rv1", "Rv1", "Chapter 1: The Beginnings (Director's Cut)", "0x0"],
	["sandland", "Sandland", "I told you it's not butter, Jack.", "0x0"],
	["spineTingler", "Spine-Tingler", "Not spooky, didn't jump.", "0x0"],
	["ssMaritime", "S.S. Maritime", "Yar-har, matey. We be sailin'.", "0x0"],
	["theVampireQueen", "The Vampire Queen", "Blood: 10/10 flavor. Can't get enough.", "0x0"],
	["theVirginKing", "The Virgin King", "AND I AM not PROUD TO BE ME.", "0x0"],
	["webSurfer", "Web Surfer", "Anything and everything. All of the time.", "0x0"],
	["why", "w h y?", "why not?", "0x0"],
	["yearsLater", "Years Later", "Dated 2017.", "0x0"],
	["yesterday", "Yesterday", "Slowly losing track of time.", "0x0"]
]
function loadPageThemes() {
	switchSettingPage("pageThemes");
	if (document.getElementsByClassName("setPageThemes")[0]) return;

	const newMenu = createSubMenu("PageThemes");
	const list = document.createElement("ul");
	newMenu.appendChild(list);
	themesArray.forEach(([fileName, displayName, desc, spritePos, script]) => {
		const theme = document.createElement("li");
		theme.setAttribute("onclick", `onThemeSelect("${fileName}", "${script}");`);
		theme.setAttribute("onmouseover", `onThemeDesc("${desc}");`);
		theme.innerHTML = `<div><div id="image" style="background-position: -${spritePos.split("x")[0] * 6.333}px -${spritePos.split("x")[1] * 6.333}px;" alt="${displayName}"></div>${displayName}`;
		list.appendChild(theme);
	});

	const desc = document.createElement("p");
	desc.id = "themeDesc";
	desc.innerHTML = "Placeholder";
	newMenu.appendChild(desc);
	document.getElementById("setMenu").appendChild(newMenu);
}
function onThemeDesc(themeDesc) {
	if (!document.querySelector("style[data-theme-desc]")) {
		const slid = document.createElement("style");
		slid.setAttribute("data-theme-desc", "true");
		slid.innerText = `#themeDesc {animation: themeDescScoot .25s forwards ease-out;}`;
		document.getElementById("setMenu").appendChild(slid);
	}
	document.getElementById("themeDesc").innerHTML = themeDesc;
}
let pageTheme = JSON.parse(localStorage.getItem("rats_pageTheme"));
function onThemeSelect(fileName, script) {
	if (script === "undefined") script = false;
	const themeStyles = document.getElementById("themeStyles");
	const themeScript = document.getElementById("themeScript");
	if (fileName !== "default") {
		if (!themeStyles) {
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.type = "text/css";
			link.id = "themeStyles";
			document.head.appendChild(link);
		}
		document.getElementById("themeStyles").href = `./assets/css/themes/${fileName}.css`;

		if (script) {
			if (!themeScript) {
				const themeScript = document.createElement("script");
				themeScript.id = "themeScript";
				document.head.appendChild(themeScript);
			}
			document.getElementById("themeScript").src = `./assets/js/themes/${fileName}.js`;
		}
	} else {
		if (themeStyles) themeStyles.remove();
	}

	if (!script && themeScript) {
		removeThemeScript();
	}
	localStorage.rats_pageTheme = JSON.stringify([fileName, script]);
}
onThemeSelect(pageTheme[0], pageTheme[1]);

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	OTHER  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
function exportRATSData() { // DATA IMPORT & EXPORT TOOL
	const saveData = {};
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		if (key.startsWith("rats_")) {
			saveData[key] = localStorage.getItem(key);
		}
	}
	const sortedKeys = Object.keys(saveData).sort();
	const sortedData = {};
	for (const key of sortedKeys) {
		sortedData[key] = saveData[key];
	}
	const saveFile = JSON.stringify(sortedData, null, 2);
	const blob = new Blob([saveFile], {
		type: "application/json"
	});
	const url = URL.createObjectURL(blob);

	const today = new Date();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");
	const year = String(today.getFullYear());
	const curHour = String(today.getHours()).padStart(2, "0");
	const curMin = String(today.getMinutes()).padStart(2, "0");
	const curSec = String(today.getSeconds()).padStart(2, "0");

	const a = document.createElement("a");
	a.href = url;
	a.download = `RATSUser${curHour + curMin + curSec}_${month + day + year}.json`;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}
function importRATSData() {
	const input = document.createElement("input");
	input.type = "file";
	input.accept = ".json";
	input.onchange = event => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = e => {
			try {
				const data = JSON.parse(e.target.result);
				for (const key in data) {
					if (data.hasOwnProperty(key) && key.startsWith("rats_")) {
						localStorage.setItem(key, data[key]);
					}
				}
				alert("Data imported successfully!");
			} catch (error) {
				alert(`Import Fail: ${error.message}`);
			}
		};
		reader.readAsText(file);
	};
	input.click();
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */

/*	--------------------------------------------------------------------------------------------------------------------------------  */

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	ACHIEVEMENTS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
if (localStorage.rv2_achievements === undefined || localStorage.rv2_achievements == "") {
	localStorage.rv2_achievements = JSON.stringify([""]);
}

	// Get Basic Variables
const achivlist = JSON.parse(localStorage.rv2_achievements);
const achiveColorsArray = ["--a-placeholder-upper", "--a-placeholder-lower"];

	// Unlock Trophy
function onAwardTrophy(achievement) {
	for (let i = 0; i < achivlist.length; ++i) {
		if (achivlist.indexOf(achievement) === -1) {

				// Add to Local Storage
			let weh = achivlist;
			weh.push(`"${achievement}"`);
			localStorage.rv2_achievements = JSON.stringify(weh);

				// Animate & Display Trophy
			onTrophyAnimate(achievement);
			onShowTrophies();
		}
	}
}

	// Play Unlock Animation
function onTrophyAnimate(achievement) {

		// Set Achievement Color Palette
	const achivePaletteArray = [`--s-achievement-${achievement}-upper`, `--s-achievement-${achievement}-lower`];
	for (let i = 0; i < achiveColorsArray.length; ++i) {
		document.documentElement.style.setProperty(achiveColorsArray[i], getComputedStyle(document.documentElement).getPropertyValue(achivePaletteArray[i]));
	}

		// Add Assets
	var div = document.createElement("div");
	div.id = "trophy";
	document.getElementsByTagName("body")[0].appendChild(div);
	var img = document.createElement("img");
	img.src = `./assets/images/achievements/${achievement}.png`;
	div.appendChild(img);
	var message = document.createElement("p");
	message.innerHTML = "Achivement Unlocked!";
	message.id = "message";
	message.style.color = `var(--s-achievement-${achievement}-upper)`;
	div.appendChild(message);
	const achieveNameArray = ["placeholder", "areyoulost", "debugger", "ohno", "sup"];
	const achieveTitleArray = ["This is a placeholder.", "Are You Lost?", "Debugger", "oh no!", "Sup."];
	var title = document.createElement("p");
	title.id = "title";
	for (let i = 0; i < achieveNameArray.length; ++i) {
		if (achieveNameArray[i] == achievement) {
			title.innerHTML = achieveTitleArray[i];
		}
	}
	div.appendChild(title);
	var bg = document.createElement("div");
	bg.id = "bg";
	div.appendChild(bg);

		// Remove Afterwards
	setTimeout(function() {
		div.remove();
	}, 3500);
}

	// Show Trophies in Settings Menu
function onShowTrophies() {
	for (let i = 0; i < achivlist.length; ++i) {
		let weh = document.getElementById(`achievement_${achivlist[i]}`);
		if (typeof(weh) != "undefined" && weh != null) {
			weh.className = "unlocked";
		}
	}
}
onShowTrophies(); // Trigger

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	DEVELOPER CREDITS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const creditsDirectory = {
	scadaddle: {
		ico: "🦇",
		name: "Scadaddle",
		role: "Owner, Lead Programmer & Artist",
		descMain: [["i'm doing fine", "thank you very much"]],
		links: [
			["GitHub <i>(Main)</i>", "github.com/Skadinkle"],
			["The Index", "school-chromebook663.github.io", "Made this with my alt."],
			["Youtube", "www.youtube.com/@scadaddle9226"]
		]
	},
	theCzarBomba: {
		ico: "💣",
		name: "The Czar Bomba",
		role: "Site Gatherer, UNB & Rv1 Beta Tester",
		descMain: [["a kilt-wearing tyrant", "yodelayheehoo"]]
	},
	care: {
		ico: "🍬",
		name: "Care",
		role: "Site Gatherer, Additional Artist",
		descMain: [["woman", "😐"]]
	},
	nyxE: {
		ico: "🦋",
		name: "Nyx.e",
		role: "Concept Artist, Playtester",
		descMain: [["Be gay, do crimes, consider your arrest a hate crime.", "Draft Dodgers shouldn't be presidents."]]
	},
	pes: {
		ico: "🕷️",
		name: "Pes",
		role: "He helped a little bit.",
		descMain: [["loser says funny things", "yeah"]],
		links: [
			["o-efwvrpxafiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiickkk", "sites.google.com/hhcsdstudents.org/o-efwvrpxafiiiiiiiiiiiiiiiiiii/home"]
		]
	},
	mrSprings: {
		ico: "🐇",
		name: "Mr. Springs",
		role: "Splash Text Editor, Additional Support",
		descMain: [["local dumb found on youtube", "he do the funni"]],
		links: [
			["Youtube <i>(Main)</i>", "www.youtube.com/@mrsprings6006"],
			["Youtube <i>(Alt.)</i>", "www.youtube.com/@Springbois-iu7re"]
		]
	},
	theCevinator: {
		ico: "🦆",
		name: "The Cevinator",
		role: "he was there",
		links: [
			["Cornhub", "cornhub.website"]
		]
	},
	jack: {
		ico: "💀",
		name: "Jack",
		role: "Former UnB Co-Owner, Site Finder, <i>\"Straight White Male\"</i>",
		descMain: [
			["Ha hA ha you stink. ", "take a bath."],
			["Wait where am I", "is this the catalogue?"],
			["We are the RATS we fight the HHCSD school system", "*don't forget about UNB. Ver.3.0*"],
			["Hey you.... yes you... want some stuff? I got the goods => ", "yeah good pain goods for you computer I got them yeah yeah, I'm talkn about viruses."],
			["ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????", "ℙ???????????? *oops font did not work, oh well we can add this still right?* "],
			["Hey is Scadaddle around?", "there's some bugs I need him to destroy."],
			["7648juj. ", "Uh that happens when a phone drops on your keyborard when you look at people on WIZZ"],
			["The Twisted One, very odd per say, and knows where you live and sleep at all times, also im good friend unless you stab me in the back like a dumb mother f****r...", "dont you regret life welp i do and now i lurk on the internet yay always waiting for you..."],
			["Fun fact Unbarsched is now discontinued, for reasons, but don't worry I am working on Разрушать it will be better built in many ways, I do apologize for people who wanted Unbarshed to be continued, I however will still own the domain  older builds will still remain up, I do ask not for any remakes or new builds to be made.", "I would appreciate if you guys suggested links, files, pictures, or any suggestions at (<a href=\"https://forms.office.com/r/ZgLWG8zfTg\" target=\"_blank\">https://forms.office.com/r/ZgLWG8zfTg</a>) *Links only for right now we will have a better form system later*"],
			["WOW", "So bonkers"],
			["Crazy? I was crazy once.</p><p>They put me in a room.</p><p>A rubber room.</p><p>A rubber room with rats.</p><p>They put me in a rubber room with rubber rats.</p><p>Rubber rats? I hate rubber rats.</p><p>They make me crazy.</p><p>Crazy? I was crazy once.</p><p>They put me in a room….", "Crazy? I was crazy once.</p><p>They put me in a room.</p><p>A rubber room.</p><p>A rubber room with rats.</p><p>They put me in a rubber room with rubber rats.</p><p>Rubber rats? I hate rubber rats.</p><p>They make me crazy.</p><p>Crazy? I was crazy once.</p><p>They put me in a room…."],
			["I know a guy named Kevin", "yeah he sucks "]
		],
		links: [
			["Buy Me a Coffee", "www.buymeacoffee.com/28rvds2gdnx"],
			["Discord", "discord.com/users/@TheTwistedOne#3211"],
			["Patreon", "www.patreon.com/TheTwistedOne"],
			["Crazy Company Corporation <i>(CCC)</i>", "sites.google.com/hhcsdstudents.org/crazy-company"],
			["Youtube", "www.youtube.com/@TTO1980"]
		]
	},
};

function loadDevCredits() {
	switchSettingPage("devCredits");
	if (document.getElementsByClassName("setDevCredits")[0]) return;
	const newMenu = createSubMenu("DevCredits");
	for (const key in creditsDirectory) {
		if (creditsDirectory.hasOwnProperty(key)) {
			const person = creditsDirectory[key];

			const personDiv = document.createElement("div");
			personDiv.id = "memberFolder";
			personDiv.className = person.name.toLowerCase();
			const personDivSub = document.createElement("div");
			personDivSub.id = "memberDivSub";

			const personIco = document.createElement("img");
			personIco.src = `./assets/images/settings/credits/${key}.png`;
			personIco.alt = `${person.name}'s Ico`;
			personIco.loading = "lazy";
			personIco.rel = "preload";
			personDivSub.appendChild(personIco);

			const personName = document.createElement("p");
			personName.innerHTML = `${person.ico} ${person.name}`;
			personName.id = "memberName";
			personDivSub.appendChild(personName);

			const personRole = document.createElement("p");
			personRole.innerHTML = person.role || "No Role";
			personRole.id = "memberSubtitle";
			personDivSub.appendChild(personRole);
			personDiv.appendChild(personDivSub);

			if (person.descMain) {
				const randomDescValue = Math.floor(Math.random() * person.descMain.length);
				const randomDesc = person.descMain[randomDescValue];
				const descriptionDiv = document.createElement("div");
				descriptionDiv.id = "memberDesc";
				descriptionDiv.className = person.name.toLowerCase();
				for (let i = 0; i < 2; ++i) {
					const p = document.createElement("p");
					p.innerHTML = randomDesc[i];
					descriptionDiv.appendChild(p);
				}
				if (person.descMain.length !== 1) {
					personDiv.setAttribute("onmouseleave", `rerollDescription("${person.name.toLowerCase()}");`);
				}
				personDiv.appendChild(descriptionDiv);
			}

			if (person.links) {
				const linksDiv = document.createElement("div");
				linksDiv.innerHTML = "<h2>Links:</h2>";
				linksDiv.id = "memberLinks";
				person.links.forEach(link => {
					const memberLink = document.createElement("p");
					let linkTitle = "";
					if (link[2]) linkTitle = ` title="${link[2]}"`;
					memberLink.id = "memberLink";
					memberLink.innerHTML = `<a href="https://${link[1]}" target="_blank"${linkTitle}>${link[0]}</a>`;
					linksDiv.appendChild(memberLink);
				});
				personDiv.appendChild(linksDiv);
			}

			newMenu.appendChild(personDiv);
		}
	}
	document.getElementById("setMenu").appendChild(newMenu);
}
function rerollDescription(user) {
	if (document.querySelector(`#memberFolder.${user}`).offsetHeight > 100) return;
	const person = creditsDirectory[user];
	const randomDescValue = Math.floor(Math.random() * person.descMain.length);
	const randomDesc = person.descMain[randomDescValue];
	const description = document.querySelector(`#memberDesc.${user}`);
	description.innerHTML = `<p>${randomDesc[0]}</p><p>${randomDesc[1]}</p>`;
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	RESOURCES  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const resourcesArray = {
	audio: [
		["Alert by Sturm <i>(churgney gurgney)</i> ft. @lunaisuppose, @funkspolian, @RedTv53 <i>[PLACEHOLDER]</i>", "https://www.youtube.com/watch?v=DfkcueYHmY8&ab_channel=churgneygurgney"],
		["LBP3 Audio Archive <i>[PLACEHOLDER]</i>", "https://mae.osyu.sh/public/lbp3audio"],
		["LMMS", "https://lmms.io"],
		["Looperman", "https://www.looperman.com"],
		["Musical Artifacts | Libre resources for music making", "https://musical-artifacts.com"],
		["Pixabay", "https://pixabay.com/sound-effects"]
	],
	art: [
		["Autotracer.org | <i>Online Image Vectorizer</i>", "https://www.autotracer.org"],
		["Blockbench", "https://web.blockbench.net"],
		["Boxy SVG", "https://boxy-svg.com/app"],
		["Final Parsec | <i>Sprite Sheet Maker</i>", "https://www.finalparsec.com/tools/sprite_sheet_maker"],
		["Lospec | <i>Palette List</i>", "https://lospec.com/palette-list"],
		["Piskel App", "https://www.piskelapp.com/p/create/sprite"],
		["Pixlr E", "https://pixlr.com/e"],
		["SVG Cleaner & Optimizer", "https://iconly.io/tools/svg-cleaner"]
	],
	coding: [
		["ASCII Codes For Non-Alphanumeric Printable Characters", "https://web.cs.dal.ca/~jamie/CS3172/Materials/examples/XHTML/entities/ASCII.html"],
		["Autoprefixer CSS Online", "https://autoprefixer.github.io"],
		["Base64 Decode", "https://www.base64decode.org"],
		["Base64 Encode", "https://www.base64encode.org"],
		["ChatGPT", "https://chatgpt.com"],
		["funkin-web by Nova Zephyr Ashwolf <i>(NovaAshwolfDev)</i>", "https://github.com/NovaAshwolfDev/funkin-web"],
		["GitHub & BinBucket HTML Preview", "https://github.com/htmlpreview/htmlpreview.github.com"],
		["JavaScript Cleaner | <i>Free Online JS Beautifier</i>", "https://html-cleaner.com/js"],
		["MDN Web Docs", "https://developer.mozilla.org/en-US"],
		["Online Tutorials | <i>Parallax Scrolling Website</i>", "https://www.youtube.com/watch?v=1wfeqDyMUx4&ab_channel=OnlineTutorials"],
		["Stack Overflow", "https://stackoverflow.com"],
		["Toptal® | <i>JavaScript Key Code Event Tool</i>", "https://www.toptal.com/developers/keycode"],
		["W3Schools Online Web Tutorials", "https://www.w3schools.com"],
		["xTF | <i>Center a New Popup Window Even on Dualscreen with JavaScript</i>", "http://www.xtf.dk/2011/08/center-new-popup-window-even-on.html"]
	],
	links: [
		["freemediaheckyeah", "https://fmhy.pages.dev"]
	],
	video: [
		["Internet Archive: <i>Digital Library</i>", "https://archive.org"],
		["YouTube", "https://www.youtube.com"]
	],
	other: [
		["Colorjack | <i>&lt;canvas&gt; + ColorMatrix = Color Blindness</i>", "https://web.archive.org/web/20081014161121/http://www.colorjack.com/labs/colormatrix"],
		["emoji-cheat-sheet by ikatyang <i>(Ika)</i>", "https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md"],
		["Font Awesome", "https://fontawesome.com"],
		["GitHub Docs | <i>Basic Writing and Formatting Syntax</i>", "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"],
		["Google Fonts", "https://fonts.google.com"],
		["small by Mathias Bynens", "https://github.com/mathiasbynens/small"],
		["LingoJam | <i>Cursed Text Generator (creepy/glitched/hacked/void)</i>", "https://lingojam.com/CursedText"]
	]
}

function loadResources() {
	switchSettingPage("resources");
	if (document.getElementsByClassName("setResources")[0]) return;
	const newMenu = createSubMenu("Resources");

	const head = document.createElement("h1");
	head.innerHTML = "References & Resources";
	newMenu.appendChild(head);

	for (const category in resourcesArray) {
		const header = document.createElement("h2");
		header.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}:`;
		newMenu.appendChild(header);

		const resourceFolder = document.createElement("div");
		resourcesArray[category].forEach(resource => {
			const link = document.createElement("p");
			link.innerHTML = `<a href="${resource[1]}" target="_blank">${resource[0]}</a>`;
			resourceFolder.appendChild(link);

		});
		newMenu.appendChild(resourceFolder);
		newMenu.appendChild(document.createElement("br"));
	}
	document.getElementById("setMenu").appendChild(newMenu);
}