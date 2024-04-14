/*
Group 1
1 - window.alert("Hello From Js File");
2 -write an element
document.write("<h1>Hello Page</h1>");
3 - Printe in console
console.log("Hello From Js File");

4 - error
console.error("error")
5 - console.table(["osama", "Ahmed", "Sayed"]);

6 - console.log("Hello From %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px");

7 - ECMAScript 6: ma3ayir l3amal

var myName = "Osama"
console.log("Hello " + myName);
console.log('Hello ${myName}');

-----------------------------------------------------------------------------
Group 2
8 - Data Types
1 - String
2 - Number
3 - Array
4 - Boolean
5 - Boolean
6 - Object
*/

// string
// console.log(typeof "Osama Mohamed");

// Number
// console.log(typeof 5000);
// console.log(typeof 5000.99);

// Array => Object
// console.log(typeof [10, 15, 17]);
// console.log(typeof [10, 15, 17]);
// console.log(typeof ["Os", "Ah", "Sa"]);

// Object
// console.log(typeof {name: 'Osama', age: 17, country: 'Eg'});

// Boolean
// console.log(typeof true);
// console.log(typeof false);

// undefined
// console.log(typeof undefined);

// Object
// console.log(typeof null);


// 9 - Variables Intro
// -- What is Variable ?
// -- Why We Use Variables ?
// -- Declare A Variable And Use
// -- Syntaxe(Keyword / Variable Name / Assignement Operator)
// -- Variable Without Var
// -- Multiple Variables In The Same Line
// -- Id And Global Variable
// -- Loosely Typed VS Strongly Typed

