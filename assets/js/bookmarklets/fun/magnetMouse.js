javascript:"use strict";
var mouseX;
var mouseY;
var RUNNING = false;
var READY = true;
const pList = Array.from(document.getElementsByTagName("p"));
const liList = Array.from(document.getElementsByTagName("li"));
const aList = Array.from(document.getElementsByTagName("a"));
const sList = Array.from(document.getElementsByTagName("span"));
const tList = Array.from(document.getElementsByTagName("td"));
const h1List = Array.from(document.getElementsByTagName("h1"));
const h2List = Array.from(document.getElementsByTagName("h2"));
var elements = pList.concat(liList);
elements = elements.concat(aList);
elements = elements.concat(sList);
elements = elements.concat(tList);
elements = elements.concat(h1List);
elements = elements.concat(h2List);
var originalCoordinates = [];
for (let i = 0; i < elements.length; i++) {
	const item = elements[i];
	const x = item.getBoundingClientRect().left;
	const y = item.getBoundingClientRect().top;
	originalCoordinates.push([x, y]);
}
document.body.querySelectorAll("*").forEach(node => node.style.position = "static");
for (let i = 0; i < elements.length; i++) {
	const item = elements[i]; item.style.position = "absolute";
	item.style.left = `${(window.scrollX + originalCoordinates[i][0])}px`;
	item.style.top = `${(window.scrollY + originalCoordinates[i][1])}px`;
}
document.body.addEventListener("click", handleClick, true);
document.body.addEventListener("mousemove", handleMouseMove);
function handleClick() {
	mouseX = event.clientX;
	mouseY = event.clientY;
	if (READY) {
		READY = false;
		RUNNING = true;
		startMagnet();
	} else {
		RUNNING = false;
	}
}
function handleMouseMove() {
	mouseX = event.clientX;
	mouseY = event.clientY;
}
function startMagnet() {
	if (!RUNNING) {
		READY = true;
		return;
	}
	let count = 0;
	for (let i = 0; i < elements.length; i++) {
		const item = elements[i];
		const x = item.getBoundingClientRect().left;
		const y = item.getBoundingClientRect().top;
		const dist = Math.sqrt((x - mouseX) * (x - mouseX) + (y - mouseY) * (y - mouseY));
		if (count > 20) {
			break;
		}
		if (dist < 600) {
			attractElement(i);
			count++;
		}
	}
	setTimeout(startMagnet, 50);
}
function attractElement(index) {
	const item = elements[index];
	const x = item.getBoundingClientRect().left;
	const y = item.getBoundingClientRect().top;
	const delta = 1/10;
	const tempX = x + (mouseX - x) * delta;
	const tempY = y + (mouseY - y) * delta;
	if (x < mouseX) {
		item.style.left = `${(window.scrollX + Math.min(tempX, mouseX) + Math.random() * 10 - 5)}px`;
	} else {
		item.style.left = `${(window.scrollX + Math.max(tempX, mouseX) + Math.random() * 10 - 5)}px`;
	}
	if (y < mouseY) {
		item.style.top = `${(window.scrollY + Math.min(tempY, mouseY) + Math.random() * 10 - 5)}px`;
	} else {
		item.style.top = `${(window.scrollY + Math.max(tempY, mouseY) + Math.random() * 10 - 5)}px`;
	}
}