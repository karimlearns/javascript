// taklif 1

// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

// // // Needed Output

// class Car {
//     constructor (name, model, price) {
//         this.n = name;
//         this.m = model;
//         this.p = price;
//     }
//     run() {
//         return "Car Is Running Now";
//     }
//     stop() {
//         return "Car Is Stopped";
//     }
// };

// let carOne = new Car("MG", 2022, 420000);
// let carTwo = new Car("peugeot", 2000, "10000$");
// let carThree = new Car("renault", 2005, "15000$");

// console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
// console.log(carOne.run());

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 2

// class Phone {
//     constructor (name, serial, price) {
//         this.name = name;
//         this.serial = serial;
//         this.price = price;
//     }
// }

// // Write Tablet Class Here

// class Tablet extends Phone {
//     constructor (name, serial, price, size) {
//         super(name, serial, price);
//         this.size = size || "Unknown";
//     }
//     fullDetails() {
//         return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
//     }
// };

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// // // LG Serial is 250450650 And Size Is Unknown
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 3

// Edit The Class
// class User {
//     #c;
//     constructor (username, card) {
//         this.u = username;
//         this.#c = typeof card === "string" ? card : `${card}`;
//     }
//     showData() {
//         return `Hello ${this.u} Your Credit Card Number Is ${this.#c.match(/\d{4}/ig).join("-")}`;
//     }
// }

// // Do Not Edit Anything Below

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData());
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData());
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData());
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 4

// Write Your Code Here

// String.prototype.addLove = function () {
//     return `I Love ${this} Web School`;
// }

// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 5

// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
// };

// Write Your Code Here

// Object.defineProperties(myObj, {
//     score: {
//         writable: false,
//         enumerable: true, // // pour desactiver loop
//         configurable: true, // // can not delete and redefine this property
//     },
//     id: {
//         writable: true,
//         enumerable: false,
//         configurable: true,
//     },
//     country: {
//         configurable: true,
//     },
// });

// myObj.score = 500;
// delete myObj.country;

// for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// { username: 'Elzero', score: 1000, id: 100 }