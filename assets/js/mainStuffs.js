/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	SCRIPTS, EMBEDS, & CSS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const mainScriptsArray = ["cardData", "settings", "splashText", "other/debugger", "other/easterEggs", "other/videoPlayer"];
for (let i = 0; i < mainScriptsArray.length; ++i) {
	var asset = document.head.appendChild(document.createElement("script"));
	asset.id = mainScriptsArray[i];
	asset.rel = "preload";
	asset.async;
	asset.src = `./assets/js/${mainScriptsArray[i]}.js`;
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	HEADER  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const headerStuffsArray = ["f02e_bookmarklets", "f044_editors", "f11b_games", "f5da_literature", "f549_school", /*"f1c8_video",*/ "f187_other", "&#xf013"];
function loadHeader() {
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
		listItem.setAttribute("onmouseover", `playSound("ppt_move_click.wav", "sfx");`);
		const link = document.createElement("a");

		if (i < headerStuffsArray.length - 1) {
			const [iconCode, label] = headerStuffsArray[i].split("_");
			link.id = label;
			listItem.setAttribute("onclick", `addList(general.${label}, ""); onTabBranding("", 2);`);			
			link.innerHTML = `<a class="fa-solid">&#x${iconCode};</a>${label}`;
		} else {
			listItem.setAttribute("onclick", "openSettings();");
			link.innerHTML = headerStuffsArray[i];
			link.className = "fa-solid";
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
	loadHeader();
});

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	TITLE CARD  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
document.addEventListener("DOMContentLoaded", function() {
	const bgSky = document.getElementById("sunnySky");
	const bgClouds = document.getElementById("sunnyClouds");
	const bgMountains = document.getElementById("sunnyMountains");
	const bgGround = document.getElementById("sunnyGround");
	const funkyTitleSmall = document.getElementById("funkyTitleSmall");
	const funkyTitleLarge = document.getElementById("funkyTitleLarge");
	const funkyTitleSplash = document.getElementById("funkyTitleSplash");
	const bgOverlay = document.getElementById("overlay");

	window.addEventListener("scroll", function() {
		let varWinY = window.scrollY || 0;
		if (bgSky) bgSky.style.transform = `translateY(${varWinY}px)`;
		if (bgClouds) {
			bgClouds.style.transform = `translateY(${varWinY * .8}px)`;
			bgClouds.style.opacity = 1 - varWinY * .00025;
		}
		if (bgMountains) {
			bgMountains.style.transform = `scale(${1.075 - varWinY * .00025}) translateY(${varWinY * .9}px)`;
			bgMountains.style.opacity = 1 - varWinY * .0025;
		}
		if (bgGround) {
			bgGround.style.transform = `translateY(${varWinY * .2}px) scale(${1 - (varWinY * .00025)})`;
			bgGround.style.opacity = 1 - varWinY * .0005;
		}
		if (funkyTitleSmall) funkyTitleSmall.style.transform = `rotate(${-varWinY * .025}deg) translateY(${varWinY * -.1}px)`;
		if (funkyTitleLarge) funkyTitleLarge.style.transform = `rotate(${varWinY * .025}deg) translateY(${varWinY * -.125}px)`;
		if (funkyTitleSplash) funkyTitleSplash.style.transform = `translateY(${(varWinY * -.125)}px)`;
		if (bgOverlay) bgOverlay.style.transform = `translateY(${varWinY * -.25}px)`;

		if (document.getElementById("sunnyFooterImg")) {
			const bgFooter = document.getElementById("sunnyFooterImg");
			bgFooter.style.transform = `translateY(${(getFooterVisPercent()) * -1 + 100}px) scale(${1.05 - getFooterVisPercent() * .00025})`;
			bgFooter.style.opacity = getFooterVisPercent() / 100;
		}
	});
});
const getFooterVisPercent = () => {
	const { top, bottom, height } = document.getElementById("sunnyFooter").getBoundingClientRect();
	if (bottom < 0 || top > window.innerHeight) return 0;

	const visibleHeight = Math.min(window.innerHeight, bottom) - Math.max(0, top);
	return Math.min(100, Math.max(0, (visibleHeight / height) * 100)).toFixed(2);
};

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	MAIN PAGE LOADER  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
previousPage = "";
function toggleDisplay(element, display) {
	element.style.display = display;
}

function displayIndex() {
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
	loadSplash(false);
	document.getElementById("headerLogo").setAttribute("onclick", "onLogoArgue();");
	onRaidenClassic();
	onTabBranding("", 1);
}

function addList(categoryArray, folder) {
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
		const [subTitle, title, descMain, descNotice, descWarn, listType, fold, img] = categoryArray[0];

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
		if (img) imgUrl = img;

		const formatText = (text) => text ? text.toLowerCase().replace(/ - /g, ".") : "";
		const sectionValue = `${formatText(subTitle)}.${formatText(title)}`.replace(/^\./, "");

		const url = new URL(window.location.href);
		url.searchParams.set("section", sectionValue);
		window.history.replaceState({}, "", url.toString());
		previousPage = sectionValue;
	}

	categoryArray.slice(1).forEach(([name, linkBase64, type, desc]) => {
		const gameElement = createListElement(name, linkBase64, type, desc, folder, imgUrl);
		elements.pageOptions.appendChild(gameElement);
	});
	cardFader();
	document.getElementById("headerLogo").setAttribute("onclick", "displayIndex();");
}
function cardFader() {
	const items = document.querySelectorAll("#pageOptions a#item");
	items.forEach((item, index) => {
		item.style.setProperty("--js-delay", `${index * .025}s`);
	});
}

