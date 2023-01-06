const clock = document.getElementById("result");
let time = 1000;

function music() {
	let audio = new Audio();
	audio.src = 'ooo.mp3';
	audio.autoplay = true;
}
function refresh() {
	console.log(1);
}

function go() {
	let hour = Number(document.getElementById("hour").value);
	let minute = Number(document.getElementById("minute").value);
	let second = Number(document.getElementById("second").value);
	let result = hour * 3600 + minute * 60 + second;

	let interval = setInterval(function updateClocks() {
		let hours = Math.floor(result / 3600);
		let minutes = Math.floor((result - (hours * 3600)) / 60);
		let seconds = result % 60;
		if (result < 0) {
			hour = 0;
			minute = 0;
			second = 0;
			music();
		} else {
			hours = hours < 10 ? "0" + hours : hours;
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			clock.innerHTML = `${hours}:${minutes}:${seconds}`;
			result--;
		}
	}, time);

	if (document.querySelector('.stop').onclick == true) {
		clearInterval(interval);
	}

}







