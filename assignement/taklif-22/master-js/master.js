// taklif 1

// let selOneFf = document.querySelector("#one");
// let selTwoClr = document.querySelector("#two");
// let selThreeFs = document.querySelector("#three");

// if (window.localStorage.getItem("color") && window.localStorage.getItem("fontFamily") && window.localStorage.getItem("fontSize")) {
//     document.body.style.color = window.localStorage.getItem("color");
//     selTwoClr.value = window.localStorage.getItem("color")

//     document.body.style.fontFamily = window.localStorage.getItem("fontFamily");
//     selOneFf.value = window.localStorage.getItem("fontFamily")

//     document.body.style.fontSize = window.localStorage.getItem("fontSize");
//     selThreeFs.value = window.localStorage.getItem("fontSize")
// }

// selTwoClr.onchange = function () {
//     localStorage.setItem("color", selTwoClr.value);
//     document.body.style.color = localStorage.getItem("color");
// };

// selOneFf.onchange = function () {
//     localStorage.setItem("fontFamily", selOneFf.value);
//     document.body.style.fontFamily = localStorage.getItem("fontFamily");
// };

// selThreeFs.onchange = function () {
//     localStorage.setItem("fontSize", selThreeFs.value);
//     document.body.style.fontSize = localStorage.getItem("fontSize");
// };
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 2

let input1 = document.querySelector(".input-1");
let input2 = document.querySelector(".input-2");
let input3 = document.querySelector(".input-3");
let select = document.getElementById("lang");

input1.onblur = function () {
    window.sessionStorage.setItem("input-name-1" , this.value);
}
input2.onblur = function () {
    window.sessionStorage.setItem("input-name-2" , this.value);
}
input3.onblur = function () {
    window.sessionStorage.setItem("input-name-3" , this.value);
}

select.onchange = function () {
    window.sessionStorage.setItem("select-lang" , select.value)
}

window.onload = function () {
    input1.value = window.sessionStorage.getItem("input-name-1") ;
    input2.value = window.sessionStorage.getItem("input-name-2") ;
    input3.value = window.sessionStorage.getItem("input-name-3") ;
    select.value = window.sessionStorage.getItem("select-lang") ;
}