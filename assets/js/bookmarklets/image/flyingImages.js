javascript:R = 0;
x1 = 0.1;
y1 = 0.05;
x2 = 0.25;
y2 = 0.24;
x3 = 1.6;
y3 = 0.24;
x4 = 300;
y4 = 200;
x5 = 300;
y5 = 200;
DI = document.getElementsByTagName("img");
DIL = DI.length;
function A() {
	for(i = 0; i - DIL; i++) {
		DIS = DI[i].style;
		DIS.position = "fixed";
		DIS.left = `${(Math.sin(R * x1 + i * x2 + x3) * x4 + x5)}px`;
		DIS.top = `${(Math.cos(R * y1 + i * y2 + y3) * y4 + y5)}px`;
	}
	R++
}
setInterval("A()", 3000);
void(0);