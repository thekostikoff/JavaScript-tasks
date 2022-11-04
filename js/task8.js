// function arraySum(array) {

// 	let sum = 0;
// 	for (i = 0; i < array.length; i++) {
// 		let a = Math.sign(array[i]);
// 		if (a > 0) {
// 			sum += array[i];
// 			console.log(sum);
// 		}
// 		if (a = 0 || typeof (a) == NaN) {
// 			sum = 0;
// 			console.log(sum);
// 		}
// 	}
// 	return sum;
// }

// arraySum([1, -4, 7, 12]);

const array = [1, -4, 7, 12];
let sum = 0;

arrayTwo = array.map((arr) => (Math.sign(arr) > 0) ? sum += arr : 0);
console.log(arrayTwo);
console.log(sum);

arrayThree = array.map((arr) => (Math.sign(arr) <= 0 || typeof Math.sign(arr) == NaN) ? sum = 0 : 0);
console.log(arrayThree);
console.log(sum);
