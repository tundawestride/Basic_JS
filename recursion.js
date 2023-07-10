// function power(base, exponent) {
//     if (exponent == 0) {
//         return 1
//     } else {
//         return base * power(base, exponent - 1)
//     }
// }

// console.log(power(2, 3))

// 2 * x1 ??
// x1 = power(base, exponent - 1)
// x1 = power(2, 3 - 1)
// x1 = power(2, 2) // exponent !== 0 must be repeat itself
// 2 * x2 ??
// x2 = power(2, 2 - 1)
// x2 = power(2, 1)
// 2 * x3 ***
// x3 = power(2, 1 - 0)
// x3 = power(2, 0) // Now exponent = 0
// if (exponent == 0) {
// return 1 
// x3 = 1***

// ได้ x3 ที่ exponent == 0 return 1 แล้วให้ วนกลับขึ้นไปคูณ x3 * 2 = x2 * 2 = x1 * 2
// 2 * x3 = 2 * 1 = 2
// 2 * x2 = 2 * 2 = 4
// 2 * x1 = 2 * 4 = 8
// Answer = 8 

// This function must be add "IF" condition because its mention how this gonna be end


//===========================

function sum(number) {
    if (number === 0) {
        return 0
    } else console.log(number)
    {
        return number + sum(number - 1)
    }
}

console.log('result = ' + sum(10))

// 10 + (10-1 = 9)
// 10 + (9-1 = 8)
// 10 + (8-1 = 7)
//...
// 10 + (1-1 = 0)
// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0 = 55 