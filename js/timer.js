const clock = document.getElementById("result");
const stopText = document.getElementById("stop");

let hour = Number(document.getElementById("hour").value);
let minute = Number(document.getElementById("minute").value);
let second = Number(document.getElementById("second").value);
let interval;
let result;

function music() {
	let audio = new Audio();
	audio.src = 'ooo.mp3';
	audio.autoplay = true;
}

function refresh() {
	let hour = 0;
	let minute = 0;
	let second = 0;
	result = hour * 3600 + minute * 60 + second;
	let hours = Math.floor(result / 3600);
	let minutes = Math.floor((result - (hours * 3600)) / 60);
	let seconds = result % 60;
	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	clock.innerHTML = `${hours}:${minutes}:${seconds}`;
	clearInterval(interval);
	return result;
}
document.getElementById("go").addEventListener('click', () => go());


function go() {
	clearInterval(interval);
	let hour = Number(document.getElementById("hour").value);
	let minute = Number(document.getElementById("minute").value);
	let second = Number(document.getElementById("second").value);
	const time = 1000;
	result = hour * 3600 + minute * 60 + second;
	interval = setInterval(function updateClocks() {
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
	return result;
}

function stop() {
	clearInterval(interval);
	stopText.innerHTML = "Продолжить";
	stopText.classList.toggle("continue");
	document.querySelector("button.stop.continue").onclick =
		continueDo;

}
document.querySelector("button.stop").onclick = stop;

function continueDo() {
	result;
	const time = 1000;
	interval = setInterval(function updateClocks() {
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
	stopText.innerHTML = "Стоп";
	stopText.classList.remove("continue");
	document.querySelector("button.stop").onclick = stop;
	return result;
}










