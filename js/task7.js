let arraySome = ["yoda", "best", "has"];

function makeWord() {

	let word = '';
	for (i = 0; i < arraySome.length; i++) {
		// console.log(arraySome[i]);
		for (j = 0; j < arraySome[i].length; j++) {
			word = (arraySome[0][0] + arraySome[i + 1][j + 1] + arraySome[i + 2][j + 2]);
			console.log(word);
			return word;
		}
	}
}
makeWord();