javascript:(function() {
	var theId = window.location.href;
	var theOtherId = window.location.href;
	var YouTube = "youtube";
	var YouTube2 = "https://youtu.be/";
	var YouTube3 = "http://youtu.be/";
	var YouTube4 = "youtu.be/";
	if (theId.indexOf(YouTube) >= 0) {
		var string = theId.split("=");
		theId = string[1];
	}
	if (theId.indexOf(YouTube2) >= 0) {
		var sString = theId.split("/");
		theId = sString[3];
	}
	if (theId.indexOf(YouTube3) >= 0) {
		var ssString = theId.split("/");
		theId = ssString[3];
	}
	if (theId.indexOf(YouTube4) >= 0) {
		var sssString = theId.split("/");
		theId = sssString[3];
	}
	var newId = theId.match(/.{1,11}/g);
	var otherId = theOtherId.split("&");
	otherId.splice(0, 1);
	var otherPartId = `?${otherId[0]}`;
	otherId.splice(0, 1);
	for(i = 0; i < otherId.length; i++) {
		otherPartId += "&";
		otherPartId += otherId[i];
	}
	var customLink = `https://www.youtube-nocookie.com/embed/${newId[0] + otherPartId}&autoplay=1`;
	window.location.href = `${customLink}`;
})()