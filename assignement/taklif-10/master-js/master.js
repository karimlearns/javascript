// Assingnements 1

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i < end++; i += start) {
//     if (i === exclude) {
//         continue
//     }
//     console.log(i)
// }

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// --------------------------------------------------------------------------------------------------------------------------------------
// Assingnements 2 

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i > stop ; i--) {
//     if (i === stop) {
//         break;
//     }
//     console.log(i-true);
// }

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// Assingnements 3

// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i = start; i <= end; i++) {
//     console.log(i)
//     for(let j = breaker; j <= end; j += breaker) {
//         if(j > end-breaker) {
//             break;
//         }
//         console.log(`-- ${j}`);
//     }
// }
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Assingnements 4

// let index = 10;
// let jump = 2;

// for (let i = index; i > jump; i-=2) {
//     console.log(i);
// }
// Output
// 10
// 8
// 6
// 4

// --------------------------------------------------------------------------------------------------------------------------------------------------
// Assingnements 5 

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let k = +true

// for (let i = +true; i < friends.length; i++) {
//     if ((friends[i][+""]) === letter.toLocaleUpperCase()) {
//         continue;
//     }
//     console.log(`${k++} => ${friends[i]}`);
// }


// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// ----------------------------------------------------------------------------------------------------------------------------------------------
// Assingnements 6

// let start = 0;
// let swappedName = "elZerO";
// let newArr = swappedName.split("");
// let newArr2 = [];

// for (i = start; i < newArr.length; i++) {
// if (newArr[i] === newArr[i].toLowerCase()) {
// newArr2.push(newArr[i].toUpperCase());
// }
// if (newArr[i] === newArr[i].toUpperCase()) {
// newArr2.push(newArr[i].toLowerCase());
// }
// }
// console.log(newArr2.join(""));

// Output
// "ELzERo"


