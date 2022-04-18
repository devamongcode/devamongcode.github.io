// ♫ ♫ IT'S THE FINAL COUNTDOWN ♫ ♫ //

var endingDate = new Date("Nov 14, 2022 13:37:00").getTime();
var x = setInterval(function() {
	var current = new Date().getTime();
	var remainingTime = endingDate - current;

	var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
	var hours = Math.floor(
		(remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

	document.getElementById("countdown").innerHTML =
		days +
		"<span>G</span> " +
		hours +
		"<span>S</span> " +
		minutes +
		"<span>D</span> " +
		seconds +
		"<span>S</span> ";
}, 1000);