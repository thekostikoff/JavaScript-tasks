const massive = [
	{ gender: "male", birth: 1990, surname: "ivanovski", age: 2254461463 },
	{ gender: "female", birth: 2001, surname: "pet", age: 232132 },
	{ gender: "male", birth: 983, surname: "mocart", age: 123214123 }
];

console.log(massive);

let arrayFilter = massive.filter(function (e) {
	return e.age > 232132 && e.surname.length > 5;
});

console.log(arrayFilter);

let arrayFind = massive.find(function (e) {
	return e.birth < 2000;
});

console.log(arrayFind);

let arrayPush = massive.push({ gender: "male", birth: 56, surname: "socrat", age: 1 });

console.log(arrayPush);
console.log(massive);

const numbers = [123.65, 65546, 333.3165];

let arrayReduce = numbers.reduce((total, amount) => total - amount);

console.log(arrayReduce);

