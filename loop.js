// console.log('====== start hard code ======');
// console.log(0);
// console.log(2);
// console.log(4);
// console.log(6);
// console.log(8);
// console.log(10);
// console.log(12);
// console.log('====== end hard code ======');

// // Loop => while, do-while and for loops

// // while loop
// let number = 0; // 2
// while (number <= 12) {
//     console.log(number); // 0, 2, 4, ..., 12
//     number = number + 2; // 2, 4, ..., 14
// }

// // do-while loop
// let num = 0;
// do {
//     // do action
//     num = num + 2;
//     console.log("do action:", num)
// } while (num <= 12); // (1) action, (2) false => stop

// // for loop
// console.log("===== start for loop =====");
// for (let i = 0; i <= 12; i = i + 2) { //(declaration; condition; loop action)
//     // action
//     console.log(i);// 0, 2, 4,......, 12
// }
// console.log("===== end for loop =====");

// // break
// while (true) {
//     console.log("Hello");
//     break;
//     console.log("Hello2");
// }
// console.log("Hello3");


//===========================================

// let i = 0; let count = 5; let total = 0;

// for (i = 0; i < count; i++) {
//     console.log(i)
// }

//===========================================

// let i = 0; let count = 5; let total = 0;

// for (i = 0; i < count; i++) {
//     total = i;
// }

// console.log('result=' + total);

//===========================================

// let i = 1; let max = 15; let nearlymax = 1;

// for (i = 1; i < max; i++) {
//     nearlymax = i;
// }

// console.log('result =' + nearlymax)

//===========================================

// let i = 0; let count = 5; let total = 0;

// for (i = 0; i < count; i++) {
//     total = i;
//     console.log('i =' + i)
//     console.log('count =' + count)
//     console.log('total =' + total)
// }

// console.log('result=' + total);

//===========================================

// let i = 0; let count = 5; let total = 0;

// for (i = 0; i < count; i++) {
//     total = total + i;
//     console.log('i =' + i)
//     console.log('count =' + count)
//     console.log('total =' + total)
// }

// console.log('result=' + total);

//===========================================

// let i = 0; let count = 5; let total = 0;

// for (i = 0; i < count; i++) {
//     total = total + i;
//     console.log('i =' + i)
//     console.log('count =' + count)
//     console.log('total =' + total)
// }

// console.log('result=' + total);

//===========================================

// let i = 0; let count = 5; let total = 0;

// for (i = 0; i < count; i = i + 2) {
//     total = total + i;
//     console.log('i =' + i);
//     console.log('count =' + count);
//     console.log('total =' + total);
// }

// console.log('result=' + total);

//===========================================

// let i = 0; let count = 5; let total = 0;

// for (i = 0; i < count;) {
//     total = total + i;
//     console.log('i =' + i);
//     console.log('count =' + count);
//     console.log('total =' + total);
//     i += 2;
// }

// console.log('result=' + total);


//===========================================

// let i = 0; let count = 5; let total = 0;

// for (i = 0; i < count; i++) {
//     console.log(i)
//     total = total + (2 * i);
//     console.log(total)
// }

// console.log('result =' + total);

//===========================================

// FOR IN

// let student = { id: 505, name: 'Sara', age: 19 }; let result = ''; let info;

// for (info in student) {
//     result = result + student[info] + ', ';
// }

// console.log('student info= ' + result)

//===========================================

// While loop

// let i = 0; let count = 5; let total = 0;

// while (i < count) {
//     total = i;
//     i++;
//     console.log('i =' + i);
//     console.log('count =' + count);
//     console.log('total =' + total);
// }
// console.log('result=' + total)

//===========================================

// let i = 0; let count = 5; let total = 0;

// while (i < count) {
//     total = total + i;
//     i++;
//     console.log('i =' + i);
//     console.log('count =' + count);
//     console.log('total =' + total);
// }
// console.log('result=' + total)

//===========================================

// DO...WHILE loop

// let i = 15; let count = 5;

