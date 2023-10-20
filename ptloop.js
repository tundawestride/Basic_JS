// practice while loop

// let n = 10; // start
// while (n < 100) {
//     n++
//     console.log(n) // 11 -100
// }

//=====

// function factorialtest(somenum) {
//     let result = somenum

//     while (result > 10) {
//         console.log('result =' + result)
//         let array = result.toString().split("") // 9 9 9
//         let sum = 1

//         for (let index = 0; index < array.length; index++) {
//             let element = array[index];
//             sum = sum * element // factorial
//         }
//         // console.log(sum) // 729 126 12 2 until result > 10 (2) เลขหลักเดียว
//         result = sum
//     }
//     console.log('result with condition > 10 last = ' + result)
// }
// factorialtest(999)

// //do-while factorial

// function factorialtestplus(num) {
//     let total = 1
//     let i = 1
//     do {
//         total = total * i
//         i++
//         console.log('total do-while factorial =' + total)
//     }
//     while (i <= num);
// }
// factorialtestplus(5)

// //for loop factorial

// function factoriaforloop(number) {
//     let total = 1
//     for (let i = 0; i < number; i++) {
//         let total = total * i;
//     } return console.log('total factoriaforloop =' + total)
// }
// factorialtestplus(6)

//===== Test 7

// let oddbox = []
// let sortedbox = []

// function pushtest(array) {

//     //Select odd
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         // console.log(arrbox)
//         if (element % 2 !== 0) {
//             oddbox.push(element) //  = [ 5, 3 ]
//             let sortoddbox = oddbox.sort((a, b) => a - b)
//             console.log(oddbox) // add arrat after sort [ 3, 5, ...]
//         }
//     }

//     // Rearrengment only 'odd' but even stay the same index
//     for (let i = 0; i < array.length; i++) {
//         const each = array[i];

//         if (each % 2 === 0) {
//             sortedbox.push(each)
//         } else if (each % 2 !== 0) {
//             // sortedbox.push('test')
//             // console.log(oddbox.shift()) remove the first array
//             sortedbox.push(oddbox.shift()) // push the selected removed array above
//         }

//         console.log(sortedbox)
//     }
// }

// // pushtest([5, 8, 6, 3, 4])
// pushtest([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])

////===== test 6 สร้างฟังก์ชั่นที่หาความแตกต่างของ array 2 ตัว และเรียงจาก น้อยไปมาก(30 คะแนน)
// Example diffArray([1, 2, 3], [100, 2, 1, 10]) => [3, 10, 100]

// let differbox = []

// //ลองใช้ filter แล้วไม่ออกคะ ใช้ Include แทน
// function diffArray(arrayA, arrayB) {

//     // Check A, in B
//     for (let i = 0; i < arrayB.length; i++) {
//         const elementB = arrayB[i];
//         if (!arrayA.includes(elementB)) {
//             // console.log(elementB)
//             differbox.push(elementB)
//         }
//     }

//     // Check B, in A
//     for (let ii = 0; ii < arrayA.length; ii++) {
//         const elementA = arrayA[ii];
//         if (!arrayB.includes(elementA)) {
//             differbox.push(elementA)
//         }
//     }

//     return console.log(differbox.sort((a, b) => a - b))
// }

// // diffArray([1, 2, 3], [100, 2, 1, 10])
// diffArray([9, 5, 4], [4, 8, 7, 5])

////===== test 6.2 สร้างฟังก์ชั่นที่หาความแตกต่างของ array 2 ตัว และเรียงจาก น้อยไปมาก(30 คะแนน)
// Example diffArray([1, 2, 3], [100, 2, 1, 10]) => [3, 10, 100]

// let differbox = []

// //ลองใช้ filter แล้วไม่ออกคะ ใช้ Include แทน
// //ใช้ฟิลเตอร์หายังไงคะ

// function diffArray(arrayA, arrayB) {

