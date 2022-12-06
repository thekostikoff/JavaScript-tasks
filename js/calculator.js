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
			} else {
				a += key;
				out.textContent = a;
			}
		} else if (a !== '' && b !== '' && finish) {
			b = key;
			finish = false;
			out.textContent = b;
		}
		else {
			if (key === '.' && b.includes('.')) {
				b += '';
				out.textContent = b;
			} else {
				b += key;
				out.textContent = b;
			}
		}
		return;
	}
	if (action.includes(key)) {
		sign = key;
		out.textContent = sign;
		if (key === '+/-') {
			a = (-1) * a;
			out.textContent = a;
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
			// case "+/-":
			// 	a = a * (-1);
			// 	b = b * (-1);
			// 	break;
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