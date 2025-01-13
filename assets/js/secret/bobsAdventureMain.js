/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	ADD ASSETS  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
onCutscene(true, .5);
var newContent = document.createElement("div");
newContent.id = "bobsAdventure";
newContent.innerHTML = `
	<link href="./assets/css/secret/bobsAdventureMain.css" rel="stylesheet" type="text/css"/>
	<canvas id="stageCanvas" style="filter: url(#bendInward)"></canvas>
	<svg width="0" height="0">
		<filter id="bendInwards">
			<feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="3" result="turbulence" />
			<feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" />
		</filter>
	</svg>
	<canvas id="myCanvas" width="400" height="400"></canvas>
`;
var targetImg = document.getElementById("overlay");
targetImg.parentNode.insertBefore(newContent, targetImg);

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	MUSIC  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
function onPlaySong(songName, looping, loopPoint) {
	const audio = new Audio(`./assets/music/${songName}`);
	audio.currentTime = loopPoint;
	audio.addEventListener("timeupdate", () => {
		if (audio.currentTime >= audio.duration - .3) {
			audio.currentTime = loopPoint;
			audio.play();
		}
	});
	audio.play();
}
onPlaySong("dewdropper.ogg", true, 0);
/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	STAGE  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const canvas = document.getElementById("stageCanvas");
const ctx = canvas.getContext("2d");
const tileset = {
	topLeft: [0, 0, 16, 16],
	topMid: [16, 0, 16, 16],
	topRight: [32, 0, 16, 16],
	midLeft: [0, 16, 16, 16],
	midMid: [16, 16, 16, 16],
	midRight: [32, 16, 16, 16],
	botLeft: [0, 32, 16, 16],
	botMid: [16, 32, 16, 16],
	botRight: [32, 32, 16, 16],
	columnTop: [48, 0, 16, 16],
	columnMid: [48, 16, 16, 16],
	columnBottom: [48, 32, 16, 16],
	barLeft: [64, 0, 16, 16],
	barMid: [80, 0, 16, 16],
	barRight: [96, 0, 16, 16],
	cornerTopRight: [64, 16, 16, 16],
	cornerTopLeft: [80, 16, 16, 16],

	single: [64, 32, 16, 16],
	spikes: [80, 32, 16, 16],
	spawn: [48, 32, 16, 16],
	enemy: [64, 32, 16, 16],

	rampSingleTopLeft: [0, 64, 16, 16],
	rampSingleTopRight: [16, 64, 16, 16],
	rampSingleBottomLeft: [0, 48, 16, 16],
	rampSingleBottomRight: [16, 48, 16, 16],

	crateTopLeft: [0, 80, 16, 16],
	crateTopRight: [16, 80, 16, 16],
	crateBottomLeft: [0, 96, 16, 16],
	crateBottomRight: [16, 96, 16, 16],
};
const tilesetbg = {
	bgLeft: [128, 0, 16, 16],
	bgMid: [144, 0, 16, 16],
	bgRight: [160, 0, 16, 16],
}
const stage01 = [
/*01*/	"MMMMMM   RMMMMMMMM      MMMMMMMMMMR       MMMMMR                  ",
/*02*/	"MMMMMR    RMMMMMMMR     MMMMMMMMMMMR      MMMMR                   ",
/*03*/	"MMMMR       RMMMMMMMM   MMMMMR   RMMMR    MMM                     ",
/*04*/	"MMM          RMMMMMMMR RMMMMR     RMMMR  RMMM                     ",
/*05*/	"MMM            RMMMMMMMMMMM         RMMMMMMMMCC                   ",
/*06*/	"MMM             RMMMMMMMMMM          RMMMMMMMccss                 ",
/*07*/	"MMM               RMMMMMMMM            RMMMMMMMMMMM               ",
/*08*/	"MMM                RMMMMMMM             RMMMMMMMMMM               ",
/*09*/	"MMMMR                RMMMMMMR                   MMM   MR          ",
/*10*/	"MMMMMR                RMMMMMMR                  RMR   MMR         ",
/*11*/	"MMMMMMMMMMMR            MMMMMM         MMR            MMMMMM      ",
/*12*/	"MMMMMMMMMMMM            MMMR          RMMM            RMMMMR      ",
/*13*/	"MMMMMMMMMMMR         MMMMR        RMMMMMMM                      RM",
/*14*/	"MMMMMMMMMMR          RMMR        RMMMMMMMM                     RMM",
/*15*/	"MMMMR          MMR    RM         MMMR                        RMMMM",
/*16*/	"MMMM           RMM             ssMMM                        RMMMMM",
/*17*/	"MMMR            RM         MMMMMMMMM    RMMMM   MMM   MMM   MMMMMM",
/*18*/	"MMM                       sMMMMMMMMR   RMMMMM   RMR   RMR   MMMMMM",
/*19*/	"MMM                  MMMMMMMMMR        MMMMMR               RMMMMM",
/*20*/	"MMM                  MMMMMMMMM         MMMMR                 RMMMM",
/*21*/	"MMMMMMMMMMMM   RMMMMMMMMR RMMM     CC                             ",
/*22*/	"MMMMMMMMMMMM   MMMMMMMMM   MMM     cc                             ",
/*23*/	"MMMR    RMMM   MMMR RMMM   MMMMMMMMMMMMMMMMMMMMMMMM               ",
/*24*/	"MMM      MMM   MMM   MMM   MMMR RMMMMMMMMMMMMMMMMMM               ",
/*25*/	"MMM      MMMMMMMMM   MMM   MMM   MMMR RMMMR    RMMM   MMMMMMMMMMMM",
/*26*/	"MMM      MMMMMMMMM   MMM   MMM   MMM   MMM      MMMsssMMMMMMMMMMMM",
/*27*/	"MMM      MMMR RMMM   MMM   MMM   MMM   MMM      MMMMMMMMMR    RMMM",
/*28*/	"MMM      MMM   MMM   MMM   MMM   MMM   MMM      MMMMMMMMM      MMM"
];
const stage01bg = [
/*01*/	"                 MMMMMMMM                                         ",
/*02*/	"                 MMMMMMMM                                         ",
/*03*/	"                  MMMMMMM                                         ",
/*04*/	"                   MMMMMM                                         ",
/*05*/	"                    MMMM                                          ",
/*06*/	"                                                                  ",
/*07*/	"                                                                  ",
/*08*/	"                     MMMM                                         ",
/*09*/	"                     MMMM                       MMM               ",
/*10*/	"                     MMMM                       MMM               ",
/*11*/	"                     MMMMMMMMM                  MMM   MMMMMMM     ",
/*12*/	"                     MMMMMMMMM                  MMM   MMMMMMM     ",
/*13*/	" MMMMMMMM            MMMMMMMMM                  MMM   MMMMMMM     ",
/*14*/	" MMMMMMMM              MMMMMMM     MMMMMMM      MMM   M    MM     ",
/*15*/	" MMMMMMMM      MM      MMM  MM     MMMMMMM      MMM   M    MM     ",
/*16*/	" MMMMM MM      MMM     MM  MMM     MMMMMMM      MMM   MMMMMMM     ",
/*17*/	" MMMM  MM      MMM     MMMMMMM     MM MMMM      MMM   MMMMMMM     ",
/*18*/	" MMMM  MM      MMM     MMMMMMMMMMMMMM MMMMMMM   MMM   MMM         ",
/*19*/	" MMMM  MM      MMM     MMMMMMMMMMMMMM MMMMMMM   MMM   MMM         ",
/*20*/	" MMMMMMMM      MMMMMMM MMMMM MMM  MMM MMMMMMM   MMM   MMM         ",
/*21*/	" MMMMMMMM      MMMMMMM MMMMM MMM  MMM MMMMMMM   MMM   MMM         ",
/*22*/	" MMMMM         MMM     MMMMM MMMMMMMMMMMMMMMM   MMMM  MMM         ",
/*23*/	" MMMMM     MMMMM       MMMMM MMMMMMMMMMMMMMMM   MMMMM MMM         ",
/*24*/	" MMMMM     MMMMM       MMMMM       MMMMM          MMMMMMM         ",
/*25*/	" MMMMM     MMMMM       MMMMM       MMMMM          MMMMMMM         ",
/*26*/	" MMMMM                 MMMMM       MMMMM          MMMMM           ",
/*27*/	" MMMMM                 MMMMM       MMMMM          MMMMM           ",
/*28*/	" MMMMM                 MMMMM       MMMMM                          "
]
const tileSize = 16;
const camZoom = 1.5;
const assetSize = tileSize * camZoom;
const camera = {
	x: 0,
	y: 0,
	width: canvas.width / camZoom,
	height: canvas.height / camZoom
};
const worldWidth = stage01[0].length * stage01[0].length * assetSize;
const worldHeight = stage01.length * assetSize;
const CAMERA_SMOOTHING = .125;
function updateCamera() {
	const targetX = Math.max(0, Math.min(playerX - camera.width / 4, worldWidth - camera.width));
	const targetY = Math.max(-100, Math.min(playerY - camera.height / 2, (worldHeight * 1.125) - camera.height) * .8);
	camera.x += (targetX - camera.x) * CAMERA_SMOOTHING;
	camera.y += (targetY - camera.y) * CAMERA_SMOOTHING;
}
const tileRotations = {};
function drawTile(tileType, x, y, tilesetToUse) {
	const [sx, sy, sw, sh] = tilesetToUse[tileType];
	const tileSize = assetSize;
	const key = `${x},${y}`;
	if (tileType === "midMid") {
		if (!(key in tileRotations)) {
			const rotations = [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2];
			tileRotations[key] = rotations[Math.floor(Math.random() * rotations.length)];
		}
		const rotation = tileRotations[key];
		ctx.save();
		ctx.translate((x * tileSize - camera.x) + tileSize / 2, (y * tileSize - camera.y) + tileSize / 2);
		ctx.rotate(rotation);
		ctx.drawImage(tilesImage, sx, sy, sw, sh, -tileSize / 2, -tileSize / 2, tileSize, tileSize);
		ctx.restore();
	} else {
		ctx.drawImage(tilesImage, sx, sy, sw, sh, (x * tileSize - camera.x), (y * tileSize - camera.y), tileSize, tileSize);
	}
}
function getBackgroundTileType(x, y) {
	if (x < 0 || x >= stage01bg[0].length || y < 0 || y >= stage01bg.length) {
		return null;
	}
	const tile = stage01bg[y][x];
	const left = x > 0 ? stage01bg[y][x - 1] : " ";
	const right = x < stage01bg[y].length - 1 ? stage01bg[y][x + 1] : " ";
	if (tile === "M") {
		if (left !== "M") return "bgLeft";
		if (right !== "M") return "bgRight";
		return "bgMid";
	}
	return null;
}
function getTileType(x, y, bg) {
	if (x < 0 || x >= stage01[0].length || y < 0 || y >= stage01.length) {
		return null;
	}
	const tile = stage01[y][x];
	if (tile === " ") return null;
	const top = y > 0 ? stage01[y - 1][x] : " ";
	const bottom = y < stage01.length - 1 ? stage01[y + 1][x] : " ";
	const left = x > 0 ? stage01[y][x - 1] : " ";
	const right = x < stage01[y].length - 1 ? stage01[y][x + 1] : " ";
	const topLeft = (y > 0 && x > 0) ? stage01[y - 1][x - 1] : " ";
	const topRight = (y > 0 && x < stage01[y].length - 1) ? stage01[y - 1][x + 1] : " ";
	const bottomLeft = (y < stage01.length - 1 && x > 0) ? stage01[y + 1][x - 1] : " ";
	const bottomRight = (y < stage01.length - 1 && x < stage01[y].length - 1) ? stage01[y + 1][x + 1] : " ";
	if (tile === "M") {
		const topEmpty = top !== "M" && top !== "R";
		const bottomEmpty = bottom !== "M" && bottom !== "R";
		const leftEmpty = left !== "M" && left !== "R";
		const rightEmpty = right !== "M" && right !== "R";
		const topLeftEmpty = topLeft !== "M" && topLeft !== "R";
		const topRightEmpty = topRight !== "M" && topRight !== "R";
		if (topEmpty && leftEmpty && bottomEmpty && rightEmpty) return "single";
		if (leftEmpty && topEmpty && bottomEmpty) return "barLeft";
		if (rightEmpty && topEmpty && bottomEmpty) return "barRight";
		if (topEmpty && bottomEmpty) return "barMid";
		if (topEmpty && leftEmpty && rightEmpty) return "columnTop";
		if (bottomEmpty && leftEmpty && rightEmpty) return "columnBottom";
		if (leftEmpty && rightEmpty) return "columnMid";
		if (topEmpty && leftEmpty) return "topLeft";
		if (topEmpty && rightEmpty) return "topRight";
		if (bottomEmpty && leftEmpty) return "botLeft";
		if (bottomEmpty && rightEmpty) return "botRight";
		if (topEmpty) return "topMid";
		if (bottomEmpty) return "botMid";
		if (leftEmpty) return "midLeft";
		if (rightEmpty) return "midRight";
		if (topLeftEmpty) return "cornerTopLeft";
		if (topRightEmpty) return "cornerTopRight";
		return "midMid";
	}
	if (tile === "C" || tile === "c") {
		if (top !== "C" && right !== "C") return "crateTopRight";
		if (top !== "C" && left !== "C") return "crateTopLeft";
		if (bottom !== "c" && right !== "c") return "crateBottomRight";
		if (bottom !== "c" && left !== "c") return "crateBottomLeft";
	}
	if (tile === "R") {
		const topEmpty = top !== "M" && top !== "R";
		const bottomEmpty = bottom !== "M" && bottom !== "R";
		const leftEmpty = left !== "M" && left !== "R";
		const rightEmpty = right !== "M" && right !== "R";
		if (bottomEmpty && rightEmpty) return "rampSingleTopLeft";
		if (bottomEmpty && leftEmpty) return "rampSingleTopRight";
		if (topEmpty && rightEmpty) return "rampSingleBottomLeft";
		if (topEmpty && leftEmpty) return "rampSingleBottomRight";
	}
	if (tile === "s") return "spikes";
	if (tile === "P") return "spawn";
	if (tile === "E") return "enemy";
	return null;
}
function drawBackground() {
	stage01bg.forEach((row, y) => {
		[...row].forEach((char, x) => {
			const tileType = getBackgroundTileType(x, y);
			if (tileType) {
				drawTile(tileType, x, y, tilesetbg); // Use tilesetbg for background
			}
		});
	});
}