//     // Check A, in B
//     for (let i = 0; i < arrayB.length; i++) {
//         const elementB = arrayB[i];
//         let differ = arrayA.filter(element => element !== elementB)
//         console.log(differ)
//     }

//     // return console.log(differbox.sort((a, b) => a - b))
// }

// diffArray([1, 2, 3], [100, 2, 1, 10])
// // diffArray([9, 5, 4], [4, 8, 7, 5])

//=====8. สร้างฟังก์ชันที่รับค่า nums เป็น Array และ target เป็น number จากนั้นให้ รีเทิร์นตำแหน่งของ item ภายใน nums  2ตัวที่มี ผลรวม (บวก) เท่ากับ target(40 คะแนน)

// Ex1: Input: nums = [2, 7, 11, 15], target = 9 Output: [0, 1]
//  * (เช่น ตำแหน่งที่ 0 1 บวกกันได้ 9 )*
//  Ex2 Input: nums = [3, 2, 4], target = 6 Output: [1, 2]

// let input = [2, 7, 11, 15]
// let target = 9

// function calwithtarget(input, target) {
//     let total = 0
//     output = []

//     for (let index = 0; index < input.length; index++) {
//         let element = (Number(input[index]));
//         // console.log('index = ', element)
//         let elementplus = (Number(input[index + 1]))
//         // console.log('index +1 = ', elementplus)

//         //Sum of couple number
//         total = element + elementplus
//         // console.log(total)

//         if (total === target) {
//             output.push(input.indexOf(element), input.indexOf(elementplus))
//             // console.log(output)
//         }
//     } return console.log('target = ', target, 'output = ', output)

// }

// calwithtarget(input, target)
// // calwithtarget([2, 7, 11, 15], 9)
// calwithtarget([3, 2, 4], 6)

// let nums = String(prompt("Input set of Array( for example: 9, 8, 1, 7, ..."));
// let target = Number(prompt("input a target number( for example: 1"));

// let nums = '9, 8, 7, 1, 8, 11' // This is String
// let target = 9 // This is already number

// function arrandnum(nums, target) {

//     let numstoarray = nums.split(',')
//     console.log(numstoarray)

//     for (let index = 0; index < numstoarray.length; index++) {
//         const element = Number(numstoarray[index]);
//         console.log(element)
//     }

//     console.log(target)

// }

// arrandnum(nums, target)

//===== 9.สร้างฟังก์ชันสำหรับคำนวณตู้ขายน้ำ โดยต้องทอนให้ได้เหรียญหรือแบงค์น้อยที่สุด ประเภทเงินทอน[1, 2, 5, 10, 20, 50, 100, 500, 1000] input: เงินที่ต้องจ่าย, รับเงินที่ลูกค้าจ่าย output: เหรียญหรือแบงค์ที่ต้องทอน(60 คะแนน)

// ตัวอย่าง Input:

// จำนวนเงินที่ต้องจ่าย 35 บาท ลูกค้าจ่ายเข้ามา 100 บาท

// Output: ทอนด้วยแบงค์ 50 1 ใบ, เหรียญ 10 1 เหรียญ, เหรียญ 5 1 เหรียญ

// let coinone = { coin1: 'เหรียญ 1 บาท', amount: 0, pn: 'เหรียญ' }
// let cointwo = { coin2: 'เหรียญ 2 บาท', amount: 0, pn: 'เหรียญ' }
// let coinfive = { coin5: 'เหรียญ 5 บาท', amount: 0, pn: 'เหรียญ' }
// let cointen = { coin10: 'เหรียญ 10 บาท', amount: 0, pn: 'เหรียญ' }
// let notetwenty = { note20: 'แบงค์ 20 บาท', amount: 0, pn: 'แบงค์' }
// let notefifty = { note50: 'แบงค์ 50 บาท', amount: 0, pn: 'แบงค์' }
// let notehundred = { note100: 'แบงค์ 100 บาท', amount: 0, pn: 'แบงค์' }

// let outputtext1 = 'ทอนด้วย'
// let outputtext2 = 'จำนวน'

