javascript:document.cookie = "";
function hjK(S4p) {
	D3p = /; /g;
	return S4p.replace(D3p, "<br><br>");
}
if(document.cookie.length < 1) {
	alert("No cookie from this site!")
} else {
	with((na = open("", "", "")).document) {
		write(hjK(`Cookie for ${document.title.link(window.location.href)}, dd. ${new Date()}<hr>${document.cookie}`));
		close();
	}
}
/*4umi.com*/