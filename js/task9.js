function arraySumOne(array) {
	for (i = 0; i < array.length; i++) {
		let n = 1;
		while (n <= array.length) {
			console.log(array[i++] + n++)
			let word = [array[0] + 1, array[1] + 2, (array[2] + 3), array[3] + 4];
			word = word.map((number) => (number > 9) ? number = number.slice(0, 1) : number);
			console.log(word);
			return array;
		}

	}
}


arraySumOne([1, 2, 15, 25]); // 2 4 18 29