// function drinkpayment(price, pay) {
//     let actualchange = pay - price

//     if (pay > price) { console.log('ราคา', price, 'จ่ายมา', pay, 'เงินทอน = ', actualchange) }

//     if (pay < price) {
//         console.log('ราคา', price, 'จ่ายมา', pay, 'กรุณาจ่ายเพิ่มอีก', Math.abs(actualchange), ' บาท')
//     } else if (actualchange > 100 || actualchange !== 0) {
//         //separate
//         let fraction100 = actualchange % 100 // ได้เศษ เก็บไว้***
//         let of100 = actualchange - fraction100 // ได้100ที่ลงตัว
//         let amonthof100 = of100 / 100 // ได้จำนวนแบงค์ 100
//         for (let index = 0; index < amonthof100; index++) {
//             notehundred.amount++ // เก็บจำนวนแบงค์ที่ได้ไว้ใน amouth
//         }
//         console.log(notehundred) // แสดงประเภทและ จำนวนแบงค์ 100
//         console.log('เศษ = ', fraction100)
//         // หาแบงค์ 50 จากเศษ
//         if (notehundred.amount || actualchange !== 0) {
//             let fraction50 = fraction100 % 50
//             let of50 = fraction100 - fraction50
//             let amonthof50 = of50 / 50
//             for (let index = 0; index < amonthof50; index++) {
//                 notefifty.amount++
//             }
//             console.log(notefifty)
//             console.log('เศษ = ', fraction50)
//             // หาแบงค์ 20 จากเศษ
//             if (notefifty.amount || actualchange !== 0) {
//                 let fraction20 = fraction50 % 20
//                 let of20 = fraction50 - fraction20 //ได้จำนวนแบงค์ 20
//                 let amonthof20 = of20 / 20
//                 for (let index = 0; index < amonthof20; index++) {
//                     notetwenty.amount++
//                 }
//                 console.log(notetwenty)
//                 console.log('เศษ = ', fraction20)
//                 // หาเหรียญ 10 จากเศษ
//                 if (notetwenty.amount || actualchange !== 0) {
//                     let fraction10 = fraction20 % 10
//                     let of10 = fraction20 - fraction10 //
//                     let amonthof10 = of10 / 10
//                     for (let index = 0; index < amonthof10; index++) {
//                         cointen.amount++
//                     }
//                     console.log(cointen)
//                     console.log('เศษ = ', fraction10)
//                     // หาเหรียญ 5 จากเศษ
//                     if (cointen.amount || actualchange !== 0) {
//                         let fraction5 = fraction10 % 5
//                         let of5 = fraction10 - fraction5
//                         let amonthof5 = of5 / 5
//                         for (let index = 0; index < amonthof5; index++) {
//                             coinfive.amount++
//                         }
//                         console.log(coinfive)
//                         console.log('เศษ = ', fraction5)
//                         // หาเหรียญ 2 จากเศษ
//                         if (coinfive.amount || actualchange !== 0) {
//                             let fraction2 = fraction5 % 2
//                             let of2 = fraction5 - fraction2
//                             let amonthof2 = of2 / 2
//                             for (let index = 0; index < amonthof2; index++) {
//                                 cointwo.amount++
//                             }
//                             console.log(cointwo)
//                             console.log('เศษ = ', fraction2)
//                             // หาเหรียญ 1 จากเศษ
//                             if (coinone.amount || actualchange !== 0) {
//                                 let fraction1 = fraction2 % 1
//                                 let of1 = fraction2 - fraction1
//                                 let amonthof1 = of1 / 1
//                                 for (let index = 0; index < amonthof1; index++) {
//                                     coinone.amount++
//                                 }
//                                 console.log(coinone)
//                                 console.log('เศษ = ', fraction1)
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     // Display only amouth !== 0
//     console.log(outputtext1)
//     if (notehundred.amount !== 0) {
//         console.log(notehundred.note100, outputtext2, notehundred.amount, notehundred.pn)
//     }
//     if (notefifty.amount !== 0) {
//         console.log(notefifty.note50, outputtext2, notefifty.amount, notefifty.pn)
//     }
//     if (notetwenty.amount !== 0) {
//         console.log(notetwenty.note20, outputtext2, notetwenty.amount, notetwenty.pn)
//     }
//     if (cointen.amount !== 0) {
//         console.log(cointen.coin10, outputtext2, cointen.amount, cointen.pn)
//     }
//     if (coinfive.amount !== 0) {
//         console.log(coinfive.coin5, outputtext2, coinfive.amount, coinfive.pn)
//     }
//     if (cointwo.amount !== 0) {
//         console.log(cointwo.coin2, outputtext2, cointwo.amount, cointwo.pn)
//     }
//     if (coinone.amount !== 0) {
//         console.log(coinone.coin1, outputtext2, coinone.amount, coinone.pn)
//     }
// }