/*
var user = "Sayed";
var age = 37;

console.log(user);
console.log(user);
console.log(user);
console.log(age);
console.log(hello);

hello.innerHTML = "Option";

Identifiers
-- Name Conventions And Rules
-- Reserved Words

var user = "Sayed";

console.log(user);

/*
-- Redeclare(yes)
-- Access Before Declare(Undifined)
-- Variable Score Drama [Added To Window] ()
-- Block or Function Scope

Let
-- redeclare (no)
-- Access Before Declare (Error)
-- Variable Scope Drama ()
-- Block or Function Scope

Const
-- redeclare (no)
-- Access Before Declare (Error)
-- Variable Scope Drama
-- Block or Function Scope

var aabb = 1;
String Syntax + Character Escape Sequences
    \ Escape + line Continue
    \n

console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log("Elzero Web \"School\"");
console.log("Elzero \\Web \"School\"");
console.log("Elzero\
Web\
School");
console.log('Elzero \nWeb \nSchool');
console.log("Elzero");

Concatenation

let a = "We Love";
let b = "Javascript";

document.write(a + " " + b);


Template literals (Template String)

let c = "We Love";
let d = "Javascript";
let e = "And";
let f = "Programming";

console.log(c + " " + d +
"\n" + e + " " + f);

console.log(`${c} "" ${d}
${e} ${f}`);

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
    <div class="card">
        <div class="child">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>
    </div>
`;

document.write(markup);

-----------------------------------------------------------------------------
Group 3
Video 18

    Arithmetic Operators
    + Addition
    - Substraction
    * Multiplication
    / Division
    ** Exponentiation (ES7)
    % Modulus (Division Remainder)
    ++ Increment [ Post (yatba3 3ad yzid) / pre (yzid 3ad yatba3)]
    ++ Decrement [ Post (yatba3 3ad yna9as) / pre (yna9as 3ad yatba3)]


console.log(10+20);
console.log(10+"Osama");

console.log(10 - 20);
console.log(10 - "Osama"); //Nan

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4); //ous

console.log(10 % 2);
console.log(11 % 2);

---------------------------------------------------------------------------------------------------------------------
Video 19

    - + Unary Plus [Return Number If Its Not Number]
    - - Unary Negation [Return Number If Its Not Number + Negates It]
    Tests

    - Normal Number
    - String Number
    - String Negative Number
    - String Text
    - Float
    - Hexadecimal Numeral System => 0×FF
    - null
    - false
    - true

    console.log(+100);
    console.log(+"-100");
    console.log(+"Osama"); //Nan
    console.log(+"15.5");
    console.log(+0xff);
    console.log(+null);
    console.log(+false);
    console.log(+true);

    console.log(-100);
    console.log(-"-100");
    console.log(-"Osama"); //Nan
    console.log(-"15.5");
    console.log(-0xff);
    console.log(-null);
    console.log(-false);
    console.log(-true);

    console.log(Number("1000"));

--------------------------------------------------------------------------------------------------------------------------------------
Video 20

    Type coercion (Type Casting)
    - +
    - -
    - "" - 2
    - false - true


let a = "10";
let b =  20;
let c = true;

console.log(a - b); // -10
console.log(b - a); // 10

console.log("" - 2); // -2
console.log(+""); // 0

console.log(false - true); // -1
console.log(+false - +true); // -1

console.log(b + c); // 21
console.log(a + b + c); // 1020true
console.log(+a + b + c); // 31
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 21

    Assignement Oprerators


let a = 10; // 10
a = a + 20;  // 30
a = a + 70;  // 100
a += 20;  // 120
a -= 50;  // 70
a /= 5;  // 14
console.log(a)

------------------------------------------------------------------------------------------------------------------------------------------------
Video 22 => ta7adi

Challenge 1

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ +c++ - +a++);
console.log(++a + -b + +c++ - -a++ +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

    console.log(++a + +b++ +c++ - +a++);
    [++a] [+] [+] [b++] [+] [c++] [-] [+] [a++]
    [++a]
    - Value: [20] [2020] [80] [20]
    - Explain: [pre increament] [post increament]
    [+]
    - Explain: [add] [connect] [Add] [less] [connect]



    console.log(++a + -b + +c++ - -a++ +a);

    [++a] [+] [-b] [+] [+] [c++] [-] [-a++] [+] [a]
    - Value: [20] [0] [080] [100]
    - Explain: [pre increament] [pre increament] [post increament] [post increament] [pre increament]
    [+]
    - Explain: [add] [connect] [Add] [less] [connect]



    console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
    [--c]  [b]  [--a]   [b++]  [b] [*] [a]  [--a]  [true]
    - Value: [80] [20] [-10] [40] [20] [10] [10] [-10] [1]
    - Explain: [pre decreament] [positive number] [pre decreament] [post increament] [positive numbre] [number] [pre decreament] [positive number]
    [+] [+] [+] [+] [-] [+] [+] [-] [+]
    - Explain: [add] [positive] [add] [positive] [positive] [add] [positive]

challenge 2

let d = "-100";
let e = "20";
let f = 30;
let g = true;

Only Use Variables Value
Do Not Use Variables Twice

console.log(); // 2000
console.log(); // 173

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log((-e * d)); // 2000
console.log(-d + ++e * ++g + ++f); // 173

-----------------------------------------------------------------------------
Group 4
Video 1
    Number
        - Double Precision
        - Syntactic Sugar "_"
        - e
        - **
        - Width Decimal
        - Number + BigInt
        - Number Min Value
        - Number Max Value


console.log(1000000);
console.log(1_000_000);
console.log(10e6);
console.log(10 ** 6);
console.log(10* 10 *10 *10 *10 *10);
console.log(1000000.00);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

----------------------------------------------------------------------------------------------------------------------------------------------
Video 2

    Number Methods
    - Two Dots To Call A Methods
    - toString()
    - toFixed()
    - parseInt()
    - parseFloat()
    - isInteger() [ES6]
    - isNAN() [ES6]

// toString
console.log((100).toString());
console.log(100..toString());

// toFixed
console.log(100.555555.toFixed(2));  // 100.56

console.log(Number("100 Osama"));
console.log(+"100 Osama");

// parseInt
console.log(parseInt("100 Osama"));  // 100
console.log(parseInt("100.500 Osama"));  // 100

// parseFloat
console.log(parseFloat("100.500 Osama"));  // 100.5

// isInteger
console.log(Number.isInteger("100"));  // False
console.log(Number.isInteger(100.500));  // False
console.log(Number.isInteger(100));  // True

// isNaN
console.log(Number.isNaN(100));  // False
console.log(Number.isNaN("Osama" / 20));  // True

-------------------------------------------------------------------------------------------------------------------------------------------
Video 3

    Math Object
        - round()
        - ceil()
        - floor()
        - min()
        - max()
        - pow()
        - random()
        - trunc() [Es6]


// round
console.log(Math.round(99.2));  // 99
console.log(Math.round(99.5));  // 100

// ceil
console.log(Math.ceil(99.2));  // 100

// floor
console.log(Math.floor(99.9));  // 99

// Min & Max
console.log(Math.min(10, 20, 100, -100, 90));  // -100
console.log(Math.max(10, 20, 100, -100, 90));  // 100

// pow
console.log(Math.pow(2,4));

// random
console.log(Math.random());

// trunc
console.log(Math.trunc(99.5)); // 99

---------------------------------------------------------------------------------------------------------------------------------------
Video 4

Challenge

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number in All Variables And Return Integer
console.log(Math.trunc(Math.min(`${a}`,`${b}`,`${c}`,`${d}`)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(`${a}`, Math.trunc(`${d}`))); // 10000

// Get Integer "2" From d Variables With 4 Methods
console.log(Math.trunc(`${d}`));
console.log(Math.round(`${d}`));
console.log(Math.floor(`${d}`));
console.log(parseInt(`${d}`));

// Use Varibles b + d To Get This values
console.log(Math.ceil(`${b}` / Math.ceil(`${d}`))); // 67 => Number
console.log(((Math.trunc(`${b}`) /  Math.ceil(`${d}`)).toFixed(2)).toString()); // 66.67 => String

-------------------------------------------------------------------------------------------------------------------------------------------
Video 5
    String Methods
    - Access With Index
    - Access With CharAt()
    - length
    - trim()
    - toUpperCase()
    - toLowerCase()
    - Chain Methods

let TheName = "  Ahmed  ";
console.log(TheName);

// charAt => Give number of Index
console.log(TheName[1]);
console.log(TheName[5]);

// charAt => Give number of Index
console.log(TheName.charAt(1));

// length => Counting number of charactere
console.log(TheName.length);

// trim => Remove Space
console.log(TheName.trim());

// UpperCase & LocaleUpperCase
console.log(TheName.toUpperCase());
console.log(TheName.toLowerCase());


console.log(TheName.trim().charAt(2).toLocaleUpperCase());

-------------------------------------------------------------------------------------------------------------------------------------------
Video 6

String Methods
    - indexOf(Value [Mand], Start [Opt] 0)
    - lastIndexOf(Value [Mand], Start [Opt] Length)
    - slice(Start [Mand], End [Opt] Not Include End)
    - repeat(Times) [ES6]
    - split(Separator [Opt], Limit [Opt])

let a = "Elzero|Web School";

console.log(a.indexOf("Web"));  // 7
console.log(a.indexOf("Web", 8));  // -1 Not Founded

console.log(a.indexOf("o"));  // 5
console.log(a.lastIndexOf("o"));  // 15 Last One

// slice
console.log(a.slice(2, 7));  // "zero " Not including The Space
console.log(a.slice(-5, -3));  // negative value count from end

// repeat
console.log(a.repeat(5));

// split
console.log(a.split("", 6));  // Diviser Seperator & Limit of spliting

-----------------------------------------------------------------------------------------------------------------------------------------------
Video 7

String Methods
    - substring(Start [Mand], End [Opt] Not Including End)
        - Start > End Will Swap
        - Start > 0 It Start From 0
        - Use Length To Get Last Character
    - substr(Start [Mand], End [Opt] Not Including End)
        - Start >= Length
        - Negative Start From End
    - includes(Value [Mand], Start [Opt] Default 0) [ES6]
    - startWith(Value) [Mand], Start [Opt] Default 0) [ES6]
    - endWith(Value [Mand], Length [Opt] Default Full Length) [ES6]


let a = "Elzero Web School";

console.log(a.length);  // 17
// substring
console.log(a.substring(2, 6));  // slipt from 2 to 6 "zero"
console.log(a.substring(6, 2));  // slipt from 2 to 6 "zero"
console.log(a.substring(-10));  // slipt from 0 With Negative Value "Elzero Web School"
console.log(a.substring(a.length - 5,));  // "l"
console.log(a.substring(a.length - 5,a.length - 3));  // "ch"

// substr

console.log(a.substr(0, 6)); // "elzero"
console.log(a.substr(17)); // vide
console.log(a.substr(-3)); // ool
console.log(a.substr(-5, 2)); // ch

// includes
console.log(a.includes("Web")); // true
console.log(a.includes("Web", 8));  // false "8 for determinate the begin of search"

// startsWith
console.log(a.startsWith("E"));  // true
console.log(a.startsWith("E", 2));  // true
console.log(a.startsWith("z", 2));  // true
console.log(a.startsWith("zero", 2));  // true

// startsWith : Length Not Index
console.log(a.endsWith("o"));  // False because "Elzero Web School" doesn't end by "o"
console.log(a.endsWith("o", 6));  // true because "Elzero" ending by "o"

----------------------------------------------------------------------------------------------------------------------------------------------
Video 8
Challenge

let a = "Elzero Web School";

// Include This Methods In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase()+a.slice(3, 6));

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8));

// Return Array
console.log();

// Use Only "substr" Method + Template Literals In Your Solution
let ab = a.substr(0, 6);
console.log(ab);
console.log(ab, a.substr(11));

// Solution Must Be Dynamic And String May Change
let k = "elzero";
console.log(k.padStart());

-----------------------------------------------------------------------------
Group 5

Video 1
Comparison Operators
- == Equal
- != Not Equal

- == Identical
- !== Not Edentical

- > Larger Than
- >= Larger Than Or Equal

- < Smaller Than
- <= Smaller Than Or Equal

console.log(10 == "10"); // Compare Value Only

console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);
console.log(10 >= 10);

console.log(10 < 10);
console.log(10 <= 10);
console.log(10 <= 10);

console.log("Osama" !== "Ahmed");

-----------------------------------------------------------------------------------------------------------------------------------------
Video 2
Logical Operators
- ! Not
- && And
- || Or
// Not
console.log(true);  // true
console.log(!true);  // false
console.log(!(10 == "10")); // true

// && And
console.log(10 == "10" && 10 > 8 && 10 >= 10);  // true
console.log(10 == "10" && 10 > 8 && 10 >= 50);  // false

// Or
console.log(10 == "10" || 10 > 80 || 10 >= 50);  // true

--------------------------------------------------------------------------------------------------------------------------------------
Group 6
Video 1

- Control Flow
- if
    if (Condition) {
        // Block Of Code
    }

- else if
- else

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
    price -= discountAmount;  // price = price - discountAmount
} else if (country === "Egypt") {
    price -= 40;  // price = price - discountAmount
} else if (country === "Syria") {
    price -= 40;
} else {
    price -= 10;
}

console.log(price);
----------------------------------------------------------------------------------------------------------------------------------------
Video 2
Nested If

let price = 100;
let discount = false;
let discountAmount = 40;
let country = "Egypt";
let = student = true;

if (discount === true) {

    price -= discountAmount;

} else if (country === "Egypt") {

    price -= discountAmount + 10;

    if (student === true) {

        price -= discountAmount + 30;

    } else {

        price -= discountAmount + 10;

    }

} else {

    price -= 10;

}
-------------------------------------------------------------------------------------------------------------------------------------------
Video 3
Conditional (Ternary) Operator

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
    console.log("Mr");
} else {
    console.log("Mrs");
}

// condition ? If True : If: False
theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
? console.log(20)
: theAge > 20 && theAge < 60
? console.log("20 To 60")
: theAge > 60
? console.log("Larger Than 60")
: console.log("Unknown");

-------------------------------------------------------------------------------------------------------------------------------------------
Video 4

Logical Or
    Null + Undefined + Any Falsy Value
    Nullish Coalescing Operator ??
    Null + Undefined

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price = ;

console.log(`The Price Is ${price || 200}`);
console.log(`The Price Is ${price ?? 200}`);

--------------------------------------------------------------------------------------------------------------------------------------------
Video 5
    If Challenge
challenge 1

let a = 10;

// if (a < 10) {
//     console.log(10);
// } else if (a >= 10 && a <= 40) {
//     console.log("10 To 40");
// } else if (a > 40) {
//     console.log("> 40");
// } else {
//     console.log("Unknown");
// }

b = a < 10
? 10
: a >= 10 && a <= 40
? "10 To 40"
: a > 40
? "> 40"
: "Unknown";

console.log(b);

// challenge 2

// Write With Ternary If Syntax

let st = "Elzero Web School";

if(st.repeat(2).length.toString() === "34") {
    console.log("Good");
}

// challenge 3

// W Position May Change

if(st.charAt(7).toLowerCase().toString() === "w") {
    console.log("Good");
}

// challenge 3

if (typeof(+st) !== "string") {
    console.log("Good");
}


// challenge 4

if (typeof(+st) === "number") {
    console.log("Good");
}

// challenge 5

if (st.slice(0 , 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}
----------------------------------------------------------------------------
Group 7
Video 1

Switch Statement
switch(expression) {
    Case 1:
        // Code Block
        break;
    Case 2:
        // Code Block
        break;
    Default:
        // Code Block
}
- Default Ordering
- Multiple Match
- ===

let day = 3;

switch (day) {
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
    case 3:
        console.log("Monday");
        break;
    default:
        console.log("Unknown Day")
}
------------------------------------------------------------------------------------------------------------------------------------------
Video 2
Swithch Challenge

// Challenge 1
let job = "Manager";
let salary = 0;

// if (job = "Manager") {
//     salary = 8000;
// } else if (job === "IT" || job === "Designer") {
//     salary = 7000;
// } else {
//     salary = 4000;
// }

switch (job) {
    case "Manager":
        let s = 8000;
        console.log(`My Money is ${s}`);
        break;

    case "IT":
    case "Designer":
        let sa = 7000;
        console.log(`My Money is ${sa}`);
        break;

    default:
        let salary = 4000;
        console.log(`My Money is ${salary}`);
}

// Challenge 2

let holiday = 0;
let money = 0;

// switch (holiday) {
//     case 0:
//         m = 5000;
//         console.log(`My Money is ${m}`);
//         break;

//     case 1:
//     case 2:
//         mo = 3000;
//         console.log(`My Money is ${mo}`);
//         break;

//     case 3:
//         mon = 2000;
//         console.log(`My Money is ${mon}`);
//         break;

//     case 4:
//         mone = 1000;
//         console.log(`My Money is ${mone}`);
//         break;

//     case 5:
//         money = 0;
//         console.log(`My Money is ${money}`);
//         break;

//     default:
//         ney = 0;
// }


if (holiday = 0) {
    money = 8000;
    console.log(`${money}`);

} else if (holiday = 1 || holiday === 2) {
    money = 3000;
    console.log(`${money}`);

} else if (holiday = 3) {
    money = 2000;
    console.log(`${money}`);

} else if (holiday = 4) {
    money = 1000;
    console.log(`${money}`);

} else if (holiday = 5) {
    money = 0;
    console.log(`${money}`);

} else {
    money = 0;
    console.log(`${money}`);
}
---------------------------------------------------------------------------------------------------------------------------------------------
Group 8
Video 1

Array
    - Create Arrays [Two Methods] new Array() + []
    - Access Arrays Elements
    - Nested Arrays
    - CHange Arrays Elements
    - Check For Arrays Array.isArray(arr);

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);  // hello Ahmed
console.log(`Hello ${myFriends[2]}`);  // hello Sayed

console.log(`${myFriends[1][2]}`);  // h

console.log(`Hello ${myFriends[3]}`);  // hello Marwan, Ali
console.log(`Hello ${myFriends[3][1]}`);  // hello Ali

console.log(`Hello ${myFriends[3][1][2]}`);  // Hello i

console.log(myFriends);
myFriends[1] = "Hassan";
console.log(myFriends);

myFriends[3] = ["Islam", "Salim", "adil"];
console.log(myFriends);

console.log(typeof myFriends);  // object
console.log(Array.isArray (myFriends));  // Array
----------------------------------------------------------------------------------------------------------------------------------------------
Video 2

Array Methods
    - Length

// Index Start From 0

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends.length);  // 4

// myFriends[myFriends.length] = "Gamal";  // ['Ahmed', 'Mohamed', 'Sayed', 'Gamal']
myFriends[myFriends.length- 1] = "Gamal";  // ['Ahmed', 'Mohamed', 'Sayed', 'Gamal']

console.log(myFriends); // ['Ahmed', 'Mohamed', 'Sayed', 'Alae', empty × 2, 'Gamal']
myFriends[6] = "Gamal";
console.log(myFriends.length); // 7

--------------------------------------------------------------------------------------------------------------------------------------------
Video 3
    Array Methods [Adding And Removing]
        - Unshift("", "") Add Element To The First
        - push("", "") Add Element To The End
        - shift() Remove First Element From Array
        - pop() Remove Last Element From Array

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends);

myFriends.unshift("Osama", "Nabil");  // Add element in the begin

console.log(myFriends);

myFriends.push("Samah", "Eman");  // Add element in the End

console.log(myFriends);

let first = myFriends.shift();  // Remove Osama wykhazno (first element)
let last = myFriends.pop();  // Remove eman wykhazno (last element)

console.log(myFriends);

console.log(`first name is ${first}`);  // first name is Osama

--------------------------------------------------------------------------------------------------------------------------------------------
Video 4

Arrays Methods [Search]
    - indexOf(Search Element, From Index [Opt])
    - last IndexOf(Search Element, From Index [Opt])
    - includes(ValueToFind, fromIndex [Opt] [ES7])

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed"));  // 0
console.log(myFriends.indexOf("Ahmed", 2));  // 4

console.log(myFriends.lastIndexOf("Ahmed"));  // 4 last one
console.log(myFriends.lastIndexOf("Ahmed", -2));  // 0

console.log(myFriends.includes("Ahmed"));  // true
console.log(myFriends.includes("Ahmed", 2));  // true

if (myFriends.indexOf("Osama") === -1) {
    console.log("Not Found");  // -1
}

if (myFriends.lastIndexOf("Osama") === -1) {
    console.log("Not Found");  // -1
}

-------------------------------------------------------------------------------------------------------------------
Video 5

Arrays Methods [Sort]
    - sort(Function [Opt])
    - reverse


let myFriends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

console.log(myFriends.sort());  // ynadam l9iyam 3la 7ssab tartib nta3 ra9m lawal
console.log(myFriends.reverse()); // ya9lab tartib

--------------------------------------------------------------------------------------------------------------------------------------------
Video 6

Arrays Methods [Slicing]
    - slice(Start [Opt], End [Opt] Not Including End)
    --- slice() => All Array
    --- If Start Is Undefined => 0
    --- Negative count From End
    --- If End Is Undefined || > Indexes => Slice To The End Array.length
    --- Return New Array
    - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
    --- if Negative => Start From The End


let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());  // All Array
console.log(myFriends.slice(1));  // from sayed to the end
console.log(myFriends.slice(1, 3));  // from sayed to Ali
console.log(myFriends.slice(-3));  // from Osama to end
console.log(myFriends.slice(1, -2));  // from sayed  to osama (not including end)
console.log(myFriends.slice(-4, -2));  // Ali & osama (not including end)

console.log(myFriends);

myFriends.splice(1, 1, "Samir", "Samara");  // splice(mnin tbadi, ch7al ta7daf, li tzido)

console.log(myFriends)

------------------------------------------------------------------------------------------------------------------------------------------------
Video 7
Arrays Methods [Joining]
    - concat(array, array) => Return A New Array
    - join(Separator)

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ammer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);
console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toLocaleUpperCase());

---------------------------------------------------------------------------------------------------------------------------------------------
Video 8
Challenge


let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ammer"];

// Write Code Here

console.log(my.slice(zero,`${counter}`- my.indexOf()).reverse());  // ["Osama", "Elham", "Mazero", "Ahmed";]

console.log(my.slice(zero, counter + my.indexOf()));  // ["Ahmed", "Mazero"];

console.log(`${my [counter + my.indexOf()][zero]}`+`${my [counter + my.indexOf()]
    [counter + my.indexOf()+ my.lastIndexOf()]}`+`${my [counter + my.indexOf()+ my.lastIndexOf()]
    [counter + my.indexOf()]}`+`${my [counter + my.indexOf()+ my.lastIndexOf()]
    [counter]}`+`${my [counter + my.indexOf()+ my.lastIndexOf()]
    [counter - my.indexOf()]}`+`${my [counter + my.indexOf()+ my.lastIndexOf()]
    [counter - my.indexOf() - my.lastIndexOf()]}`);

console.log(`${my[counter + my.indexOf()+ my.lastIndexOf()]
    [counter - my.indexOf()]}`+`${my [counter + my.indexOf()+ my.lastIndexOf()]
        [counter - my.indexOf() - my.lastIndexOf()]}`.toUpperCase());  // "rO"

----------------------------------------------------------------------------------------------------------------------------------------------------------
Group 9
Video 1

Loop
    - For
    for ([1] [2] [3]) {
        // Block Of Code
    }


for (let i = 0; i < 10; i++) {
    console.log(i);
}

---------------------------------------------------------------------------------------------------------------------------------------------
video 2

Loop
    - Loop On Sequences

let myFriends = [1, 2, "Osama", "Ahmed", "Sayed", "Ali", "Amira"];

let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
    if (typeof(myFriends)[i] === "string") {
        onlyNames.push(myFriends[i]);
    }
}

console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i]);
// }

-------------------------------------------------------------------------------------------------------------------------------------------

Video 3

Loop
    - Nested Loops

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(15));
    console.log("Colors:");

    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
    }

    console.log("Models:")
    for (let k = 0; k < models.length; k++) {
        console.log(`- ${models[k]}`);
    }
}

--------------------------------------------------------------------------------------------------------------------------------------------------------
Video 4

// Break:

// let products = ["Keyboard","Mouse","Pen","Pad","Monitor"];

// let colors = ["Red", "Green", "Black"];

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);  // "Keyboard","Mouse","Pen"
//     if (products[i] === "Pen") {
//         break;
//     }
//     // console.log(products[i]);  // "Keyboard","Mouse"
// }

// continue:

// let products = ["Keyboard","Mouse", 10, 20, "Pen","Pad", 30, 40, "Monitor"];

// let colors = ["Red", "Green", "Black"];

// for (let i = 0; i < products.length; i++) {
//     if (typeof products[i] === "number") {
//         continue;
//     }
//     console.log(products[i]);
// }

// Label:

let products = ["Keyboard","Mouse","Pen","Pad","Monitor"];

let colors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] === "Green") {
            break mainLoop;
        }
    }
}

-------------------------------------------------------------------------------------------------------------------------------------------------
Video 5

    Loop For Advanced Exemple

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let i = 0;
for (;;) {  // ";" Daroriya
    console.log(products[i]);  // natba3 3ad ndir i++
    i++ // i += 2; bach naktab wa7d wanagaz wa7ad
    if (i === products.length) break;
}

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 6

    Products Practice

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h1>Show ${showCount} Product</h1>`);

for (let i = 0; i < showCount; i++) {
    document.write(`<div>`)
    document.write(`<h3>[${i+1}] ${products[i]}</h3>`)
    for (let j = 0; j < colors.length; j++) {
        document.write(`<p>${colors[j]}</p>`)
    }
    document.write(`<p>${colors.join(" | ")}</p>`)
    document.write(`</div>`)
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Group 10
Video 1

    Loop
    - While

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"]

let i = 0;
while (i < products.length) {
    console.log(products[i]);
    i += 1;
}
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 2

    Loop
    - Do / While

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"]

let i = 0;

do {
    console.log(i);
    i++;
}
while (false) ;

console.log(i);
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 3

    Loop Challenge


let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samira"];
let myEmployees = ["Amgad", "Samah","Ammer", "Omar", "Othman", "Amany", "Samira"];
let count = 1;
let count2 = 0;
let myArray= []

document.write(`<div>We Have ${myEmployees.length} Employees</div>`)

myArray = myAdmins.slice(0, myAdmins.indexOf("Stop"))
document.write(`<div>We Have ${myArray.length} Admins</div>`)

document.write(`<hr></hr>`)
// -------------------------------------------------------------------------------------------
for (let i = 0; i < myArray.length; i++) {
    document.write(`
    <div>
        "The Admin For Team ${count++} Is ${myArray[i]}"
        <h3>Team Members: </h3>
    </div>`)
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j][0] === myArray[i][0]) {
            document.write(`<p>${++count2} ${myEmployees[j]}</p>`)
        }
    }
    count2 = 0
}

document.write(`<hr></hr>`);

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Group 12
Video 1

Function
    - What Is Function ?
    - User-Defined vs Built In
    - Syntax + Basic Usage
    - Exemple From Real Life
    - Parameter + Argument
    - Practical Exemple


console.log(typeof console.log);  // function

function sayHello(userName) {
    console.log(`Hello ${userName}`);
}

sayHello("Osama")  // Hello Osama
sayHello("Sayed")  // Hello Sayed
sayHello("Ali")  // Hello Ali

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 2

    Function Advanced Exemples

function sayHello(userName, age) {
    if (age < 20) {
        console.log(`App Is Not Suitable For You`);
    } else {
    console.log(`Hello ${userName} Your Age Is ${age}`);
    }
}

sayHello("Osama", 38)  // Hello Osama Your Age Is 38
sayHello("Sayed", 40)  // Hello Sayed Your Age Is 40
sayHello("Ali", 18)  // App Is Not Suitable For You

function generateYears(start, end, exclude) {
    for (let i = start; i <= end; i++) {
        if (i === exclude) {
            continue
        }
        console.log(i)
    }
}

generateYears(1982, 2021, 2020);  // mn 1982 7ata 2021 wmayaktabch 2020

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 3

    Function
    - Return
    - Automatic Semicolon Insertion [No Line Terminator Allowed]
    - Interruption

function generate(start, end) {
    // return num1 + num2  // return machi hiya yatba3 // we should not write any thing after return;
    for (let i = start; i <= end; i++) {
        if (i === 15) {
            return `Interrupting`;
        }
        console.log(i);
    }
}

// let result = calc(10, 20);  // takhzin f variable

// console.log(result); // 30

generate(10, 20)

------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 4

    function
        - Default Function Parameter
        - Function Parameters Default [Undefined]
        - Old Strategies [Condition + Logical Or]
        - ES6 Method


function sayHello(userName, age = "Unknown") {
    // if (age === undefined) {
    //     age = "Unknown"
    // }
    // age = age || "Unknown";
    return `Hello ${userName} Your Age Is ${age}`;
}

console.log(sayHello("Osama")) // Hello Osama Your Age Is Unknown // Default Value "Undefined"

-------------------------------------------------------------------------------------------------------------------------------------------------------
Video 5

    function
        - Rest Parameter
        - Only One Allowed
        - Must Be Last Element


function calc(...numbers) {

    let result = 0
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]; // result = result + numbers[i]
    }
    return `Final Resulr Is ${result}`
}

console.log(calc(10, 20, 10, 50, 60 ,20));

-----------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 6

    fuction
        - Parameters
        - Default
        - Rest
        - Loop
        - Condition


function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
    document.write(`<div>`);
    document.write(`<h2>Welcome, ${us}</h2>`);
    document.write(`<p>Age: ${ag}</p>`);
    document.write(`<p>Hour Rate: ${rt}</p>`);
    if (show === "Yes") {
        if (sk.length > 0) {
            document.write(`<p>Skills: ${sk.join(" | ")}</p>`)
        } else {
            document.write(`<p>Skills: No Skills`);
        }
    } else {
        document.write(`<p>Skills Is Hidden</p>`);
    }
    document.write(`</div>`);
}

showInfo("Osama", 38, 20, "Yes", "HTML", "CSS")

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 7

    fuction - Random Argument Challenge
    ============================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
        - String => Name
        - Number => Age
        - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
        - Use Ternary Conditional Operator


function showDetails(...info) {
    for (i = 0; i < info.length; i++) {
        if (typeof info[i] === "string"){
            us = info[i]
        } else if (typeof info[i] === "number") {
            ag = info[i];
        } else if (info[i] === true) {
            bl = "You Are Available For Hire"
        } else if (info[i] === false) {
            bl = "You Are Not Available For Hire"
        }
    }
    console.log(`Hello ${us}, Your Age Is ${ag}, ${bl}`)
}


showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Group 13
Video 1

    function
    - Anonymous Function
    - Calling Named Function vs Anonymous Function
    - Argument To Other Function
    - Task Without Name
    - SetTimeOut


let calculator = function (num1, num2) {
    return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
    console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello
// function () {
//     console.log("Show")
// };

setTimeout(function elzero() {
    console.log("Good");
}, 2000);

// --------------------------------------------------------------------------------------------------------------------------------------------------
// Video 2

    function
        - Function Inside Function
        - Return Function

// Exemple 1

function sayMessage(fName, lName) {
    let message = "Hello"
    // Nested Function
    function concatMsg() {
        message = `${message} ${fName} ${lName}`;
    }
    concatMsg();
    return message;
}

console.log(sayMessage("Osama", "Mohamed"));

// Exemple 2

function sayMessage(fName, lName) {
    let message = "Hello"
    // Nested Function
    function concatMsg() {
        return `${message} ${fName} ${lName}`;
    }
    return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

// Exemple 3

function sayMessage(fName, lName) {
    let message = "Hello"

    // Nested Function

    function concatMsg() {

        function getFullName() {
            return `${fName} ${lName}`
        }
        return `${message} ${getFullName()}`;
    }
    return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

-------------------------------------------------------------------------------------------------------------------------------------
Video 3

    function
    - Arrow Function
    -- Regular vs Arrow [Param + No Param]
    -- Multiple Lines

// expl 1
// let print = function () {
//     return 10; //10
// }

// let print = _ => 10; // 10 // I Can do This Method With one Link After function

// console.log(print());

// let print = function () {
//     return 10; //10
// }

// expl 2

// let print = function (num) {
//     return num;
// }
// console.log(print(100)); // 100

// let print = num => num;

// console.log(print(100)); // 100

// expl 3

// let print = function (num1, num2) {
//     return num1 + num2;
// }
// console.log(print(50, 100)); // 150

let print = (num1, num2) => num1 + num2;

console.log(print(50, 100)); // 150

--------------------------------------------------------------------------------------------------------------------------------
Video 4

    Scope
        - Global And Local Scope

var a = 1;
let b = 2;

function showText() {
    var a = 10;
    let b = 20;
    console.log(`Function - From Local ${a}`)
    console.log(`Function - From Local ${b}`)
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();

--------------------------------------------------------------------------------------------------------------------------------
Video 5

    Scope
        - Block Scope [If, Switch, For]


var x = 10;

if (10 === 10) {
    let x = 50;
    console.log(`From If Block ${x}`); // 50
}

console.log(`From Global ${x}`); // 10

------------------------------------------------------------------------------------------------------------------------------------------
Video 6

    Scope
        - Lexical Scope

    Search
        - Execution Content
        - Lexical Envirenment


function parent() {
    let a = 10;

    function child() {
        let a = 20;
        console.log(a);  // 20 // 10
        console.log(`From child ${b}`); // b is not defined because the variables in child

        function grand() {
            let b = 100;
            console.log(`From Grand ${a}`); // 10
        }
        grand()
    }
    child();
}
parent();

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 7

    Function Arrow Challenges


// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names =(...name) => name = `String [${name.join("], [")}] => Done !`

console.log(names("adel", "Osama", "Mohamed", "Ali", "Hassan", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done

// ==========================================================================

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + +nums;

// let calc = function (one, two, ...nums) {
//     return one + two + +nums;
// }

// console.log(calc(10, myNumbers[+""], myNumbers[+true])); // 80

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Group 14
// Video 1*/

