let city = document.getElementById("city");
let result = document.getElementById("result");

document.getElementById("go").addEventListener('click', () => go());

function go() {
	let name = city.value;

	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=a1c1f23ba96793e26442a954100b5eb9')
		.then(function (resp) { return resp.json() })
		.then(function (data) {
			if (data.cod == '404') {
				result.textContent = 'Mistake.Please send true name city'
			}
			else {
				console.log(data);
				result.textContent = 'Temperature ' + Math.round(data.main.temp - 273) + '°C';
			}
		})
}
