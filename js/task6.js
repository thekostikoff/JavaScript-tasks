
function upperCase(string) {

	let word = string.split(' ');
	// console.log(word);
	for (i = 0; i < word.length; i++) {
		// console.log(word[2]);
		for (j = 0; j < word[i].length; j++) {
			console.log(word[i][0].toUpperCase() + '.' + word[i + 1][0].toUpperCase());
			return word[i];
		}
	}
}
upperCase('patrick feeney');
upperCase(`Sam Harris`);