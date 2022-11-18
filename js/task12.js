function invert(array) {
	let someArray = [];
	for (i = 0; i < array.length; i++) {
		let word = [array[i]];
		word = word.map((number) => (Math.sign(number) > 0) ? word * -1 : word * -1)
		let total = someArray.push(Number(word));
		console.log(someArray);
		console.log(total);
	}
	return someArray;
}

invert([1, 2, 3, 4, 5]);
invert([1, -2, 3, -4, 5]);

