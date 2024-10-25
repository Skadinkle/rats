/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	SETTINGS MENU  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
let settingsOpen = false;
function openSettings() {
	if (!settingsOpen) {
		settingsOpen = true;
		document.getElementsByTagName("html")[0].id = "setActive";
	} else {
		settingsOpen = false;
		document.getElementsByTagName("html")[0].id = "";
	}

}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	BRANDING  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const tabBranding = localStorage.rats_tabBranding || "clever";
const outerBranding = localStorage.rats_outerBranding || "google_classroom";
const branding = {
	banzai: [
		["Courses: Banzai", "banzai.png"], // Index Page
		["Courses: Banzai", "banzai.png"], // Main Page
		["Profile Page", "banzai.png"], // Settings
		["404: Not Found", "blank.png"] // Error
	],
	bing: [
		["Bing", "bing.png"],
		["Bing", "bing.png"],
		["Bing", "bing.png"],
		["Bing", "bing.png"]
	],
	chrome_calculator: [
		["calculator.apps.chrome", "blank.png"],
		["calculator.apps.chrome", "blank.png"],
		["calculator.apps.chrome", "blank.png"],
		["calculator.apps.chrome", "blank.png"]
	],
	chrome_new_tab_dark: [
		["New Tab", "chromeNewTabDark.png"],
		["New Tab", "chromeNewTabDark.png"],
		["New Tab", "chromeNewTabDark.png"],
		["New Tab", "chromeNewTabDark.png"],
	],
	chrome_new_tab_light: [
		["New Tab", "chromeNewTabLight.png"],
		["New Tab", "chromeNewTabLight.png"],
		["New Tab", "chromeNewTabLight.png"],
		["New Tab", "chromeNewTabLight.png"]
	],
	chrome_web_store: [
		["Chrome Web Store", "chromeWebStore.png"],
		["Chrome Web Store - Extensions", "chromeWebStore.png"],
		["Chrome Web Store - My items", "chromeWebStore.png"],
		["Chrome Web Store", "chromeWebStore.png"]
	],
	clever: [
		["Clever | Log in", "clever.ico"],
		["Clever | Portal", "clever.ico"],
		["Privacy policy | Clever", "cleverAlt.png"],
		["Page not found – Clever", "cleverAlt.png"]
	],
	cursive: [
		["Cursive", "cursive.png"],
		["Note - Cursive", "cursive.png"],
		["Cursive", "cursive.png"],
		["404 Not Found", "blank.png"]
	],
	desmos: [
		["Desmos | Graphing Calculator", "desmos.ico"],
		["Desmos | Graphing Calculator", "desmos.ico"],
		["Desmos | Graphing Calculator", "desmos.ico"],
		["Desmos | Error 404: Page not found", "desmosAlt.ico"]
	],
	google: [
		["Google", "google.ico"],
		["Google", "google.ico"],
		["Search Settings", "google.ico"],
		["Error 404 (Not Found)!!1", "google.ico"]
	],
	google_classroom: [
		["Home", "googleClassroom.png"],
		["Home", "googleClassroom.png"],
		["Classroom Settings", "googleClassroom.png"],
		["Error 404 (Not Found)!!1", "google.ico"]
	],
	google_docs: [
		["Google Docs", "googleDocs.ico"],
		["Untitled document - Google Docs", "googleDocs.ico"],
		["Google Docs", "googleDocs.ico"],
		["Not Found", "googleDriveAlt.png"]
	],
	google_drive: [
		["My Drive - Google Drive", "googleDrive.png"],
		["My Drive - Google Drive", "googleDrive.png"],
		["Settings - Google Drive", "googleDrive.png"],
		["Not Found", "googleDriveAlt.png"]
	],
	google_forms: [
		["Google Forms", "googleForms.ico"],
		["Untitled form - Google Forms", "googleForms.ico"],
		["Google Forms", "googleForms.ico"],
		["Not Found", "googleDriveAlt.png"]
	],
	google_sheets: [
		["Google Sheets", "googleSheets.ico"],
		["Untitled spreadsheet", "googleSheets.ico"],
		["Google Sheets", "googleSheets.ico"],
		["Not Found", "googleDriveAlt.png"]
	],
	google_sites: [
		["Google Sites", "googleSites.ico"],
		["Untitled site - Google Sites", "googleSites.ico"],
		["Untitled site - Google Sites", "googleSites.ico"],
		["Not Found", "googleDriveAlt.png"]
	],
	google_slides: [
		["Google Slides", "googleSlides.ico"],
		["Untitled presentation - Google Slides", "googleSlides.ico"],
		["Google Slides", "googleSlides.ico"],
		["Not Found", "googleDriveAlt.png"]
	],
	ixl: [
		["IXL | Dashboard", "ixl.png"],
		["IXL | Dashboard", "ixl.png"],
		["Profile and settings", "ixl.png"],
		["Sorry, page not found", "ixl.png"]
	],
	kahoot: [
		["Enter Game PIN - Kahoot!", "kahoot.ico"],
		["Kahoot!", "kahoot.ico"],
		["Edit profile - Settings - Kahoot!", "kahoot.ico"],
		["Page not found | Kahoot!", "kahootAlt.ico"]
	],
	kami: [
		["Kami", "kami.png"],
		["Kami", "kami.png"],
		["Kami - Settings", "kami.png"],
		["web.kamihq.com/web/error", "kami.png"]
	],
	progressbook: [
		["Sign In - ProgressBook", "progressbook.ico"],
		["Planner - ProgressBook", "progressbook.ico"],
		["Activities - ProgressBook", "progressbook.ico"],
		["Error - ProgressBook", "progressbook.ico"]
	],
	savvas_easybridge: [
		["Savvas Sign In", "savvas.ico"],
		["Savvas Easybridge", "savvas.ico"],
		["Savvas Easybridge", "savvas.ico"],
		["Savvas Easybridge", "savvas.ico"],
	],
	savvas_realize: [
		["Savvas Sign In", "savvas.ico"],
		["Savvas Realize", "savvasRealize.png"],
		["Savvas Realize", "savvasRealize.png"],
		["Savvas Realize", "savvasRealize.png"]
	],
	schoolinks: [
		["Log in - SchooLinks", "schoolinks.ico"],
		["SchooLinks", "schoolinks.ico"],
		["Account Settings - SchooLinks", "schoolinks.ico"],
		["SchooLinks", "schoolinks.ico"]
	],
	yahoo: [
		["Yahoo | Mail, Weather, Search, Politics, News, Finance, Sports & Videos", "yahoo.ico"],
		["classroom - Yahoo Search Results", "yahoo.ico"],
		["classroom - Yahoo Search Results", "yahoo.ico"],
		["classroom - Yahoo Search Results", "yahoo.ico"]
	]
}

