
function DoubleChar(string) {
	let word = '';
	for (i = 0; i < string.length; i++) {
		word = word + (string[i] + string[i]);
	}
	return word;
}

console.log(DoubleChar("String"));
console.log(DoubleChar("Hello World"));
console.log(DoubleChar("1234!_"));

