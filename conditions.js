// condition if-else

// if (condition) { 
// condition = true => action1, condition = false => else => action 2 
// action
// } else {
// action 2
// }

let number = Number(prompt("Pick a number"));
if (!Number.isNaN(number)) {
    // Number.isNaN(type<number>) => false, Number.isNaN(type<Other>) => true
    console.log("Your number is the square root of" + number * number); // same flow.js
}