//     Higher Order Function
//     --> is a function that accepts functions as parameters and/or return a function.

//     Map
//     --- method creates a new array
//     --- populated with the results of calling a provided function on every element
//     --- in the calling array

//     Syntax map(callBackFunction(Element, Index, Array)- {-}, thisArg)
//     - Element => The current element being processed in the array.
//     - Index => The Index of the current element being processed in the array.
//     - Array => The Current Array

//     Notes
//     - Map Return A New Array

//     Exemples
//     - Anonymous Function
//     - Named Function

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for (let i = 0; i < myNums.length; i++) {
//     newArray.push(myNums[i] + myNums[i]);
// }

// console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function(element, index, arr) {
//     console.log(`current Element => ${element}`);
//     console.log(`current Index => ${index}`);
//     console.log(`Array => ${arr}`);
//     console.log(`this => ${this}`);
//     return element + element;
// }, 10);

// let addSelf = myNums.map(a =>  a + a);

// console.log(addSelf);

// function addition(ele) {
//     return ele + ele;
// }

// let add = myNums.map(addition);

// console.log(add);

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// video 2

//     Map
//     - Swap Cases
//     - Inverted Numbers
//     - Ignore Boolean Value

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreBooleans = "Elz123er4o";

// let  sw = swappingCases.split("").map(function (ele) {
//     return ele === ele.toLocaleUpperCase() ? ele.toLocaleLowerCase() : ele.toLocaleUpperCase();
// }).join("");

// console.log(sw);

// let ref = ignoreBooleans.split("").filter(function (ele) {
//     return isNaN(parseInt(ele));
// }).join("")

// console.log(ref);

// let inv = invertedNumbers.map(function (ele) {
//     return -ele;
// });

// console.log(inv);

// let ref = ignoreBooleans.split("").map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
// }).join("")

// console.log(ref);

// // Arrow Function Version

// let ign = ignoreBooleans.split("").map( a => isNaN(parseInt(a)) ? a : "").join("")

// console.log(ign);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Video 3

//     - Filter
//         --- method creates a new array
//         --- with all elements that pass the test implemented by the provided function.

//     - Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg )
//         - Element => The current element being processed in the array.
//         - Index => The index of the current element being processed in the array.
//         - Array => the Current Array.


// // Get Friends With Name Starts With A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmae", "Amgad", "Israa"];

// // Get Even Numbers Only
// let numbers = [11, "Sameh", 20, 2, 5, 17, 10];

// // Test Map vs Filter

// let addMap = numbers.map(function(el) {
//     return el + el
// });

// console.log(addMap);

// let addFilter = numbers.filter(function(el) {
//     return el + el
// });

// console.log(addFilter);

// let filterFriends = friends.filter(function (el) {
//     return el.startsWith("A");
// });

// console.log(filterFriends);

// let evenNumbers = numbers.filter(function (el) {
//     return el % 2 === 0
// })

// console.log(evenNumbers);
// -----------------------------------------------------------------------------------------------------------------------------------------------

// video 4

//     Filter
//         - Filter longest Word By Number

// // Filter Words More Than 4 Characters
// let sentence = "I love Foood Code Too Playing much";

// // let smallWords = sentence.split(" ").filter(function (ele){
// //     return ele.length <= 4
// // }).join(" ");

// // console.log(smallWords);

// // Ignore Numbers

// // FIlter Strings + Multiply

// let mix = "A13BS2ZX";

// let a = mix.split("").filter(function (b) {
//     return !isNaN(b);
// }).map(function (b) {
//     return +b * +b
// }).join()

// console.log(a)
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 5

// - Reduce
//     --- Return executes a reducer function on each element of the array,
//     --- Resulting in a single output value.

//     Syntax
//     reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
//     - Accumulator => the accumulated value previously returned in the last invocation.
//     - Current Val => The Current element being processed in the array.
//     - Index => The Index of the current element being processed in the array.
//     -----------Starts from index 0 if an initialValue is provided.
//     -----------Otherwise, it starts from index 1.
//     - Array => The Current Array.


// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//     console.log(`Acc => ${acc}`);
//     console.log(`Current Element => ${current}`);
//     console.log(`Current Element Index => ${index}`);
//     console.log(`Array => ${arr}`);
//     console.log(acc + current);
//     console.log(`#####################`);
//     return acc + current;
// },5);
// console.log(add);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 6

//     reduce
//         - longest Word
//         - Remove Characters + Use reduce

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_two"];

// let checked = theBiggest.reduce(function (acc, current) {
//     console.log(`Acc => ${acc}`);
//     console.log(`Current Element => ${current}`);
//     console.log(acc.length > current.length ? acc : current);
//     console.log(`#####################`);
//     return acc.length > current.length ? acc : current;
// });
// console.log(checked)

// let removeChars = ["E", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars.filter(function (ele) {

//     return ! ele.startsWith("@");

// }).reduce(function (acc, current){
//     return acc + current
// })

// console.log(finalString)
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 7

//     forEach
//     --- method executes a provided function once for each array element.

//     Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
//     - Element => The Current element being procesed in the array.
//     - Array => The Current Array

//     Note
//     - Doesn't Return Anything [Undefined]
//     - Break Will Not Break The Loop


// HTML Elements

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function(ele) {
//     ele.onclick = function () {

//         // remove Active Class From All Ellements
//         allLis.forEach(function (ele) {
//             ele.classList.remove("active");
//         });

//         // console.log(this);
//         this.classList.add("active");

//         // Hide All Divs
//         allDivs.forEach(function (ele) {
//             ele.style.display = "none"
//         });
//     };
// });

// console.log(allLis);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Video 8

// Higher Order Function Challenges

// You can Use
// - ,
// - _
// - space
// - True => One Time Only In The Code

// You Cannot Use
// - invertedNumbers
// - Letters

// - You Must Use [Filter + Mao + Reduce + Your Knowledge]
// - Order is Not Important
// - All In One Chain

// let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,W,e,b_,s,c,h,o,o,l,2,0,Z";

// let solution = myString.split("").filter(function(a) {
//     return  isNaN(a)

// }).map(function (a) {
//     return a !== "," && a !== "_" && a === a.toLowerCase("e") ? a : "";

// }).join("").split("").reduce (function removeChars (acc, curr) {


// },"E");
// ?????????????????????????????????????????????????????????????

// console.log(solution);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Group 15
    Video 1

    Object
    Intro and What Is Object
    Testing Window Object
    Accessing Object */

// let = user = {
//     // Proprties
//     theName: "Osama",
//     theAge: 38,
//     // Methods
//     sayHello: function () {
//         return 'Hello';
//     }
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Video 2

    Object
    - Dig Deeper
    - Dot Notation vs Bracket Notation
    - Dynamic Property Name
*/

// let user = {
//     theName: "Osama",
//     "country of": "Egypt",
// };

// console.log(user.theName); // Osama
// console.log(user["theName"]); // osama
// console.log(user["country of"]);  // Egypt

// let myVar = "country"

// let user = {
//     theName: "Osama",
//     country: "Egypt",
// };

// console.log(user.theName); // Osama
// console.log(user.country); // Egypt
// console.log(user.myVar); // Undefined
// console.log(user[myVar]); // Egypt
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Video 3
    Object
    - Nested Object And Trainings
*/

// let user = {
//     name: "Osama",
//     age: 38,
//     skills: ["HTML", "CSS", "JS"],
//     available: false,
//     addresses: {
//         ksa: "Riyad",
//         egypt: {
//             one: "Cairo",
//             two: "Giza",
//         },
//     },
//     checkAv: function () {
//         if (user.available === true) {
//             return "Free For Work";
//         } else {
//             return "Not Free";
//         }
//     }
// };

// console.log(user.name);  // Osama
// console.log(user.age);  // 38
// console.log(user.skills);  // ["HTML", "CSS", "JS"]
// console.log(user.addresses.ksa); // Riyad
// console.log(user.addresses.egypt.one); // Cairo
// console.log(user["addresses"].egypt.one); // Cairo
// console.log(user["addresses"]["egypt"]); // one: 'Cairo', two: 'Giza'
// console.log(user["addresses"]["egypt"]["one"]); // Cairo
// console.log(user.checkAv());
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Video 4
    Object
    - Create With New Keyword new Object();
*/

// let user = new Object({
//     age: 20,
// })

// console.log(user);

// user.age = 38;
// user["country"] = "Egypt";

// user.sayHello = function () {
//     return 'Hello'
// }

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Video 5

    Function this keyword
    - this Introduction
    - this inside Object Method
    --- When a function is called as a method of an object,
    --- Its this is set to the object the method is called on.
    - Global Object
    - Test Variables With Window And This
    - Global Context
    - Function Context

    Search
    - Strict Mode
*/

// console.log(this);
// console.log(this === window); // true

// myVar = 100;

// console.log(window.myVar); // 100
// console.log(this.myVar); // 100

// function sayHello() {
//     console.log(this);
//     return this;
// }

// sayHello(); // Window

// console.log(sayHello() === window);

// // HTML

// document.getElementById("cl").onclick = function () {
//     console.log(this);
// };

// let user = {
//     age: 38,
//     ageInDays: function () {
//         return this.age * 365;
//     },
// };

// console.log(user.age);
// console.log(user.ageInDays());
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 6

// let user = {
//     age: 40,
//     doubleAge: function () {
//         return this.age * 2
//     },
// };

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create({});

// obj.a = 100;

// console.log(obj);

// let copyObj = Object.create(user);

// copyObj.age = 30;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Video 7

    // Object
        - Create Object With assign Method
*/

// let obj1 = {
//     prop1: 1,
//     meth1: function() {
//         return this.prop1;
//     },
// };

// let obj2 = {
//     prop2: 2,
//     meth2: function () {
//         return this.prop2;
//     }
// }

// let targetObject = {
//     prop1: 1,
//     prop3: 3,
// };

// let finalObject = Object.assign(targetObject, obj1, obj2);

// finalObject.prop1 = 200;

// console.log(finalObject); // {prop1: 1, prop3: 3, prop2: 2, meth1: ƒ, meth2: ƒ}

// let newObject = Object.assign({}, obj1, {prop5: 5, prop6: 6});

// console.log(newObject);
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* group 16

    Video 1

    DOM
    - What Is DOM
    - DOM Selectors
    --- Find Element By ID
    --- Find Element By Tag Name
    --- Find Element By Class Name
    --- Find Element By CSS Selectors
    --- Find Element By Collection
    ------ title
    ------ body
    ------ images
    ------ forms
    ------ links
*/

// HTML

// let myIdElement = document.getElementById("my-div");
// console.log(myIdElement);

// let myTagElement = document.getElementsByTagName("p");
// console.log(myTagElement[1]);
// myTagElement[1].innerHTML = "Test";

// let myClassElement = document.getElementsByClassName("my-span");
// console.log(myClassElement);

// let myQueryElement = document.querySelector(".special");
// console.log(myQueryElement);

// let myQueryAllElement = document.querySelectorAll(".my-span");
// console.log(myQueryAllElement);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);  // Hello
// console.log(document.links[1].href);  // https://facebook.com/
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Video 2
    DOM [Get / Set Elements Content And Attributes]
    - innerHTML
    - textContent
    - Change Attributes Directly
    - Change Attribites With Methods
    ---- getAttribute
    ---- setAttribute

    Search
    - innerText
*/

// let myElement = document.querySelector(".js");

// console.group(myElement.innerHTML);
// console.group(myElement.textContent);

// myElement.innerHTML = "Text From <span>Main.js</span> File"  // span is HTML Element
// myElement.textContent = "Text From <span>Main.js</span> File"  // span is Text

// document.images[0].src = "https://google.com";
// document.images[0].alt = "Alternate";
// document.images[0].title = "picture";  // For Add A title
// document.images[0].className = "img";  // For Add A Class

// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class"));  // link
// console.log(myLink.getAttribute("href"));  // #

// console.log(myLink.getAttribute("class"));  // link
// console.log(myLink.getAttribute("href", "https://twitter.com"));  // #
// console.log(myLink.setAttribute("href", "https://twitter.com"));  // https://twitter.com
// console.log(myLink.setAttribute("title", "twitter"));  // title = twitter
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Video 3

    DOM [check Attributes]
    - Element.attributes
    - Element.hasAttribute
    - Element.hasAttributes
    - Element.removeAttribute
*/

// console.log(document.getElementsByTagName("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-")) {
//     console.log("Found");  // Found
// } else {
//     console.log("Not Found");
// }

// if (myP.hasAttribute("data-")) {
//     if (myP.getAttribute("data-") === "") {
//         myP.removeAttribute("data-");
//     } else {
//         myP.setAttribute("data-src", "New Value")
//     }
// } else {
//     console.log("Not Found")
// }

// if (myP.hasAttributes()) {
//     console.log("Has Attribute")
// }

// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//     console.log('Has Attributes');
// } else {
//     console.log('Div Has No Attributes');
// }
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Video 4

    DOM [Create Elements]
    - CreateElement
    - CreateComment
    - CreateTextNode
    - CreateAttribute
    - appendChild
*/

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute('data-custom');
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// // Append Text To Element
// myElement.appendChild(myText);

// // Append Comment Tp Element
// myElement.appendChild(myComment);

// // Append Element to Body
// document.body.appendChild(myElement);
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Video 5

    DOM [Create Elements]
    - Practice Product With Heading And paragraph
*/

// My Code:

// for (i = 1; i <= 100; i++) {
// let myMainDiv = document.createElement("div");
// let myTitle = document.createElement("h3");
// let myP = document.createElement("p");

// let myText = document.createTextNode("Title")
// let myTextP = document.createTextNode("Product One")

// myMainDiv.className = "product";
// myTitle.appendChild(myText);
// myP.appendChild(myTextP);


// document.body.appendChild(myMainDiv).appendChild(myTitle).appendChild(myP);
// }

// Zero's Code

// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

// // Add Heading Text
// myHeading.appendChild(myHeadingText);

// // Add Heading To Main Element
// myMainElement.appendChild(myHeading);

// // Add Paragraph Text
// myParagraph.appendChild(myParagraphText);

// // Add Paragraph Text
// myMainElement.appendChild(myParagraph);

// myMainElement.className= "product";
// document.body.appendChild(myMainElement);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Video 6

    DOM [Deal With Childrens]
    - children
    - childNodes
    - firstChild
    - lastChild
    - firstElementChild
    - lastElementChild
*/

// HTML

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children); // <p></p> And <span></span>
// console.log(myElement.children[0]); // <p></p>
// console.log(myElement.childNodes); // <p></p> And <span></span> And Text And Comment
// console.log(myElement.childNodes[0]); // Hello Div

// console.log(myElement.firstChild); // <-- Osama -->
// console.log(myElement.lastChild); // Hello

// console.log(myElement.firstElementChild); // <p></p>
// console.log(myElement.lastElementChild); // <span></span>
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Video 7

    DOM [Events]
    - Use Events On HTML
    - Use Events On JS
    --- onclick
    --- oncontextmenu
    --- onmouseenter
    --- onmouseleave

    --- onload
    --- onscroll
    --- onresize

    --- onfocus
    --- onblur
    --- onsubmit

*/

// let myBtn = document.getElementById("btn");

// myBtn.onclick = function() {
//     console.log("Clicked");  // min tkliquer tatba3 Clicked fl console
// };

// myBtn.oncontextmenu = function() {
//     console.log("Clicked");  // right click
// };

// myBtn.onmouseenter = function() {
//     console.log("Clicked"); // Min dir 3liha hover taktab
// };

// myBtn.onmouseleave = function() {
//     console.log("Clicked"); // min tagla3 hover taktab
// };

// window.onscroll = function () {
//     console.log("Scroll");
// };

// window.onresize = function () {
//     console.log("Scroll");
// };
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*video 8

    Dom [Events]
    - Validate Form Practice
    - Prevent Default
*/

// document.links[0].onmouseenter = function (event) {
//     console.log(event);
// };

// let userInput = document.querySelector("[name = 'username']");
// let ageInput = document.querySelector("[name = 'age']");

// console.log(userInput)

// document.forms[0].onsubmit = function (e) {
//     let userValid = false;
//     let ageValid = false;

//     if (userInput.value !== "" && userInput.value.length <= 11) {
//         userValid === true;
//     }

//     if (ageInput !== "") {
//         ageValid = true;
//     }

//     if (userValid === false || ageValid === false) {
//         e.preventDefault();
//     }
// };

// document.links[0].onclick = function (event) {
//     console.log(event);
//     e.preventDefault();
// };
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Group 17
Video 1

DOM [Events Simulation]
    - click
    - focus
    - blur
*/

// let two = document.querySelector(".two");
// let one = document.querySelector(".one");

// window.onload = function () {
//     two.focus();
// };

// one.onblur = function () {
//     document.links[0].click();
// };
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 2

    Dom [class List]
    - ClassList
    --- length
    --- contains
    --- items(index)
    --- Add
    --- remove
    --- toggle
*/

// let element = document.getElementById("my-div");

// console.log(element.classList); // one two show test
// console.log(typeof element.classList); // object
// console.log(element.classList.contains("osama")); // false
// console.log(element.classList.contains("show")); // true
// console.log(element.classList.item("3")); // test

// element.onclick = function () {
//     element.classList.add("add-one", "add-two");
// };

// element.onclick = function () {
//     element.classList.remove("one", "two");
// };

// element.onclick = function () {
//     element.classList.toggle("osama"); // toggle Added osama class
// };

// element.onclick = function () {
//     element.classList.toggle("show"); // toggle remove show class
// };
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 3

Dom [CSS]
- style
- cssText
- removeProperty(propertyName) [Inline, Stylesheet]
- setProperty(propertyName, value, priority)
*/

// let element = document.getElementById("my-div");

// element.style.color = "red";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

// element.style.removeProperty("color");
// element.style.setProperty("font-size", "40px", "important");

// document.styleSheets[0].rules[0].style.removeProperty("line-height");
// document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important");
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 4

Dom [Deal With Element]
- before [out of Element || String]
- after [out of Element || String]
- append [in Element || String]
- preppend [in Element || String]
- before [Element || String]
- remove
*/

// let element = document.getElementById("my-div");
// let createP = document.createElement("p");

// element.before("hello");  // Add hello before div
// element.before(createP);  // Add paragraph element before div

// element.after("hello");  // Add hello after div
// element.after(createP);  // Add paragraph element after div

// element.append("Hello");  // Add hello in div in the last
// element.append(createP);  // Add paragraph element in div in the last

// element.prepend("Hello");  // Add hello in div in the begin
// element.append(createP);  // Add paragraph element in div in the begin

// element.remove();
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 5

Dom [Traversting]
- nextSibling
- previousSibling
- nextElementSibling
- previousElementSibling
- parentElement
*/

// let span = document.querySelector(".two");

// console.log(span.previousSibling);  // Commnet
// console.log(span.nextSibling);  // Commnet
// console.log(span.nextElementSibling);  // span three
// console.log(span.previousElementSibling); // span one

// console.log(span.parentElement); // div

// span.onclick = function () {
//     span.parentElement.style.opacity = '0';
// }
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 6

Dom [Cloning]
- cloneNode(Deep)
*/

// let myP = document.querySelector("p").cloneNode(true); // with cloneNode(true) it takes a copy // With it takes just element and its class and id ...
// let myDiv = document.querySelector("div");

// myP.id = `${myP.id}-clone`;  // we should change id after clonning

// myDiv.appendChild(myP);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 7

Dom [Add Event Listener]
- addEventListener
- Use Without On
- Attach Multiple Events
- Error Test

Search
- Capture & Bubbling Javascript
- removeEventListener
*/

// let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//     console.log("Message From Onclick 1");
// };

// function two() {
//     console.log("Message From Onclick 2");
// };

// window.onload = "Osama"  //

// myP.addEventListener("click", function () {
//     console.log("Message From Onclick 1 Event");
// });

// myP.addEventListener("click", one); // Message From Onclick 1
// myP.addEventListener("click", two); // Message From Onclick 2

// myP.addEventListener("click", "String")  // Error

// myP.onclick = function () {
//     let newP = myP.cloneNode(true);
//     newP.className = "clone";
//     document.body.appendChild(newP);
// };

// let cloned = document.querySelector(".clone");  // Error

// // cloned.onclick = function () {
// //     console.log("Iam Cloned");
// // };

// document.addEventListener("click", function (e) {
//     if (e.target.className === "clone") {
//         console.log("Iam Cloned");
//     }
// });
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Group 18

Video 1

BOM [Browser Object Model]
- Introduction
--- Window Object Is The Browser Window
--- Window Contain The Document Object
--- All Global Variables And Objects And Functions Are Members Of Window Object
------- Test Document And Console
- What Can We Do With Window Object ?
--- Open Window
--- Close Window
--- Move Window
--- Resize Window
--- Print Window
--- Run Code After Period Of Time Once Or More
--- Fully Control The URL
--- Save Data Inside Browser To Use Later
*/

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 2

BOM [Browser Object Mode]
- alert(Message) => Need No Response Only Ok Available
- Confirme(Message) => Need Response And Return A Boolean
- prompt(Message, Default Message) => Collect Data
*/

// Alert

// window.alert("Test"); // alert Test
// this.alert("Test");  // alert Test
// alert("Test");  // alert Test
// console.log("Test")  // don't login since click ok(alert) there is Alert sweet better than Simple alert

// Confirm

// let confirmMsg = confirm("Are You Sure");
// console.log(confirmMsg);  // ok = true  annuler = false

// if (confirmMsg === true) {
//     console.log("Item Deleted");
// } else {
//     console.log("Item Not Deleted");
// };

// Prompt

// let promtMsg = prompt("Good Day To You", "Write Day With 3 Chacacters");
// console.log(promtMsg);  // ok = true  annuler = false
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Video 3

BOM [Browser Object Mode]
- setTimeout(function, Timeout, Additional Params)
- clearTimeout(Identifier)
*/

// setTimeout

// setTimeout(function () {
//     console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//     console.log("Iam Message");
// }

// setTimeout(sayMsg, 3000, "Osama", "11 years old");

// function sayMsg(user, age) {
//     console.log(`Iam Message For ${user} His Age Is: ${age}`);
// };

// let counter = setTimeout(sayMsg,  3000);

// function sayMsg() {
//     console.log(`Iam Message`);
// };

// let btn = document.querySelector("button");

// btn.onclick = function () {
//     clearTimeout(counter);
// };
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 4

    BOM [Browser Object Mode]
    - setInterval(Function, Millseconds, Additional Params)
    - clearInterval(Identifier)
*/

// setInterval(function () {
//     console.log("Msg");
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//     console.log("Iam Message");
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//     console.log(`Iam Message For ${user} His age Is: ${age}`);
// }

// let div = document.querySelector("div");

// function countdown() {
//     div.innerHTML -= 1;
//     if (div.innerHTML === "0") {
//         clearInterval(counter);
//     }
// }

// let counter = setInterval(countdown, 1000);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 4

    BOM [Browser Object Model]
    - Location Object
    --- href Get / Set [URL || Hash || File || Mail]
    --- host
    --- hash
    --- protocol
    --- reload()
    --- replace()
    --- assign()
*/

// console.log(location);
// console.log(location.href);

// location.href = "https://google.com";
// location.href = "https://developer.mozilla.org/fr/docs/Web/JavaScript#r%C3%A9f%C3%A9rence";

// console.log(location.host);  // 127.0.0.1:5500
// console.log(location.hostname);  // 127.0.0.1  with hostname we can change hostname of link

// console.log(location.protocol); // https

// console.log(location.hash); // /#sec02

// console.log(location.reload);  // actualiser

// location.replace();  // replace page in history

// location.assign();  // preserve page in history
// --------------------------------------------------------------------------------------------------------------------------------------------------------
/* Video 5
    BOM [Browser Object Model]
    - open(URL [opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Re)
    - close()
    Window Features
    --- Width [Num]
    --- height [Num]
    --- left [Num]
    --- top [Num]

    Search
    - Window.Open Window Features
*/

// setTimeout(function () {
//     window.open("https://google.com", "_blank", "height=400, width=400, left=200, top=100");
// }, 2000);
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 6

    BOM [Browser Object Model]
    - History API
    --- Properties
    ----- length
    --- Methods
    ----- back()
    ----- forward()
    ----- go(Delta) => Position In History

    Search [For Advanced Knowledge]
    - pushState() + replaceState()
*/

// console.log(history);

// console.log(history.length);

// console.log(history.back());  // traja3 khatwa lor fl history

// console.log(history.forward());  // tzid khatwa l9odam fl history

// console.log(history.go());  // taaktab ra9m wyzaydak l9odam wala yradak lor
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 7

    BOM [Browser Object Model]
    - stop()
    - print()
    - focus()
    - scrollTo(x, y || Options)
    - scroll(x, y || Options)
    - scrollBy(x, y || Option)
*/

// window.stop();  // Stop loading

// window.print();  //

// let myNewWindow = window.open("https://google.com", "", "width=500, height= 500");

// window.scrollTo(500, 200); // ydir scroll li t7adadlo (l 500, l 200)
// window.scrollBy(500, 200); // ydir scroll li t7adadlo (mn lblassa li fiha l 500, mn lblassa li fiha l 200)

// window.scrollTo({
//     left: 500,
//     top: 200,
//     behavior: "smooth"
// });
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 8

    BOM [Browser Object Model]
    - Practice => Scroll To Top
    - scrollX [Alias => PageXOffset]
    - scrollY [Alias => PageYOffset]
*/

// let btn = document.querySelector("button");

// window.onscroll = function () {
//     if (window.scrollY >= 600) {
//         btn.style.display = "block";
//     } else {
//         btn.style.display = "none";
//     }
// };

// btn.onclick = function () {
//     window.scrollTo({
//         left: 0,
//         top: 0,
//         behavior: "smooth",
//     });
// };
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Group 19
- Video 1

BOM [Browser Object Model]
Local Storage
- setItem
- get Item
- removeItem
- clear
- key

Info
- No Expiration Time
- HTTP And HTTPS
- Private Tab
*/

// // set
// window.localStorage.setItem("color", "red");  // first way
// window.localStorage.fontWeight = "bold";  // second way
// window.localStorage["fontSize"] = "20px";  // third Day

// // get
// console.log(window.localStorage.getItem("color"));  // first way
// console.log(window.localStorage.color);  // second way
// console.log(window.localStorage["color"]);  // second way

// // Remove One
// window.localStorage.removeItem("color");  // first way

// // Remove All
// window.localStorage.clear();  // Second way

// // Get Key
// console.log(window.localStorage.key(0));

// // set Color In Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(window.localStorage);
// console.log(typeof window.localStorage);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Video 2
    BOM [Browser Object Model]
    Local Storage Practice
*/

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//     // If There Is Color In Local Storage
//     // [1] Add Color To Div
//     exp.style.backgroundColor = window.localStorage.getItem("color");
//     // [2] Remove Active Class From All Lis
//     lis.forEach((li) => {
//         li.classList.remove("active");
//     });
//     // [3] Add Active Class To Current Color
//     document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// lis.forEach((li) => {
//     li.addEventListener("click", (e) => {
//console.log(e.currentTarget.dataset.color);

// Remove Active Class From All lis
// lis.forEach((li) => {
//     li.classList.remove("active");
// });
// // Add Active Class To Current Element
// e.currentTarget.classList.add("active");
// // Add Current Color To Local Storage
// window.localStorage.setItem("color", e.currentTarget.dataset.color);
// // Change Div Background Color
// exp.style.backgroundColor = e.currentTarget.dataset.color;
//     });
// });
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 3

    BOM [Browser Object Model]
    Session Storage
    - setItem
    - getItem
    - removeItem
    - clear
    - key

    Info
    - New Tab = New Session
    - Duplicate Tab = Copy Session
    - New Tab With Same Url = New Session
*/
// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function () {
//     window.localStorage.setItem("input-name", this.value);
// };
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 4
// Challenge

// let input = document.querySelector(".input");
// let submit = document.querySelector("[type=submit ]");
// let addDiv = document.querySelector(".tasks");


// let arrayOfTasks = [];


// if (window.localStorage.getItem("tasks")) {
//     arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"));
//     addTasksToPage(arrayOfTasks);
// }


// submit.addEventListener("click" , (e) =>  {
//     if (input.value !== "" ) {
//         addTaskToArray(input.value);
//         input.value = "";
//     }

// })

// document.querySelectorAll("button").forEach((b) => {b.onclick = function (e) {
//     e.currentTarget.parentElement.remove();
//     deleteElementFromloclstorge(e.currentTarget.parentElement.getAttribute("task-id"));
// }});

// function deleteElementFromloclstorge(taskid) {
//     arrayOfTasks = arrayOfTasks.filter((task) => task.id !=taskid)
//     addDataToLocalStorge(arrayOfTasks)
// }


// function addTaskToArray(taskText) {
//     let obj = {
//         id: Date.now(),
//         title: taskText,
//     }
//     arrayOfTasks.push(obj)
//     addTasksToPage(arrayOfTasks);
//     window.localStorage.setItem("tasks" , JSON.stringify(arrayOfTasks));

// }


// function  addTasksToPage(arrayOfTasks) {
//     addDiv.innerHTML = "";

//     arrayOfTasks.forEach((task) => {
//         let div = document.createElement("div");
//         div.className= `task`
//         div.setAttribute("task-id" , task.id);
//         div.appendChild(document.createTextNode(task.title));
//         let button = document.createElement("button");
//         button.className = "del"
//         button.title = "Refresh The Page To Delete";
//         button.appendChild(document.createTextNode("Delete"));
//         div.appendChild(button);
//         addDiv.appendChild(div);
//     })
// }

// function addDataToLocalStorge(arrayOfTasks) {
//     window.localStorage.setItem("tasks" , JSON.stringify(arrayOfTasks));
// }
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Group 20
Video 1

Destructuring
    "is a Javascript expression that allows us to extract data from arrays,
    objects, and maps set them into new, distinct variables."
- Destructuring Array
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a, b, c, d, e = "Osama"] = myFriends;

