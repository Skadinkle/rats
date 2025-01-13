document.addEventListener("DOMContentLoaded", function() {
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.style.width = `${window.innerWidth}px`;
	canvas.style.height = `${window.innerHeight}px`;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.position = "fixed";
	canvas.style.top = 0;
	canvas.style.left = 0;
	canvas.style.pointerEvents = "none";
	document.body.appendChild(canvas);
	var snowflakes = [];
	/* Initialize snowflakes */
	for(var i = 0; i < 100; i++){
		snowflakes.push({
			x:Math.random() * canvas.width,
			y:Math.random() * canvas.height,
			radius:Math.random() * 4 + 1,
			speedY:Math.random() * 2 + 1,
			speedX:(Math.random() - .5) * .5 /* slight rightward drift */
		});
	}
/* Draw the snowflakes */
function drawSnowflakes(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "rgba(255, 255, 255, .8)";
	for(var i = 0; i < snowflakes.length; i++){
		var flake=snowflakes[i];
		ctx.beginPath();
		ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
		ctx.fill();
		flake.x += flake.speedX;
		flake.y += flake.speedY;
		/* Reset snowflake position if it goes off screen */
		if (flake.y > canvas.height) {
			flake.y = 0;
			flake.x = Math.random() * canvas.width;
		}
		if (flake.x > canvas.width) {
			flake.x = 0;
		}
	}
}
function resizeCanvas() {
	canvas.style.width = `${window.innerWidth}px`;
	canvas.style.height = `${window.innerHeight}px`;
}
/* Animation loop */
function animate() {
	drawSnowflakes();
	requestAnimationFrame(animate);
}
window.addEventListener("resize", resizeCanvas);
	animate();
});