function onTabBranding(brandName, brandNumber) {
	if (branding[brandName]) {
		const [title, favicon] = branding[brandName][brandNumber - 1];
		document.title = title;
		document.querySelector("link[rel~='icon']").href = "./assets/images/branding/" + favicon;
	} else {
		console.error(`Brand name '${brandName}' not found in branding object.`);
	}
}
function onOuterBranding(brandName) {
	if (branding[brandName]) {
		const [title, favicon] = branding[brandName][2];
		document.title = title;
		document.querySelector("link[rel~='icon']").href = "./assets/images/branding/" + favicon;
	}
}
onTabBranding(localStorage.rats_tabBranding, 1);

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	PAGE THEMES  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
let pageTheme = localStorage.rats_pageTheme || "default";
const themeScriptArray = ["pigment"];
const monthNumberArray = [4, 10, 11, 12];
const monthSheetArray = ["march", "october", "november", "december"];
function onThemeSelect(theme) {
	const themeStyles = document.getElementById("themeStyles");
	const currentMonth = new Date().getMonth() + 1;
	const seasonalIndex = monthNumberArray.indexOf(currentMonth);
	if (!themeStyles) {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.id = "themeStyles";
		document.head.appendChild(link);
	}
	if (theme === "default") {
		if (seasonalIndex !== -1) {
			themeStyles.href = `./assets/css/seasonal/${monthSheetArray[seasonalIndex]}.css`;
		} else {
			if (themeStyles) {
				document.head.removeChild(themeStyles);
			}
		}
	} else {
		document.getElementById("themeStyles").href = `./assets/css/themes/${theme}.css`;
		onThemeScript(theme);
	}
	localStorage.rats_pageTheme = theme;
}
function onThemeScript(theme) {
	const existingScript = document.getElementById("themeScriptId");
	if (existingScript) {
		existingScript.remove();
	}
	if (themeScriptArray.includes(theme)) {
		const script = document.createElement("script");
		script.id = "themeScriptId";
		script.src = `./assets/js/themes/${theme}.js`;
		document.head.appendChild(script);
	}
	if (theme !== "default") {
		const seasonalEffect = document.getElementById("seasonal-effect");
		const canvas = document.getElementById("canvas");
		if (seasonalEffect) seasonalEffect.remove();
		if (canvas) canvas.remove();
	}
}


