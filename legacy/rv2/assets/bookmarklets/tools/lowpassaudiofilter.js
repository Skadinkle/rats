javascript:alert("High pitched noise! Press 'H' to hide. By dragonmaster73101");
var s = "https://www.youtube.com/embed/MMNa8yqUEbE";
((function() {
	var a, b, c;
	c = s, b = document.createElement("iframe"), b.setAttribute("src", c), b.setAttribute("id", "rusic-modal"), b.setAttribute("style", "position: fixed; z-index: 999999; width: 400px; height: 270px; left: 10px; top: 10px; border: 5px solid #009933; overflow: hidden; background-color: #ffffff;"), a = document.getElementsByTagName("body")[0], a.appendChild(b);
	window.addEventListener('keydown', function(event) {
		if (event.key == 'h') {
			b.setAttribute("style", "left: -100000px;");
		}
	});
})).call(this);