// drinkpayment(31, 557)

// let coinone = { coin1: 'เหรียญ 1 บาท', amount: 0, pn: 'เหรียญ' }
// let cointwo = { coin2: 'เหรียญ 2 บาท', amount: 0, pn: 'เหรียญ' }
// let coinfive = { coin5: 'เหรียญ 5 บาท', amount: 0, pn: 'เหรียญ' }
// let cointen = { coin10: 'เหรียญ 10 บาท', amount: 0, pn: 'เหรียญ' }
// let notetwenty = { note20: 'แบงค์ 20 บาท', amount: 0, pn: 'แบงค์' }
// let notefifty = { note50: 'แบงค์ 50 บาท', amount: 0, pn: 'แบงค์' }
// let notehundred = { note100: 'แบงค์ 100 บาท', amount: 0, pn: 'แบงค์' }

// let outputtext1 = 'ทอนด้วย'
// let outputtext2 = 'จำนวน'

// function drinkpayment(price, pay) {
//     let actualchange = pay - price

//     if (pay > price) { console.log('ราคา', price, 'จ่ายมา', pay, 'เงินทอน = ', actualchange) }

//     if (pay < price) {
//         console.log('ราคา', price, 'จ่ายมา', pay, 'กรุณาจ่ายเพิ่มอีก', Math.abs(actualchange), ' บาท')
//     } else if (actualchange !== 0) {
//         //separate
//         let fraction100 = actualchange % 100 // ได้เศษ เก็บไว้***
//         console.log(fraction100)
//         let of100 = actualchange - fraction100 // ได้100ที่ลงตัว
//         console.log(of100)
//         let amonthof100 = of100 / 100 // ได้จำนวนแบงค์ 100
//         console.log(amonthof100)
//         for (let index = 0; index < amonthof100; index++) {
//             notehundred.amount++ // เก็บจำนวนแบงค์ที่ได้ไว้ใน amouth
//         }
//         console.log(notehundred) // แสดงประเภทและ จำนวนแบงค์ 100
//         console.log('เศษ = ', fraction100)
//         // หาแบงค์ 50 จากเศษ
//         if (actualchange !== 0) {
//             let fraction50 = fraction100 % 50
//             let of50 = fraction100 - fraction50
//             let amonthof50 = of50 / 50
//             for (let index = 0; index < amonthof50; index++) {
//                 notefifty.amount++
//             }
//             console.log(notefifty)
//             console.log('เศษ = ', fraction50)
//             // หาแบงค์ 20 จากเศษ
//             if (actualchange !== 0) {
//                 let fraction20 = fraction50 % 20
//                 let of20 = fraction50 - fraction20 //ได้จำนวนแบงค์ 20
//                 let amonthof20 = of20 / 20
//                 for (let index = 0; index < amonthof20; index++) {
//                     notetwenty.amount++
//                 }
//                 console.log(notetwenty)
//                 console.log('เศษ = ', fraction20)
//                 // หาเหรียญ 10 จากเศษ
//                 if (actualchange !== 0) {
//                     let fraction10 = fraction20 % 10
//                     let of10 = fraction20 - fraction10 //
//                     let amonthof10 = of10 / 10
//                     for (let index = 0; index < amonthof10; index++) {
//                         cointen.amount++
//                     }
//                     console.log(cointen)
//                     console.log('เศษ = ', fraction10)
//                     // หาเหรียญ 5 จากเศษ
//                     if (actualchange !== 0) {
//                         let fraction5 = fraction10 % 5
//                         let of5 = fraction10 - fraction5
//                         let amonthof5 = of5 / 5
//                         for (let index = 0; index < amonthof5; index++) {
//                             coinfive.amount++
//                         }
//                         console.log(coinfive)
//                         console.log('เศษ = ', fraction5)
//                         // หาเหรียญ 2 จากเศษ
//                         if (actualchange !== 0) {
//                             let fraction2 = fraction5 % 2
//                             let of2 = fraction5 - fraction2
//                             let amonthof2 = of2 / 2
//                             for (let index = 0; index < amonthof2; index++) {
//                                 cointwo.amount++
//                             }
//                             console.log(cointwo)
//                             console.log('เศษ = ', fraction2)
//                             // หาเหรียญ 1 จากเศษ
//                             if (actualchange !== 0) {
//                                 let fraction1 = fraction2 % 1
//                                 let of1 = fraction2 - fraction1
//                                 let amonthof1 = of1 / 1
//                                 for (let index = 0; index < amonthof1; index++) {
//                                     coinone.amount++
//                                 }
//                                 console.log(coinone)
//                                 console.log('เศษ = ', fraction1)
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     // Display only amouth !== 0
//     console.log(outputtext1)
//     if (notehundred.amount !== 0) {
//         console.log(notehundred.note100, outputtext2, notehundred.amount, notehundred.pn)
//     }
//     if (notefifty.amount !== 0) {
//         console.log(notefifty.note50, outputtext2, notefifty.amount, notefifty.pn)
//     }
//     if (notetwenty.amount !== 0) {
//         console.log(notetwenty.note20, outputtext2, notetwenty.amount, notetwenty.pn)
//     }
//     if (cointen.amount !== 0) {
//         console.log(cointen.coin10, outputtext2, cointen.amount, cointen.pn)
//     }
//     if (coinfive.amount !== 0) {
//         console.log(coinfive.coin5, outputtext2, coinfive.amount, coinfive.pn)
//     }
//     if (cointwo.amount !== 0) {
//         console.log(cointwo.coin2, outputtext2, cointwo.amount, cointwo.pn)
//     }
//     if (coinone.amount !== 0) {
//         console.log(coinone.coin1, outputtext2, coinone.amount, coinone.pn)
//     }
// }

