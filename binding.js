// binding = keywords <-> Values
// binding declaration => let, const, var
// binding form => <declare> <keyword> = <value>

let test = 99; // Number
console.log(test);
test = test - 50; // new test = old test - 50 => 100 - 50
console.log(test); // 50

const test1 = "test";
console.log(test1); // test
// test1 = "Hello"; // cannot
// console.log(test1); // cannot

var test2 = true; // true
console.log(test2);
test2 = "Google"
console.log(test2); // Google

let try1 = 3 == 2;
console.log(try1);

var try2 = 5 > 3 && 3 > 5;
console.log(try2);
try2 = 6 > 5 && 5 > 3;
console.log(try2);

const try3 = 8 == 6 ? 'Bird' : 'Cat'
console.log(try3);

