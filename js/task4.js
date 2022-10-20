const massive = [
	{ gender: "male", birth: 1990, surname: "ivanovski", age: 2254461463 },
	{ gender: "female", birth: 2001, surname: "pet", age: 232132 },
	{ gender: "male", birth: 983, surname: "mocart", age: 123214123 }];

console.log(massive);

let masFil = massive.filter(function (e) {
	return e.age > 232132 && e.surname.length > 5;
}
);

console.log(masFil);

let masFin = massive.find(function (e) {
	return e.birth < 2000;
});

console.log(masFin);

const numbers = [123.65, 65546, 333.3165];

let masRed = numbers.reduce((total, amount) => total - amount);

console.log(masRed);

let masPush = massive.push({ gender: "male", birth: 56, surname: "socrat", age: 1 });

console.log(masPush);
console.log(massive);