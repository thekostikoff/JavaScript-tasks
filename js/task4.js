const massive = [
	{ gender: "male", birth: 1990, surname: "ivanovski", age: 2254461463 },
	{ gender: "female", birth: 2001, surname: "pet", age: 232132 },
	{ gender: "male", birth: 983, surname: "mocart", age: 123214123 }
];


let arrayFilter = massive.filter(function (e) {
	return e.age > 232132 && e.surname.length > 5;
});

console.log(arrayFilter);

function arrayFilterTwo() {
	for (i = 0; i < massive.length; i++) {
		for (k = 0; k < massive[i].length; k++) {
			if (age > 232132 && surname.length > 5) {
				return massive;
			}
		}
	}
	console.log(massive[k]);
}

arrayFilterTwo();


let arrayFind = massive.find(function (e) {
	return e.birth < 2000;
});

console.log(arrayFind);

function arrayFindTwo() {
	for (l = 0; l < massive.length; l++) {
		for (u = 0; u < massive[l].length; u++) {
			if (birth < 2000) {
				return massive[l];
			}
		}
	}
	console.log(massive[u]);
}

arrayFindTwo();



let arrayPush = massive.push({ gender: "male", birth: 56, surname: "socrat", age: 1 });

console.log(massive);

function arrayPushTwo() {
	massive[3] = { gender: "male", birth: 56, surname: "socrat", age: 1 };
	console.log(massive);
}

arrayPushTwo();

const numbers = [123.65, 65546, 333.3165];

let arrayReduce = numbers.reduce((total, amount) => total - amount);

console.log(arrayReduce);

function arrayReduceTwo() {
	result = 0;
	for (h = 0; h < numbers.length; h++) {
		result = numbers[h] - numbers[h + 1];
	}
	console.log(result);
}

arrayReduceTwo();