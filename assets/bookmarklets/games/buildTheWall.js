javascript:t = document.title;
document.title = "Loading...";
r = new XMLHttpRequest();
r.onload = function(e) {
	eval(e.currentTarget.responseText);
};
r.open("GET", "https://plainsightcollection.github.io/web/wallball/ldr.js", true);
r.send();
undefined;