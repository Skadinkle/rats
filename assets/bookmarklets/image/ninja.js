javascript:(function() {
	Array.prototype.slice.call(document.querySelectorAll("img")).map(function(el) {
		el.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewzQ0rakhrK_tXzBaOeFTZGM7kURCAPofIP77ToEoE-quiBIG";
	});
}())