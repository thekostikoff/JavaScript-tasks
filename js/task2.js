let generator = [];
function* massive(start = 0, end = 50) {
	for (let i = start; i < end; i++) {
		generator++;
		yield i;
	}
}
let mas = massive(1, 50);
for (i of mas) {
	console.log(i);
}

const array1 = [];
function mass() {
	for (i = array1; i <= 50; i++) {
		let map1 = array1.map(i);
	}
	console.log(map1);
}

mass();

