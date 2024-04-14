// Taklif 1

// let ById = document.getElementById("elzero");  // valid
// console.log(ById);

// let ByClass = document.getElementsByClassName("element");  // valid
// console.log(ByClass);

// let ByName = document.getElementsByName("js");
// console.log(ByName);

// let ByTag = document.getElementsByTagName("div");
// console.log(ByTag);

// let myQurId = document.querySelector("#elzero");  // valid
// console.log(myQurId);
// let myQurTag = document.querySelector("div");  // valid
// console.log(myQurTag);

// let myQurClass = document.querySelector(".element");  // valid
// console.log(myQurClass);

// let myQurAtt = document.querySelector("div[name]");  // valid
// console.log(myQurAtt);

// let myََAttQurAll = document.querySelectorAll("div[name]");  // valid
// console.log(myََAttQurAll);

// let myََAttEleQurAll = document.querySelectorAll("div");  // valid
// console.log(myََAttEleQurAll);

// let myََClsQurAll = document.querySelectorAll("[class = 'element']");
// console.log(myََAttEleQurAll);

// let myََIdQurAll = document.querySelectorAll("#elzero");
// console.log(myََIdQurAll);

// let myChildreen = document.body.children;
// console.log(myChildreen);

// let myFrstChild = document.body.firstChild;
// console.log(myFrstChild);

// let myFrstEleChild = document.body.firstElementChild;
// console.log(myFrstEleChild);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Taklif 2

// for (i = 0; i < 10; i++) {
//     document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     document.images[i].alt = "Elzero Logo"
// };
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Taklif 3

// let myInput = document.querySelector("input");

// let myDiv = document.querySelectorAll("div");

// myInput.oninput = function () {
//     let dol = myInput.value;
//     let egy = dol * 15.6;
//     myDiv.textContent = `{${dol}} USD Dollar = {${egy.toFixed(2)}} Egyptian Pound`;
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 4

// let a = document.querySelector(".one");
// let b = document.querySelector(".two");

// let c = a.getAttribute("title");  // two
// let d = b.getAttribute("title");  // one

// let m = a.textContent;
// let n = b.textContent;

// a.setAttribute("title", d);
// b.setAttribute("title", c);

// a.textContent = n;
// b.textContent = m;
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 5

// let a = document.querySelectorAll("img");

// for (i = 0; i < a.length; i++) {
//     let b = a[i].alt;
//     if (b === "One" || b === "Three") {
//         a[i].setAttribute("alt", "Old");
//     } else {
//         a[i].setAttribute("alt", "Elzero New")
//     }
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 6