// console.log(a);  // Ahmed
// console.log(b);  // Sayed
// console.log(c);  // Ali
// console.log(d);  // Maysa
// console.log(e);  // Osama

// let [x, y, , z] = myFriends

// console.log(x);  // Ahmed
// console.log(y);  // Sayed
// console.log(z);  // Mayssa
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 2
    Destructuring
    - Destructuring Arrays Advanced Exemples
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];
// // console.log(myFriends[3][2][1]);  // Gamal

// let [, , , [a, , [, b]]] = myFriends;

// console.log(a);  // Shady
// console.log(b);  // Gamal
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 3
    Destructuring
    - Destructuring Arrays => Swapping Variables
*/

// let book = "Video";
// let video = "Book";

// // Save Book Value In Stash
// let stash = book;  // Video

// // Change Book Value
// book = video;  // Book

// // Change Video Value
// video = stash;

// [book, video] = [video, book];

// console.log(book);
// console.log(video);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 4
    Destructuring
    - Destructuring Object
*/

// const user = {
//     theName: "Osama",
//     theAge: 39,
//     theTitle: "Developer",
//     theCountry: "Egypt",
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({theName, theAge, theTitle, theCountry} = user);
// const {theName, theAge, theTitle, theCountry} = user;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 5
    Destructuring
    - Destructuring Object
    --- Naming The Variables
    --- Add New Property
    --- Nested Object
    --- Destructuring The Nested Object Only
*/

// const user = {
//     theName: "Osama",
//     theAge: 39,
//     theTitle: "Developer",
//     theCountry: "Egypt",
//     theColor: "black",
//     skills: {
//         html: 70,
//         css: 80,
//     }
// };

// const {
//     theName: n,
//     theAge: a,
//     theCountry,
//     theColor: co = "red",
//     skills:{html: h, css},}
//     = user;

// console.log(n); // Osama
// console.log(a) ; // 39
// console.log(theCountry); // Egypt
// console.log(co);  // black
// console.log(`My HTML Skill Progress Is ${h}`);  // My HTML Skill Progress Is 70
// console.log(`My HTML Skill Progress Is ${css}`);  // My HTML Skill Progress Is 80

// const {html: skillOne, css: skillTwo,} = user.skills

// console.log(`My HTML Skill Progress Is ${skillOne}`);  // My HTML Skill Progress Is 70
// console.log(`My HTML Skill Progress Is ${skillTwo}`);  // My HTML Skill Progress Is 80
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 6
    - Destructuring Function Parameters
*/

// const user = {
//     theName: "Osama",
//     theAge: 39,
//     skills: {
//         html: 70,
//         css: 80,
//     },
// };

// showDetails(user);

// function showDetails(obj) {
//     console.log(`Your Name Is ${obj.theName}`);
//     console.log(`Your Age Is ${obj.theAge}`);
//     console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

// // Destructuring
// function showDetails({theName: n, theAge: a, skills: {css: c}} = user) {
//     console.log(`Your Name Is ${n}`);
//     console.log(`Your Age Is ${a}`);
//     console.log(`Your CSS Skill Progress Is ${c}`);
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 7
    Destructuring
    - Destructuring Mixed Content
*/

// const user = {
//     theName: "Osama",
//     theAge: 39,
//     skills: ["HTML", "CSS", "Javascript"],
//     adress: {
//         egypt: "Cairo",
//         ksa: "Riyadh",
//     },
// };

// const {
//     theName: n,
//     theAge: a,
//     skills: [one, , three],
//     adress: {egypt: e}}
// = user;

// console.log(`Your Name Is: ${n}`);
// console.log(`Your Age Is: ${a}`);
// console.log(`Your Skills Is: ${one} ${three}`);
// console.log(`Your Live In: ${e}`);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Group 21
Video 1

    - Set Data Type
    Syntax: new Set(Iterable)
    -- Object Access Elements By Index

    Properties:
    - size

methods:
    - add
    - delete
    - clear
    - has
*/

// let myData = [1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);  // Set(3) {1, 2, 3}
// let myUniqueData = new Set(myData);  // Set(3) {1, 2, 3}
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);  // Set(3) {1, 2, 3}
// let myUniqueData = new Set();  // Set(3) {1, 2, 3}

// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");  // Set(3) {1, 2, 3}

// console.log((`Is Set Has => A ${myUniqueData.has("A")}`));  // Is Set Has => A true

// console.log(myData);
// console.log(myData[0]);  // 1

// console.log(myUniqueData);
// console.log(myUniqueData[0]);  // undefined

// console.log(myUniqueData.size);  // length

// // myUniqueData.delete(2);
// console.log(myUniqueData.delete(2));  // true // if there is the number in array: true else false
// console.log(myUniqueData.delete(20));  // false

// console.log(myUniqueData);  // Set(2) {1, 3}
// console.log(myUniqueData.size);  // length: 2

// myUniqueData.clear();

// console.log(myUniqueData);  // Set(2) {1, 3}
// console.log(myUniqueData.size);  // length: 2
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
Video 2

- Set vs WeakSet
"
    The WeakSet is weak,
    meaning refereances to objects in a WeakSet are held weakly.
    If no other references to an object stored in the weakSet exist,
    those objects can be garbage collected.
"
--
Set     => Can Store Any Data Values
WeakSet => Collection Of Objects Only
--
Set     => Have Size Property
WeakSet => Does Not Have Size Property
--
Set     => Have Keys, Values, Entries
WeakSet => Does Not Have clear, keys, Values And Entries
--
Set     => Can Use foreach
WeakSet => Cannot Use foreach

