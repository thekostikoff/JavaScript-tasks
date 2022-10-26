const array = [
	{ gender: "male", birth: 1990, surname: "ivanovski", age: 2254461463 },
	{ gender: "female", birth: 2001, surname: "pet", age: 232132 },
	{ gender: "male", birth: 983, surname: "mocart", age: 123214123 }
];

function arrayFilterTwo() {
	for (i = 0; i < array.length; i++) {
		let values = Object.values(array[i]);
		// console.log(array[i]);
		// console.log(values);
		if (values[3] > 232132 && values[2].length > 5) {
			console.log(array[i]);
		}
	}
}

arrayFilterTwo();

function arrayFindTwo() {
	for (i = 0; i < array.length; i++) {
		let values = Object.values(array[i]);
		// console.log(array[i]);
		// console.log(values);
		if (values[1] < 2000) {
			console.log(array[i]);
			break;
		}
	}
}

arrayFindTwo();

function arrayPushTwo() {
	array[3] = { gender: "male", birth: 56, surname: "socrat", age: 1 };
	console.log(array);
}

arrayPushTwo();

const numbers = [123.65, 65546, 333.3165];

function arrayReduceTwo() {
	result = 0;
	let values = Object.values(numbers)
	console.log(values);
	result = values[0] - values[1] - values[2];
	console.log(result);
}

arrayReduceTwo();
