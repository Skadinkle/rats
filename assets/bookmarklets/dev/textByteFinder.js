javascript:void function() {
	WebFontConfig = {
		google:{
			families:["Quicksand::latin"]
		}
	};
	var e = document.createElement("script");
	e.src = "https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", e.type = "text/javascript", e.async = "true";
	var t = document.getElementsByTagName("script")[0];
	t.parentNode.insertBefore(e, t);
	var n = document.createElement("div"), a = document.createElement("textarea");
	a.id = "output", n.style.right = "5%", n.style.top = "5%", n.style.zIndex = "10000", n.style.position = "fixed", n.style.fontFamily = "Quicksand", n.style.fontWeight = "bolder", n.style.background = "black", n.style.color = "white", n.style.padding = "30px", n.appendChild(a);
	var o = document.createElement("p");
	o.innerHTML = '<span id="count"><em>0</em></span> Bytes', n.appendChild(o), document.body.appendChild(n), a.addEventListener("keyup", function() {
		var e = a.value, t = e.split(""), n = t.length;
		document.getElementById("count").innerHTML = n;
	})
}();