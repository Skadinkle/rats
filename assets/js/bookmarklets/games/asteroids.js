javascript:var s = document.createElement('script');
s.type = "text/javascript";
s.onerror = function(e) {
	alert("Failed to load the script. The site's Content Security Policy might be blocking it. Feel free to try again.");
}
document.body.appendChild(s);
s.src = "https://blog.roysolberg.com/js/dom2.min.js";
void(0);