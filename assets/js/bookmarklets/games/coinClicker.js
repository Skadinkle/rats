javascript:alert("Coin Clicker.\nRules: Click the coins as fast as possible before the time runs out!\nErrors: Sorry, there is a bug where a coin appears and cannot be clicked. Im trying to fix that. If it happens, just start over.");
var x = 0;
var points = 0;
var timer = 31;
var timermax = 31;
var op = "block";
(function () {
	var score = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(score);
	score.style.position = "fixed";
	score.style.top = "350px";
	score.style.left = "0";
	score.style.margin = "10px";
	score.style.paddingTop = "0";
	score.style.width = "150px";
	score.style.height = "30px";
	score.style.zIndex = 10000;
	score.style.opacity = 1;
	score.style.color = "black";
	score.style.backgroundColor = "white";
	score.style.border = "5px solid black";
	score.style.textAlign = "center";
	score.id = "score";
	score.style.display = op;
	score.innerText = `Score: ${points}`;
}());
(function () {
	var me = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(me);
	me.style.position = "fixed";
	me.style.top = "390px";
	me.style.left = "0";
	me.style.margin = "10px";
	me.style.paddingTop = "0";
	me.style.width = "340px";
	me.style.height = "30px";
	me.style.zIndex = 10000;
	me.style.opacity = 1;
	me.style.color = "black";
	me.style.backgroundColor = "white";
	me.style.border = "5px solid black";
	me.style.textAlign = "center";
	me.id = "me";
	me.style.display = op;
	me.innerText = "By dragon73101";
	document.getElementById("me").addEventListener("click", function() {
		window.open("https://github.com/dragon731012");
	});
}());
(function () {
	var elem = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(elem);
	elem.style.position = "fixed";
	elem.style.top = "0";
	elem.style.left = "0";
	elem.style.margin = "10px";
	elem.style.paddingTop = "10px";
	elem.style.width = "340px";
	elem.style.height = "340px";
	elem.style.zIndex = 10000;
	elem.style.opacity = 1;
	elem.style.color = "green";
	elem.style.backgroundColor = "green";
	elem.style.border = "0 solid white";
	elem.style.textAlign = "center";
	elem.id = "myTimer";
	elem.style.display = op;
}());
function mole(x, y) {
	(function () {
		var elem = document.createElement("div");
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(elem);
		elem.style.position = "fixed";
		elem.style.top = `${y}px`;
		elem.style.left = `${x}px`;
		elem.style.margin = "10px";
		elem.style.paddingTop = "0px";
		elem.style.width = "40px";
		elem.style.height = "40px";
		elem.style.zIndex = 10000;
		elem.style.opacity = 1;
		elem.style.color = "yellow";
		elem.style.backgroundColor = "yellow";
		elem.style.border = "0px solid white";
		elem.style.textAlign = "center";
		elem.style.cursor = "pointer";
		elem.id = `coin${x}`;
		elem.style.display = op;
		document.getElementById(`coin${x}`).addEventListener("click", function() {
			points = points + 1;
			timermax = timermax - 2;
			var timer = timermax;
			if (timermax < 3) {
				var timermax = 2;
			}
			makecoin();
			elem.style.left = "-99999999999999999999999999999999999px";
			score.innerText = `Score: ${points}`;
		});
		x = x + 1;
	}());
}
function makecoin() {
	var rx = Math.floor(Math.random() * (300 - 0 + 1) + 0);
	var ry = Math.floor(Math.random() * (300 - 0 + 1) + 0);
	mole(rx, ry);
}
function check() {
	(function() {
		var time = document.createElement("div");
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(time);
		timer = timer - 1;
		if (timer < 0) {
			op = "none";
			alert(`Game over. Your score was ${points}.`);
			clearInterval(check);
			window.location.reload(1);
			timer = 99999999999999999999999999999999999;
		}
		time.style.position = "fixed";
		time.style.top = "350px";
		time.style.left = "160px";
		time.style.margin = "10px";
		time.style.paddingTop = "0";
		time.style.width = "180px";
		time.style.height = "30px";
		time.style.zIndex = 10000;
		time.style.opacity = 1;
		time.style.color = "black";
		time.style.backgroundColor = "white";
		time.style.border = "5px solid black";
		time.style.textAlign = "center";
		time.id = "time";
		time.style.display = op;
		time.innerText = `timer: ${timer}`;
	}());
}
makecoin();
setInterval(check, 1000);