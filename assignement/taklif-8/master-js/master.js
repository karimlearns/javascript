/*
taklif 1
*/
let day_1 = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

let day_2 = "Friday";
let day_3 = "Saturday";
let day_4 = "Sunday";
// Output => "No Appointments Available"

let day_5 = "Monday";
let day_6 = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day_7 = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day_8 = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day_9 = "World";
Output => "Its Not A Valid Day"

switch (day_1) {
    case "   friday  ":
        console.log((`${day_1}`.trim().slice(0, 1).toLocaleUpperCase())+`${day_1}`.slice(4, 9));
    break;

    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
    break;

    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
    break;

    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
    break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
    break;
    case "World":
        console.log("Its Not A Valid Day");
    break;
}

