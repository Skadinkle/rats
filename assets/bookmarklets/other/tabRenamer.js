javascript:(function () {
	document.title = prompt("Tab Cloak\n\nEnter new Tab Title:");
	var icon = document.querySelector('link[rel="icon"]');
	switch(prompt("Choose new tab icon:\n\n[1] Google Search\n[2] Google Drive\n[3] Custom URL")) {
		case"1":icon.setAttribute("href", "https://www.google.com/favicon.ico");
		break;
		case"2":icon.setAttribute("href", "https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png");
		break;
		case"3":icon.setAttribute("href", prompt("Enter Custom Tab Icon URL:"));
	}
})()