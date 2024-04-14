/*
taklif 1

function sayHello(theName, theGender) {
    if (theGender === "Male") {
        console.log(mr = `Hello Mr ${theName}`)
    } else if (theGender === "Female") {
        console.log(`Hello Miss ${theName}`)
    } else
    console.log(`Hello ${theName}`)
}

  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
taklif 2

function calculate(firstNum = "First Number Not Found", secondNum = "Second Number Not Found", operation) {
    if (operation === "subtract") {
        console.log(firstNum - secondNum)
    } else if (operation === "multiply") {
     console.log(firstNum * secondNum)
    } else if (secondNum === "Second Number Not Found") {
        console.log("Second Number Not Found")
    } else
    console.log(firstNum + secondNum)
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

--------------------------------------------------------------------------------------------------------------------------------------------------
    taklif 3

function ageInTime(theAge) {
    if (theAge < 100 && theAge > 10) {
        Months = theAge * 12;
        wek = theAge * 52;
        day = theAge * 365;
        hr = theAge * 8760;
        min = theAge * 525600;
        sec = theAge * 31_536_000;
        console.log(`
        ${Months} Months
        ${wek} Weeks
        ${day} Days
        ${hr} Hours
        ${min} Minutes
        ${sec} Seconds`)
    } else {
        console.log("Age Out Of Range")
    }
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
    taklif 5


function createSelectBox(startYear, endYear) {
    document.write(`<select name="years" id="years">`);

    for (i = startYear; i <= endYear; i++) {
        document.write(`<option value=${i}>${i}</option>`)
    }
    document.write(`</select>`)
}

createSelectBox(2000, 2021);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

taklif 6

*/
function multiply(...numbers) {
    let result = 1 ;
    for (let i = 0; i<numbers.length; i++) {
        if (typeof numbers[i] === "number") {
            if (parseFloat(numbers[i])) {
                numbers[i]= parseInt(numbers[i]) 
            } 
                result *=numbers[i];
        }else {
            continue;
        }
    }
    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
