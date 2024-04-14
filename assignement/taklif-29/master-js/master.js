// taklif 1

// const getData = (jsonFile) => {
//     return new Promise((res, rej) => {
//         let myRequest = new XMLHttpRequest();
//         myRequest.onload = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                 res(JSON.parse(this.responseText))
//             } else {
//                 rej(Error("No Data Found"));
//             }
//         }
//         myRequest.open("GET", jsonFile);
//         myRequest.send();
//     });
// };

// getData("jsn.json")
//     .then((result) => {
//         result.length = 5;
//         return result
//     })
//     .then((result) => {
//         for (let i = 0; i < result.length; i++) {
//             let div = document.createElement("div")
//             let hTwo = document.createElement("h2")
//             let P = document.createElement("p")

//             const textHtwo = document.createTextNode(result[i].title);
//             hTwo.appendChild(textHtwo);

//             const textP = document.createTextNode(result[i].description);
//             P.appendChild(textP);

//             document.body.appendChild(div).appendChild(hTwo);
//             document.body.appendChild(div).appendChild(P);
//         }
//     });
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 2

// fetch("jsn.json").then((result) => {
//     let myData = result.json();
//     return myData;
// })
//     .then((full) => {
//         full.length = 5;
//         return full;
//     })
//     .then((ten) => {
//         for (let i = 0; i < ten.length; i++) {
//             let div = document.createElement("div")
//             let hTwo = document.createElement("h2")
//             let P = document.createElement("p")

//             const textHtwo = document.createTextNode(ten[i].title);
//             hTwo.appendChild(textHtwo);

//             const textP = document.createTextNode(ten[i].description);
//             P.appendChild(textP);

//             document.body.appendChild(div).appendChild(hTwo);
//             document.body.appendChild(div).appendChild(P);
//         }
//     });