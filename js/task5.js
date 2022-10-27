let someString = "String";
let someStringOne = "Hello World";
let someStringTwo = "1234!_ ";


console.log(someString.length);
console.log(someStringOne.length);
console.log(someStringTwo.length);

function DoubleChar() {
	let word = '';
	for (i = 0; i < someString.length; i++) {
		word = word + (someString[i] + someString[i]);
	}
	console.log(word);
}

DoubleChar();

function DoubleCharOne() {
	let wordOne = '';
	for (i = 0; i < someStringOne.length; i++) {
		wordOne = wordOne + (someStringOne[i] + someStringOne[i]);
	}
	console.log(wordOne);
}

DoubleCharOne();

function DoubleCharTwo() {
	let wordTwo = '';
	for (i = 0; i < someStringTwo.length; i++) {
		wordTwo = wordTwo + (someStringTwo[i] + someStringTwo[i]);
	}
	console.log(wordTwo);
}

DoubleCharTwo();
