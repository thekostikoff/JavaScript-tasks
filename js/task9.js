function arraySumOne(array) {
	let someArray = [];
	for (i = 0; i < array.length; i++) {
		let n = 1;
		while (n <= array.length) {
			let word = [array[i++] + n++];
			word = word.map((number) => (number >= 10) ? String(word).slice(1) : number);
			let total = someArray.push(String(word));
			console.log(someArray);
			console.log(total);
			return someArray;
		}
	}
}

arraySumOne([1, 2, 15, 25, 35, 9]); // 2 4 18 29 40
