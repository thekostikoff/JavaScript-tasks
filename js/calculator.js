let num = '';
const out = document.querySelector('.calc__screen p');
const btn = document.querySelectorAll('.btn');

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
function plusminus(minus) {
	num += minus;
	out.textContent = num;
	return num;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
	if (!event.target.classList.contains('btn')) return;
	if (event.target.classList.contains('ac')) return;

	const key = event.target.textContent;

	num += key;
	out.textContent = num;
	console.log(out.textContent);
}











