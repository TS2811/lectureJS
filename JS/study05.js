//Control Flow: Condition/Declaration/Selection
//if-else , if-else-if ,switch-case

let a = 10;
if (a > 5) {
    console.log("a > 5");
} else {
    console.log("a <= 5");
}

let b = 10;
if (b > 5) {
    console.log("b > 5");
} else if (b < 5) {
    console.log("b < 5");
} else {
    console.log("b = 5");
}

let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
        break;
}