// ลบเครื่องหมายออกจากส่วนท้ายของสตริง(10 คะแนน remove("Hi! Hi!") ผล "Hi! Hi"

// function remove(str) {
//     let splistr = str.split('')
//     // console.log(splistr)
//     // console.log(splistr.pop())

//     if (splistr.pop() === '!') {
//         console.log(splistr.join(''))
//     } else { console.log(str) }
// }

// remove('Hi! Hi!')
// remove('!Hi')
// remove('Hi!!!')

// เขียนฟังก์ชั่นรวมตัวเลขที่รับมา(15 คะแนน) ตัวอย่าง input: 123 process 11 + 22 + 33  output: 32, input: 65 process 61 + 52  output: 31

// function summathpow(number) {
//     let numbertostring = number.toString()
//     // console.log(numbertostring)
//     let numsplit = numbertostring.split('')
//     // console.log(numsplit)

//     let sum = 0
//     let output = 0

//     for (let index = 0; index < numsplit.length; index++) {
//         let element = numsplit[index];
//         // console.log(element)
//         let pow = index + 1
//         // console.log(pow)
//         sum = element ** pow // ยกกำลังแต่ละ index
//         // console.log(sum)

//         output = output + sum // ผลรวม

//     } return console.log(output)

// }

// // summathpow(123)
// summathpow(65)

// หาผลรวมสุดท้ายของตัวเลขที่รับมา(20 คะแนน) ตัวอย่าง 39 -- > 4(because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4) // 999 -- > 2(because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2) และ 4 -- > 4

// function numsum(numarr) {
//     let result = numarr

//     while (result > 10) {
//         resultsplit = result.toString().split('')
//         console.log(resultsplit)

//         let summary = 1
//         for (let index = 0; index < resultsplit.length; index++) {
//             let elementtocal = resultsplit[index];
//             // console.log(elementtocal)
//             summary = summary * elementtocal
//             // console.log(summary)
//             result = summary
//         }
//     } return console.log(result)
// }

// numsum(999)

// เขียนฟังก์ชันรีเทิร์นค่า ตัวอักษรที่อยู่กึ่งกลางของข้อความ(20 คะแนน) "test" -> "es"// "testing" -> "t" // "middle" -> "dd" // "a" -> "a"

// function findmiddle(text) {
//     // console.log(text.length)
//     // console.log(text[2])
//     if (text.length % 2 === 0) {
//         evenmiddle = text.length / 2
//         console.log(`${text[evenmiddle - 1]}${text[evenmiddle]}`)
//     } else
//         if (text.length % 2 !== 0) {
//             oddmiddle = Math.floor(text.length / 2)
//             console.log(text[oddmiddle])
//         }
// }


// findmiddle('middle')
// findmiddle('a')
// findmiddle("testing")
// findmiddle("what")
// findmiddle("ferby")

//5.เขียนฟังก์ชั่นเเสดงข้อความที่มีจำนวนตัวอักษรเท่ากับตำแหน่งของตัวอักษรนั้นๆ(20 คะแนน) ตัวอย่าง "abcd" -> "a-bb-ccc-dddd" // "big" -> "b-ii-ggg" // "test" -> "t-ee-sss-tttt"

// let answerbox = []

// function repeat(someword) {
//     let somewordtoarr = someword.split('')
//     // console.log(somewordtoarr)

//     for (let index = 0; index < somewordtoarr.length; index++) {
//         const element = somewordtoarr[index];
//         // console.log(element)

//         let repeattimes = index + 1
//         // console.log(repeattimes)

//         let repeatword = element.repeat(repeattimes)
//         // console.log(repeatword)

//         answerbox.push(repeatword)
//         // console.log(answerbox)

//     } return console.log(answerbox.join('-'))
// }

// // repeat('test')
// repeat('big')

//สร้างฟังก์ชั่นที่หาความแตกต่างของ array 2 ตัว และเรียงจาก น้อยไปมาก(30 คะแนน) ตัวอย่าง diffArray([1, 2, 3], [100, 2, 1, 10]) => [3, 10, 100]

// diffbox = []

// function differarr(a, b) {

//     for (let indexa = 0; indexa < a.length; indexa++) {
//         const element = a[indexa];
//         // console.log(element)
//         // console.log(b)
//         if (!b.includes(element)) {
//             // console.log(element)
//             diffbox.push(element)
//         }
//     }

//     for (let indexb = 0; indexb < b.length; indexb++) {
//         const element = b[indexb];
//         // console.log(element)
//         // console.log(b)
//         if (!a.includes(element)) {
//             // console.log(element)
//             diffbox.push(element)
//         }
//     }
//     // console.log(diffbox)

//     return console.log(diffbox.sort((a, b) => a - b))

// }

// differarr([1, 2, 3], [100, 2, 1, 10])

//7. สร้างฟังก์ชั่นเรียงเลขคี่ โดยที่เลขคู่จะต้องอยู่ตำแหน่งเดิม(35 คะแนน) ตัวอย่าง[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] // [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]

// let oddbox = []
// let newbox = []

// function reodd(arrnum) {

//     //find odd
//     for (let index = 0; index < arrnum.length; index++) {
//         const element = arrnum[index];
//         if (element % 2 !== 0) {
//             oddbox.push(element)
//             oddbox.sort((a, b) => a - b)
//             // console.log(oddbox)
//         }
//     }

