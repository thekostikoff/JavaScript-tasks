function go() {
	let hour = Number(document.getElementById("hour").value);
	let minute = Number(document.getElementById("minute").value);
	let second = Number(document.getElementById("second").value);
	const clock = document.getElementById("result");

	let result = hour * 3600 + minute * 60 + second;

	setInterval(updateClocks, 1000);

	function updateClocks() {
		let hours = Math.floor(result / 3600);
		let minutes = Math.floor((result - (hours * 3600)) / 60);
		let seconds = result % 60;
		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		clock.innerHTML = `${hours}:${minutes}:${seconds}`;
		result--;
	}
}