// do {
//     console.log(i);
//     i++;
// }
// while (i < count)
// จะแสดงผลลัพธ์ เพราะทำไปก่อนแล้วเงื่อนไขไม่ถูกต้อง

// while (i < count){
//     console.log(i);
//     i++;
// }
// จะไม่แสดงผลลัพธ์ เพราะว่าไม่เป็นไปตามเงื่อนไข
//===========================================

// let i = 5; let repeat = 3;

// do {
//     console.log(i);
//     i++;
// } while (i < repeat)

// while (i < repeat) {
//     console.log(i);
//     i++;
// }

//Just do loop until check while i < repeat so last result gonna be < 15

// let i = 4; let repeat = 10;

// do {
//     console.log(i);
//     i++;
// } while (i < repeat)


//===========================================

// let i = 0;

// for (i = 10; i <= 100; i = i + 5) {
//     console.log(i)

//     console.log('i =' + i + ' + 1')
//     i = i + 1;

//     console.log('i =' + i);
//     console.log('for loop i =' + i + ' + 5')

// }

// console.log(i)

//===========================================

// let i = 1; let n = 100

// for (i = 1; i <= n; i++) {
//     console.log(i);
// }


//===========================================

// let i = 100; let n = 1

// for (i = 100; n <= i; i--) {
//     console.log(i);
// }

//===========================================

// let i = 1; let n = 100; let total = 0

// for (i = 1; i <= n; i++) {
//     total = total + i;
//     console.log("i =" + i);
//     console.log("n =" + n);
//     console.log("total =" + total);

// }

//===========================================


// let i = 1; let n = 100; let total = 0

// for (i = 1; i <= n; i++) {
//     total = i * i;
//     console.log("i =" + i);
//     console.log("n =" + n);
//     console.log("total =" + total);

// }

//===========================================

// function Examplefactorial(x) {
//     // If num = 0 OR num = 1, the factorial will return 1
//     if (x === 0 || x === 1) return 1;

//     // We start the FOR loop with i = 4
//     // We decrement i after each iteration
//     for (let y = x - 1; y >= 1; y--) {
//         // console.log(y)

//         x = x * y;
//         // We store the value of num at each iteration
//         // console.log(x)

//     }
//     return x;
//     // Example factorial(5) Start from 5 and minus
//     //                        Declare      Conditions     Process
//     //  num                  var y = x - 1    y >= 1 ?      y--      x *= y (x = x * y)
//     // 1st iteration: 5      4 = 5 - 1         yes          3        20 = 5 * 4
//     // 2nd iteration: 20     3 = 4 - 1         yes          2        60 = 20 * 3
//     // 3rd iteration: 60     2 = 3 - 1         yes          1       120 = 60 * 2
//     // 4th iteration: 120    1 = 2 - 1         no           0       120 = 120 * 1
//     // 5th iteration: 120        0                                      120
//     // End of the FOR loop
// }

// console.log(Examplefactorial(5))
// console.log(Examplefactorial(4))
// console.log(Examplefactorial(3))

//===========================================

// function testminus(i) {
//     for (let q = i - 1; q >= 1; q--) {
//         // console.log(i)
//         console.log(q)
//     }
// }
// testminus(7)  // Start from  i - 1 [ 7 - 1 = 6,...,1 ]

//===========================================

// function factorial(x) {
//     if (x === 1 || x === 0) return 1;
//     for (let y = x - 1; y > 0; y--) {
//         x = x * y
//         // Explanation
//         //  fac     x-1 = [y]     y > 0 ?   [y--]     (x=4 or [x] = x * y )
//         //  1st     4-1 = [3]       Yes     [3]       4 * 3 = [12]  // Storage for loop
//         //  2st     3-1 = [2]       Yes     [2]       [12] * 2 = [24]
//         //  3st     2-1 = [1]       Yes     [1]       [24] * 1 = [24]
//         //  4st     1-1 = [0]       No      [0]       Stop
//     }
//     return x
// }
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))

//===========================================