// // drinkpayment(31, 99)
// // drinkpayment(49, 717)

// drinkpayment(30, 31)

// //ทอนเงิน 550 ให้วนลูป ให้เอาแบงค์ใหญ่ วนลูป

// 550 / 1000

// 550 / 500 > 1 // 500 1 ใบ ***

//     (550 - (500 * 1))

// =50

// และนำ 50 มาวนลูป 0

// 50 / 100

// 50 / 100 x

// 50 / 50 = 1 ***

//     (50 - (50 * 1))

// =0

// เอา ผลลัพ *** มาเกบไว้ใน Array

// ลองวนลูป forloop  หาจุดร่วม

// 8.1  สร้างฟังก์ชันที่รับค่า nums เป็น Array และ target เป็น number จากนั้นให้ รีเทิร์นตำแหน่งของ item ภายใน nums  2ตัวที่มี **ผลรวม (บวก)** เท่ากับ target(40 คะแนน)
//Ex1: Input: nums = [2, 7, 11, 15], target = 9 Output: [0, 1]
//* (เช่น ตำแหน่งที่ 0 1 บวกกันได้ 9 )*
//Ex2 Input: nums = [3, 2, 4], target = 6 Output: [1, 2]

// let input = [2, 7, 11, 15]
// let target = 9

