let num = '';
const out = document.querySelector('.calc__screen p');
const btn = document.querySelectorAll('.btn');

let arrayNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let arraySign = ['+', '-', 'Х', '/', '%', '+/-'];
out.textContent = '';

function clearAll() {
	num = '';
	out.textContent = 0;
}
function equal() {
	let result = '';
	result = out.textContent;
	out.textContent = eval(result);
}
// document.querySelector('.equal').addEventListener('click', equal());

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
	if (!event.target.classList.contains('btn')) return;
	if (event.target.classList.contains('ac')) return;

	const key = event.target.textContent;

	num += key;
	out.textContent = num;
	console.log(out.textContent);
}








