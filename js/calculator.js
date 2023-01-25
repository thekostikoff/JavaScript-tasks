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
	num = out.textContent;
}
function plusminus(minus) {
	num += minus;
	out.textContent = num;
	return num;
}
function percent() {
	result = out.textContent;
	let a = result.match(/^\d+/gm) || result.match(/^.\d+/gm) || result.match(/^.\d+\.\d+/gm);
	let b = result.match(/\d+$/gm);
	let sign = result.match(/\b\+\b/gm) || result.match(/\b\-\b/gm) || result.match(/\b\*\b/gm) || result.match(/\b\/\b/gm);
	console.log(a, b, sign);
	if (a == '0' || b == '0') {
		out.textContent = 0;
	}
	if (sign == '-') {
		out.textContent = a - (a / 100 * b);
		num = out.textContent;
		console.log(result);
		console.log(out.textContent);
		if (a < 0) {
			out.textContent = a - (Math.abs(a) / 100 * b);
			num = out.textContent;
			console.log(out.textContent);
			console.log(result);
		}
		return out.textContent;
	}
	if (sign == '+') {
		out.textContent = a + (a / 100 * b);
		num = out.textContent;
		if (a < 0) {
			out.textContent = a + (Math.abs(a) / 100 * b);
			num = out.textContent;
		}
		return out.textContent;
	}
	if (sign == '/') {
		out.textContent = a / (a * b / 100);
		num = out.textContent;
		if (a < 0) {
			out.textContent = (-1) * a / (Math.abs(a) * b / 100);
			num = out.textContent;
		}
		return out.textContent;
	}
	if (sign == '*') {
		out.textContent = a * (a * b / 100);
		num = out.textContent;
		if (a < 0) {
			out.textContent = (-1) * a * (Math.abs(a) * b / 100);
			num = out.textContent;
		}
		return out.textContent;
	}
	for (k = 0; k < result.length; k++) {
		if (result[k] !== '+' || result[k] !== '-' || result[k] !== '*' || result[k] !== '/') {
			out.textContent = eval(result / 100);
			num = out.textContent;
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

	result = out.textContent;

	if (key == 0) {
		num = 0;
		out.textContent = '0';
	}

	result = out.textContent;
	if ((/^\D+/gm).test(result) === true) {
		out.textContent = '';
		num = '';
	}
	if ((/\d+\.\./gm).test(out.textContent) === true) {
		result = result.match(/\d+\./gm);
		out.textContent = result;
		num = out.textContent;
		console.log(result);
		console.log(num);
		console.log(out.textContent);
	}
	if ((/\d+\.\d+\./gm).test(out.textContent) === true) {
		result = result.match(/\d+\.\d+/gm);
		out.textContent = result;
		num = out.textContent;
		console.log(result);
		console.log(num);
		console.log(out.textContent);
	}

	if ((/\d\+\+/gm).test(result) === true || (/d\-\-/gm).test(result) === true || (/d\/\//gm).test(result) === true || (/d\*\*/gm).test(result) === true) {

		result = result.match(/\d+\+/gm) || result.match(/\d+\-/gm) || result.match(/\d+\*/gm) || result.match(/\d+\//gm);
		out.textContent = result;
		num = result;
		console.log(result);
		console.log(num);
		console.log(out.textContent);
	}

}




















