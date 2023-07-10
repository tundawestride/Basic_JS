let number = Number(prompt("Pick a number"));

if (!Number.isNaN(number)) {
    // Number.isNaN(type<number>) => false, Number.isNaN(type<Other>) => true
    console.log("Your number is the square root of" + number * number); // same flow.js
} else {
    // condition => false => else action
    console.log("Hey. Why didn't you give me a number");
}



