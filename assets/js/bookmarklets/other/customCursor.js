javascript:var c = prompt("What Cursor Do You Want?\n\nCursor Options\n\nnone, alias, all-scroll, auto, cell, col-resize, copy, e-resize, help, not-allowed, progress, grabbing. \n\nBe Sure You Write The Cursor You Want Exactly How It Is Written!");
(function() {
	var x = document.getElementsByTagName("*");
	for (i = 0; i < x.length; i++) {
		x[i].style.cursor = c;
	};
}());