//     //เรียงใหม่ ใช้ Push กับ Shift
//     for (let i = 0; i < arrnum.length; i++) {
//         const element = arrnum[i];
//         // console.log(element)
//         if (element % 2 === 0) {
//             newbox.push(element)
//         } else if (element % 2 !== 0) {
//             newbox.push(oddbox.shift())
//         }
//     }
//     return console.log(newbox)
// }

// // reodd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
// reodd([5, 8, 6, 3, 4])

// สร้างฟังก์ชันที่รับค่า nums เป็น Array และ target เป็น number จากนั้นให้ รีเทิร์นตำแหน่งของ item ภายใน nums  2ตัวที่มี ผลรวม (บวก)Ex1: Input: nums = [2, 7, 11, 15], target = 9 Output: [0, 1] (เช่น ตำแหน่งที่ 0 1 บวกกันได้ 9 )

// let input = [2, 7, 11, 15]
// let target = 9
// let output = []
// function findindextarget(input, target) {

//     for (let index = 0; index < input.length; index++) {
//         let element = input[index];
//         // console.log(element)

//         let total = 0

//         for (let indexx = index + 1; indexx < input.length; indexx++) {
//             let elementt = input[indexx];
//             // console.log(elementt)
//             total = element + elementt
//             // console.log(`element${element} + elementt${elementt} = ${total}`)

//             if (total === target) {
//                 output.push(input.indexOf(element), input.indexOf(elementt))
//             }
//         }
//     } return console.log(output)

// }

// // findindextarget([2, 7, 11, 15], 9)
// findindextarget([3, 2, 4], 6)

//สร้างฟังก์ชันสำหรับคำนวณตู้ขายน้ำ โดยต้องทอนให้ได้เหรียญหรือแบงค์น้อยที่สุด ประเภทเงินทอน[1, 2, 5, 10, 20, 50, 100, 500, 1000] input: เงินที่ต้องจ่าย, รับเงินที่ลูกค้าจ่าย output: เหรียญหรือแบงค์ที่ต้องทอน(60 คะแนน) ตัวอย่าง Input:จำนวนเงินที่ต้องจ่าย 35 บาท ลูกค้าจ่ายเข้ามา 100 บาทOutput: ทอนด้วยแบงค์ 50 1 ใบ, เหรียญ 10 1 เหรียญ, เหรียญ 5 1 เหรียญ

// let allnotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
// let allchanges = []

// function paymentmachine(prize, pay) {

//     let changeraw = pay - prize

//     if (pay < prize) {
//         console.log(`Please pay more ${Math.abs(changeraw)}`)
//     } else if (pay > prize) {
//         console.log(`จ่ายมา ${pay} ราคา ${prize} ตังทอน ${changeraw}`)

//         for (let index = 0; index < allnotes.length; index++) {
//             let typeofnotes = allnotes[index];
//             // console.log(typeofnotes)

//             //หาจำนวนแบงค์
//             let findamouthofnotes = Math.floor(changeraw / typeofnotes)
//             // console.log(findamouthofnotes)

//             //เอาตังทอนมาวนหาเศษเพื่อเอาค่าไปเก็บที่ ตัวมันเอง และนำไปวนลูปด้านบนใหม่
//             changeraw = changeraw - typeofnotes * findamouthofnotes

//             if (findamouthofnotes > 0) {
//                 allchanges.push({
//                     ประเภทแบงค์หรือเหรียญ: typeofnotes,
//                     จำนวนแบงค์หรือเหรียญ: findamouthofnotes,
//                 })
//             }
//         }
//     } console.log(allchanges)

// }

// paymentmachine(42, 1000)

// ฝึกอีกรอบ จร้า หาผลรวมสุดท้ายของตัวเลขที่รับมา(20 คะแนน) ตัวอย่าง 999 -- > 2(because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2)

// function findsumarray(arr) {

//     let result = arr

//     while (result > 10) {
//         let makearray = result.toString().split('')
//         // console.log(makearray)

//         result = 1

//         for (let index = 0; index < makearray.length; index++) {
//             let element = makearray[index];
//             // console.log(element)
//             result = result * element
//         }
//     } return console.log(result)
// }

// // findsumarray(999)
// // findsumarray(39)
// findsumarray(4)


// สร้างฟังก์ชันที่รับค่า nums เป็น Array และ target เป็น number จากนั้นให้ รีเทิร์นตำแหน่งของ item ภายใน nums  2ตัวที่มี ผลรวม (บวก) เท่ากับ target(40 คะแนน) Input: nums = [2, 7, 11, 15], target = 9 Output: [0, 1]

// function findindexofsum(arrset, target) {

//     let total = 0
//     let output = []

//     for (let index = 0; index < arrset.length; index++) {
//         let element = arrset[index];
//         // console.log(element)

//         for (let indexx = index + 1; indexx < arrset.length; indexx++) {
//             const elementt = arrset[indexx];
//             // console.log(elementt)

//             total = element + elementt
//             // console.log(` ${element} + ${elementt} = ${total}`)

//             if (total === target) {
//                 output.push(arrset.indexOf(element), arrset.indexOf(elementt))
//             }
//         }
//     } return console.log(output)

// }

// // findindexofsum([2, 7, 11, 15], 9)
// findindexofsum([3, 2, 4], 6)

