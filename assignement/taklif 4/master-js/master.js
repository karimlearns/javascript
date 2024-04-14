/*
Taklif 1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.ceil(99999.99)); // 100000
console.log(Math.floor(100_000.99)); // 100000
console.log(Math.round(99999.5)); // 100000
console.log(Math.trunc(100_000.4)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.ceil(999.5)*100); // 100000
console.log(99999.996.toFixed(2)); // 100000
console.log(100000.00); // 100000
console.log(10 ** 5); // 100000
console.log(10 * 10 * 10 * 10 * 10 ); // 100000

// Taklif 2

let a = -1;
console.log(Number.MIN_SAFE_INTEGER*a); // 9007199254740991

Taklif 3 

let x = (Number.MAX_VALUE ** Number.MIN_VALUE + (Number.MAX_VALUE ** Number.MIN_VALUE));
let z = (x + x) ** x;
console.log(z);

Taklif 4

let myVar = "100.56789 Views";
let m = console.log(+myVar.slice(0 , 3)); // 100
console.log(parseFloat(myVar).toFixed(2)*1); // 100.57

Taklif 5

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

Taklif 6

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(); // 10

Taklif 7 


console.log(Number); // 0 || 1 || 2 || 3 || 4

*/