let generator = [];

for (i = 0; i < 10; i++) {

	generator.push(Math.floor(Math.random() * 2000) - 1000);

	generator.sort();
	console.log(generator);

}


function bubbleSort() {
	for (n = 0; n < generator.length; n++) {
		for (i = 0; i < generator.length - 1 - n; i++) {
			if (generator[i] > generator[i + 1]) {
				const buff = generator[i];
				generator[i] = generator[i + 1];
				generator[i + 1] = buff;
			}
		}

	}
	console.log(generator);
}

bubbleSort();