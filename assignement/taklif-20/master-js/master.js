// Challenge 1

// Start Header

// HTML Element

// let header = document.createElement("header");
// let logo = document.createElement("p");
// let ulis = document.createElement("ul");
// let Fli = document.createElement("li");
// let Sli = document.createElement("li");
// let Tli = document.createElement("li");
// let Frli = document.createElement("li");

// let logoText = document.createTextNode("Elzero");
// let FliText = document.createTextNode("Home");
// let SliText = document.createTextNode("About");
// let TliText = document.createTextNode("Service");
// let FrliText = document.createTextNode("Contact");

// // Add logo Text
// logo.appendChild(logoText);
// Fli.appendChild(FliText);
// Sli.appendChild(SliText);
// Tli.appendChild(TliText);
// Frli.appendChild(FrliText);


// document.body.appendChild(header).appendChild(logo);
// document.body.appendChild(header).appendChild(ulis);
// document.body.appendChild(header).appendChild(ulis).appendChild(Fli);
// document.body.appendChild(header).appendChild(ulis).appendChild(Sli);
// document.body.appendChild(header).appendChild(ulis).appendChild(Tli);
// document.body.appendChild(header).appendChild(ulis).appendChild(Frli);

// // CSS

// let ele = document.querySelector("header");
// let head = document.querySelector("ul");

// // header
// ele.style.height = "50px";
// ele.style.display = "flex";
// ele.style.justifyContent = "space-between";
// ele.style.alignItems = "center";
// ele.style.backgroundColor = "white";

// // logo
// logo.style.fontFamily = "Gill Sans Extrabold, sans-serif";
// logo.style.fontWeight = "bold";
// logo.style.padding = "20px";
// logo.style.fontSize = "20px";
// logo.style.color = "#009688";

// // ul
// head.style.listStyle = "none";
// head.style.display = "flex";

// // li
// Fli.style.padding = "20px";
// Sli.style.padding = "20px";
// Tli.style.padding = "20px";
// Frli.style.padding = "20px";
// Fli.style.fontFamily = "Gill Sans Extrabold, sans-serif";
// Sli.style.fontFamily = "Gill Sans Extrabold, sans-serif";
// Tli.style.fontFamily = "Gill Sans Extrabold, sans-serif";
// Frli.style.fontFamily = "Gill Sans Extrabold, sans-serif";
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// body

// let cont = document.createElement("div");  // container
// cont.className = "cont";

// // CSS div content
// cont.style.backgroundColor = "#ededed";
// cont.style.height = "calc(100vh - 100px)";
// cont.style.padding = "20px";
// cont.style.display = "grid";
// cont.style.gridTemplateColumns = "auto auto auto";
// cont.style.gap = "20px";

// for (i = 0; i < 15; i++) {
//     // Create Element
//     let pro = document.createElement("div");  // product
//     let num = document.createElement("span"); // 2

//     // Create Text
//     let numTxt = document.createTextNode(i+1);

//     // bind element with text
//     num.appendChild(numTxt);

//     document.body.appendChild(cont).appendChild(pro).appendChild(num);
//     pro.append("product");

//     // product div CSS
//     pro.style.backgroundColor = "white";
//     pro.style.display = "flex";
//     pro.style.flexDirection = "column";
//     pro.style.order = "";
//     pro.style.justifyContent = "center";
//     pro.style.alignItems = "center";
//     pro.style.fontFamily = "Gill Sans Extrabold, sans-serif";
//     pro.style.fontSize = "16px";
//     pro.style.color = "lightgray";

//     // number span CSS
//     num.style.fontSize = "30px";
//     num.style.color = "black";
// };
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 2 Challenge

// let a = document.querySelector(".classes-to-add");
// let b = document.querySelector(".classes-to-remove");
// let f = document.querySelector("h5").nextElementSibling;

// // b.onblur = function () {
// //     b.classList.remove(b.value);
// // };

// a.addEventListener("blur", function () {
//     let c = a.value;
//     a.classList.add(c);
//     f.append(a.value, " ");
//     a.classList.remove(" ");

//     // if (a.classList.contains(" ")) {
//     //     console.log()
//     // }
// });

// b.addEventListener("blur", function () {
//     let v = a.value;
//     b.classList.remove(v);
//     f.remove(a.value);
// }); 
// ??????????????????????????????????????????????????????????????????
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 3

// let myP = document.querySelector("p");
// let myDiv = document.querySelector("div");
// let newDiv = document.createElement("div");
// let otherDiv = document.createElement("div");

// myP.remove();

// myDiv.before(newDiv);
// myDiv.after(otherDiv);

// myDiv.previousElementSibling.classList.add("start");
// myDiv.previousElementSibling.setAttribute("title", "Start Element");
// myDiv.previousElementSibling.setAttribute("data-value", "Start");
// myDiv.previousElementSibling.append("Start");

// myDiv.nextElementSibling.classList.add("end");
// myDiv.nextElementSibling.setAttribute("title", "End Element");
// myDiv.nextElementSibling.setAttribute("data-value", "End");
// myDiv.nextElementSibling.append("End");
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 4

// let a = document.querySelector("span");
// let b = a.nextSibling
// let c = b.nextSibling
// let d = c.nextSibling.textContent
// console.log(d);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 5

// let a = document.querySelector("div");
// let b = document.querySelector("span");
// let c = document.querySelector("p");
// let d = document.querySelector("article");
// let e = document.querySelector("section");

// a.onclick = function () {
//     console.log("This Is Element Type");
// };

// b.onclick = function () {
//     console.log("This Is Element Type");
// };

// c.onclick = function () {
//     console.log("This Is Element Type");
// };

// d.onclick = function () {
//     console.log("This Is Element Type");
// };

// e.onclick = function () {
//     console.log("This Is Element Type");
// };