// taklif 2

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "articles.json");
// myRequest.send();
// console.log(myRequest);
// myRequest.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         console.log(this.responseText);
//         console.log("Data Loaded");
//     }
// };
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 3

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "articles.json");
// myRequest.send();

// myRequest.onreadystatechange = function () {
//     if (myRequest.readyState === 4 && myRequest.status === 200) {
//         let mainData = JSON.parse(myRequest.responseText);
//         console.log(mainData)
//         let updatedData = JSON.stringify(mainData);
//         console.log(updatedData);
//     }
// }


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 4

// let myRequest = new XMLHttpRequest();
// myRequest.open("Get", "articles.json");
// myRequest.send();

// myRequest.onreadystatechange = function () {
//     if (myRequest.readyState === 4 && myRequest.status === 200) {
//         let jsData = JSON.parse(myRequest.responseText)
//         let div = document.createElement("div");
//         for (let i = 0; i < jsData.length; i++) {
//             let dv = document.createElement("div");
//             let hTwo = document.createElement("h2");
//             let p = document.createElement("p");
//             let par = document.createElement("p");
//             let para = document.createElement("p");
//             document.createTextNode(jsData[i].writter);
//             div.setAttribute("id", "data");

//             const textHtwo = document.createTextNode(jsData[i].title);
//             hTwo.appendChild(textHtwo);

//             const textP = document.createTextNode(jsData[i].article);
//             p.appendChild(textP);

//             const textPar = document.createTextNode(jsData[i].writter);
//             par.appendChild(textPar);

//             const textPara = document.createTextNode(jsData[i].article_section);
//             para.appendChild(textPara);
//             let d = document.body.appendChild(div).appendChild(dv);
//             document.body.appendChild(d).appendChild(hTwo);
//             document.body.appendChild(d).appendChild(p);
//             document.body.appendChild(d).appendChild(par);
//             document.body.appendChild(d).appendChild(para);
//         };
//     }
// };