Usage: Store objects and removes them once they become inaccessible
*/
// Set
// Type Of Data

//  let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

//  console.log(mySet);  // Set(4) {1, 2, 3, 'A'}

// // Size
// console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);  // Size Of Elements Inside Set Is: 4

// // Values + Keys [Alias For Values]
// let iterator = mySet.keys();

// console.log(iterator.next());  // {value: 1, done: false}
// console.log(iterator.next().value);  // 1
// console.log(iterator.next().value);  // 2
// console.log(iterator.next().value);  // 3
// console.log(iterator.next().value);  // "A"
// console.log(iterator.next());  // {value: undefined, done: true}

// forEach

// mySet.forEach((el) => console.log(el));  // 1 2 3 "A"
// -------------------------------------------------
// WeakSet => Object
// Type Of Data

// let myws = new WeakSet([{A: 1, B: 2}]);

// console.log(myws);  // WeakSet {{…}};

// Search WeakSet Use Cases
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Video 3

    - Map Data Type
    Syntax: new Map(Iterable With Key/Value)
    -- Map vs Object
    --
    ----- Map => Does Not Contain key By Default
    ----- Object => Has Default keys
    --
    ----- Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
    ----- Object => String Or Symbol
    --
    ----- Map => Ordered By Insertion
    ----- Object => Not 100% Till Now
    --
    ----- Map => Get Items By Size
    ----- Object => Need To Do Manually
    --
    ----- Map => Can Be Directly Iterated
    ----- Object => Not Directly And Need To Use Object.keys() And So On
    --
    ----- Map => Better Perfermence When Add Or remove Data
    ----- Object => Low Perfermance When Comparing To Map
*/

// // Default keys
// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);  // [[Prototype]]: Object
// console.log(myEmptyObject);  // No properties
// console.log(myMap); // No properties

// console.log(myEmptyObject);

// // Difference of Key
// let myNewObject = {
//     10: "Number",
//     "10": "String",
// };

// console.log(myNewObject);  // {10: 'String'}

// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({a: 1, b: 2}, "object");
// myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap.get(10));  // Number
// console.log(myNewMap.get("10"));  // String

// console.log("####");

// console.log(myNewObject);  // {10: 'String'}
// console.log(myNewMap);  // Map(5) {10 => 'Number', '10' => 'String', true => 'Boolean', {…} => 'object', ƒ => 'Function'}
/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Video 4

    - Map data type
    Methods
    --- set
    --- get
    --- delete
    --- clear
    --- has

    Properties
    -- size
*/

// let myMap = new Map([
//     [10, "Number"],
//     ["Name", "String"],
//     [false, "Boolean"],
// ]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

// console.log(myMap);  // Map(2) {10 => 'Number', 'Name' => 'String'}

// console.log(myMap.get(10));  // Number
// console.log(myMap.get("Name"));  // String
// console.log(myMap.get(false));  // Boolean

// console.log("#####");

// console.log(myMap.has(false));  // true

// console.log("#####");

// console.log(myMap.size);  // 3

// console.log(myMap.delete("Name"));  // true
// console.log(myMap.size);  // 2

// myMap.clear();
// console.log(myMap.size);  // 0
/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 5

    - Map vs weakMap
    "
        weakMap Allows Garbage Collector To Do Its Task But Not Map.
    "
    --
    Map     => Key Can Be Anything
    WeakMap => Key Can Be Object Only
    --
*/

// let mapUser = {theName: "Elzero"};

// let myMap = new Map();

// myMap.set(mapUser, "Object Value");

// mapUser = null; // Override The reference

// console.log(myMap); // {Object => "Object Value"}

// console.log("#".repeat(20));

// let wMapUser = { theName: "Elzero"};

// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, "Object Value");

// wMapUser = null;  // Override The reference

// console.log(myWeakMap);  // {Object => "Object Value"}
/*
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 6
    Array Methods
    - Array.from(Iterable, Mapfunc, This)
    --- Variable
    --- String Numbers
    --- Set
    --- Using The Map Function
    --- Arrow Function
    --- Shorten The Method + Use arguments
*/

// console.log(Array.from("Osama"));
// console.log(
//     Array.from("12345", function (n) {
//         return +n + +n;
//     })
// );

// console.log(Array.from("12345", (n) => +n + +n));

// let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);

// console.log(Array.from(mySet));

// console.log([...new Set(myArray)]);  // Future

// function fr() {
//     return Array.from(arguments);
// }

// console.log(fr("Osama", "Ahmed", "Sayed", 1, 2, 3));
/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Video 7
    Array Methods
    - Array.copyWithin(Target, Start => Optional, End => Optional)
    "Copy Part Of An Array To Another location in The Same Array"
    -- Any Negative Value Will Count From The End
    -- Target
    ---- Index To Copy Part To
    ---- If At Or Greater Than Array Length Nothing Will Be Copied
    -- Start
    ---- Index To Start Coping From
    ---- If omnited = Start From Index 0
    -- End
    ---- Index To End Coping From
    ---- Not Including End
    ---- If Omnited = Reach The End
*/

// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3);  // [10, 20, 30, 10, 20, 30, 40,]

// myArray.copyWithin(4, 6);  // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1);  // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(-6, -2);  // [10, "A", "B", 40, "50", "A", "B"]

// myArray.copyWithin(1, -2, -1);  // [10, "A", 30, 40, 50, "A", "B"];

// console.log(myArray);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Video 8

    Array Methods
    - Array.some(CallbackFunc(Element, Index, Array), This Argument)
    --- CallbackFunc => Function To run On Every Element On The Given Array
    ------ Element => The Current Element To Process
    ------ Index => Index Of Current Element
    ------ Array => The Current Array Working With
    --- This Argument => Value To Use As This When Executing CallbackFunc
    --
    Using
    - Check if Element Exists In Array
    - Check If Number In Range
*/

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let check = nums.some(function (e) {
//     console.log("Test");  // 6 Test
//     return e > 5;
// });

// let checkF = nums.some((e) => e > 5);

// console.log(check);  // true
// console.log(checkF);  // true

// let myNumber = 5;

// let check = nums.some(function (e) {
//     // console.log(this);  // Number {5} 5 fois
//     return e > this;
// }, myNumber);

// console.log(check);  // true

// function checkValues(arr, val) {
//     return arr.some(function (e) {
//         return e === val;
//     });
// }

// console.log(checkValues(nums, 20));  // false
// console.log(checkValues(nums, 5));  // true

// let range = {
//     min: 10,
//     max:20,
// };

// let checkNumberInRange = nums.some(function (e) {
//     // console.log(this.min);  // 10
//     // console.log(this.max);  // 20
//     return e >= this.min && e <= this.max;
// }, range);

// console.log(checkNumberInRange);  // true
/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Array Methods
    - Array.every(CallbackFunc(Element, Index, Array), This Argument)
    --- CallbackFunc => Function To Run On Every Element On The Given Array
    ------ Element => The Current Element To Process
    ------ Index => In dex Of Current Element
    ------ Array => The Current Array Working With
    --- This Argument => Value To Use As This When Executing CallbackFunc
    --
*/

// const locations = {
//     20: "Place 1",
//     30: "Place 2",
//     10: "Place 3",
//     40: "Place 4",
// };

// let mainLocation = 15;

// let locationArray = Object.keys(locations);

// console.log(locationArray);  // (4) ['10', '20', '30', '40']

// let locationArrayNumbers = locationArray.map((n) => +n);

// console.log(locationArrayNumbers);  // (4) [10, 20, 30, 40]

// let check = locationArrayNumbers.every(function (e) {
//     return e > this;
// }, mainLocation);

// console.log(check);  // false because 10 < than 15
/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Spread Operator => ...Iterable
    "Allow Iterable To Expand In Place"
*/

// // Spread With String => Expand String
// console.log("Osama");  // Osama
// console.log(..."Osama");  // O s a m a
// console.log([..."Osama"]);  // (5) ['O', 's', 'a', 'm', 'a']

// // Concatenate Arrays
// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];

// let allArrays = [...myArray1, ...myArray2];
// console.log(allArrays);  // (6) [1, 2, 3, 4, 5, 6]

// // Copy Array
// let copyArray = [...myArray1];
// console.log(copyArray);  // (3) [1, 2, 3]

// // Push Inside Array
// let allFriends = ["Osama", "Ahmed", "Sayed"];
// let thisYearsFriends = ["Sameh", "Mahmoud"];

// allFriends.push(...thisYearsFriends);

// console.log(allFriends);  // (5) ['Osama', 'Ahmed', 'Sayed', 'Sameh', 'Mahmoud']

// // Use With Math Object
// let myNums = [10, 20, -100, 100, 1000, 500];
// console.log(Math.max(myNums));  // NaN
// console.log(Math.max(...myNums));  // 1000

// // Spread With Objects => Merge Objects
// let objOne = {
//     a: 1,
//     b: 2,
// };

// let objTwo = {
//     c: 3,
//     d: 4,
// };

// console.log({ ...objOne, ...objTwo, e: 5 });  // {a: 1, b: 2, c: 3, d: 4, e: 5}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Group 22
// Video 1
/*
    Regular Expression
    - Email
    - IP
    - Phone
    - URL
*/

// let str1 = "10, 20, 100, 1000, 5000";
// let str2 = "Os1 Os12 Os123 Os123Os Os12312Os123";

// let invalidEmail = "Osama@@@gmail....com";
// let validEmail = "o@nn.sa";

// let ip = "192.168.2.1"  // IPv4

// let url = "elzero.org";
// let url1 = "elzero.org/";
// let url2 = "http://elzero.org/";
// let url3 = "http://www.elzero.org/";
// let url4 = "http://.elzero.org/";
// let url5 = "https://www.elzero.org/";
// let url6 = "https://www.elzero.org/?facebookid=cknlncnklsdcnklcds";
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 2

/*
Syntax
/pattern/modifier(s);
new RegExp("pattern", "modifier(s"))

Modifier => Flags
i => case-insensitive
g => global
m => Multilines


Search Methods
- match (Pattern)

Match
-- Matches A String Against a Regular Expression Pattern
-- Returns An Array With The Matches
-- Returns null If No Match Is Found.
*/

// let myString = "Hello Elzero Web School I Love elzero";

// let regex = /elzero/ig;

// console.log(myString.match(regex));  //Without i  // ['elzero', index: 6, input: 'Hello Elzero Web School I Love elzero', groups: undefined]
// console.log(myString.match(regex));  // ['Elzero', index: 6, input: 'Hello Elzero Web School I Love elzero', groups: undefined]
// console.log(myString.match(regex));  // ['Elzero', 'elzero']  With g
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 3
/*
    Regular Expression

    Ranges

    - Part 1
    (X|Y) => X Or Y
    [0-9] => 0 to 9
    [^0-9] => Any Character Not 0 To 9
    Practice

    - Part 2 ^
    [a-z]
    [^a-z]
    [A-z]
    [^A-z]
    [abc]
    [^abc]
*/

// let tld = "Com Net Org Info Code Io";
// let tldRe = /(org|info|io)/i
// console.log(tld.match(tldRe));  // (2) ['Org', 'Org', index: 8, input: 'Com Net Org Info Code Io', groups: undefined]

// let tldRe = /(info|org|io)/i;
// console.log(tld.match(tldRe));  // ['Org', 'Org', index: 8, input: 'Com Net Org Info Code Io', groups: undefined]

// let tldRe = /(info|org|io)/ig;
// console.log(tld.match(tldRe));  // ['Org', 'Info', 'Io']

// let nums = "12345678910";
// let numsRe = /[0-9]/;
// console.log(nums.match(numsRe));  // ['1', index: 0, input: '12345678910', groups: undefined]

// let numsRe = /[0-9]/g;
// console.log(nums.match(numsRe));  // ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0']

// let numsRe = /[0-2]/g;
// console.log(nums.match(numsRe));  // ['1', '2', '1', '0']

// let notNums = "12345678910";
// let notNumsRe = /[^0-2]/g;
// console.log(notNums.match(notNumsRe));  // ['3', '4', '5', '6', '7', '8', '9']

// let SpecialNums = "1!2@3#4$5%678910";
// let SpecialNumsRe = /[^0-9]/g;
// console.log(SpecialNums.match(SpecialNumsRe));  // ['!', '@', '#', '$', '%']

// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let practiceRe = /Os[5-9]Os/g;
// console.log(practice.match(practiceRe));  // ['Os8Os']
// -------------------------------------------

// let myString = "AaBbcdefG123!234%^&*";
// let atozSmall = /[a-z]/g;
// console.log(myString.match(atozSmall));  // ['a', 'b', 'c', 'd', 'e', 'f']

// let atozCapital = /[A-Z]/g;
// console.log(myString.match(atozCapital));  // ['A', 'B', 'G']

// let NotatozSmall = /[^a-z]/g;
// console.log(myString.match(NotatozSmall));  // ['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']

// let aAndcAnde = /[ace]/g;
// console.log(myString.match(aAndcAnde));  // ['A', 'B', 'G']

// let notaAndcAnde = /[^ace]/g;
// console.log(myString.match(notaAndcAnde)); // ['A', 'B', 'b', 'd', 'f', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']

// let capAndSmall = /[a-z]/ig;
// let capAndSmall = /[a-zA-Z]/g;
// console.log(myString.match(capAndSmall)); // ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']

// let NotcapAndSmall = /[^a-zA-Z]/g;
// console.log(myString.match(NotcapAndSmall)); // ['1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']

// let specials = /[^a-z1-9]/ig;
// console.log(myString.match(specials));  // ['!', '%', '^', '&', '*']
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 4
/*
    Regular Expression
    Character Classes
    . => matches any character, Except newline or other line terminators.
    \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
    \W => matches Non word characters
    \d => matches digits from 0 to 9.
    \D => matches non digit characters.
    \s => matches whitespace characters.
    \s => matches non whitespace characters.
*/

// let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot = /./g;
// console.log(email.match(dot)); // ['O', '@', '@', '@', 'g', '.', '.', '.', 'c', 'o', 'm', ' ', 'O', '@', 'g', '.', 'c', 'o', 'm', ' ', 'O', '@', 'g', '.', 'n', 'e', 't', ' ', 'A', '@', 'Y', '.', 'c', 'o', 'm', ' ', 'O', '-', 'g', '.', 'c', 'o', 'm', ' ', 'o', '@', 's', '.', 'o', 'r', 'g', ' ', '1', '@', '1', '.', 'c', 'o', 'm']

// let word = /\w/g;
// console.log(email.match(word)); // ['O', 'g', 'c', 'o', 'm', 'O', 'g', 'c', 'o', 'm', 'O', 'g', 'n', 'e', 't', 'A', 'Y', 'c', 'o', 'm', 'O', 'g', 'c', 'o', 'm', 'o', 's', 'o', 'r', 'g', '1', '1', 'c', 'o', 'm']

// let word = /\W/g;
// console.log(email.match(word)); // ['@', '@', '@', '.', '.', '.', ' ', '@', '.', ' ', '@', '.', ' ', '@', '.', ' ', '-', '.', ' ', '@', '.', ' ', '@', '.']

// let valid = /\w@/g;
// console.log(email.match(valid)); // ['O@', 'O@', 'O@', 'A@', 'o@', '1@']

// let valid = /\w@\w/g;
// console.log(email.match(valid)); // ['O@g', 'O@g', 'A@Y', 'o@s', '1@1']

// let valid = /\w@\w.com/g;
// console.log(email.match(valid)); // ['O@g.com', 'A@Y.com', '1@1.com']

// let valid = /\w@\w.(com|net)/g;
// console.log(email.match(valid)); // ['O@g.com', 'O@g.net', 'A@Y.com', '1@1.com']
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 5
/*
    Regular Expression
    Character Classes
    \b => matches at the begining or end of a word.
    \B => matches Not at the begining/end of a word.

    Test Method
    pattern.test(input)
*/

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// let re = /spam/ig;
// console.log(names.match(re)); // ['Spam', 'Spam', 'Spam', 'Spam', 'spam']

// let re = /\bspam/ig;
// console.log(names.match(re)); // ['Spam', 'Spam'] spam in begining

// let re = /spam\b/ig;
// console.log(names.match(re)); // ['Spam', 'Spam', 'Spam'] spam in the End

// let re = /(\bspam|spam\b)/ig;
// console.log(names.match(re)); // ['Spam', 'Spam', 'Spam', 'Spam', 'Spam'] Start With Spam or End with spam

// console.log(re.test(names)); // true
// console.log(/(\bspam|spam\b)/ig.test("Osama")); // false
// console.log(/(\bspam|spam\b)/ig.test("1Spam")); // true
// console.log(/(\bspam|spam\b)/ig.test("Spam1")); // true
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 6
/*
    Regular Expression

    Quantifier
    n+  => One Or More
    n*  => Zero Or more
    n?  => Zero Or One
*/

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w@\w\w.sa/ig;
// let mailsRe = /\w+@\w+.(com|net)/ig;
// let mailsRe = /\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));

// let nums = "0110 10 150 05120 0560 350 00"; // 0Numbers Or No 0
// let numsRe = /0(\d*0)/ig;
// console.log(nums.match(numsRe)); // ['0110', '05120', '0560', '00']

// let urls = "https://google.com http://www.website.net web.com"; // http + https
// let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(urls.match(urlsRe)); // ['https://google.com', 'http://www.website.net', 'web.com']
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 7
/*
    Regular Expression

    Quantifiers
    n{x}    => Number of
    n{x, y}    => Range
    n{x,}    => At Least x
*/

// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S // ['S100S']
// console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S // ['S3000S', 'S50000S']
// console.log(serials.match(/s\d{4,}s/ig)); // s[At Least Four]S // ['S3000S', 'S50000S', 'S950000S']
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 8
/*
    Regular Expression

    Quantifiers
    $   => End With Something
    ^   => Start With Something
    ?=  => Followed By Something
    ?!  => Not Followed By Something
*/

// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/ig.test(myString)); // true
// console.log(/^We/ig.test(myString)); // true
// console.log(/lz$/g.test(names)); // false
// console.log(/^1/g.test(names)); // true

// console.log(names.match(/\d\w{5}(?=Z)/ig));
// console.log(names.match(/\d\w{8}(?!Z)/ig));
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 9
/*
    Regular Expression

    - replace
    - replaceAll
*/

// let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "JavaScript"));
// console.log(txt.replaceAll("@", "JavaScript"));
// let re = /@/ig;
// console.log(txt.replaceAll(re, "JavaScript"));
// console.log(txt.replaceAll(/@/ig, "JavaScript"));
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 10
/*
    Regular Expression
    - Input Form Validation Practice
*/
// form
// document.getElementById("register").onsubmit = function () {
//     let phoneInput = document.getElementById("phone").value;
//     let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
//     let validationResult = phoneRe.test(phoneInput);
//     if (validationResult === false) {
//         return false;
//     }

//     return true;
// }
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Group 23
// Video 1
/*
    What Is OOP?

    - OOP Stand For => Object Oriented Programming
    - OOP Is Paradigm or Style Of Code
    - OOP Use The Concept Of Object To Design A Computer Program
    - Its Not New => Simula Is The First OOP Programming Langauge At 1960
    - Some Languages Support OOP and Some Not
    - Object Is A Package Contains Properties and Functions That Work Together To Produce Something in Your Application. Function Here Called Methods.

    Why We Use OOP?

    - You Will be Able to Create a Large and Complex Software Architecture in Organized Ways.
    - You Will be Able To Hide Certain Parts Of Code in Your Object With Encaosulation To Prevent Mess With The Code.
    - You Will Be Able To Create Reusable Objects To Use in Your Application Easily With Inheritance.
*/
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 2
/*
    Constructor Function
*/

// function User(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
// };

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Hassan", 6000);
// let userThree = new User(102, "Sayed", 7000);

// console.log(userOne.i); // 100
// console.log(userOne.u); // Elzero
// console.log(userOne.s); // 6000

// console.log(userTwo.s); // 7000
// console.log(userThree.s); // 8000

// const userOne = {
//     id: 100,
//     username: "Elzero",
//     salary: 5000,
// };

// const userTwo = {
//     id: 101,
//     username: "Hassan",
//     salary: 6000,
// };

// const userThree = {
//     id: 102,
//     username: "Sayed",
//     salary: 7000,
// };
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 3
/*
    constructor Function
    - New Syntax
*/

// class User {
//     constructor (id, username, salary) {
//         this.i = id;
//         this.u = username;
//         this.s = salary + 1000;
//     }
// };

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.i); // 100
// console.log(userOne.u); // Elzero
// console.log(userOne.s); // 6000

// console.log(userOne instanceof User); // true
// console.log(userOne.constructor === User); // true
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 4
/*
        constructor Function
        - Deal With Properties And Methods
*/

// class User {
//     constructor (id, username, salary) {
//         this.i = id;
//         this.u = username || "Unknown";
//         this.s = salary < 6000 ? salary + 500 : salary;
//         this.msg = function () {
//             return `Hello ${this.u} Your Salary Is ${this.s}`;
//         };
//     }
//     // Methods
//     writeMsg() {
//         return `Hello ${this.u} Your Salary Is ${this.s}`;
//     }
// };

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "", 6000);

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg()); // Hello Elzero Your Salary Is 5500
// console.log(userOne.writeMsg()); // Hello Elzero Your Salary Is 5500

