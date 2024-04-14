
// taklif 1

// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//         name =  `${zName.slice(0, zName.indexOf(" ")+1)}`
//         return `Hello ${name} ${zName.slice(zName.indexOf(" ")+1, zName.indexOf(" ")+2).toUpperCase()}.,`
//     }
//     function ageWithMessage(zAge) {
//         return ` Your Age Is ${zAge.slice(0, zAge.indexOf(" "))}, `
//     }
//     function countryTwoLetters(zCountry) {
//         return `You Live In ${zCountry.slice(0, 2).toLocaleUpperCase()}`
//     }
//     function fullDetails() {
//         return namePattern(zName) + ageWithMessage(zAge)+ countryTwoLetters(zCountry)
//     }
//     return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
//   // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
//   // Hello Ahmed A., Your Age Is 32, You Live In SY

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 2


// let me = _ => "Iam A Normal Function";

// console.log(me); // Iam A Normal Function

// let url = (protocol, web, tld) =>`${protocol}://www.${web}.${tld}`;

// console.log(url("https", "elzero", "org")); // https://www.elzero.org

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 3

// function checker(zName) {
//     return status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
// }

//   console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
//   console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// taklif 4


// function specialMix(...data) {

//     let a = 0;

//     for (i = 0; i < data.length; i++) {

//         if (parseInt(data[i])) {
//             a += parseInt(data[i]);
//         }

//     } if (a === 0) {
//         a = "All Is Strings"
//     }
    
//     return a
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings