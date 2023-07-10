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
//     total = total + (2 * i);
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


let i = 1; let n = 100; let total = 0

for (i = 1; i <= n; i++) {
    total = i * i;
    console.log("i =" + i);
    console.log("n =" + n);
    console.log("total =" + total);

}

//===========================================