// console.log(userTwo.u);
// console.log(userTwo.s);
// console.log(userOne.msg); // native code
// console.log(userOne.writeMsg); // native code
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 5
/*
    constructor Function
    - Update Properties
    - Built In constructors
*/

// class User {
//     constructor (id, username, salary) {
//         this.i = id;
//         this.u = username || "Unknown";
//         this.s = salary;
//     }
//     updateName(newName) {
//         this.u = newName;
//     }
// };

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.u);
// userOne.updateName("Osama");
// console.log(userOne.u);

// let strOne = "Elzero";
// let strTwo = new String("Elzero");

// console.log(typeof strOne);
// console.log(typeof strTwo);

// console.log(strOne instanceof String); // false
// console.log(strTwo instanceof String); // true

// console.log(strOne.constructor === String); // true
// console.log(strTwo.constructor === String); // true
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 6
/*
    Class
    - Static Properties And Methods
*/

// class User {
//     // Statistic Property
//     static count = 0;
//     constructor (id, username, salary) {
//         this.i = id;
//         this.u = username || "Unknown";
//         this.s = salary;
//         User.count++;
//     }
//     // Static method
//     static sayHello() {
//         return 'Hello From Class'
//     }
//     static countMembers() {
//         return `${this.count} Members Created`;
//     }
// };

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Ahmed", 5000);
// let userThree = new User(102, "Sayed", 5000);

// console.log(userOne.u);
// console.log(userTwo.u);
// console.log(userOne.count); // undefined
// console.log(User.count); // 0
// // console.log(userOne.sayHello()); // TypeError
// console.log(User.sayHello()); // Hello From Class
// console.log(User.countMembers()); // 3 Members Created
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 7
/*
    Class
    - Inhertance
*/

// // Parent Class
// class User {
//     constructor (id, username) {
//         this.i = id;
//         this.u = username || "Unknown";
//     }
//     // Static method
//     sayHello() {
//         return `Hello From ${this.u}`;
//     }
// };

// // // Derived Class
// class Admin extends User {
//     constructor (id, username, permissions) {
//         super(id, username);
//         this.p = permissions;
//     }
// };

// class Superman extends Admin {
//     constructor (id, username, permissions, ability) {
//         super(id, username, permissions);
//         this.a = ability;
//     }
// };

// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Mahmoud", 1);

// console.log(userOne.u); // Elzero
// console.log(userOne.sayHello()); // Hello From Elzero
// console.log("#############################"); // Hello From Elzero
// console.log(adminOne.i); // 110
// console.log(adminOne.u); // Mahmoud
// console.log(adminOne.p); // 1
// console.log(adminOne.sayHello()); // Hello From Mahmoud
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 8
/*
    Encapsulation
    - Class Fields Are Public By Default
    - Guards The Data Against Illegal Access.
    - Helps To Archieve The Target Without Revealing Its Complexe Details.
    - Will Reduce Human Errors.
    - Make The App More Flexible And Manageable.
    - Simplifies The App.
*/

// class User {
//     // Private Property
//     #e;
//     constructor (id, username, eSalary) {
//         this.i = id;
//         this.u = username;
//         this.#e = eSalary;
//     }
//     getsalary() {
//         return parseInt(this.#e);
//     }
// };

// let userOne = new User(100, "Elzero", "5000 Gneh");

// console.log(userOne.u); // Elzero
// // console.log(userOne.e * 0.3); // 1500
// // console.log(userOne.#e); // La propriété '#e' n'est pas accessible en dehors de la classe 'User', car elle a un identificateur privé
// console.log(userOne.getsalary() * 0.3); // 1500
// ???????????????????????????????????????????????
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 9
/*
    Prototypes
    - Introduction
    - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another
*/

// class User {
//     constructor (id, username) {
//         this.i = id;
//         this.u = username;
//     }
//     sayHello() {
//         return `Hello ${this.u}`;
//     }
// };

// let userOne = new User(100, "Elzero");
// console.log(userOne.u); // Elzero

// console.log(User.prototype); // {constructor: ƒ, sayHello: ƒ}

// let strOne = "elzero";

// console.log(String.prototype); // String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 9
/*
    Prototypes
    - Add To Prototype Chain
    - Extend Built In Constructors Features
*/

// class User {
//     constructor (id, username) {
//         this.i = id;
//         this.u = username;
//     }
//     sayHello() {
//         return `Hello ${this.u}`;
//     }
// };

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);
// console.log(User.prototype);
// console.log(userOne); // User {i: 100, u: 'Elzero'}...

// User.prototype.sayWelcome = function () {
//     return `Welcome ${this.u}`;
// };

// Object.prototype.love = "Elzero Web School";

// String.prototype.addDotBeforeAndAfter = function (val) {
//     return `.${this}.`;
// };

// let myString = "Elzero";
// console.log(myString.addDotBeforeAndAfter()); // .Elzero.
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 10
/*
    Object Meta Data And Descriptor
    - Writable
    - enumerable
    - configurable [Can Not Delete Or reconfigure]
*/

// const myObject = {
//     a: 1,
//     b: 2,
// };

// Object.defineProperty(myObject, "c", {
//     writable: false,
//     enumerable: true, // pour desactiver loop
//     configurable: false, // can not delete and redefine this property
//     value: 3,
// });

// Object.defineProperty(myObject, "c", {
//     writable: false,
//     enumerable: true, // pour desactiver loop
//     configurable: true, // can not delete and redefine this property
//     value: 200, // Cannot redefine property: c because configurable: false
// });

// myObject.c = 100;

// console.log(delete myObject.c) // true

// for (let prop in myObject) {
//     console.log(prop, myObject[prop]);
// };

// console.log(myObject); // {a: 1, b: 2, c: 3}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 11
/*
    Object Meta Data And Descriptor
    - Define Multiple Properties
    - Check Descriptor
*/

// const myObject = {
//     a: 1,
//     b: 2,
// };

// Object.defineProperties(myObject, {
//     c: {
//         configurable: true,
//         value: 3,
//     },
//     d: {
//         configurable: true,
//         value: 4,
//     },
//     e: {
//         configurable: true,
//         value: 5,
//     },
// });

// console.log(myObject); // {a: 1, b: 2, c: 3, d: 4, e: 5}

// console.log(Object.getOwnPropertyDescriptor(myObject, "d")); // {value: 4, writable: false, enumerable: false, configurable: true}
// console.log(Object.getOwnPropertyDescriptors(myObject)); // {a: {…}, b: {…}, c: {…}, d: {…}, e: {…}}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Group 24
// Video 1
/*
    Date And Time
    - Date Constructor

    Static Methods
    - Date.now()

    - To Track You Need Starting Point
    - Epoch Time Or Unix Time In Computer Science Is The of Seconds Since January 1, 1970.
    - Why 1970 [829 Days To 136 Years]

    Search For
    - Year 2038 Problem in Computer Science.
*/

// let dateNow = new Date();

// console.log(dateNow); // Tue Jun 20 2023 10:20:55 GMT+0100 (UTC+01:00)

// console.log(Date.now()); // 1687253004336 (mille Second) 1000 ml = 1s;

// let seconds = Date.now() / 1000; // Number Of Seconds
// console.log(`Seconds ${seconds}`); // Seconds 1687253274.929

// let minutes = seconds / 60; // Number Of Minutes
// console.log(`minutes ${minutes}`); // minutes minutes 28120889.504566666

// let hours = minutes / 60; // Number Of hours
// console.log(`hours ${hours}`); // hours 468681.5092344444

// let days = hours / 24; // Number Of days
// console.log(`days ${days}`); // days 19528.39683771991

// let years = days / 365; // Number Of years
// console.log(`years ${years}`); // years 53.50245898420852
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Video 2
/*
    Date And Time
    - getTime() => Number Of Milliseconds
    - getDate() => Day Of Month
    - getFullYears()
    - getMonth() => Zero Based
    - getDay() => Day Of The Week
    - getHours()
    - getMinutes()
    - getSeconds()
*/

// let dateNow = new Date();
// let birthday = new Date("Oct, 25, 82");
// let dateDiff = dateNow - birthday;

// console.log(dateDiff); // 1282902051508 ml seconds
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365); // 40.680559307965495 Years

// console.log(dateDiff); // 1282902239610 ml seconds
// console.log(dateNow.getTime()); // 1687254239610 ml seconds
// console.log(dateNow.getDate()); // 20
// console.log(dateNow.getFullYear()); // 2023
// console.log(dateNow.getMonth()); // 5 Start With Zero
// console.log(dateNow.getDay()); // 2 sunday is 0
// console.log(dateNow.getHours()); // 10
// console.log(dateNow.getMinutes()); // 50
// console.log(dateNow.getSeconds()); // 16
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 3
/*
    Date And Time
    - setTime(Milliseconds)
    - setDate() => Day Of Month [Negative And Positive]
    - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
    - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
    - setHours(Hours [0-23], Minutes => Optional [0, 59], Seconds => Optional [0-59], MS => Optional [0-999])
    - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
    - getSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

// let dateNow = new Date(); // Tue Jun 20 2023 11:00:49 GMT+0100 (UTC+01:00)
// console.log(dateNow);
// console.log("#".repeat(66));

// dateNow.setTime(0);
// console.log(dateNow); // Thu Jan 01 1970 00:00:00 GMT+0000 (UTC)
// console.log("#".repeat(66));

// dateNow.setTime();
// console.log(dateNow); // Thu Jan 01 1970 00:00:10 GMT+0000 (UTC)
// console.log("#".repeat(66));

// dateNow.setDate(10);
// console.log(dateNow); // Thu Jun 10 2023 11:05:23 GMT+0100 (UTC+01:00)

// dateNow.setFullYear(2020, 1);
// console.log(dateNow); // Thu Feb 20 2020 11:09:13 GMT+0100 (UTC+01:00)

// dateNow.setMonth(0);
// console.log(dateNow); // Fri Jan 20 2023 11:10:52 GMT+0100 (UTC+01:00)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 4
/*
    Date And Time

    new Date(timestamp)
    new Date(Date String)
    new Date(Numeric Values)

    Format
    - "Oct 25 1982"
    - "10/25/1982"
    - "1982-10-25" => ISO International Standar
    - "1982-10"
    - "1982"
    - "82"
    - "1982, 9, 25, 2, 10, 0"
    - 1982, 9, 25
    - "1982-10-25T06:10:00Z"

    Date.parse("String") // Read Date From A String
*/

// console.log(Date.parse("Oct 25 1982")); // 404352000000

// let date1 = new Date(0);
// console.log(date1); // Thu Jan 01 1970 00:00:00 GMT+0000 (UTC)

// let date2 = new Date(404352000000);
// console.log(date2); // Mon Oct 25 1982 00:00:00 GMT+0000 (UTC)

// let date3 = new Date("10-25-1982");
// console.log(date3); // Mon Oct 25 1982 00:00:00 GMT+0000 (UTC)

// let date4 = new Date("1982-10-25");
// console.log(date4); // Mon Oct 25 1982 00:00:00 GMT+0000 (UTC)

// let date5 = new Date("1982-10");
// console.log(date5); // Fri Oct 01 1982 00:00:00 GMT+0000 (UTC)

// let date6 = new Date("82");
// console.log(date6); // Fri Jan 01 1982 00:00:00 GMT+0000 (UTC)

// let date7 = new Date(1982, 9, 25, 2, 10, 0);
// console.log(date7); // Mon Oct 25 1982 02:10:00 GMT+0000 (UTC)

// let date8 = new Date(1982, 9, 25);
// console.log(date8); // Mon Oct 25 1982 00:00:00 GMT+0000 (UTC)

// let date9 = new Date("1982-10-25T06:10:00Z");
// console.log(date9); // Mon Oct 25 1982 06:10:00 GMT+0000 (UTC)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 5
/*
    Date And Time
    - Track Operations Time

    Search
    - Performance.now()
    - Performance.mark()
*/

// Start time
// let start = new Date();

// Operation
// for (let i = 0; i < 100000; i++) {
//     // document.write(`<div>${i}</div>`);
//     let div = document.createElement("div");
//     div.appendChild(document.createTextNode(i));
//     document.body.appendChild(div);
// }

// // Time End
// let end = new Date();

// // Operation Duration
// let duration = end - start;
// console.log(duration);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 6
/*
    Generators
    - Generator Function Run Its Code When Required.
    - Generator Function Return Special Object [Generator Object].
    - Generators Are Iterable.
*/

// function* generateNumbers() {
//     yield 1;
//     console.log("Hello After Yield 1");
//     yield 2;
//     yield 3;
//     yield 4;
// }

// let generator = generateNumbers();

// console.log(typeof generator); // object
// console.log(generator); // generateNumbers {<suspended>}

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: undefined, done: true}

// for (let value of generateNumbers()) {
//     console.log(value);
// }

// for (let value of generator()) {
//     console.log(value); // nothing because all next completed
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 7
/*
    Generators
    - Dalegate Generator
*/

// function* generateNums() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// function* generateLetters() {
//     yield "A";
//     yield "B";
//     yield "C";
// }

// function* generateAll() {
//     yield* generateNums();
//     yield* generateLetters();
//     yield* [4, 5, 6];
// }

// let generator = generateAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("Z")); // it stopped
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 8
/*
    Generators
    - Generate Infinite Numbers
    - Use Return Inside Generators
*/

// function* generateNumbers() {
//     yield 1;
//     yield 2;
//     // return "A";
//     yield 3;
//     yield 4;
//     let index = 0;

//     while (true) {
//         yield index++;
//     }
// }

// let generator = generateNumbers()

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 9
/*
    Modules
    - Import And Export
*/

// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//     return 'Something';
// }

// export { a, arr, saySomething }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 10
/*
    Modules
    - Export Alias
    - Named Export
    - Default Export
    - Import All
*/

// let a = 10;
// let arr = [1, 2, 3, 4];

// function saySomething() {
//     return 'Something';
// }

// export { a as number, arr, saySomething };

// // Default
// export default function () {
//     return 'Hello';
// }
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Group 25
// Video 1
/*
    What Is JSON ?
    - JavaScript Object Notation
    - Format For Sharing Data Betwen Server And Client
    - JSON Derived From Javascript
    - Alternative To XML
    - File Extension Is -Json

    Why JSON ?
    - Easy To Use And Read
    - Used By Most Programing Languages And Its Frameworks
    - You Can Convert JSON Object To JS Object And Vice Versa

                    JSON                vs           XML
    =====================================================================
    = Text Based Format................ = Markup Language...............=
    = Lightweight...................... = Heavier.......................=
    = Does Not Use Tags................ = Using Tags....................=
    = Shorter.......................... = Not Short.....................=
    = Can Use Arrays................... = Cannot Use Arrays.............=
    = Not Support Comments............. = Support Comments..............=
    =====================================================================
*/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 2

