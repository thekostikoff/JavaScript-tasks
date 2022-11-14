function arraySumOne(array) {
	for (i = 0; i < array.length; i++) {
		let n = 1;
		while (n <= array.length) {
			console.log(array[i++] + n++)
			return array;
		}
	}
}

arraySumOne([1, 2, 15, 25]); // 2 4 18 29