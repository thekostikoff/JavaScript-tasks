function arraySum(array) {

	let sum = 0;
	for (i = 0; i < array.length; i++) {
		let a = Math.sign(array[i]);
		if (a > 0) {
			sum += array[i];
			console.log(sum);
		}
		if (a = 0 || typeof (a) == NaN) {
			sum = 0;
			console.log(sum);
		}
	}
	return sum;
}


arraySum([1, -4, 7, 12]);