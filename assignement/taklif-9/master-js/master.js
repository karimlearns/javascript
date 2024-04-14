/*
taklif 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(+false, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(+false, num)); // ["Ahmed", "Elham", "Osama"];

taklif 2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
let shift = console.log(friends.shift());
let pop = console.log(friends.pop())
console.log(friends); // ["Eman", "Osama"]

taklif 3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrTwo,arrOne)); // ["Z", "X", "D", "C", "B", "A"]

taklif 4


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length, website.length ** (website.length+true))); // ZERO

taklif 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes("JS")) {
    console.log("Found")
}

if (haystack[1] == ["JS"]) {
    console.log("Found")
}

if (haystack.slice(1, -1) == needle) {
    console.log("Found")
}

// Write 3 Solutions

taklif 6
*/

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2);

// Your Code Here

console.log(`${allArrs.slice(allArrs.lastIndexOf()+allArrs.lastIndexOf(), allArrs.indexOf())}`.toLocaleLowerCase()+
`${allArrs.slice(-allArrs.lastIndexOf()-allArrs.lastIndexOf(), -allArrs.lastIndexOf()-allArrs.lastIndexOf()+true)}`.toLocaleLowerCase()+
`${allArrs.slice(arr1.indexOf())}`.toLocaleLowerCase()); // fxy