/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	CREDITS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const creditsDirectory = {
	scadaddle: {
		ico: "🦇",
		name: "Scadaddle",
		role: "Owner, Lead Programmer & Artist, Wiki Editor",
		descMain: [["sup", "i made a thing"]],
		links: [
			["Github", "github.com/Skadinkle"],
			["The Index", "school-chromebook663.github.io", "This is my alt accounts."],
			["Youtube", "www.youtube.com/@scadaddle9226"]
		],
		quotes: []
	},
	theCzarBomba: {
		ico: "💣",
		name: "The Czar Bomba",
		role: "Site Gatherer, UNB & Rv1 Beta Tester",
		descMain: [["a kilt-wearing tyrant", "yodelayheehoo",]],
		links: [],
		quotes: []
	},
	care: {
		ico: "🍬",
		name: "Care",
		role: "Site Gatherer, Additional Artist, Wiki Editor",
		descMain: [["woman", "😐"]],
		links: [],
		quotes: []
	},
	nyxE: {
		ico: "",
		name: "Nyx.e",
		role: "",
		descMain: [["Be gay, do crimes, consider your arrest a hate crime.", "Draft Dodgers shouldn't be presidents."]],
		links: [],
		quotes: []
	},
	pez: {
		ico: "🕷️",
		name: "Pez",
		role: "He helped a little bit.",
		descMain: [["loser says funny things", "yeah"]],
		links: [
			["o-efwvrpxafiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiickkk", "sites.google.com/hhcsdstudents.org/o-efwvrpxafiiiiiiiiiiiiiiiiiii/home"]
		],
		quotes: []
	},
	mrSprings: {
		ico: "🐇",
		name: "Mr. Springs",
		role: "Splash Text Editor, Additional Support",
		descMain: [["local dumb found on youtube", "he do the funni"]],
		links: [
			["Youtube <i>(Main)</i>", "www.youtube.com/@mrsprings6006"],
			["Youtube <i>(Alt.)</i>", "www.youtube.com/@Springbois-iu7re"]
		],
		quotes: []
	},
	theCevinator: {
		ico: "🦆",
		name: "The Cevinator",
		role: "he was there",
		descMain: [["", ""]],
		links: [
			["Cornhub", "cornhub.website"]
		],
		quotes: []
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
			"ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????ℍ????????????????????", "ℙ???????????? *oops font did not work, oh well we can add this still right?* ",
			["Hey is Scadaddle around?", "there's some bugs I need him to destroy."],
			["7648juj. ", "Uh that happens when a phone drops on your keyborard when you look at people on WIZZ"],
			["The Twisted One, very odd per say, and knows where you live and sleep at all times, also im good friend unless you stab me in the back like a dumb mother f****r...", "dont you regret life welp i do and now i lurk on the internet yay always waiting for you..."],
			["Fun fact Unbarsched is now discontinued, for reasons, but don't worry I am working on Разрушать it will be better built in many ways, I do apologize for people who wanted Unbarshed to be continued, I however will still own the domain  older builds will still remain up, I do ask not for any remakes or new builds to be made.", "I would appreciate if you guys suggested links, files, pictures, or any suggestions at (<a href='https://forms.office.com/r/ZgLWG8zfTg' target='_EXT'>https://forms.office.com/r/ZgLWG8zfTg</a>) *Links only for right now we will have a better form system later*"],
			["WOW", "So bonkers"],
			["Crazy? I was crazy once.</p><p>They put me in a room.</p><p>A rubber room.</p><p>A rubber room with rats.</p><p>They put me in a rubber room with rubber rats.</p><p>Rubber rats? I hate rubber rats.</p><p>They make me crazy.</p><p>Crazy? I was crazy once.</p><p>They put me in a room….", "Crazy? I was crazy once.</p><p>They put me in a room.</p><p>A rubber room.</p><p>A rubber room with rats.</p><p>They put me in a rubber room with rubber rats.</p><p>Rubber rats? I hate rubber rats.</p><p>They make me crazy.</p><p>Crazy? I was crazy once.</p><p>They put me in a room…."],
			["I know a guy named Kevin", "yeah he sucks "],
		],
		links: [
			["Buy Me a Coffee", "www.buymeacoffee.com/28rvds2gdnx"],
			["Discord", "discord.com/users/@TheTwistedOne#3211"],
			["Patreon", "www.patreon.com/TheTwistedOne"],
			["(CCC)", "sites.google.com/hhcsdstudents.org/crazy-company"],
			["Youtube", "www.youtube.com/@TTO1980"],
		],
		quotes: []
	},
};


