let someString = "String";
let someStringOne = "Hello World";
let someStringTwo = "1234!_ ";

console.log(someString.length);
console.log(someStringOne.length);
console.log(someStringTwo.length);

for (i = 0; i < someString.length; i++) {
	console.log(`S${someString[0]}t${someString[1]}r${someString[2]}i${someString[3]}n${someString[4]}g${someString[5]}`)
	break;
}

for (i = 0; i < someStringOne.length; i++) {
	console.log(`H${someStringOne[0]}e${someStringOne[1]}l${someStringOne[2]}l${someStringOne[3]}o${someStringOne[4]} ${someStringOne[5]}W${someStringOne[6]}o${someStringOne[7]}r${someStringOne[8]}l${someStringOne[9]}d${someStringOne[10]}`)
	break;
}
for (i = 0; i < someStringTwo.length; i++) {
	console.log(`1${someStringTwo[0]}2${someStringTwo[1]}3${someStringTwo[2]}4${someStringTwo[3]}!${someStringTwo[4]}_${someStringTwo[5]} ${someStringTwo[6]}`)
	break;
}