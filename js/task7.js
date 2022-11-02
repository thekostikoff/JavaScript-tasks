function makeWord(array) {

	for (i = 0; i < array.length; i++) {
		let n = 0;
		while (n < array.length) {
			let word = array[0][0] + array[i + 1][n + 1] + array[i + 2][n + 2] + array[i + 3][n + 3];
			console.log(word)
			n++;
			i++
			return word;
		}
	}
}

makeWord(["yoda", "best", "has", "hhhh"]);