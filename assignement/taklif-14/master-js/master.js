// taklif 1

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let a = mix.map(function(ele){
//     return !isNaN(ele) ? "" : ele;
// }).reduce(function (arr, current) {
//     return arr +current
// })
// console.log(a)

// Elzero

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 2

// let myString = "EElllzzzzzzzeroo";

// let b = myString.split("").filter(function (ele, index, arr) {
//     return arr.indexOf(ele) === index;
// }).join("");
// ??????????????????????????????????????
// console.log(b)
// Elzero
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// taklif 3

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let c = myArray.flat().reduce(function (arr, current) {
//     return arr + current
// }).split('').join("")

// console.log(c);
// Elzero
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// taklif 4

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let d = numsAndStrings.filter(function (ele) {
//     return !isNaN(ele)
// }).map(function(ele) {
//     return -ele
// });

// console.log(d)

// [-1, -10, 10, 20, -5, -3]
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 5

// let nums = [2, 12, 11, 5, 10, 1, 99];

// let e = nums.reduce(function(arr, current){
//     return current % 2 === 1 ? arr + current : arr * current;
// },1)

// console.log(e)
// 500