/*
JSON Syntax
- Data Added Inside Curly Braces {}
- Data Added With key : Value
- key should Be String Wrapped In Double Quotes
- Data Seperated By Comma
- Square Brackers [] For Arrays
- Curly Braces {} For Objects

Available Data Types
- String
- Number
- Object
- Array
- Boolean Values
- null
*/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 3
/*
    JSON
    - API Overview
    - Tools To Test API
    - Preview GitHub API
*/

// website myjson
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 4
/*
    JSON
    - JSON.parse => Convert Text Data To Js Object
    - JSON.stringify => Convert JS To JSON
*/

// const myjsonObjectFromServer = '{ "Username": "Osama", "Age": "39" }';
// console.log(typeof myjsonObjectFromServer); // string
// console.log(myjsonObjectFromServer);  // { "Username": "Osama", "Age": "39" }

// const myJsObject = JSON.parse(myjsonObjectFromServer);
// console.log(typeof myJsObject); // object
// console.log(myJsObject); // {Username: 'Osama', Age: '39'}

// myJsObject["Username"] = "Elzero";
// myJsObject["Age"] = 40;

// const myJsonObjectToServer = JSON.stringify(myJsObject);
// console.log(typeof myJsonObjectToServer); // string
// console.log(myJsonObjectToServer); // {"Username":"Elzero","Age":40}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 5
/*
    To Understand Ajax, Fetch, Promises

    Asynchronous vs Synchronous Programing
    - Meaning

    Synchronous
    - Operations Runs in Sequence
    - Each Operation Must Wait For The Previous One To Complete
    - Story From Real Life

    - Facebook as Exemple
    - Simulation

    Search
    - JAvascript Is A Single Threated
    - Multi Threateded Languages
*/

// Synchrouous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchrouous

// console.log("1");
// console.log("2");
// setTimeout(() => console.log(("Operation")), 3000);
// console.log("3");
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 6
/*
    To Understand Ajax, Fetch, Promises

    Call Stack || Stack Trace
    -- Javascript Engine Uses A Call Stack To Manage Execution Contexts
    -- Mechanism To Make The Interpreter Track Your Calls
    -- When Function Called It Added To The Stack
    -- When Function Executed It Removed From The Stack
    -- After Function Is Finished Executing The Interpreter Continue From The Last Point
    -- Work Using LIFO Principale => Last In First Out
    -- Code Execution Is Synchronous.
    -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

    Web API
    -- Methods Available From The Envirenment => Browser
*/

// setTimeout(() => {
//     console.log("Web API"); // Web API // the last logging
// }, 0);

// function one() {
//     console.log("one"); // one
// }

// function two() {
//     one();
//     console.log("two"); // two
// }

// function three() {
//     two();
//     console.log("three");  // three
// }

// three();
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 7
/*
    To Understand Ajax, Fetch, Promises

    Event Loop + Callback Queue

    Story
    - Javascript Is A Single Threaded Language "All Opertions Executed in Single Thread"
    - Call Stack Track All Calls
    - Every Function Is Done Its Poped Out
    - When You Call Asynchronous Function It Sent To Browser API
    - Asynchronous Function Like Settimeout Start Its Own Thread
    - Browser API Act As A Second Thread
    - API Finish Waiting And Send Back The Function For Processing
    - Browser API And The CallBack To CallBack Queue
    - Event Loop Wait For Call Stack To Be Empty
    - Event Loop Get CallBack From CallBack Queue And Add It To Call Stack
    - CallBack Queue Follow FIFO "First In First Out" Rule
*/

// console.log("One"); // One

// setTimeout(() => {
//     console.log("Three"); // Three
// }, 0);

// setTimeout(() => {
//     console.log("Four"); // Four
// }, 0);

// console.log("Two"); // Two

// setTimeout(() => {
//     console.log(myVar); // 200
// }, 0);

// let myVar = 100;
// myVar += 100;
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 8
/*
    AJAX
    - Asynchronous Javascript And XML
    - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
    - It Use "XMLHttpRequist" Object To Interact With The Server
    - You Can Fetch Data Or Send Data Without Page refresh
    - Ewemples
    ---- Youtube Studio
    ---- Google Drive
    ---- Upload Article Photo
    ---- Form Check Name

    Test new XMLHttpRequist();
    Requist And Response
    Status Code
*/

// let req = new XMLHttpRequest();
// console.log(req); // XMLHttpRequest {onreadystatechange: null, readyState: 0, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 9
/*
    AJAX
    - Ready State => Status Of The request
    [0] request Not Initialized
    [1] Server Connection Established
    [2] Requist Received
    [3] Processing Request
    [4] Request Is Finished And response Is Ready
    - Status
    [200] Response Is Successfull
    [404] Not Found
*/

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// console.log(myRequest); // XMLHttpRequest {onreadystatechange: null, readyState: 1, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}

// myRequest.onreadystatechange = function () {
//     // console.log(myRequest.readyState); // 2 3 4
//     // console.log(myRequest.status); // 200
//     if (this.readyState === 4 && this.status === 200) {
//         console.log(this.responseText);
//     }
// };
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Video 10
/*
    Ajax
    Loop On Data

    Search
    - Cross Origin API [CORS]
    - API Authentication
*/

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// myRequest.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         // console.log(this.responseText);
//         let jsData = JSON.parse(this.responseText);
//         // console.log(jsData);
//         for (let i = 0; i < jsData.length; i++) {
//             let div = document.createElement("div");
//             let repoName = document.createTextNode(jsData[i].full_name);
//             div.appendChild(repoName);
//             document.body.appendChild(div);
//         };
//     }
// };
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* Group 26
    Video 1

    To Understand Ajax, Fetch, Promises

    Pyramid Of Doom || Callback Hell

    - What Is Callback
    - Callback Hell Exemple

    What Is Callback
    - A Function That Is Passed Into Another One As An argument To Be Executed Later
    - Function To Handle Photos
    --- [1] Download Photo From URL
    --- [2] Resize Photo
    --- [3] Add Logo To The Photo
    --- [4] Show The Photo In Website
*/

// function makeItRed(e) {
//     e.target.style.color = "red";
// }

// let p = document.querySelector(".test");
// p.addEventListener("click", makeItRed);

// function iamACallback() {
//     console.log("Iam A Callback Function")
// }

// setTimeout(iamACallback, 2000);

// setTimeout(() => {
//     console.log("Download Photo From URL");
//     setTimeout(() => {
//         console.log("Resize Photo");
//         setTimeout(() => {
//             console.log("Add Logo To The Photo");
//             setTimeout(() => {
//                 console.log("Show The Web Photo Website");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
    Video 2

    Promise Intro And Syntax
    - Promise In Javascript Is Like Promise In Real Life
    - Promise In Something That Will Happen In The Future
    - Promise Avoid Callback Hell
    - Promise Is That Represent The Status Of An Asynchronous Operation And Its Resulting Value

    - Promise Status
    --- Pending: Initial State
    --- Fulfilled: Completed Successfully
    --- Rejected: Failed

    Story
    - Once A Promise Has Been Called, It Will Start In A Pending State
    - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
    - Calling The Callback Function (Passed To Then And Catch) Upon Finishing.

    - Then
    --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//     let connect = false;
//     if (connect) {
//         resolveFunction("Connection Established");
//     } else {
//         rejectFunction(Error("connection Failed"));
//     }
// }).then(
//     (resolveValue) => console.log(`Good ${resolveValue}`),
//     (rejectveValue) => console.log(`Bad ${rejectveValue}`),
// );

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//     let connect = true;
//     if (connect) {
//         resolveFunction("Connection Established");
//     } else {
//         rejectFunction(Error("connection Failed"));
//     }
// })

// console.log(myPromise);

// let resolver = (resolveValue) => console.log(`Good ${resolveValue}`)
// let rejecter = (rejectveValue) => console.log(`Good ${rejectveValue}`)

// myPromise.then(resolver, rejecter);

// myPromise.then(
//     (resolveValue) => console.log(`Good ${resolveValue}`),
//     (rejectveValue) => console.log(`Bad ${rejectveValue}`),
// );

// myPromise.then(
//     (resolveValue) => console.log(`Good ${resolveValue}`),
//     (rejectveValue) => console.log(`Bad ${rejectveValue}`),
// );
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
    Video 3

    Promise Training

    We Will Go To The Meeting, Promise Me That We Will The 4 Employees
    .then(We Will Choose Two People)
    .then(We Will Test Them Then Get One Of Then)
    .catch(No One Came)

    Then    => Promise Is Successfull Use The Resolved Data
    Catch   => Promise Is Failed, Catch The Error
    Finally => Promise Successfull Or Failed Finally Do Something
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//     let employees = ["Osama", "Ahmed", "Sayed", "Mahmoud"];
//     if (employees.length === 4) {
//         resolveFunction(employees);
//     } else {
//         rejectFunction(Error("Number Of Employees Is Not 4"));
//     }
// });

// myPromise.then((resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue;
// }).then((resolveValue) => {
//     resolveValue.length = 1;
//     return resolveValue;
// }).then((resolveValue) => {
//     console.log(`The Choosen Emplyee Is ${resolveValue}`); // The Choosen Emplyee Is Osama
// }).catch((rejectedReason) => console.log(rejectedReason)).finally(
//     console.log("The Operation Is Done")
// );
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
    Video 4

    Promise And XHR
*/

// const getData = (apiLink) => {
//     return new Promise((resolve, reject) => {
//         let myRequest = new XMLHttpRequest();
//         myRequest.onload = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                 resolve(JSON.parse(this.responseText))
//             } else {
//                 reject(Error("No Data Found"));
//             }
//         }
//         myRequest.open("GET", apiLink);
//         myRequest.send();
//     });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//     .then((result) => {
//         result.length = 10;
//         return result;
//     })
//     .then((result) => console.log(result[0].name))
//     .catch((rej) => console.log(rej));
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
    Video 5

    Fetch API
    - Return A Representation Of the Entire HTTP Response
*/

// fetch

// fetch("https://api.github.com/users/elzerowebschool/repos").then((result) => {
//     let myData = result.json();
//     return myData;
// })
//     .then((full) => {
//         full.length = 10;
//         return full;
//     })
//     .then((ten) => {
//         console.log(ten[0].name); // Ajax
//     });

// Promise

// const getData = (apiLink) => {
//     return new Promise((resolve, reject) => {
//         let myRequest = new XMLHttpRequest();
//         myRequest.onload = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                 resolve(JSON.parse(this.responseText))
//             } else {
//                 reject(Error("No Data Found"));
//             }
//         }
//         myRequest.open("GET", apiLink);
//         myRequest.send();
//     });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//     .then((result) => {
//         result.length = 10;
//         return result;
//     })
//     .then((result) => console.log(result[0].name))
//     .catch((rej) => console.log(rej));
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
    Video 6

    Promise
    - All
    - All Settled
    - Race
*/

// const myFirstPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Iam The First Promise");
//     }, 5000);
// });

// const mySecondPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("Iam The Second Promise");
//     }, 1000);
// });

// const myThirdPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Iam The Third Promise");
//     }, 2000);
// });

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//     (resolvedValues) => console.log(resolvedValues),
//     (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
    Video 7

    Async
    - Async Before Function Mean This Function Return A Promise
    - Async And Adwait Help In Creating Asynchromous Promise Behavior With Cleaner Style
*/

// First Way

// function getData() {
//     return new Promise((res, rej) => {
//         let users = ["Osama"];
//         if (users.length > 0) {
//             res("Users Found");
//         } else {
//             rej("No Users Found");
//         }
//     });
// }

// getData().then(
//     (resolvedValue) => console.log(resolvedValue),
//     (rejectedValue) => console.log("Rejected" + rejectedValue)
// );

// Easy Way

// function getData() {
//     let users = ["Osama"]
//     if (users.length > 0) {
//         return Promise.resolve("Users Found");
//     } else {
//         return Promise.reject(" No Users Found");
//     }
// }

// getData().then(
//     (resolvedValue) => console.log(resolvedValue),
//     (rejectedValue) => console.log("Rejected" + rejectedValue)
// );

// async function getData() {
//     let users = ["Osama"]
//     if (users.length > 0) {
//         return "Users Found";
//     } else {
//         throw new Error("No Users Found");
//     }
// }

// console.log(getData());

// getData().then(
//     (resolvedValue) => console.log(resolvedValue),
//     (rejectedValue) => console.log("Rejected" + rejectedValue)
// );
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
    Video 8
    Await
    - Await Works Only Inside Asnyc Functions
    - Await Make JavaScript Wait Fot The Promise Result
    - Await Is More Elegant Syntax Of Getting Promise Result
*/

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(Error("Iam The Bad Promise"));
//         // resolve("Iam The Good Promise");
//     }, 3000);
// });

// async function readData() {
//     console.log("Before Promise");
//     // myPromise.then((resolvedValue) => console.log(resolvedValue));
//     // console.log(await myPromise);
//     console.log(await myPromise.catch((err) => err));
//     console.log("After Promise");
// }

// readData();
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
    Video 9
    Async & Await With Try, Catch, Finally
*/

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Iam The Good Promise");
//         reject("Iam The Bad Promise");
//     }, 3000);
// });

// async function readData() {
//     console.log("Before Promise");
//     try {
//         console.log(await myPromise);
//     } catch (reason) {
//         console.log(`Reason: ${reason}`);
//     } finally {
//         console.log("After Promise");
//     }
// }

// readData();

// async function fetchData() {
//     console.log("Before Fetch");
//     try {
//         let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
//         console.log(await myData.json());
//     } catch (reason) {
//         console.log(`Reason: ${reason}`);
//     } finally {
//         console.log("After Fetch");
//     }
// }

// fetchData();
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
                =======
                = End =
                =======
    Video 10
    The End
    - Other Information => Practice + Tutorials
    - Problem Solving
    - Search In Lessons
    - Advanced Books
*/
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                                -------------------------
//                                -    Problem Solving    -
//                                -------------------------

// Problem Solving 1

// First Way

// function even_or_odd(number) {
//     if (number % 2 === 0) {
//         console.log("Is Even Number")
//     } else {
//         console.log("Is Odd Number")
//     }
// }

// even_or_odd(8);

// Second Way

// function even_or_odd(number) {
//     return number % 2 === 0 ? "even" : "odd";
// }

// console.log(even_or_odd(11));
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem Solving 2

// let arr = [1, -4, 7, 12];

// First Way

// function sum(arr) {
//     let z = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             z += arr[i];
//         };
//     };
//     return z
// };

// console.log(sum([1, -4, 7, 12]));

// Second Way

// function sum(arr) {
//     return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0)
// };

// console.log(sum([1, -4, 7, 12]));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem Solving 3

// function remove(arr) {
// if (arr == null) return 0;
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// let fltr = arr.filter((x) => x !== max && x !== min);
// let rdc = fltr.reduce((acc, current) => acc + current, 0);
// return rdc

// Athor Way
// return arr.filter((x) => x !== Math.max(...arr) && Math.min(...arr))
//     .reduce((acc, current) => acc + current, 0);

//     return arr
//         .sort((a, b) => a - b).slice(1, -1).reduce((acc, current) => acc + current, 0)
// };

// console.log(remove([6, 2, 1, 1, 8, 10]));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem Solving 4

// function repeatStr(n, s) {
//     return s.repeat(n)
// }

// console.log(repeatStr(2, "I"));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem Solving 5

// function reverse(n) {
//     return n.toString().split("").map((m) => Number(m)).reverse();
// };

// console.log(reverse(123456));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 6

// function countSheep(sum) {
//     // First Way
//     return sum.reduce((acc, current) => +acc + +current);

//     // Second Way
//     let counter = 0;
//     sum.map((m) => {
//         if (m === true) counter++;
//     })
//     return counter
// }

// console.log(countSheep([true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, true, true, true, true, false, true, true, true, true]))
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 7

// function opposite(n) {
//     return n * -1
// }

// console.log(opposite(5));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 8

// function negative(n) {
//     return n > 0 ? -n : n;
// }

// console.log(negative(10));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 10

// function needle(ned) {
//     return `Found the needle at position ${ned.indexOf("needle")}`;
// }

// console.log(needle(["hay", "junk", "hay", "moreJunk", "needle", "ran"]))
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 12

// function CountAndSum(input) {
// Way 1 //

// let posArr = [];
// let negSum = 0;
// for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//         posArr.push(input[i]);
//     } else {
//         negSum += input[i]
//     }
// }
// return [posArr.length, negSum]

// Way 2 //

//     let posArr = input.filter((x) => x > 0).length;
//     let negSum = input.filter((x) => x < 0).reduce((acc, current) => acc + current, 0)
//     return [posArr, negSum];
// };

// console.log(CountAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 13

// function Double(str) {
//     return str.split("").map((s) => s.repeat(2)).join("");
// }
// console.log(Double("String"));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 14

// function math(oper, val1, val2) {
//     if (oper === "+") return val1 + val2;
//     if (oper === "-") return val1 - val2;
//     if (oper === "*") return val1 * val2;
//     if (oper === "/") return val1 / val2;

// Other Way //
//     return eval(val1 + oper + val2);
// }

// console.log(math('*', 4, 5));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 15

