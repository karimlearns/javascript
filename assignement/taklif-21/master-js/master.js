/*taklif 1 */

// let num1 , num2
// let num = window.prompt("Print Number From To " , `Example: 5-20`);

// num = num.split("-").sort();

// num1 = +num[0].trim();
// num2 = num[1].trim();
// for (let i = num1; i<=num2; i++){
//     let div = document.createElement("div")
//     document.body.append(div)
//     div.innerHTML= i
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 2

// let ele = document.querySelector("div");
// let btn = document.querySelector("button");

// // parent div
// ele.style.backgroundColor = "#eee";
// ele.style.textAlign = "center";
// ele.style.flexDirection = "column";
// ele.style.justifyContent = "center";
// ele.style.alignItems = "center";
// ele.style.width = "fit-content";
// ele.style.padding = "20px";
// ele.style.position = "relative";
// ele.style.border = "2px solid #ddd";
// ele.style.display = "none";

// // button
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// btn.style.fontSize = "15px";
// btn.style.border = "none";
// btn.style.borderRadius = "50%";
// btn.style.width = "25px";
// btn.style.height = "25px";
// btn.style.position = "absolute";
// btn.style.right = "-12px";
// btn.style.top = "-12px";

// btn.onclick = function () {
//     ele.style.display = "none";
// }

// setTimeout(function() {
//     ele.style.display = "block";
// },5000);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// taKlif 3

// let ten = document.querySelector("div");

// function countdown() {
//     ten.innerHTML -= 1;
//     if (ten.innerHTML === "0") {
//         clearInterval(counter);
//     }
// };

// let counter = setInterval(countdown, 1000);
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 4

// let ten = document.querySelector("div");

// function countdown() {
//     ten.innerHTML -= 1;
//     if (ten.innerHTML === "0") {
//         clearInterval(counter);
//         window.open("https://elzero.org/")
//     }
// };

// let counter = setInterval(countdown, 1000);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let myNewWindow = window.open("https://google.com", "", "width=500, height= 500");

// let ten = document.querySelector("div");

// function countdown() {
//     ten.innerHTML -= 1;
//     if (ten.innerHTML === "5") {
//         setTimeout(function() {
//             ten.style.display = "block";
//         window.open("https://elzero.org/", "_target", "height=400, width=400, left=200, top=100");
//         },5000);
//     } else if (ten.innerHTML === "0") {
//         clearInterval(counter);

//     }
// };

// let counter = setInterval(countdown, 1000);

// function countdown() {
//     ten.innerHTML -= 1;
//     if (ten.innerHTML === "5") {
//         window.open("https://elzero.org/", "_target", "height=400, width=400, left=200, top=100");
//     } else if (ten.innerHTML === "0") {
//         clearInterval(counter);

//     }
// };

// let counter = setInterval(countdown, 1000);