function findNumber(array) {
	array = array.sort((a, b) => a - b);
	// console.log(array);
	for (i = 0; i < array.length; i++) {
		if ((array[i + 2] - array[i + 1]) > 1) {
			console.log(array[i + 1] + 1);
			return array;
		}
		else if (((array[i + 1] - array[i++]) > 1)) {
			console.log(array[i] - 1)
			return array;
		}
	}
}

findNumber([49, 2, 4, 96, 3, 0, 78, 50, 8, 74, 95, 10, 17, 18, 19, 20, 51, 53, 56, 89, 57, 98, 59, 58,
	21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 85, 36, 37, 38, 39, 40, 41, 84, 42,
	43, 94, 44, 45, 97, 12, 13, 66, 46, 87, 54, 55, 47, 99, 77, 48, 1, 5,
	60, 61, 63, 92, 64, 65, 6, 67, 14, 15, 16, 68, 28, 69, 71, 73, 75, 62, 91, 76, 79, 80,
	93, 70, 83, 72, 86, 88, 90, 52, 11, 9, 81, 82]);


