/*
taklif 1

let userName = "Elzero";
console.log(userName[0].toLowerCase().repeat(3)); // e
console.log(userName.charAt(0).toLowerCase().repeat(3)); // e
console.log(userName.slice(0, 1).toLocaleLowerCase().repeat(3)); // e
console.log(userName.substring(0, 1).toLowerCase().repeat(3)); // e
console.log(userName.substr(0, 1).toLowerCase().repeat(3)); // e
console.log(); // eee

taklif 2

*/

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True