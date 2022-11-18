function smallInteger(array) {
	array = array.sort((a, b) => a - b);
	console.log(array)
	for (i = 0; i < array.length; i++) {
		console.log(array[i])
		return array;
	}
}

smallInteger([34, 15, 88, 2]);
smallInteger([34, -345, -1, 100]);