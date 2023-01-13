const clock = document.getElementById("result");
const stopText = document.getElementById("stop");
let time = 1000;
let hour = Number(document.getElementById("hour").value);
let minute = Number(document.getElementById("minute").value);
let second = Number(document.getElementById("second").value);
let interval;
let a;

function music() {
	let audio = new Audio();
	audio.src = 'ooo.mp3';
	audio.autoplay = true;
}

function refresh() {
	let hour = 0;
	let minute = 0;
	let second = 0;
	let result = hour * 3600 + minute * 60 + second;
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

function go() {
	let hour = Number(document.getElementById("hour").value);
	let minute = Number(document.getElementById("minute").value);
	let second = Number(document.getElementById("second").value);
	let result = hour * 3600 + minute * 60 + second;
	console.log(result)
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
			a = result;
			console.log(a);
		}
	}, time);
}

function stop() {
	clearInterval(interval);
	stopText.innerHTML = "Продолжить";
	document.getElementById("stop").classList.toggle("continue");
	console.log(document.querySelectorAll(".continue"));

}
document.getElementById("stop").addEventListener('click', () => stop());


function continueDo() {
	console.log(a);
	stopText.innerHTML = "Стоп";
	result = a;
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
	document.getElementById("stop").classList.remove("continue");
}

// continueDoIt.addEventListener('click', () => continueDo());