/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	OTHER TOOLS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */

	// DATA EXPORT TOOL
	// NOTE: WILL EXPORT AND IMPORT ANY LOCALSTORAGE VALUE STARTING WITH "rats_"
function exportRATSData() {
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
	const blob = new Blob([saveFile], { type: 'application/json' });
	const url = URL.createObjectURL(blob);

	const today = new Date();
	const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
	const day = String(today.getDate()).padStart(2, '0');
	const year = String(today.getFullYear());
	const curHour = String(today.getHours()).padStart(2, "0");
	const curMin = String(today.getMinutes()).padStart(2, "0");
	const curSec = String(today.getSeconds()).padStart(2, "0");

	const a = document.createElement('a');
	a.href = url;
	a.download = 'RATSUser' + curHour + curMin + curSec + "_" + month + day + year + ".json";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}

	// DATA IMPORT TOOL
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
				alert("Improt data: " + error.message);
			}
		};
		reader.readAsText(file);
	};
	input.click();
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	DEBUG MODE  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
let debugMode = localStorage.getItem("rats_debugMode") === "true";
function onUpdateDebugState(newValue) {
	debugMode = newValue;
	localStorage.setItem("rats_debugMode", newValue ? "true" : "false");
}
window.addEventListener("keydown", function(event) {
	if (event.key === "0") {
		if (!debugMode) {
			if (confirm("Do you wish to enable Debug Mode?\nThis may break some features.")) {
				alert("RatDev v2.0: Enabled\nUSE WITH CAUTION!");
				onUpdateDebugState(true);
			}
		} else {
			if (confirm("Do you wish to disable Debug Mode?")) {
				alert("RatDev v2.0: Disabled\nThank you for using RatDev.");
				onUpdateDebugState(false);
			}
		}
	}
	if (debugMode) {
		if (event.key === "1") { // Splash Re-Roll
			onDetermineSplash(true);
		}
		if (event.key === "2") { // Clear All Data
			if (window.confirm("This will erase all of your data on Rv2.\nClick 'Cancel' if you do not wish to do so.") !== false) {
				for (let i = localStorage.length - 1; i >= 0; i--) {
					const key = localStorage.key(i);
					if (key.startsWith("rats_")) {
						localStorage.removeItem(key);
					}
				}
				window.location.reload();
				alert("Data Reset");
			}
		}
		if (event.key === "3") { // Change Theme
			const themePrompt = prompt("Enter Theme Name:", "default");
			if (themePrompt) {
				onThemeSelect(themePrompt);
				localStorage.rats_pageTheme = themePrompt;
			}
		}
		if (event.key === "4") { // Change Brand
			const brandPrompt = prompt("Enter Brand Name:", "clever,1");
			if (brandPrompt) {
				const [name, number] = brandPrompt.split(",").map(part => part.trim());
				onTabBranding(name || "clever", isNaN(number) ? 1 : parseInt(number, 10));
				localStorage.rats_tabBranding = brandPrompt;
			}
		}
		if (event.key === "5") { // Remove Errors

		}
		if (event.key === "6") { // Debug Trophy (Does not count towards achievements.)

		}
		if (event.key === "7") { // Display Stats

		}
		if (event.key === "9") { // Debugging Page

		}
		if (event.key === "p") {
			bobsAdventureMain = document.createElement("script");
			bobsAdventureMain.src = "./assets/js/secret/bobsAdventureMain.js";
			document.head.appendChild(bobsAdventureMain);
		}
		if (event.key === "f") {
			funkedMain = document.createElement("script");
			funkedMain.src = "./assets/js/secret/funkedMain.js";
			document.head.appendChild(funkedMain);
		}
		if (event.key === "Escape" || event.key === "Backspace") {
			openSettings();
		}
	}
});