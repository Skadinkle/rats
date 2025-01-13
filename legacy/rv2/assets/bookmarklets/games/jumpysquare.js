javascript:alert("--JUMPY SQUARE--\nRules: Press the up arrow to dodge the red squares and get points! Jump speeds up at 5 points. Please check out my Github profile and star some resporitories. Thanks!");
javascript:(function() {
	var me = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(me);
	me.style.position = 'fixed';
	me.style.bottom = '0px';
	me.style.right = '0px';
	me.style.margin = '0px';
	me.style.paddingTop = '0px';
	me.style.width = '1366px';
	me.style.height = '20px';
	me.style.zIndex = 10000;
	me.style.opacity = 0.8;
	me.style.color = 'white';
	me.style.backgroundColor = 'black';
	me.style.border = '0px solid black';
	me.style.textAlign = 'center';
	me.style.cursor = 'pointer';
	me.id = 'me';
	me.style.display = 'circle';
	me.innerText = 'By dragonmaster73101';
	document.getElementById('me').addEventListener('click', function() {
		window.open('https://github.com/dragon731012');
	});
}());
var xpos = 70;
var ypos = 400;
var enemyspeed = 8;
var enemyxpos = 1406;
var enemyypos = 420;
var jumping = 0;
var speedallowed = 1;
var playerspeed = 2.5;
var speedup = 0;
var enemywidth = 0;
var scorecount = 0;
function makeyou() {
	var you = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(you);
	you.style.position = 'fixed';
	you.style.top = '' + ypos + 'px';
	you.style.left = '' + xpos + 'px';
	you.style.margin = '10px';
	you.style.paddingTop = '10px';
	you.style.width = '70px';
	you.style.height = '70px';
	you.style.zIndex = 10000;
	you.style.opacity = 1;
	you.style.color = 'black';
	you.style.backgroundColor = 'black';
	you.style.border = '0px solid white';
	you.style.textAlign = 'center';
	you.id = 'you';
	you.style.display = 'block';
	function goup() {
		if (jumping == 0) {
			setInterval(function() {
				if (jumping == 0) {
					if (ypos != 220) {
						if (jumping == 0) {
							ypos = ypos - playerspeed;
							you.style.top = '' + ypos + 'px';
						}
					} else {
						jumping = 1;
						return;
					}
				}
				if (jumping == 1) {
					if (ypos != 400) {
						if (jumping == 1) {
							ypos = ypos + playerspeed;
							you.style.top = '' + ypos + 'px';
						}
					} else {
						speedallowed = 1;
						return;
					}
				}
			}, 15);
		}
	}
	goup();
	window.addEventListener("keydown", function(event) {
		if (event.key == "ArrowUp") {
			if (ypos == 400) {
				speedallowed = 0;
				jumping = 0;
			}
		}
	});
}
makeyou();
(function() {
	var ground = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(ground);
	ground.style.position = 'fixed';
	ground.style.top = '480px';
	ground.style.left = '0px';
	ground.style.margin = '0px';
	ground.style.paddingTop = '10px';
	ground.style.width = '999999px';
	ground.style.height = '5px';
	ground.style.zIndex = 10000;
	ground.style.opacity = 1;
	ground.style.color = 'gray';
	ground.style.backgroundColor = 'gray';
	ground.style.border = '0px solid white';
	ground.style.textAlign = 'center';
	ground.id = 'ground';
	ground.style.display = 'block';
}());
function makeenemy() {
	(function() {
		var enemy = document.createElement('div');
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(enemy);
		enemywidth=Math.floor(Math.random()*(160-40+1)+160);
		enemy.style.position = 'fixed';
		enemy.style.top = '' + enemyypos + 'px';
		enemy.style.left = '' + enemyxpos + 'px';
		enemy.style.margin = '0px';
		enemy.style.paddingTop = '10px';
		enemy.style.width = ''+enemywidth+'px';
		enemy.style.height = '60px';
		enemy.style.zIndex = 10000;
		enemy.style.opacity = 1;
		enemy.style.color = 'red';
		enemy.style.backgroundColor = 'red';
		enemy.style.border = '0px solid white';
		enemy.style.textAlign = 'center';
		enemy.id = 'enemy';
		enemy.style.display = 'block';
	}());
}
makeenemy();
function move() {
	document.getElementById("enemy");
	enemyxpos = enemyxpos - enemyspeed;
	enemy.style.left = '' + enemyxpos + 'px';
	if (enemyxpos <= -160) {
		speedup = speedup + 1;
		scorecount = scorecount + 1;
		score.innerText = 'Score: ' + scorecount + '';
		document.getElementById("enemy");
		enemy.parentNode.removeChild(enemy);
		enemyxpos = 1406;
		if (speedup < 8) {
			enemyspeed = enemyspeed + 1;
		}
		makeenemy();
	}
}
setInterval(move, 20);
(function() {
	var score = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(score);
	score.style.position = 'fixed';
	score.style.top = '0px';
	score.style.left = '0px';
	score.style.margin = '10px';
	score.style.paddingTop = '0px';
	score.style.width = '100px';
	score.style.height = '30px';
	score.style.zIndex = 10000;
	score.style.opacity = 1;
	score.style.color = 'black';
	score.style.backgroundColor = 'white';
	score.style.border = '4px solid black';
	score.style.textAlign = 'center';
	score.id = 'score';
	score.innerText='score: ' + scorecount + '';
	score.style.display = 'block';
}());
function colliding() {
	if (xpos < enemyxpos + enemywidth && xpos + 70 > enemyxpos && ypos < enemyypos + 60 && ypos + 70 > enemyypos) {
		alert("Game over. Your score was " + scorecount + ".");
		xpos = xpos - 99999999999999999999999999999999999999999999999999999999999999999999999;
		clearInterval(colliding);
		clearInterval(tick);
		document.getElementById("enemy");
		enemy.parentNode.removeChild(enemy);
		document.getElementById("you");
		you.parentNode.removeChild(you);
		document.getElementById("ground");
		ground.parentNode.removeChild(ground);
		document.getElementById("me");
		me.parentNode.removeChild(me);
		document.getElementById("score");
		score.parentNode.removeChild(score);
	}
}
function tick() {
	if (speedup >= 5) {
		if (speedallowed == 1) {
			playerspeed = 5;
		}
	}
}
setInterval(colliding, 5);
setInterval(tick, 15);