let num = '';
let result = '';
const out = document.querySelector('.calc__screen p');
const btn = document.querySelectorAll('.btn');

out.textContent = '';

function clearAll() {
	num = '';
	out.textContent = 0;
}
function equal() {
	result = out.textContent;
	out.textContent = eval(result);
}
function plusminus(minus) {
	num += minus;
	out.textContent = num;
	return num;
}

function percent() {
	result = out.textContent;
	let a = result.match(/^\d+/gm) || result.match(/^.\d+/gm);;
	let b = result.match(/\d+$/gm);
	let sign = result.match(/\b\D\b/gm);
	console.log(a, b, sign);
	if (a == '0' || b == '0') {
		out.textContent = 0;
	}
	if (sign == '-') {
		out.textContent = a - (a / 100 * b);
		console.log(result);
		console.log(out.textContent);
		if (a < 0) {
			out.textContent = a - (Math.abs(a) / 100 * b);
			console.log(out.textContent);
			console.log(result);
		}
		return out.textContent;
	}
	if (sign == '+') {
		out.textContent = a + (a / 100 * b);
		if (a < 0) {
			out.textContent = a + (Math.abs(a) / 100 * b);
		}
		return out.textContent;
	}
	if (sign == '/') {
		out.textContent = a / (a * b / 100);
		if (a < 0) {
			out.textContent = (-1) * a / (Math.abs(a) * b / 100);
		}
		return out.textContent;
	}
	if (sign == '*') {
		out.textContent = a * (a * b / 100);
		if (a < 0) {
			out.textContent = (-1) * a * (Math.abs(a) * b / 100);
		}
		return out.textContent;
	}
	for (k = 0; k < result.length; k++) {
		if (result[k] !== '+' || result[k] !== '-' || result[k] !== '*' || result[k] !== '/') {
			out.textContent = eval(result / 100);
		}
	}
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
	if (!event.target.classList.contains('btn')) return;
	if (event.target.classList.contains('ac')) return;

	const key = event.target.textContent;

	num += key;
	out.textContent = num;
	console.log(out.textContent);

	if (key == 0) {
		num = 0;
		out.textContent = '0';
	}
	if (key == '+' && out.textContent.includes('+') || key == '-' && out.textContent.includes('-') || key == '*' && out.textContent.includes('*') || key == '/' && out.textContent.includes('/') || key == '.' && out.textContent.includes('.')) {
		result = out.textContent;
		if ((/\D\D/gm).test(out.textContent) === true) {
			num = '';
			out.textContent = 'mistake'
		}
	}
	if (key == '.' && out.textContent.includes('.')) {
		result = out.textContent;
		if ((/\D\D/gm).test(out.textContent) === true || (/\d\D\d\D/gm).test(out.textContent) === true) {
			num = '';
			out.textContent = 'mistake'
		}
	}

}

















