let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'Х', '/', '%', '+/-'];

const out = document.querySelector('.calc__screen p');
const btn = document.querySelectorAll('.btn');
const info = document.querySelectorAll('.info');

function clearAll() {
	a = '';
	b = '';
	sign = '';
	finish = false;
	out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
	if (!event.target.classList.contains('btn')) return;
	if (event.target.classList.contains('ac')) return;

	out.textContent = '';

	const key = event.target.textContent;

	if (digit.includes(key)) {
		if (b === '' && sign === '') {
			if (key === '.' && a.includes('.')) {
				a += '';
				out.textContent = a;
				console.log(a, b, sign)
			} else {
				a += key;
				out.textContent = a;
				console.log(a, b, sign)
				for (i = 0; i < a.length; i++) {
					if (a[0] == 0) {
						a = 0;
						console.log(a, b, sign)
						out.textContent = 0;
						return;
					}
				}
			}
		} else if (a !== '' && b !== '' && finish) {
			b = key;
			finish = false;
			out.textContent = b;
			console.log(a, b, sign)
		}
		else {
			if (key === '.' && b.includes('.')) {
				b += '';
				out.textContent = b;
				console.log(a, b, sign)
			} else {
				b += key;
				out.textContent = b;
				console.log(a, b, sign)
				for (j = 0; j < b.length; j++) {
					if (b[0] == 0) {
						b = 0;
						console.log(a, b, sign)
						out.textContent = 0;
						return;
					}
				}
			}
		}
		return;
	}

	if (action.includes(key)) {
		sign = key;
		out.textContent = sign;
		console.log(a, b, sign)
		if (key === '+/-') {
			a = (-1) * a;
			out.textContent = a;
			console.log(a, b, sign)
		}
		return;
	}
	if (key === '=' && a == '' && b == '') {
		out.textContent = 0;
		return;
	}

	if (key === '=') {
		if (b === '') b = a;
		switch (sign) {
			case "+":
				a = (+a) + (+b);
				break;
			case "-":
				a = a - b;
				break;
			case "Х":
				a = a * b;
				break;
			case "%":
				a = (a / 100) * b;
				break;
			case "/":
				if (b === '0') {
					out.textContent = 'Ошибка';
					a = '';
					b = '';
					sign = '';
					return;
				}
				a = a / b;
				break;
		}
		finish = true;
		out.textContent = a;
		console.log(a, b, sign)
	};
}

const observer = new MutationObserver(
	function () {
		if (a.toString().length > 8) {
			out.style.fontSize = 400 / a.toString().length + 'px';
			if (b.toString().length > 8) {
				out.style.fontSize = 400 / b.toString().length + 'px';
			}
		} else if (b.toString().length > 8) {
			out.style.fontSize = 400 / b.toString().length + 'px';
		} else {
			out.style.fontSize = '44px';
		}
	}
);
observer.observe(out, { childList: true });