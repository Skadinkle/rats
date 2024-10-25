javascript:alert("--DODGYSQUARE--\nRules: Use the left and right arrow keys to dodge the red squares. The red squares get really fast, so be careful!");
var xpos = 80;
var ypos = 350;
var enemyxpos = 0;
var enemyypos = -120;
var enemyspeed = 2.5;
var playerspeed = 4;
var scorecount = 0;
var left = 0;
var right = 0;
(function () {
	var bg = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(bg);
	bg.style.position = "fixed";
	bg.style.top = "0px";
	bg.style.left = "0px";
	bg.style.margin = "0px";
	bg.style.paddingTop = "10px";
	bg.style.width = "300px";
	bg.style.height = "500px";
	bg.style.zIndex = 10000;
	bg.style.opacity = 1;
	bg.style.color = "white";
	bg.style.backgroundColor = "black";
	bg.style.border = "0px solid white";
	bg.style.textAlign = "center";
	bg.id = "bg";
	bg.style.display = "block";
	bg.innerText = "";
}());
(function () {
	var me = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(me);
	me.style.position = "fixed";
	me.style.top = "535px";
	me.style.left = "0px";
	me.style.margin = "0px";
	me.style.paddingTop = "5px";
	me.style.width = "300px";
	me.style.height = "35px";
	me.style.zIndex = 10000;
	me.style.opacity = 1;
	me.style.color = "black";
	me.style.backgroundColor = "white";
	me.style.border = "4px solid black";
	me.style.textAlign = "center";
	me.id = "me";
	me.style.display = "block";
	me.innerText = "By dragon73101";
	document.getElementById("me").addEventListener("click", function() {
		window.open("https://github.com/dragon731012");
	});
}());
(function () {
	var score = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(score);
	score.style.position = "fixed";
	score.style.top = "500px";
	score.style.left = "0px";
	score.style.margin = "0px";
	score.style.paddingTop = "5px";
	score.style.width = "300px";
	score.style.height = "35px";
	score.style.zIndex = 10000;
	score.style.opacity = 1;
	score.style.color = "black";
	score.style.backgroundColor = "white";
	score.style.border = "4px solid black";
	score.style.textAlign = "center";
	score.id = "score";
	score.style.display = "block";
	score.innerText = "Score: " + scorecount + "";
}());
(function () {
	var you = document.createElement("div");
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(you);
	you.style.position = "fixed";
	you.style.top = "" + ypos + "px";
	you.style.left = "" + xpos + "px";
	you.style.margin = "0px";
	you.style.paddingTop = "10px";
	you.style.width = "70px";
	you.style.height = "120px";
	you.style.zIndex = 10000;
	you.style.opacity = 1;
	you.style.color = "blue";
	you.style.backgroundColor = "blue";
	you.style.border = "0px solid white";
	you.style.textAlign = "center";
	you.id = "you";
	you.style.display = "block";
	you.innerText = "";
	function mover() {
		if (left == 1) {
			if (xpos - 12 >= 0) {
				xpos = xpos - playerspeed;
				you.style.left = "" + xpos + "px";
			}
		}
		if (right == 1) {
			if (xpos + 10 <= 230) {
				xpos = xpos + playerspeed;
				you.style.left = "" + xpos + "px";
			}
		}
	}
	setInterval(mover,5);
	window.addEventListener("keydown", function(event) {
		if(event.key == "ArrowLeft") {
			left = 1;
		}
	});
	window.addEventListener("keyup", function(event) {
		if(event.key == "ArrowLeft") {
			left = 0;
		}
	});
	window.addEventListener("keydown", function(event) {
		if(event.key == "ArrowRight") {
			right = 1;
		}
	});
	window.addEventListener("keyup", function(event) {
		if(event.key == "ArrowRight") {
			right = 0;
		}
	});
}());
function makeenemy() {
	(function () {
		var enemy = document.createElement("div");
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(enemy);
		enemyxpos=Math.floor(Math.random() * (230 - 0 + 1) + 0);
		enemyypos=-120; enemy.style.position = "fixed";
		enemy.style.top = "" + enemyypos + "px";
		enemy.style.left = "" + enemyxpos + "px";
		enemy.style.margin = "0px";
		enemy.style.paddingTop = "10px";
		enemy.style.width = "70px";
		enemy.style.height = "120px";
		enemy.style.zIndex = 10000;
		enemy.style.opacity = 1;
		enemy.style.color = "red";
		enemy.style.backgroundColor = "red";
		enemy.style.border = "0px solid white";
		enemy.style.textAlign = "center";
		enemy.id = "enemy";
		enemy.style.display = "block";
		enemy.innerText = "";
		function enemymove() {
			enemyypos = enemyypos + enemyspeed;
			enemy.style.top = "" + enemyypos + "px";
			if (enemyypos > 380) {
				enemy.parentNode.removeChild(enemy);
				scorecount = scorecount + 1;
				score.innerText = "score: " + scorecount + "";
				makeenemy();
			}
		}
		setInterval(enemymove, 50);
	}());
}
makeenemy();
function colliding() {
	if (xpos < enemyxpos + 70 && xpos + 70 > enemyxpos && ypos < enemyypos + 120 && ypos + 120 > enemyypos) {
		clearInterval(colliding);
		document.getElementById("enemy");
		enemy.parentNode.removeChild(enemy);
		document.getElementById("you");
		you.parentNode.removeChild(you);
		document.getElementById("bg");
		bg.parentNode.removeChild(bg);
		document.getElementById("score");
		score.parentNode.removeChild(score);
		document.getElementById("me");
		me.parentNode.removeChild(me);
		alert("Game over. Your score was " + scorecount + ".");
	}
}
setInterval(colliding, 5);