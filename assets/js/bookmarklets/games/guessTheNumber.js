javascript:var x = 0;
alert("Guess A Number Between 1 And 20");
function getRandomNumberBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
a = getRandomNumberBetween(0, 21);
while (true) {
	v = prompt("What Number Do You Guess?");
	if (v == a) {
		x = x + 1;
		alert(`You Got It! It Only Took You ${x} Tries!`);
		break
	} else if (v > 20) {
		alert("Please Guess A Number Between Or Equal To 1 And 20!");
	} else if (v < 1) {
		alert("Please Guess A Number Between Or Equal To 1 And 20!");
	} else if (v > a) {
		x = x + 1;
		alert("Too High!");
	} else if (v < a) {
		x = x + 1;
		alert("Too Low!");
	}
}