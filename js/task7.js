function makeWord(array) {

	for (i = 0; i < array.length; i++) {
		let n = 0;
		while (n < array.length) {
			console.log(array[i][n]);
			n++;
			i++
		}
	}
}

makeWord(["yoda", "best", "has", "hhhh"]);