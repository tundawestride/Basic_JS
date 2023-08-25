// call function => functionName(argument1, argument2)

// console.log("Hello There!", 500);

//============================================

// let x = 5; let y = 6; // 1. Set value

// function Plus(x, y) { //  2. Set function and parameter
//     return x + y // 3. Set result that we need
// }

// console.log("Plus x and y =" + Plus(x, y));

//============================================

// let x = 5; let y = 5;

// function cross() {
//     return x * y
// }

// console.log("Cross x and y =" + cross(x, y))

//============================================

// const x = Math.max(10, 10, 400, 500, 50, 55) // return max number
// console.log("x:", x);

//============================================

// function Plus(x1, x2) {
//     return (x1 + x2);
// }
// result1 = Plus(1, 2);
// result2 = Plus(2, 8);
// result3 = Plus(3, -4);

// console.log(result1)
// console.log(result2)
// console.log(result3)

//============================================

// let x = 3
// let y = 4
// let z = 5

// function square(cross) {
//     return cross * cross

// }

// console.log(' square = ' + square(x))
// console.log(' square = ' + square(y))
// console.log(' square = ' + square(z))

//============================================

// คูณ = Multiply หรือ cross แต่ใช้อันแรกจะนิยมกว่า

// function cross(x1, x2) {
//     return (x1 * x2);
// }

// result = cross(4, 4);

// console.log(result)

//============================================

// function sum(n) {

//     let total = 0; let i = 0
//     for (i = 0; i <= n; i++) {
//         total = total + i;
//     }
//     return (total);
// }

// console.log(sum(100));
// console.log(sum(10));

//============================================

//Calculate Body Mass Index

// function BMI(w, h) {
//     result = (w / (h * h));
//     return (result)
// }

// result1 = BMI(58, 1.63);
// result2 = BMI(80, 1.75);

// console.log(Math.round(result1))
// console.log(Math.round(result2))

//============================================

// This is function calculate BMI

// function BMIrate(w, h) {

//     let result = ((w / (h * h)) * 10000);

//     if (result >= 30) { (rate = 'Fat'); }
//     else if (result >= 25) { (rate = 'Overweight'); }
//     else if (result >= 18.5) { (rate = 'Normal'); }
//     else { (rate = 'Thin'); }

//     return (rate); // This is answer of this function

// }

// let Case1 = BMIrate(80, 140);
// let Case2 = BMIrate(40, 170);

// console.log(Case1)
// console.log(Case2)

//============================================

// This is function grading for school

// let n = StudentGrading(prompt("Please fill your score"));

// function StudentGrading(n) {

//     let result = n;

//     if (result >= 80) { (grade = 'A'); }
//     else if (result >= 75) { (grade = 'B+'); }
//     else if (result >= 70) { (grade = 'B'); }
//     else if (result >= 65) { (grade = 'C+'); }
//     else if (result >= 60) { (grade = 'C'); }
//     else if (result >= 55) { (grade = 'D+'); }
//     else if (result >= 50) { (grade = 'D'); }
//     else { (grade = 'F'); }

//     return (grade); // This is answer of this function

// }

// let Case1 = StudentGrading(70);
// let Case2 = StudentGrading(85);
// let Case3 = StudentGrading(42);
// let Case4 = StudentGrading(68);

// console.log('Your grade is ' + Case1)
// console.log('Your grade is ' + Case2)
// console.log('Your grade is ' + Case3)
// console.log('Your grade is ' + Case4)

// console.log('Your grade is ' + grade) // This is for prompt

//============================================

// console.log("=====FACTORIAL FUCNTION=====")

function factorial(x) {
    let result = 1
    for (let index = 1; index <= x; index++) {
        result = result * index // 1 2 3 4 5

        // Explanation     index = 1           index <= x[5]       index++    result = result[1] * index
        // 1st                1                  Yes                 1               =  1 * 1 = 1
        // 2st                2                  Yes                 2          1    =  1 * 2 = 2
        // 3st                3                  Yes                 3          2    =  2 * 3 = 6
        // 4st                4                  Yes                 4          6    =  6 * 4 = 24
        // 5st                5                  Yes                 5          24   =  24 * 5 = 120
        // 5st                6                  No                  -          120       -
    }
    return result
}

console.log(factorial(3)) // 1*2*3 = 6
console.log(factorial(4)) // 1*2*3*4 = 24
console.log(factorial(5)) // 1*2*3*4*5 = 120

// How to make 1*2*3 ?? the result not correct

//============================================



function practicefactorial(x) {
    let result = 1
    for (let index = 1; index <= x; index++) {
        result = result * index
        // result = 1*1=1, 1*2=2, 2*3=6, 6*4=24, 24*5=120, 120*6= 720, stop cause 7 is not <=x
    }
    return result
}

console.log(practicefactorial(6))
console.log(practicefactorial(5))
console.log(practicefactorial(4))