// function squareNotSquare(arr) {
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (Number.isInteger(Math.sqrt(arr[i]))) {
//         newArr.push(Math.sqrt(arr[i]));
//     } else {
//         newArr.push(arr[i] * arr[i]);
//     }
// }
// return newArr
// return arr.map((n) => Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n * n);
// }

// console.log(squareNotSquare([4, 3, 9, 7, 2, 1]));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 16

// function count(x, n) {
// let arr = []
// for (let i = 1; i <= n; i++) {
//     arr.push(i * x);
// }
// return arr

// Other Way
//     return Array.from(Array(n + 1).keys()).slice(1).map((n) => n * x);
// }

// console.log(count(2, 5));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 17

// function remove(str) {
// return str.split("").filter((x) => x !== " ").join("");

// Other Way
//     return str.split(" ").join("");
// }

// console.log(remove('kjfdkj knddlkn 84fdfdfd58d 6898d d45 ssd9 fsf45df fdf96 sds55sdds'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 18

// function invert(arr) {
// return arr.map((x) => x * -1);

// Other Way

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * -1);
// }
// return newArr
// }

// console.log(invert([-1, -2, -3, -4, -5]));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 19

// function convert(Boolean) {
//     return Boolean ? "Yes" : "No";
// }

// console.log(convert(true));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 20

// function reverse(str) {
//     let helWor = str.split(" ").reverse().join(" ");
//     return helWor
// };

// console.log(reverse("Hello World"));
// console.log(reverse("Hi There."));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 21

// function hydrated(t) {
//     return Math.round(t * 3 / 2);
// };

// console.log(hydrated(6.7));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 22

// function convert(n) {
// return n.toString();
// return String(n);
// return `${n}`;
// };

// console.log(convert(123));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 23

// function calculate(arr) {
// if (Array.length === 0) return 0;
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// let FinalAnswer = sum / arr.length;
// return FinalAnswer;

// Ather Solution
// return arr.reduce((acc, current) => acc + current) / arr.length;
// };

// console.log(calculate([5, 2, 5, 3, 4]));  // 19
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 24

// function convert(str) {
// return parseInt(str);
// return parseFloat(str);
// return Number(str);
// return +str;
// };

// conso le.log(convert("2546"));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 25

// function count(n) {
//     let arr = []
//     for (let i = 1; i <= n; i++) {
//         arr.push(i);
//     }
//     return arr
// };

// console.log(count(20));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 26

// function great(lang) {
//     const langs = {
//         english: "Welcome",
//         czech: "Vitejte",
//         danish: "Velcomst",
//         dutch: "klsdjk",
//         frensh: "Bonjour",
//         italian: "Benmkclsj",
//         letvian: "Galcdmk",
//         spanish: "kmmnskhvld",
//     };
//     if (langs.hasOwnProperty(lang)) {
//         return langs[lang];
//     } else {
//         return langs["english"];
//     }
// }

// console.log(great("korea"));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 27

// function sentence(words) {
//     return words.join(" ")
// }

// console.log(sentence(['hello', 'world', 'this', 'is', 'great']));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 28

// function switchn(n) {
//     switch (n) {
//         case 1:
//             return 'One';
//             break;
//         case 2:
//             return 'Two';
//             break;
//         case 3:
//             return 'Three';
//             break;
//         case 4:
//             return 'Four';
//             break;
//         case 5:
//             return 'Five';
//             break;
//         case 6:
//             return 'Six';
//             break;
//         case 7:
//             return 'Seven';
//             break;
//         case 8:
//             return 'Eight';
//             break;
//         case 9:
//             return 'Nine';
//             break;
//         default:
//             return `Wrong Number`;
//     }
// }

// console.log(switchn(2));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 29

// function bonus(sal, bol) {
// if (bol === true) {
//     return sal * 10;
// } else {
//     return sal;
// };

// Other Way
//     return bol === true ? sal * 10 + " §" : sal;
// };

// console.log(bonus(15002, true));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 30

// function exclamation(str) {
//     // solution
//     return str.replace(/!$/, "");
// };

// console.log(exclamation("!A!!hliiin!!!"));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 31

// function banjo(name) {
// if (name.match(/^r/gi)) {
//     return name + "Plays Banjo";
// } else {
//     return name + "Does Not Plays Banjo"
// }

// Other Solution
// if (name.charAt(0) === "R" || name.charAt(0) === "r") {
//     return name + "Plays Banjo";
// } else {
//     return name + "Does Not Plays Banjo"
// }

// Other Solution
//     return name.match(/^r/gi) ? name + "Plays Banjo" : name + "Does Not Plays Banjo";

// Other Solution
// return name[0] === "R" || name.charAt(0) === "r" ? name + "Plays Banjo" : name + "Does Not Plays Banjo";
// };

// console.log(banjo("Sami "));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 32

// function remove(arr) {
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         newArr.push(arr[i]);
//     };
// };
// return newArr;

// Other Solution
// return arr.filter((a, i) => i % 2 === 0);
// };

// console.log(remove(['keep', 'remove', 'keep', 'remove', 'keep', 'remove', 'keep', 'remove']))
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 34

// function transportation(d) {
//     if (d >= 7) {
//         return (40 * d) - 50;
//     } if (d >= 3 && d < 7) {
//         return (40 * d) - 20;
//     } else {
//         return 40 * d;
//     }
// }

// console.log(transportation(5));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 35

// function exclusive(a, b) {
// if (a === false && b === true || a === true && b === false) {
//     return true
// } else {
//     return false
// };

// Other Solution
//     return a === false && b === true || a === true && b === false ? true : false

// Other solution
//     return a === b ? false : true
// };

// console.log(exclusive(false, true));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 36

// function nonConsecutive(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] - arr[i - 1] === 2) return arr[i];
//     };
//     return null;
// };

// console.log(nonConsecutive([1, 2, 3, 5, 6, 7, 9]));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 37

// class kata {
//     static getVolume(length, weidth, height) {
//         return length * weidth * height
//     }
// }

// console.log(kata.getVolume(5, 5, 5));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 38

// function formating(n) {
//     return n.toFixed(2)
// }

// console.log(formating(3.3424));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 39

// function dollars(amount) {
//     return `$${amount.toFixed(2)}`;
// }

// console.log(dollars(3));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 40

// let alph =
//     ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
//         'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
//         'Y', 'Z'];

// function position(letter) {
//     return `Position Of Alphabet ${(alph.indexOf(letter) + 1)}`;
// }

// console.log(position("Z"));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 41

// function loveFunc(flower1, flower2) {
// if (flower1 % 2 === 1 && flower2 % 2 === 0 || flower2 % 2 === 1 && flower1 % 2 === 0) {
//     return 'Timmy And Sarah Are In Love';
// } else {
//     return 'Timmy And Sarah Are Not In Love';
// }

// Other Solution
// return flower1 % 2 !== flower2 % 2;
// }

// console.log(loveFunc(10, 7));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 42

// function noZero(n) {
//     let str = String(n)
// while (str.lastIndexOf(0) === str.length - 1) {
//     str = str.slice(0, str.length - 1)
// }
// return str

//     while (str.endsWith(0)) {
//         str = str.slice(0, str.length - 1)
//     }
//     return str
// };

// console.log(noZero(65500));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 43

// function average(arr) {
//     return Math.floor(arr.reduce(((acc, current) => acc + current), 0) / arr.length);
// };

// console.log(average([5, 5, 5, 5, 9]));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 44

// function shortCut(str) {
//     return str.replace(/[aeiou]/g, "")
// };

// console.log(shortCut('goodbye'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 45

// function removeExcl(str) {
//     return str.replace(/!/g, '');

// Other Solution
// return str.split('').filter((e) => e !== '!').join('');
// };

// console.log(removeExcl('Hello !!World !'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 46

// function solution(str) {
//     return str.split('').reverse().join('');
// };

// console.log(solution('World'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 47

// function grow(x) {
// return x.reduce((acc, current) => acc * current);
// let acc = 1;
// for (let i = 0; i < x.length; i++) {
//     acc *= x[i];
// };
// return acc;
// };

// console.log(grow([1, 2, 3, 4]));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 48

// function isPal(x) {
// return x[0].toLowerCase() === x[x.length - 1] || x.slice(0, 2).toLowerCase() === x.slice(-2).split('').reverse().join('') ? true : false;

// Other Solution
//     return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
// };

// console.log(isPal("Madam"));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 49

// const summation = function (num) {
// let result = 0;
// for (let i = 0; i <= num; i++) {
//     result += i
// }
// return result;

// Other Solutio
//     return Array(num).fill(true).reduce((acc, current, index) => acc + index + 1, 0)

// };

// console.log(summation(8))
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 50

// function print(arr) {
// let str = String(arr);
// let strRe = /\w/g;
// return String(str.match(strRe));

//Other Solution !!
//     return arr.join(',');
// };

// console.log(print(['h', 'o', '|', 'l', 'a']));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 51

// let sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// let monday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// let tuesday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// let wednesday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// let thursday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// let friday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// let saturday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]

// function stairs(s) {
//     let allArr = [...sunday, ...monday, ...tuesday, ...wednesday, ...thursday, ...friday, ...saturday]
//     // let allArr = sunday.concat(monday).concat(tuesday).concat(wednesday).concat(thursday).concat(friday).concat(saturday)
//     return allArr.reduce((acc, current) => acc + current, 0) * s;
// };

// console.log(stairs(20)) // 52018960
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 52

// function removeChar(str) {
//     return str.slice(1, - 1);
// };

// console.log(removeChar('ahliiiiin'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 53

// function squareSum(n) {
//     return n.map((x) => x ** 2).reduce((acc, current) => acc + current, 0);
// }

// console.log(squareSum([1, 2, 2]));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 54

// function finfSmall(args) {
//     return Math.min(...args);
// }

// console.log(finfSmall([34, 15, 88, 2]));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 55

// function isDivisible(n, x, y) {
//     return Number.isInteger(n / x) && Number.isInteger(n / y)
// };

// console.log(isDivisible(8, 2, 4));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 56

// function maps(arr) {
//     return arr.map((x) => x * 2)
// };

// console.log(maps([1, 2, 3]));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 57

// function fakeBin(n) {
// return n.split("").map((x) => x < 5 ? 0 : 1).join('');

// Other Solution
// return n.replace(/[1-4]/g, '0').replace(/[5-9]/g, '1');
// }

// console.log(fakeBin("2365129987456133698"));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 58

// function sum(n) {
//     let z = 0;
//     for (let i = 0; i < n.length; i++) {
//         if (n.length <= 0) {
//             return 0;
//         } else {
//             z += n[i]
//         }
//     }
//     return z;

// Other solution
// return n.length <= 0 ? 0 : n.reduce((acc, current) => acc + current);

// }

// console.log(sum([1, 2, -9, 23, 56.5]));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 59

// function multiple(n) {
//     return n % 2 === 0 ? n * 8 : n * 9;
// };

// console.log(multiple(100));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 60

// function upper(str) {
//     return str.toUpperCase();
// };

// console.log(upper('Abdelkarim'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 61

// function plus() {
//     let arr1 = [2, 6, 9, 8, 6, 1];
//     let arr2 = [5, 6, 9, 7, 6, 3];
//     return arr1.concat(arr2).reduce((acc, current) => acc + current);
// };

// console.log(plus())
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 62

// function sumMix(x) {
//     return x.map((x) => Number(x)).reduce((acc, current) => acc + current)
// };

// console.log(sumMix([10, 10, 10, '10', 10, 10, '10']));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 63

// function feast(beast, dish) {
//     return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false
// };

// console.log(feast('chickadee', 'choclate cake'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 64

// function upDateLight(current) {
// if (current === 'green') {
//     return 'yello'
// } else if (current === 'yello') {
//     return 'red'
// } else {
//     return 'green'
// }

// Other Solution

//     return current === 'green' ? 'yellow' : current === 'red' ? 'green' : current === 'yello' ? 'red' : 'red'
// };

// console.log(upDateLight('green'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 65

// function setAlarm(employed, vocation) {
// return employed === true && vocation === false ? true : false;
//     return employed && !vocation;
// };

// console.log(setAlarm(true, false));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 66

// function quarterOf(month) {
// return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : month <= 12 ? 4 : '';
// Other Solution
// return Math.ceil(month / 3);
// };

// console.log(quarterOf(7));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 67

// function addLength(str) {
// let strRe = /\w+/ig;
// let arr = str.match(strRe);
// let len = arr.map((x) => x.length);
// for (let i = 0; i < len.length; i++) {
//     return arr.map((x) => x + ' ' + len[i++]);
// }

// Other Solution
//     return str.split(' ').map((ele) => ele + ' ' + ele.length)
// };

// console.log(addLength('Apple Ban wahassan'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 68

// function light(name) {
//     return name === 'Zach' ? 18 : 0;
// };

// console.log(light(''));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 69

// function twice(dad, son) {
//     return dad - (son * 2)
// };

// console.log(twice(55, 30));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 70

// function hoopCount(n) {
//     return n >= 10 ? 'Great, move on to tricks' : 'Keep at it untel you get it'
// };

// console.log(hoopCount(10));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 71

// function correct(str) {
//     return str.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I');
//     let characters = {
//         '0': 'O',
//         '1': 'I',
//         '5': 'S'
//     };

//     return str.replace(/[501]/g, character => characters[character])
// };

// console.log(correct('PAR15'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 72

// function better(classPoint, mypoint) {
//     return classPoint.reduce((acc, current) => acc + current, 0) / classPoint.length < mypoint ? true : false;

// };

// console.log(better([12, 23, 34, 45, 54, 67, 78, 89, 90], 9));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 73

// function reverse(str) {
//     return str.split(' ').reverse().join(' ')
// };

// console.log(reverse('Une expression qui est évaluée avant chaque passage'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 74

// function bmi(weight, height) {
//     let bm = weight / height ** 2
//     return bm <= 18.5 ? 'underWeight' : bm <= 25 ? 'Normale' : bm <= 30 ? 'overWeight' : 'Obese';
// };

// console.log(bmi(105, 1.80));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 75

// function power(n) {
// return [...Array(n + 1).keys()].map((x) => 2 ** x);

// Other Solution
//     return Array(n + 1).fill(1).map((n, i) => 2 ** i);
// };

// console.log(power(4));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 76

// function sumStr(a, b) {
//     return String(+a + +b)
// };

// console.log(sumStr('4', '5'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 77

// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
// };

// console.log(twoSort(['turns', 'out', 'random', 'test', 'cases', 'are']));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 78

// function matter(a, b, c) {
//     return Math.max(
//         a + b + c,
//         a * b * c,
//         (c * b) * c,
//         c * b ** c
//     )
// };

// console.log(matter(4, 5, 6));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 79

// function fiter(birds) {
//     let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     let newArr = birds.filter((bird) => {
//         return !geese.includes(bird);
//     })
//     return newArr
// };

// console.log(fiter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 82

// function between(a, b) {
//     let arr = new Array(b - a + 1).fill(a).map((n, i) => n + i);
//     return arr
// };

// console.log(between(-2, 2));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 84

// function move(p, r) {
//     return p + (r * 2)
// };

// console.log(move(2, 5));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem Solving 85

// function ind(arr, n) {
//     return arr[n] ** n || -1;
// };

// console.log(ind([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                  =================================
//                  =     Problem Solving Elzero    =
//                  =================================


// Problem Solving -- Elzero Web School --
// 1 - [Arabic] Problems Solving With JavaScript - Find The Missing Letter

// My Solution:
// function find(str) {
//     let letters = 'abcdefghigklmnopqurstvwxyz';
//     let strArr = str;

//     let slc = letters.slice(letters.indexOf(strArr[0]), letters.indexOf(strArr[str.length - 1]));

//     let lettersRe = /[^ghigkmnop]/ig;
//     return slc.match(lettersRe) || 'No messing letter';
// };

// console.log(find('ghigkmnop'));

// Zero's Solution

// function find(letter) {
//     let alpha = 'abcdefghigklmnopqurstvwxyz';
//     let start = alpha.indexOf(letter[0]);

//     for (let i = 0; i < letter.length; i++) {
//         if (letter[i] !== alpha[start + 1]) {
//             return alpha[start + 1];
//         }
//     }
//     return 'No messing letter';
// };

// console.log(find('ghigkmnop'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2 - [Arabic] Problems Solving With JavaScript - Number To Reversed Array

// function convert(n) {
// my solution
// return n.toString().split('').reverse().map((x) => +x);

// Zero's Solution
// let str = n.toString();
// let emptyArray = [];

// for (let i = 0; i < str.length; i++) {
//     emptyArray.push(+str[i]);
// }
// let result = emptyArray.reverse();
// return result;

// Other Solution
//     let str = n.toString();
//     let emptyArray = [];

//     for (let i = 0; i < str.length; i++) {
//         emptyArray.unshift(+str[i]);
//     }
//     return emptyArray;
// };

// console.log(convert(265974126655));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2 - [Arabic] Problems Solving With JavaScript - Find Longest Word in a String

// function long(str) {
//     let arr = str.split(' ').reduce((acc, current) => acc.length > current.length ? acc : current);
//     return arr;
// };

// console.log(long('Arabic Problems Solving With JavaScript Find Lolmllplplplpngest Word in a String'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3 - [Arabic] Problems Solving With JavaScript - Remove Character From String

// function remove(w, c) {
//     return w.split('').filter((x) => x !== c).filter((x) => x !== c.toUpperCase()).join('');
// };

// console.log(remove('ElxzeroX Web Sxchool', 'x'));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4 - [Arabic] Problems Solving With JavaScript - Add Commas And Underscore

// function addComa(num) {
//     let arr = num.toLocaleString().split('');
//     arr.length === 3 ? num : arr.splice(arr.length - 3, 0, '_');
//     return arr.join('');
// };

// console.log(addComa(654655565550));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5 - [Arabic] Problems Solving With JavaScript - Remove Duplicate Words

// function removeDuplicateWordsFrom(sentence) {
// let arr = sentence.split(' ');
// let a = new Set(arr);
// return [...a].join(' ');

// Other Solution
// return [...new Set(sentence.split(' '))].join(' ');
// };

// console.log(removeDuplicateWordsFrom("Hello Elzero Web Web Hello School"));
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function hello(y) {

};

console.log(year())


