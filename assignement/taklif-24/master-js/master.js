// taklif 1
// let setOfNumbers = new Set([10]);
// setOfNumbers.add(20).add(setOfNumbers.size);

// console.log(setOfNumbers);
// console.log(setOfNumbers.size-1);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 2

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// // Needed Output
// // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
// console.log(new Set(myFriends.copyWithin(0, 1, 2).copyWithin(1, 4, 5).copyWithin(2, 5, 6)));
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 3

// let myInfo = {
//     username: "Osama",
//     role: "role",
//     country: "Egypt",
// };

// let myNewMap = new Map();
// myNewMap.set("username", "Osama");
// myNewMap.set("role", "Admin");
// myNewMap.set("country", "Egypt");

// console.log(myNewMap);
// console.log(myNewMap.size);
// console.log(myNewMap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
/*
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
taklif 4
*/

// let theNumber = 100020003000;

// console.log();

// console.log([...new Set(theNumber)])  // Set(4) {1, 2, 3, 'A'}

// console.log([..."Osama"]);

// Needed Output
// 123
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 5

// let theName = "Elzero";
// console.log(theName.split(""));
// console.log([...theName]);
// console.log(Array.from(theName));
// console.log(Object.assign([], theName));
// console.log(Array.prototype.map.call(theName, eachLetter => eachLetter));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 6

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// chars.map(function(n){
//     if(typeof n === "number") {
//         console.log(chars.copyWithin(3, typeof n));
//     };
// });

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

            // --------------------------------------------------

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// chars.map(function(n){
//     if(typeof n === "number") {
//         console.log(chars.copyWithin(3, 4, 6).copyWithin(4, 0, 5));
//     };
// });
// // Needed Output
// // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

            // --------------------------------------------------

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// chars.map(function(n){
//     if(typeof n === "number") {
//         console.log(chars.copyWithin(2, typeof n));
//     };
// });
// // Needed Output
// // ["Z", "Y", "Z", "Y", "A", "D", "E"]

            // --------------------------------------------------

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// chars.map(function(n){
//     if(typeof n === "number") {
//         console.log(chars.copyWithin(3, typeof n));
//     };
// });

// // Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 7

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// let numsThree = numsOne.concat(numsTwo);
// console.log(numsThree);

// Needed Output
// [1, 2, 3, 4, 5, 6]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 8

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// Solution group zero
// console.log(([...n1 , ...n2].sort().length) * new Set(n2).keys().next().value);

// Needed Output
// 210