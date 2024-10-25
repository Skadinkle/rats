localStorage.rats_pageOpenType = "embed";

function onPageOpen(pageURL, pageType) {
	let pageFullLink;
	
	console.log(`pageType: ${pageType}, pageURL: ${pageURL}`);
	
	switch (pageType) {
		case "_BMK":
			// I am genuinly an idiot for doing this so complicated in the past. I really hate myself.
			pageFullLink = "./assets/bookmarklets/" + pageURL + ".js";
			console.log(`Bookmark link: ${pageFullLink}`);
			break;
		case "_CAT":
			onAddList(pageURL, "");
			console.log(`Next page: ${pageFullLink}`);
			break;
		case "_DWN":
			console.log(`Downloading HTML from: https://github.com/${pageURL}`);
			onHTMLDownload("https://github.com/" + pageURL);
			return; // Exit function as no further processing is needed
		case "_EXT":
			console.log(`Opening external link: https://${atob(pageURL)}`);
			window.open("https://" + atob(pageURL), "_blank");
			return; // Exit function as no further processing is needed
		case "_GIT":
			pageFullLink = "./assets/embeds/htmlPreview.html?https://github.com/" + atob(pageURL);
			console.log(`Git link: ${pageFullLink}`);
			break;
		case "_RAW":
            const textarea = document.createElement('textarea');
            textarea.value = pageURL;
            document.body.appendChild(textarea);
            textarea.select();
            textarea.setSelectionRange(0, 99999); // For mobile devices
            document.execCommand('copy');
            document.body.removeChild(textarea);
			console.log(`RAW link copied: ${pageURL}`);
			break;
		case "_REG":
			pageFullLink = "https://" + atob(pageURL);
			console.log(`Regular link: ${pageFullLink}`);
			break;
		case "_RSK":
			pageFullLink = "http://" + atob(pageURL);
			console.log(`Unsafe link: ${pageFullLink}`);
			break;
		case "_SLF":
			pageFullLink = rv3Root + pageURL;
			console.log(`Self link: ${pageFullLink}`);
			break;
		default:
			console.warn(`Unknown pageType: ${pageType}`);
			return; // Exit function for unknown pageType
	}

	// Determine the action based on `localStorage.rats_pageOpenType`
	if (pageType !== "_RAW") {
		if (localStorage.rats_pageOpenType === "embed") {
			console.log(`Opening link in new tab: ${pageFullLink}`);
			onNewTabOpen(pageFullLink);
		} else {
			console.log(`Opening link in self-insert: ${pageFullLink}`);
			onSelfInsertOpen(pageFullLink);
		}
	}
}



function onSelfInsertOpen(pageURL, pageType) {

}

	// Open New Window with Contents
function onNewTabOpen(pageURL) {
	const blank = window.open(); // Window
	blank.document.body.style.margin = "0";
	blank.document.body.style.height = "100vh";
	var favicon = blank.document.createElement("link"); // Tab Info
	favicon.rel = "shortcut icon";
	favicon.pageType = "image/png";
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		favicon.href = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAylJREFUWEfFV8FV4zAQlaWIM8JgrqGChQoWOmArACpYqCChAkgFgQqgA+iAbAXkirEj32VJ+8ZYfrIi2THsPvReTtFo/syfPzOO0Def6Jv9o0EAOOfHUqpTrdFPreUYIbRdB1CMRqOFUvoPIfiRMfa8aWAbAcg4P1dCThBS4HSTs6SUThlj932XOwFwzsda63lZlsd9DwX+ByAnjLFlyD4IgHN+JoS4tdL8SQyooJReMMYefQ94AXDOT4UQD5/16LOjlJ77KPECSNPsdQDfm+KETBy5dIQycCmEuAm8XGitZ1tbWwuEEPyGnIIxVtgGwRpYrVZPbvFhTGaEYKju1iNDELh3WwDyPJ/HcXwBl0DzQognY0ApvWKMQVFWh3O+LYQYU0qhFyxcUGAfAmb3iQaAcVjLpmokq9XqoSzLU6319f7+/tQ4VkpNpJTntkIIIXcY42vDcZblt0rJ34GCBGlWPhoAlgFoF4qlgD5Qluphby8+qp2PhZBPHQVq20KGXn0yBip3d+PLFgCbczviNE0PkySpii3Lsjul1FkX54SQ2ziOr+DO29vbNIqiyRrvEVmYoJoMpGnK7d5OKT2wea05hzt9B+RW2Xb0kyJJEtbKQJqm2n4ZODUF6SvKHhRHkDWgsKZh7XqSJFXwdgZaAOBPuyCBCoTQS1/4tt1QADYFlZ/RaPS8s7NzYsnOW1QuKEopqyloSdm6t07B+3v+orWEKFvH7uFd0jJGNnWhorUD88nQxeBIS770yLAZv6GZ4pWh2/mcgmykBbxKKaeOHAuMyb3dpjnnEyFE1bw8WV1vRHCpawr6WjFC6FAIAbJbOpINVj9CaJkkyYEB1ZoFH6uXmIcqvV6zrvuU0NWw3L1gbRr6pqDjcEkIecYYw77XrFpmBvTItRV9qw8YJ7V2Qe9m4+0LGPoFdL4KTAeNgxaSjVeyluw6KKSU/vLthV1LKYCAeujKRLP1fmTOOymHL6VtOsLj1y6oPM9vpJTViDUHGk4URbARD1/L7YcCHyZNQXl6/r/5MHGrz3yaYRz9iKJoZjiFpqO1Pv5vn2a9MvjChY2+Db/wfq/pX4xaFj/LMAGJAAAAAElFTkSuQmCC";
	} else {
		favicon.href = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAZlBMVEUAAAA4QEBAQEA8QEA8QEM8QEM8QEI8QEM4QEg9QEM8QEQ+QEM7QEM9QEI9QEM7QEM6QEA6QEI7QEM7QEI9QEI7QEI8QEI9QEQ8QEE8QEI8QEQ8QEQ8QEQ8QEM6QEU7QEQ8QEI8QEPSI5agAAAAIXRSTlMAIBBAkL/v7yBQQF/f39+fMGCg349wgI+Qz89/gK8wcH9t5kdPAAABEklEQVR42q3SBZLDMBQDUJlhy8yt7n/Jre3YgclwX7mBLyXGTyl9c6QzWmHOdsVm8Ycpbziy8Bj5c5xwAQOBM4ZjVpzhPJojM/sIYkCilyNqiXlrIJJ8A5AblfdSBbJIBTx5AuQhlVl7QDMre1y4kBBXwJes6ae0THSdfwI2wI6dM/BgckViSSfTfBb5ZyhfkPBrnbM0GwhmSGqcFxs12iHnMSjBCok4GHGrV16zs66BTanZui2Z7QWwGtSMrZtIx1ktgXvNknUHHlPVuEmNfXcqFFsWH1S7yYowLBZrJYQHNvUElbDstYRWzC65dRs5XpSWrWK5qTZgRCxbrgO/jMDUdlly+fTxhzlRmwDcjY74pX/TRjTEQIWxRAAAAABJRU5ErkJggg==";
	}
	blank.document.head.appendChild(favicon);
	blank.document.title = "New Tab";
	var iframe = blank.document.createElement("iframe"); // Iframe
	iframe.style.border = "none";
	iframe.style.width = "100%";
	iframe.style.height = "100%";
	iframe.style.margin = "0";
	iframe.src = pageURL;
	blank.document.body.appendChild(iframe);
}