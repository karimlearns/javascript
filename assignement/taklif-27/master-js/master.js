// taklif 1

// let myNaiss = new Date("1992-07-16");
// let dayNow = new Date();
// let myAgeS = (dayNow - myNaiss) / 1000;
// let myAgeM = Math.round(myAgeS / 60);
// let myAgeH = Math.round(myAgeM / 60);
// let myAgeD = Math.round(myAgeH / 24);
// let myAgeMo = Math.round(myAgeD / 30);
// let myAgeY = Math.round(myAgeMo / 12);

// console.log(`${myAgeS} Seconds`);
// console.log(`${myAgeM} Minutes`);
// console.log(`${myAgeH} Hours`);
// console.log(`${myAgeD} Days`);
// console.log(`${myAgeMo} Months`);
// console.log(`${myAgeY} Years`);

// // Needed Output:

// // "1247939400 Seconds"
// // "20798990 Minutes"
// // "346650 Hours"
// // "14444 Days"
// // "481 Months"
// // "40 Years"
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 2

// let dateNow = new Date(0);
// function addYears(date, years) {
//     date.setFullYear(date.getFullYear() + years);
//     return date;
// }

// // May 15, 2022
// const date = new Date(1000);

// const newDate = addYears(date, 10);

// // May 20, 2025
// console.log(newDate);

// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 3

// let toDay = new Date();
// toDay.setDate(0);
// console.log(toDay);

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let day = toDay.setDate(-31);
// let dy = toDay.getDate(day);

// let month = toDay.setMonth(3);
// let gt = toDay.getMonth(month);
// console.log(`Previous Month Is ${months[gt]} And Last Day Is ${dy}`);

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 4

// let dt = new Date(0);
// dt.setDate(16)
// dt.setMonth(6)
// dt.setFullYear(1992)
// console.log(` ${dt}`)

// let naiss = new Date("1992-7-16");
// console.log(naiss);

// let naiss1 = new Date(1992, 6, 16);
// console.log(naiss1);

// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 5

// let start = performance.now();

// for (let i = 0; i < 10000; i++) {
//     console.log(i);
// }

// let end = performance.now();

// console.log(`Loop Took ${Math.floor(end - start)} Milliseconds.`);


// Needed Output

// "Loop Took 1921 Milliseconds."
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 6

// Write Your Generator Function Here

// function* gen() {
//     yield 14;
//     yield 154;
//     yield 494;
//     yield 1034;
//     yield 1774;
//     yield 2714;
//     yield 3854;
//     yield 5194;
//     yield 6734;
// }

// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 7

// function* genNumbers() {
//     yield* new Set([1, 2, 2, 2, 3, 4, 5]);
// }
// function* genLetters() {
//     yield* new Set(["A", "B", "B", "B", "C", "D"]);
// }

// let n = genNumbers();
// let l = genLetters();


// // Write Your Generator Function Here

// function* genAll() {
//     while (true) {
//         for (let i = 0; i < 5; i++) {
//             yield n.next().value;
//         }
//         for (let i = 0; i < 4; i++) {
//             yield l.next().value;
//         }
//     }
// }

// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 8

// main.js File

// import * as modOne from "./mod-one.js";

// console.log(modOne.numOne + modOne.numTwo + modOne.numThree); // 60