function createListElement(name, linkBase64, type, desc, folder, imgUrl) { // Make Each Element
	const anchor = document.createElement("a");
	anchor.id = "item";
	if (desc) anchor.title = desc;
	const image = document.createElement("img");
	const paragraph = document.createElement("p");
	paragraph.innerHTML = name;
	if (isCardIcons) anchor.appendChild(image);
	anchor.appendChild(paragraph);
	image.loading = "lazy";
	const formattedLink = linkBase64.includes("_") ? linkBase64.replace(".", "/").split("_")[0] : linkBase64.split(".")[0];
	if (type !== "_CAT") { // Basic Stuffs
		image.src = imgUrl ? `./assets/images/${folder}/${imgUrl}` : `./assets/images/icons/${folder}/${imgFormatter(name, type)}`;
		if (imgUrl && imgUrl.endsWith(".svg")) image.id = "svg";
		anchor.setAttribute("onclick", `onPageOpen("${linkBase64}", "${type}")`);
	} else { // Categories
		anchor.setAttribute("onclick", `addList(${linkBase64}, "${formattedLink}");`);
		image.src = imgUrl ? `./assets/images/${folder}/${imgUrl}` : `./assets/images/cardIcons/${imgFormatter(name, type)}`;
		image.id = "svg";
	}
	return anchor;
}