function drawStage() {
	drawBackground(); // Draw the background first
	stage01.forEach((row, y) => {
		[...row].forEach((char, x) => {
			const tileType = getTileType(x, y, false);
			if (tileType) {
				drawTile(tileType, x, y, tileset); // Pass the main tileset here
			}
		});
	});
}

const tilesImage = new Image();
tilesImage.src = "./assets/images/secret/bobsAdventure/tileset.png";
tilesImage.onload = () => {
	resizeCanvas();
	drawStage();
	requestAnimationFrame(gameLoop);
};
window.addEventListener("resize", () => {
	resizeCanvas();
	drawStage();
});

/*	--------------------------------------------------------------------------------------------------------------------------------  */
/*	PLAYER  */
/*	--------------------------------------------------------------------------------------------------------------------------------  */
const player = {
	idle: [[0, 0, 16, 16], [0, 0, 16, 16]],
	walk: [[16, 0, 16, 16], [32, 0, 16, 16]],
	jump: [[0, 16, 16, 16], [0, 16, 16, 16]],
	die: [[16, 32, 16, 16], [16, 32, 16, 16]]
};
const playerHitbox = {
	width: 14,
	height: 23
};
const playerHitboxYFix = playerHitbox.height / 3.83333333;
let playerX = 4 * assetSize;
let playerY = 19 * assetSize;
let playerVelocityX = 0;
let playerVelocityY = 0;
const playerSpeed = 1.33 * camZoom;
const playerGravity = .25 * camZoom;
const playerJumpPower = -6 * camZoom;
let isJumping = false;
let isDead = false;
let isOnGround = false;
let playerCurAnim = "idle";
let animCurFrame = 0;
let animFrameTimer = 0;
const animFramerate = 24;
let playerFlipped = false;
const playerImage = new Image();
playerImage.src = "./assets/images/secret/bobsAdventure/player.png";
function drawPlayer() {
	if (isDead) {
		playerCurAnim = "die";
	} else if (!isOnGround && (playerVelocityY > 0 || playerVelocityY < 0)) {
		playerCurAnim = "jump";
	} else if (keys["KeyA"] || keys["ArrowLeft"] || keys["KeyD"] || keys["ArrowRight"]) {
		playerCurAnim = "walk";
	} else {
		playerCurAnim = "idle";
	}

	const frames = player[playerCurAnim];
	if (!frames || frames.length === 0) {
		console.error(`No frames defined for animation: ${playerCurAnim}`);
		return;
	}
	if (animCurFrame < 0 || animCurFrame >= frames.length) {
		console.error(`animCurFrame ${animCurFrame} is out of bounds.`);
		return;
	}
	const frame = frames[animCurFrame];
	if (!Array.isArray(frame) || frame.length !== 4) {
		console.error(`Invalid frame data: ${frame}`);
		return;
	}
	const [sx, sy, sw, sh] = frame;
	ctx.save();
	ctx.translate(playerX - camera.x, playerY - camera.y);
	if (playerFlipped) {
		ctx.scale(-1, 1);
		ctx.drawImage(playerImage, sx, sy, sw, sh, -assetSize / 2, (-assetSize / 2) + playerHitboxYFix, assetSize, assetSize);
	} else {
		ctx.drawImage(playerImage, sx, sy, sw, sh, -assetSize / 2, (-assetSize / 2) + playerHitboxYFix, assetSize, assetSize);
	}
	ctx.restore();
}
function updateAnimation() {
	animFrameTimer++;
	if (animFrameTimer >= animFramerate) {
		animFrameTimer = 0;
		const frames = player[playerCurAnim];
		if (frames && frames.length > 0) {
			animCurFrame = (animCurFrame + 1) % frames.length;
		}
	}
}
function isColliding(x, y, width, height) {
	for (let row = 0; row < stage01.length; row++) {
		for (let col = 0; col < stage01[row].length; col++) {
			const tile = stage01[row][col];
			const tileX = col * assetSize + 7;
			const tileY = row * assetSize + 5;
			if (tile === "s") {
				if (x < tileX + assetSize && x + width > tileX && y < tileY + assetSize && y + (height / 4) > tileY) {
					return "dead";
				}
			}
			if (tile !== " " && tile !== "P" && tile !== "s" && tile !== "E") {
				if (x < tileX + assetSize && x + width > tileX && y < tileY + assetSize && y + height > tileY) {
					return "collide";
				}
				
			}
		}
	}
	return "none";
}

