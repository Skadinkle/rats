javascript:(function() {
	var me = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(me);
	me.style.position = "fixed";
	me.style.bottom = "0";
	me.style.right = "0";
	me.style.margin = "0";
	me.style.paddingTop = "0";
	me.style.width = "1366px";
	me.style.height = "20px";
	me.style.zIndex = 10000;
	me.style.opacity = .8;
	me.style.color = "white";
	me.style.backgroundColor = "black";
	me.style.border = "0 solid black";
	me.style.textAlign = "center";
	me.style.cursor = "pointer";
	me.id = "me";
	me.style.display = "circle";
	me.innerText = "By dragon73101";
	document.getElementById("me").addEventListener("click", function() {
		window.open("https://github.com/dragon731012");
	});
}());
var xmove = 1;
var startnum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
startnum = startnum / 10;
var ymove = startnum;
var xpos = 1366 / 2;
var ypos = 665 / 2;
var ballspeed = 3;
var p1ypos = 665 / 2;
var p1xpos = 80;
var p1ymove = 0;
var playerspeed = 6;
var p2ymove = 0;
var p2ypos = 665 / 2;
var p2xpos = 1366 - 80;
var ailevel = 400;
(function () {
	var ball = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(ball);
	ball.style.position = "fixed";
	ball.style.top = `${ypos}px`;
	ball.style.left = `${xpos}px`;
	ball.style.margin = "0";
	ball.style.paddingTop = "10px";
	ball.style.width = "30px";
	ball.style.height = "30px";
	ball.style.zIndex = 10000;
	ball.style.opacity = 1;
	ball.style.color = "white";
	ball.style.backgroundColor = "white";
	ball.style.textAlign = "center";
	ball.style.cursor = "pointer";
	ball.style.border = "2px solid black";
	ball.id = "ball";
	ball.style.display = "block";
	ball.innerText = "";
}());
(function () {
	var p1 = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(p1);
	p1.style.position = "fixed";
	p1.style.top = `${p1ypos}px`;
	p1.style.left = `${p1xpos}px`;
	p1.style.margin = "0";
	p1.style.paddingTop = "10px";
	p1.style.width = "20px";
	p1.style.height = "100px";
	p1.style.zIndex = 10000;
	p1.style.opacity = 1;
	p1.style.color = "white";
	p1.style.backgroundColor = "white";
	p1.style.textAlign = "center";
	p1.style.cursor = "pointer";
	p1.style.border = "2px solid black";
	p1.id = "p1";
	p1.style.display = "block";
	p1.innerText = "";
}());
(function () {
	var p2 = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(p2);
	p2.style.position = "fixed";
	p2.style.top = `${p2ypos}px`;
	p2.style.left = `${p2xpos}px`;
	p2.style.margin = "0";
	p2.style.paddingTop = "10px";
	p2.style.width = "20px";
	p2.style.height = "100px";
	p2.style.zIndex = 10000;
	p2.style.opacity = 1;
	p2.style.color = "white";
	p2.style.backgroundColor = "white";
	p2.style.textAlign = "center";
	p2.style.cursor = "pointer";
	p2.style.border = "2px solid black";
	p2.id = "p2";
	p2.style.display = "block";
	p2.innerText = "";
}());
function move() {
	if (p2ymove == 1) {
		if (p2ypos + playerspeed <= 565) {
			p2ypos = p2ypos + playerspeed;
			p2.style.top = `${p2ypos}px`;
		}
	}
	if (p2ymove == -1) {
		if (p2ypos - playerspeed >= 0) {
			p2ypos = p2ypos - playerspeed;
			p2.style.top = `${p2ypos}px`;
		}
	}
	if (p1ymove == 1) {
		if (p1ypos + playerspeed <= 565) {
			p1ypos = p1ypos + playerspeed;
			p1.style.top = `${p1ypos}px`;
		}
	}
	if (p1ymove == -1) {
		if (p1ypos - playerspeed >= 0) {
			p1ypos = p1ypos - playerspeed;
			p1.style.top = `${p1ypos}px`;
		}
	}
	if (xmove == 1) {
		xpos = xpos + ballspeed;
		ball.style.top = `${ypos}px`;
		ball.style.left = `${xpos}px`;
	}
	if (xmove == -1) {
		xpos = xpos - ballspeed;
		ball.style.top = `${ypos}px`;
		ball.style.left = `${xpos}px`;
	}
	if (ymove == -1) {
		ypos = ypos - ballspeed;
		ball.style.top = `${ypos}px`;
		ball.style.left = `${xpos}px`;
	}
	if (ymove == 1) {
		ypos = ypos + ballspeed;
		ball.style.top = `${ypos}px`;
		ball.style.left = `${xpos}px`;
	}
	if (ymove > -1 && ymove < 0) {
		ypos = ypos - ymove * 3;
		ball.style.top = `${ypos}px`;
		ball.style.left = `${xpos}px`;
	}
	if (ymove < 1 && ymove > 0) {
		ypos = ypos - ymove * 3;
		ball.style.top = `${ypos}px`;
		ball.style.left = `${xpos}px`;
	}
}
function bounce() {
	if (xpos >= 1336) {
		xpos = -99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
		clearInterval(bounce);
		ball.parentNode.removeChild(ball);
		p1.parentNode.removeChild(p1);
		p2.parentNode.removeChild(p2);
		me.parentNode.removeChild(me);
		clearInterval(move);
		clearInterval(movep2);
		clearInterval(colliding);
		alert("Game over. You win!");
	}
	if (xpos <= 0) {
		xpos = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
		clearInterval(bounce);
		ball.parentNode.removeChild(ball);
		me.parentNode.removeChild(me);
		p1.parentNode.removeChild(p1);
		p2.parentNode.removeChild(p2);
		clearInterval(move);
		clearInterval(movep2);
		clearInterval(colliding);
		alert("Game over. You lose!");
	}
	if (ypos >= 635) {
		ymove = ymove * -1;
	}
	if (ypos <= 0) {
		ymove = ymove *-1;
	}
}
function colliding() {
	if (xpos < p1xpos + 20 && xpos + 30 > p1xpos && ypos < p1ypos + 100 && ypos + 30 > p1ypos) {
		xmove = xmove * -1;
		ballspeed = ballspeed + 0.5;
	}
	if (xpos < p2xpos + 20 && xpos + 30 > p2xpos && ypos < p2ypos + 100 && ypos + 30 > p2ypos) {
		xmove = xmove * -1;
		ballspeed = ballspeed + 0.5;
	}
}
window.addEventListener("keydown", function(event) {
	if (event.key == "ArrowUp") {
		p1ymove = -1;
	}
});
window.addEventListener("keyup", function(event) {
	if (event.key == "ArrowUp") {
		p1ymove = 0;
	}
});
window.addEventListener("keydown", function(event) {
	if (event.key == "ArrowDown") {
		p1ymove = 1;
	}
}); window.addEventListener("keyup", function(event) {
	if (event.key == "ArrowDown") {
		p1ymove = 0;
	}
});
function movep2() {
	if (xpos > 683) {
		if (ypos < p2ypos) {
			if (p2ypos != ypos) {
				p2ymove = -1;
			}
		}
		if (ypos > p2ypos) {
			if (p2ypos != ypos) {
				p2ymove = 1;
			}
		}
	}
	if (xpos <= 683) {
		p2ymove = 0;
	}
}
setInterval(colliding, 15);
setInterval(move, 15);
setInterval(bounce, 15);
setInterval(movep2, 5);