// function calwithtarget(input, target) {
//     let total = 0
//     output = []

//     for (let index = 0; index < input.length; index++) {
//         let element = (Number(input[index]));
//         // console.log('index = ', element)
//         let elementplus = (Number(input[index + 1]))
//         // console.log('index +1 = ', elementplus)

//         //Sum of couple number
//         total = element + elementplus
//         // console.log(total)

//         if (total === target) {
//             output.push(input.indexOf(element), input.indexOf(elementplus))
//             // console.log(output)
//         }
//     } return console.log('target = ', target, 'output = ', output)

// }

// // calwithtarget(input, target)
// calwithtarget([2, 11, 15, 7], 9)
// // calwithtarget([3, 2, 4], 6)

// ***ต้องเป็น 2 loopซ้อนกัน เอา index นั้นๆ มาบวกทีละคู่ จนกว่าจะได้เท่ากับ Target


// 8.2 แก้ใหม่ สร้างฟังก์ชันที่รับค่า nums เป็น Array และ target เป็น number จากนั้นให้ รีเทิร์นตำแหน่งของ item ภายใน nums  2ตัวที่มี **ผลรวม (บวก)** เท่ากับ target(40 คะแนน)
//Ex1: Input: nums = [2, 7, 11, 15], target = 9 Output: [0, 1]
//* (เช่น ตำแหน่งที่ 0 1 บวกกันได้ 9 )*
//Ex2 Input: nums = [3, 2, 4], target = 6 Output: [1, 2]

// let input = [2, 7, 11, 15]
// let target = 9

// function calwithtarget(input, target) {
//     let total = 0
//     output = []

//     for (let index = 0; index < input.length; index++) {
//         let element = input[index]
//         // console.log(`element ${element}`)
//         for (let indexx = 0; indexx < input.length; indexx++) {
//             const elementsubset = input[indexx];
//             // console.log(`elementsubset ${elementsubset}`)
//             total = element + elementsubset
//             // console.log(`total ${total}`)
//             if (total === target) {
//                 console.log(`target = ${target}`)
//                 console.log(`Sum = ${element} + ${elementsubset}`)
//                 output.push(input.indexOf(element), input.indexOf(elementsubset))
//                 console.log(`Index sum equal target = ${output}`)
//             }
//         } break
//     }
// }

// // calwithtarget(input, target)
// // calwithtarget([2, 11, 15, 7], 9)
// calwithtarget([2, 7, 11, 15], 9)
// // calwithtarget([3, 2, 4], 6)

//===== 9.2 สร้างฟังก์ชันสำหรับคำนวณตู้ขายน้ำ โดยต้องทอนให้ได้เหรียญหรือแบงค์น้อยที่สุด 
let arrallmoney = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
let arrnotes = []

function drinkpayment(price, pay) {
    let actualchange = pay - price

    if (pay > price) { console.log('ราคา', price, 'จ่ายมา', pay, 'เงินทอน = ', actualchange) }

    if (pay < price) {
        console.log('ราคา', price, 'จ่ายมา', pay, 'กรุณาจ่ายเพิ่มอีก', Math.abs(actualchange), ' บาท')
    } else if (actualchange !== 0) {
        for (let index = 0; index < arrallmoney.length; index++) {
            let element = arrallmoney[index]; // 1000, 500, 100, 50, 20, 10, 5, 2, 1
            // console.log(element)
            let count = Math.floor(actualchange / element) // 668 / 500 = 1
            console.log(count) // 1
            actualchange = actualchange - count * element //  668 - (500*1) = 168 // เอาตังทอนเก็บไว้ที่ตัวเอง
            if (count > 0) {
                arrnotes.push({
                    Notes: count, // Key: Value
                    Typeofnotes: element, // Key: Value
                })
            }
        }
    }

    console.log(arrnotes)
}


drinkpayment(31, 1000)
// drinkpayment(49, 717)
// drinkpayment(30, 31)