let groundCheckTimer = 0;
const groundCheckDuration = 10;
function updatePlayer() {
	if (isDead) return;
	if ((keys["KeyW"] || keys["ArrowUp"]) && !isJumping && isOnGround) {
		isJumping = true;
		playerVelocityY = playerJumpPower;
		isOnGround = false;
	}
	if (keys["KeyA"] || keys["ArrowLeft"]) {
		playerVelocityX = -playerSpeed;
		playerFlipped = true;
	} else if (keys["KeyD"] || keys["ArrowRight"]) {
		playerVelocityX = playerSpeed;
		playerFlipped = false;
	} else {
		playerVelocityX = 0;
	}
	playerVelocityY += playerGravity;
	const prevPlayerX = playerX;
	const prevPlayerY = playerY;
	playerX += playerVelocityX;
	if (isColliding(playerX, playerY, playerHitbox.width, playerHitbox.height) === "collide") {
		playerX = prevPlayerX;
	}
	playerY += playerVelocityY;
	const collisionResult = isColliding(playerX, playerY, playerHitbox.width, playerHitbox.height);
	if (collisionResult === "collide") {
		if (playerVelocityY > 0) {
			playerY = prevPlayerY;
			playerVelocityY = 0;
			isJumping = false;
			isOnGround = true;
			groundCheckTimer = 0;
		} else if (playerVelocityY < 0) {
			playerY = prevPlayerY;
		}
	} else {
		if (groundCheckTimer >= groundCheckDuration) {
			isOnGround = false;
		} else {
			groundCheckTimer++;
		}
	}
	if (isColliding(playerX, playerY, playerHitbox.width, playerHitbox.height) === "dead") {
		isDead = true;
	}
	updateAnimation();
}
function showGameOver() {
	//const gameOverScreen = document.getElementById("gameOverScreen");
	//gameOverScreen.style.display = "flex"; // Show the overlay
}
function hideGameOver() {
	//const gameOverScreen = document.getElementById("gameOverScreen");
	//gameOverScreen.style.display = "none"; // Hide the overlay
}
function restartGame() {
	isDead = false;
	playerX = 4 * assetSize;
	playerY = 19 * assetSize;
	playerVelocityX = 0;
	playerVelocityY = 0;
	isJumping = false;
	isOnGround = true;
	hideGameOver();
	drawStage();
}
function quitGame() {
	window.location.reload();
}
function handleKeys() {
	document.addEventListener("keydown", (e) => {
		keys[e.code] = true;
		if (e.code === "KeyR") restartGame();
		if (e.code === "KeyQ") quitGame();
	});
	document.addEventListener("keyup", (e) => {
		keys[e.code] = false;
	});
}
const keys = {};
function gameLoop() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (isDead) {
		showGameOver();
	} else {
		updatePlayer();
		updateCamera();
		drawStage();
		drawPlayer();
	}
	updateAnimation();
	requestAnimationFrame(gameLoop);
}
function init() {
	resizeCanvas();
	drawStage();
	requestAnimationFrame(gameLoop);
}
function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx.imageSmoothingEnabled = false;
	ctx.scale(camZoom, camZoom);
	camera.width = canvas.width / camZoom;
	camera.height = canvas.height / camZoom;
	updateCamera();
}
playerImage.onload = init;
handleKeys();