/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	SCRIPTS, EMBEDS, & CSS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const mainScriptsArray = ["cardData", "easterEggs", "linkLoader", "splashText", "userSettings"];
for (let i = 0; i < mainScriptsArray.length; ++i) {
	var asset = document.head.appendChild(document.createElement("script"));
	asset.id = mainScriptsArray[i];
	asset.src = "./assets/js/" + mainScriptsArray[i] + ".js";
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	HEADER  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const headerStuffsArray = ["f02e_bookmarklets", "f044_editors", "f11b_games", "f5da_literature", "f549_school", /*"f1c8_video",*/ "f187_other", "&#xf013"];
function onCreateHeader() {
	const header = document.createElement("header");
	const logo = document.createElement("a"); // RATS Logo
	logo.id = "headerLogo";
	logo.innerHTML = "RATS";
	logo.setAttribute("onclick", "onLogoArgue();");
	header.appendChild(logo);

	const list = document.createElement("ul"); // Categories
	let settingsLink = null;

	for (let i = 0; i < headerStuffsArray.length; ++i) {
		const listItem = document.createElement("li");
		const link = document.createElement("a");

		if (i < headerStuffsArray.length - 1) {
			const [iconCode, label] = headerStuffsArray[i].split('_');
			link.id = label;
			link.setAttribute("onclick", `onAddList(general.${label}, "");`);
			link.innerHTML = `<a class='fa-solid'>&#x${iconCode};</a>${label}`;
		} else {
			link.innerHTML = headerStuffsArray[i];
			link.className = "fa-solid";
			link.setAttribute("onclick", "openSettings();");
			link.id = "settings";
			settingsLink = link;
		}

		listItem.appendChild(link);
		list.appendChild(listItem);
	}

	header.appendChild(list);
	
	const form = document.createElement("form");
	form.autofill = "off";

	const formdiv = document.createElement("div");
	formdiv.className = "autocomplete-list";
	formdiv.style.width = "300px";

	const input = document.createElement("input");
	input.id = "search-bar-input";
	input.type = "text";
	input.placeholder = "Search for something...";

	form.appendChild(formdiv);
	formdiv.appendChild(input);

	const formListItem = document.createElement("li");
	formListItem.appendChild(form);
	
	if (settingsLink) {
		const settingsListItem = settingsLink.parentElement;
		list.insertBefore(formListItem, settingsListItem);
	}

	document.body.insertBefore(header, document.body.firstChild);
}
document.addEventListener("DOMContentLoaded", function() {
	onCreateHeader();
});

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	TITLE CARD  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
document.addEventListener("DOMContentLoaded", function() {
	const bgSky = document.getElementById("sunnySky");
	const bgClouds = document.getElementById("sunnyClouds");
	const bgHills = document.getElementById("sunnyHills");
	const bgGround = document.getElementById("sunnyGround");
	const funkyTitleSmall = document.getElementById("funkyTitleSmall");
	const funkyTitleLarge = document.getElementById("funkyTitleLarge");
	const funkyTitleSplash = document.getElementById("funkyTitleSplash");
	const bgOverlay = document.getElementById("overlay");

	window.addEventListener("scroll", function() {
		let varWinY = window.scrollY;
		if (bgSky) bgSky.style.top = `${varWinY + 50}px`;
		if (bgClouds) {
			bgClouds.style.top = varWinY * 0.8 + "px";
			bgClouds.style.opacity = .5 - varWinY * 0.00025;
		}
		if (bgGround) {
			bgGround.style.top = `calc(16.5vh + ${varWinY * 0.2}px)`;
			bgGround.style.opacity = 1 - varWinY * 0.0005;
			bgGround.style.width = 100 - varWinY * 0.025 + "vw";
			bgGround.style.height = 200 - varWinY * 0.025 + "vh";
		}
		if (funkyTitleSmall) {
			funkyTitleSmall.style.marginTop = `${varWinY * -0.1}px`;
			funkyTitleSmall.style.transform = `rotate(${-varWinY * 0.025}deg)`;
		}
		if (funkyTitleLarge) {
			funkyTitleLarge.style.marginTop = `${varWinY * -0.125}px`;
			funkyTitleLarge.style.transform = `rotate(${varWinY * 0.025}deg)`;
		}
		if (funkyTitleSplash) funkyTitleSplash.style.marginTop = `${(varWinY * -0.125) - 35}px`;
		if (bgOverlay) bgOverlay.style.marginTop = `${varWinY * -0.25}px`;
	});
});

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	MAIN PAGE LOADER  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
previousPage = "";
function toggleDisplay(element, display) {
	element.style.display = display;
}

function onIndexPage() {
	const elementsToHide = ["pageOptions", "infoBox", "pageOptionsName"];
	const titles = {
		small: "funkyTitleSmall",
		large: "funkyTitleLarge",
	};
	elementsToHide.forEach(id => toggleDisplay(document.getElementById(id), "none"));
	document.querySelectorAll("#twoColumnSection").forEach(element => {
		toggleDisplay(element, "block");
	});
	const smallTitle = document.getElementById(titles.small);
	const largeTitle = document.getElementById(titles.large);
	toggleDisplay(smallTitle, "");
	toggleDisplay(document.getElementById("funkyTitleSplash"), "");
	smallTitle.innerHTML = "We are the";
	largeTitle.innerHTML = "RATS";
	onDetermineSplash(false);
	document.getElementById("headerLogo").setAttribute("onclick", "onLogoArgue();");
	onRaidenClassic();
}

function onAddList(categoryArray, folder) {
	const elements = {
		pageOptions: document.getElementById("pageOptions"),
		infoBox: document.getElementById("infoBox"),
		funkyTitleSmall: document.getElementById("funkyTitleSmall"),
		funkyTitleLarge: document.getElementById("funkyTitleLarge"),
		descElement: document.getElementById("descMain"),
		noticeElement: document.getElementById("descNotice"),
		warnElement: document.getElementById("descWarn2"),
		pageOptionsName: document.getElementById("pageOptionsName"),
		funkyTitleSplash: document.getElementById("funkyTitleSplash")
	};
	elements.pageOptions.innerHTML = "";
	toggleDisplay(elements.infoBox, "");
	toggleDisplay(elements.pageOptions, "");
	toggleDisplay(elements.pageOptionsName, "");
	toggleDisplay(elements.funkyTitleSplash, "none");

	imgUrl = "";
	document.querySelectorAll("#twoColumnSection").forEach(element => {
		toggleDisplay(element, "none");
	});

	if (categoryArray.length > 0) {
		const [subTitle, title, descMain, descNotice, descWarn, listType, fold, img, comment] = categoryArray[0];

		elements.funkyTitleSmall.innerHTML = subTitle || "";
		toggleDisplay(elements.funkyTitleSmall, subTitle ? "" : "none");
		elements.funkyTitleLarge.innerHTML = title;
		const descriptions = {
			descElement: descMain,
			noticeElement: descNotice,
			warnElement: descWarn
		};
		for (const [element, desc] of Object.entries(descriptions)) {
			elements[element].innerHTML = desc || "";
			elements[element].style.display = desc ? "block" : "none";
		}
		elements.pageOptionsName.innerHTML = listType;

		if (fold) folder = fold;
		if (comment) replaceFirstComment(comment);
		if (img) imgUrl = img;

		const formatText = (text) => text ? text.toLowerCase().replace(/ - /g, '.') : '';
		const sectionValue = `${formatText(subTitle)}.${formatText(title)}`.replace(/^\./, '');

		const url = new URL(window.location.href);
		url.searchParams.set("section", sectionValue);
		window.history.replaceState({}, "", url.toString());
		previousPage = sectionValue;
	}

	categoryArray.slice(1).forEach(([name, linkBase64, type, desc]) => {
		const gameElement = onCreateElement(name, linkBase64, type, desc, folder, imgUrl);
		elements.pageOptions.appendChild(gameElement);
	});
	onCardFadeIn();
	document.getElementById("headerLogo").setAttribute("onclick", "onIndexPage();");
}
function onCardFadeIn() {
	const items = document.querySelectorAll("#pageOptions a#item");
	items.forEach((item, index) => {
		item.style.setProperty("--js-delay", `${index * 0.025}s`);
	});
}

function replaceFirstComment(newContent) {
	function findComment(node) {
		if (node.nodeType === Node.COMMENT_NODE) {
			return node;
		}
		for (let child of node.childNodes) {
			let commentNode = findComment(child);
			if (commentNode) {
				return commentNode;
			}
		}
		return null;
	}
	const firstComment = findComment(document);
	if (firstComment) {
		firstComment.nodeValue = newContent;
	} else {
		console.log("No comment found.");
	}
  }

function onCreateElement(name, linkBase64, type, desc, folder, imgUrl) { // Make Each Element
	const anchor = document.createElement("a");
	anchor.id = "item";
	if (desc) {
		anchor.title = desc;
	}
	const image = document.createElement("img");
	const paragraph = document.createElement("p");
	paragraph.innerHTML = name;
	anchor.appendChild(image);
	anchor.appendChild(paragraph);
	image.loading = "lazy";
	const formattedLink = linkBase64.includes("_") ? linkBase64.replace(".", "/").split("_")[0] : linkBase64.split(".")[0];
	if (type !== "_CAT") { // Categories
		image.src = imgUrl ? `./assets/${folder}/${imgUrl}` : `./assets/icons/${folder}/${formatTitleToImageURL(name, type)}`;
		if (imgUrl && imgUrl.endsWith('.svg')) {
			image.id = "svg";
		}
		anchor.setAttribute("onclick", `onPageOpen("${linkBase64}", "${type}")`);
	} else { // Basic Stuff
		anchor.setAttribute("onclick", `onAddList(${linkBase64}, "${formattedLink}");`);
		image.src = imgUrl ? `./assets/${folder}/${imgUrl}` : `./assets/cardIcons/${formatTitleToImageURL(name, type)}`;
		image.id = "svg";
	}
	return anchor;
}

function formatTitleToImageURL(title, type) {
	title = title.replace(/<\/?i>/gi, "").replace(/&/g, "and").replace(/\-/g, "").replace(/\./g, "");
	title = title.replace(/[\{\[\(](\w)/g, (match, p1) => {
		return p1.toUpperCase();
	}).replace(/[\{\[\(]/g, "").replace(/[\}\]\)]/g, "");
	const words = title.toLowerCase().split(/\s+/).map(word => 
		word.charAt(0).toUpperCase() + word.slice(1)
	);
	if (words.length > 0) {
		words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1);
	}
	const formattedTitle = words.join("");
	const cleanTitle = formattedTitle.replace(/[^a-zA-Z0-9]/g, "");
	const finalTitle = cleanTitle.replace(/(\d)([a-zA-Z])/g, (match, p1, p2) => {
		return p1 + p2.toUpperCase();
	});
	const extension = type === "_CAT" ? ".svg" : ".png";
	return finalTitle + extension;
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	ROADMAP (CHANGELOG)  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const roadmap = {
	102424: [
		"<b>Version 3 Launch</b>",
		"Added Literature Section",
		"Added Roadmap",
		"Added Search Bar",
		"Moved & Renamed Pages",
	],
};
function onRoadmap() {
	const menu = document.getElementById("roadmapMenu");
	const isVisible = menu.style.top > "0";
	if (isVisible) {
		menu.style.top = "-50vh";
	} else {
		menu.style.top = "50vh";
	}
	populateRoadmap();
}
function populateRoadmap() {
	const list = document.getElementById("roadmapList");
	list.innerHTML = "";
	for (const date in roadmap) {
		const dateItem = document.createElement("li");
		dateItem.innerHTML = `<strong>${formatDate(date)}</strong>`;
		list.appendChild(dateItem);
		const changes = roadmap[date];
		changes.forEach(change => {
			const changeItem = document.createElement("li");
			changeItem.innerHTML = change;
			changeItem.className = "change";
			list.appendChild(changeItem);
		});
	}
}

function formatDate(dateStr) {
	const month = dateStr.slice(0, 2);
	const day = dateStr.slice(2, 4);
	const year = dateStr.slice(4, 6);
	return `${month}-${day}-${year}`;
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	FOOTER  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const footerForm = '<a href="https://forms.gle/QHDc5XuBkjV7eBvX9" target="_blank"><p class="fab">&#xf1a0</p> Form</a>';
const footerGithub = '<a href="https://github.com/Skadinkle/rats" target="_blank"><p class="fab">&#xf09b</p> GitHub</a>';
const footerRoadmap = '<a onclick="onRoadmap();"><p class="fa">&#xf018</p> Roadmap</a>';
const footerPadding = "<span> || </span>";
function onCreateFooter() {
	let footer = document.querySelector("footer");
	if (!footer) {
		const footer = document.createElement("footer");
		document.body.appendChild(footer);
		footer.innerHTML = `<a id="footer-time"></a>${footerPadding}<a id="footer-brand">RATS v3.0 - ${new Date().getFullYear()}</a>${footerPadding}${footerForm}${footerPadding}${footerGithub}${footerPadding}${footerRoadmap}`;
	}
	return footer;
}

function onUpdateFooterTimer() {
	const footer = onCreateFooter();
	const footTime = document.getElementById("footer-time");
	if (!footTime) {
		console.error("Footer time element not found.");
		return;
	}
	const curDate = new Date();
	let curHour = curDate.getHours();
	const curMin = String(curDate.getMinutes()).padStart(2, "0");
	const curSec = String(curDate.getSeconds()).padStart(2, "0");
	const curPeriod = curHour >= 12 ? "PM" : "AM";
	if (curHour > 12) curHour -= 12;
	if (curHour === 0) curHour = 12;
	const time = `${curHour}:${curMin}:${curSec} ${curPeriod} <a class="fa">&#xf017</a>`;
	footTime.innerHTML = time;
}
document.addEventListener("DOMContentLoaded", function() {
	onUpdateFooterTimer();
	window.setInterval(onUpdateFooterTimer, 1000);
});

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	ERRORS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
if (navigator.onLine == false) {
	onNoInternet(true);
} else {
	onNoInternet(false);
}
window.addEventListener("offline", function() {
	onNoInternet(true);
});
window.addEventListener("online", function() {
	onNoInternet(false);
});
