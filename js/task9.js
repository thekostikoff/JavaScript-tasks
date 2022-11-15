function arraySumOne(array) {
	for (i = 0; i < array.length; i++) {
		let n = 1;
		while (n <= array.length) {
			let word = [array[i++] + n++];
			word = word.map((number) => (number >= 10) ? String(word).slice(1) : number);
			console.log(word)
		}
	}
}

arraySumOne([1, 2, 15, 25, 35]); // 2 4 18 29 40
