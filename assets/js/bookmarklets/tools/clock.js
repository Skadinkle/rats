javascript:var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function(a) {
	return a.raw = a;
};
$jscomp.createTemplateTagFirstArgWithRaw = function(a,c) {
	a.raw = c;
	return a;
};
function showTime() {
	var a = new Date, c = 12 < a.getHours()?a.getHours() - 12:a.getHours(), d = 10 > a.getMinutes()?"0" + a.getMinutes():a.getMinutes(), b = 10 > a .getSeconds()?"0" + a.getSeconds():a.getSeconds();
	a = 12 <= a.getHours()?"PM":"AM";
	time = `${c}:${d}:${b} ${a}`;
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;
	setTimeout(showTime, 1E3);
	b = new Date;
	c = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")[b.getDay()];
	d = "January February March April May June July August September October November December".split(" ")[b.getMonth()];
	a = b.getDate();
	b = b.getFullYear();
	a = c + `, ${d} ${a}, ${b}`;
	document.getElementById("MyDateDisplay").textContent = a;
	document.getElementById("MyDateDisplay").innerText = a;
}
var div2 = document.createElement("div2");
div2.id = "MyDateDisplay";
div2.className = "date";
var div = document.createElement("div");
div.id = "MyClockDisplay";
div.className = "clock";
document.body.appendChild(div);
document.body.appendChild(div2);
showTime();
var style = document.createElement("style");
style.type = "text/css";
style.innerHTML = "\nbody {\n\n}\n.clock {\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.725);\n  position: fixed;\n  font-size: 20px;\n  font-weight: bold;\n  font-family: Orbitron;\n  text-align: center;\n  color: rgba(23, 212, 254, 1.0);\n  padding: 10px;\n  border-radius: 5px;\n  margin: 15px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.725);\n  top: 100px;\n}\n\n.date {\n  z-index: 1001;\n  background-color: rgba(0, 0, 0, 0.725);\n  position: fixed;\n  display: block;\n  font-size: 20px;\n  font-weight: bold;\n  font-family: Orbitron;\n  text-align: center;\n  color: rgba(23, 212, 254, 1.0);\n  padding: 10px;\n  border-radius: 5px;\n  margin: 15px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.725);\n  top: 42.5px;\n}\n";
document.getElementsByTagName("head")[0].appendChild(style);
void + 0;