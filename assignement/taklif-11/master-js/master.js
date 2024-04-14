// taklif

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

console.log()
for (i = index; i < friends.length; i++) {
    if (friends[i][friends.indexOf("Sayed")] === "a") {
        document.write(`<div>"${counter++ + friends.indexOf("Sayed")} => ${friends[i]}"</div>`)
    }
}
// Output
// "1 => Sayed"
// "2 => Mahmoud"