function imgFormatter(title, type) {
	title = title.replace(/<\/?i>/gi, "").replace(/&/g, "and").replace(/\-/g, "").replace(/\./g, "");
	title = title.replace(/[\{\[\(](\w)/g, (match, p1) => {
		return p1.toUpperCase();
	}).replace(/[\{\[\(]/g, "").replace(/[\}\]\)]/g, "");
	const words = title.toLowerCase().split(/\s+/).map(word => 
		word.charAt(0).toUpperCase() + word.slice(1)
	);
	if (words.length > 0) words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1);
	const formattedTitle = words.join("");
	const cleanTitle = formattedTitle.replace(/[^a-zA-Z0-9]/g, "");
	const finalTitle = cleanTitle.replace(/(\d)([a-zA-Z])/g, (match, p1, p2) => {
		return p1 + p2.toUpperCase();
	});
	const extension = type === "_CAT" ? ".svg" : ".png";
	return finalTitle + extension;
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	LINK LOADER  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
function onPageOpen(pageURL, pageType) {
	let pageFullLink;	
	switch (pageType) {
		case "_BMK":
			pageFullLink = `./assets/js/bookmarklets/${pageURL}.js`;
			break;
		case "_CAT":
			onAddList(pageURL, "");
			break;
		case "_DWN":
			onHtmlDownload(`https://github.com/${pageURL}`);
			return;
		case "_EXT":
			window.open(`https://${atob(pageURL)}`, "_blank"); 
			return;
		case "_GIT":
			pageFullLink = `./assets/embeds/htmlPreview.html?https://github.com/${atob(pageURL)}`;
			break;
		case "_RAW":
			onCopyLink(pageURL);
			return;
		case "_REG":
			pageFullLink = `https://${atob(pageURL)}`;
			break;
		case "_RSK":
			pageFullLink = `http://"${atob(pageURL)}`;
			break;
		default:
			return;
	}
	onNewTabOpen(pageFullLink);
}

function onNewTabOpen(pageURL) {
	const blank = window.open();
	blank.document.body.setAttribute("style", "margin:0; height:100vh;");
	const favicon = blank.document.createElement("link");
	favicon.rel = "shortcut icon";
	favicon.pageType = "image/png";
	favicon.href = "./assets/images/branding/googleClassroom.png";
	blank.document.head.appendChild(favicon);
	blank.document.title = "Home";
	const iframe = blank.document.createElement("iframe");
	iframe.setAttribute("style", "border:none; width:100%; height:100%; margin:0;");
	iframe.src = pageURL;
	blank.document.body.appendChild(iframe);
}

function onHtmlDownload(pageURL) {
	if (pageURL) {
		var fileUrl = pageURL.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
		var fileName = fileUrl.split("/").pop().split("?")[0];
		fetch(fileUrl).then(response => {
			if (!response.ok) throw new Error("Network response was not ok");
			return response.blob();
		}).then(blob => {
			var a = document.createElement("a");
			var url = window.URL.createObjectURL(blob);
			a.href = url;
			a.download = fileName;
			document.body.appendChild(a);
			a.click();
			a.remove();
			window.URL.revokeObjectURL(url);
		}).catch(error => alert(`Error: ${error.message}`));
	}
}

function onCopyLink(pageURL) {
	var copied = document.createElement("div");
	copied.innerHTML = "Copied to Clipboard";
	copied.id = "copiedToClipboard";
	document.body.appendChild(copied);
	setTimeout(function() {
		copied.remove();
	}, 5000);
	const textarea = document.createElement("textarea");
	textarea.value = pageURL;
	document.body.appendChild(textarea);
	textarea.select();
	textarea.setSelectionRange(0, 99999);
	document.execCommand("copy");
	document.body.removeChild(textarea);
}

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	FOOTER  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const footerForm = "<a href=\"https://forms.gle/QHDc5XuBkjV7eBvX9\" target=\"_blank\"><p class=\"fab\">&#xf1a0</p> Form</a>";
const footerGithub = "<a href=\"https://github.com/Skadinkle/rats\" target=\"_blank\"><p class=\"fab\">&#xf09b</p> GitHub</a>";
const footerPadding = "<span> || </span>";
function onCreateFooter() {

	let footer = document.querySelector("footer");
	if (!footer) {
		const sunnyFooter = document.createElement("div");
		sunnyFooter.id = "sunnyFooter";
		sunnyFooter.innerHTML = "<img id=\"sunnyFooterImg\" src=\"./assets/sunnyFooter.svg\">";
		document.body.appendChild(sunnyFooter);

		const footer = document.createElement("footer");
		document.body.appendChild(footer);
		footer.innerHTML = `<a id="footerTime"></a>${footerPadding}<a id="footerBrand">RATS v3.1 - ${new Date().getFullYear()}</a>${footerPadding}${footerForm}${footerPadding}${footerGithub}`;
	}
	return footer;
}

function onUpdateFooterTimer() {
	const footer = onCreateFooter();
	const footTime = document.getElementById("footerTime");
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