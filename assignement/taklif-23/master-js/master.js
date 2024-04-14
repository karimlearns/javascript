// taklif 1

// let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here

// let [a, b, c, d, e] = myNumbers;

// console.log(a * e); // 5
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 2

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // Write Your Destructuring Assignment Here

// let [a, b, c , [d, e, [f, g]]] = mySkills

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 3

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// // Play With Arrays To Prepare For Destructuring
// // Write Your Destructuring Assignment Here

// let [a, b, c] = arr3;

// a = b;
// b = c;

// let [g, h, i] = arr1;
// c = g;

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 4
// Challenge

// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
// };

// // Write Your Destructuring Assignment Here

// const {
//     age: a,
//     working: w,
//     country: c,
//     hobbies: [h1, , h3]
// } = member;

// // const {html: skillOne, css: skillTwo,} = user.skills

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 5
// Challenge

// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//         "Oath In Felghana": ["USA", "Japan"],
//         "Ark Of Napishtim": {
//         US: "20 USD",
//         JAP: "10 USD",
//     },
//     Origin: "30 USD",
//     },
// };

// // Write Your Destructuring Assignment/s Here

// const {
//     title: t,
//     developer: d,
// } = game;

// const keys = Object.keys(game.releases);
// const o = keys[0];
// const a = keys[1];

// const valOne = Object.values(game.releases["Oath In Felghana"]);
// const u = valOne[0];

// const valTwo = Object.values(game.releases["Oath In Felghana"]);
// const j = valTwo[1];

// const valThree = Object.values(game.releases["Ark Of Napishtim"]);
// const u_price = valThree[0];
// const j_price = valThree[1];

// const valFour = Object.values(game.releases.Origin);
// const or = valFour.join("");

// // Lpgging & output
// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 6
// Challenge

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

const {
    title,
    age,
    available,
    skills: [, css]
} = myFriends[0];

const {
    title: t,
    age: a,
    available: av,
    skills: [, dj]
} = myFriends[1];

const {
    title: s,
    age: ag,
    available: ava,
    skills: [, lr]
} = myFriends[2];

let chosen = 2;

// If chosen === 1

if (chosen === 1) {
    const keys = Object.values(myFriends[0]);
    const av = keys[2];
    console.log(title);
    console.log(age);

    if (available === true) {
    console.log("available");
    } else {
    console.log("Not available");
    }

    console.log(css);
}

"Osama"
39
"Available"
"CSS"

// If chosen === 2

if (chosen === 2) {
    const keys = Object.values(myFriends[1]);
    const av = keys[2];
    console.log(t);
    console.log(a);

    if (av === true) {
    console.log("available");
    } else {
    console.log("Not available");
    }

    console.log(dj);
}

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

if (chosen === 3) {
    const keys = Object.values(myFriends[2]);
    console.log(s);
    console.log(ag);

    if (ava === true) {
    console.log("available");
    } else {
    console.log("Not available");
    }

    console.log(lr);
}

"Sayed"
33
"Available"
"Laravel"