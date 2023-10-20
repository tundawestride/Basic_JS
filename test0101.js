//https://docs.google.com/document/d/1Q5GV4SSq_qmgbQg7TS0usI8x0aw9dTvEXJZxLTxlPKo/edit

//=====test1 ลบเครื่องหมายออกจากส่วนท้ายของสตริง (10 คะแนน)

// function remove(n) {
//     let nsplit = n.split("")
//     // console.log(nsplit)
//     // console.log(nsplit.pop()) // last pop out

//     if (nsplit.pop() === "!") {
//         word = nsplit.join('')
//         console.log(word)
//     } return n
// }
// // ok (เพิ่มเงื่อนไข ! ค่อยตัด)

// // remove("Hi!")
// // remove("Hi! Hi!")
// // remove("Hi!!!")
// remove("Hi")

//=====test2 เขียนฟังก์ชั่นรวมตัวเลขที่รับมา  (15 คะแนน)

// sumbox = []

// function crossinput(number) {
//     let numtostring = number.toString()
//     let y = numtostring.split("")
//     // console.log(y) // [ '1', '2', '3' ]
//     // console.log(y[1]) //  2 = number
//     let sum = 0
//     for (let index = 0; index < y.length; index++) {
//         let element = y[index];
//         // console.log(element)
//         // console.log(y.length)
//         let result = element ** (index + 1)
//         // console.log(index + 1) // 1 2 3 4
//         // console.log(result) // 3 ** 1, 2 ** 2, 1 ** 3
//         sum = sum + result
//     } return sum

// }

// // ทำใน Loop เดียว

// // crossinput(321)
// // crossinput(89)
// console.log(crossinput(123))
// // console.log(crossinput(65))

//=====test 3 หาผลรวมสุดท้ายของตัวเลขที่รับมา(20 คะแนน)

// function sumfinal(numset) {
//     let result = numset
//     //1. to array
//     while (result > 10) { // 4. set last result
//         let numsetarray = result.toString().split("") // *** result not numset
//         console.log(numsetarray)

//         //2.factorial between array
//         let sum = 1
//         for (let index = 0; index < numsetarray.length; index++) {
//             let elementtocal = numsetarray[index];
//             sum = sum * elementtocal
//             // console.log(sum)
//         } result = sum // 3. set result

//         //
//     } console.log(' the result that > 10 while loop = ' + result)
// }
// sumfinal(999)
// // sumfinal(39)
// // sumfinal(723)
// // sumfinal(9)

//===== test4 เขียนฟังก์ชันรีเทิร์นค่า ตัวอักษรที่อยู่กึ่งกลางของข้อความ  (20 คะแนน)

// function middleword(word) {
//     console.log(word)
//     let wsplit = word.split("")
//     console.log(wsplit)
//     // console.log(wsplit.length)
//     // console.log(wsplit.length % 2 !== 0)
//     let middle = word.length // 2 เขียนแทน 170 + 181
//     //คี่
//     if (wsplit.length % 2 !== 0) {
//         // let middle = word.length / 2
//         let middlefront = Math.floor(middle)
//         // let middleback = Math.ceil(middle)

//         //middle
//         // console.log(middlefront) // ตำแหน่งตรงกลาง
//         // console.log(middleback)
//         console.log(wsplit[middlefront])

//         //คู่
//     } else if (wsplit.length % 2 == 0) {
//         // let middle = word.length / 2
//         // console.log(middle)
//         let middlefr = middle - 1
//         console.log(wsplit[middlefr] + wsplit[middle]) // กลาง2ตัว
//     }
//     else (console.log(word))

// }

// //
// // middleword('pompom')
// middleword('test')
// // middleword('testing')
// // middleword('middle')
// // middleword('a')

//======test 5 เขียนฟังก์ชั่นเเสดงข้อความที่มีจำนวนตัวอักษรเท่ากับตำแหน่งของตัวอักษรนั้นๆ(20 คะแนน)

// let box = [] // using

// function display(word) {
//     let splitword = word.split("") // keyword string repeat
//     console.log(splitword)

//     for (let index = 0; index < splitword.length; index++) {
//         const element = splitword[index];
//         // console.log(element)
//         // console.log(index + 1)
//         let repeatstring = element.repeat(index + 1)
//         // console.log(repeatstring)
//         box.push(repeatstring)
//         // console.log(box)
//     } return console.log(box.join("-"))

// }

// // display("abcd")
// // display("big")
// display("test")

//===== test 6 สร้างฟังก์ชั่นที่หาความแตกต่างของ array 2 ตัว และเรียงจาก น้อยไปมาก(30 คะแนน)

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

//     //แบบใช้ Filter
//     // const diff2 = arrayA.filter((e) => (!arrayB.includes(e)))
//     // differbox.push(...diff2)


//     return console.log(differbox.sort((a, b) => a - b))
// }

// // diffArray([1, 2, 3], [100, 2, 1, 10])
// diffArray([9, 5, 4], [4, 8, 7, 5])

//=====test 7 สร้างฟังก์ชั่นเรียงเลขคี่ โดยที่เลขคู่จะต้องอยู่ตำแหน่งเดิม(35 คะแนน)

// let oddbox = []
// let sortedbox = []

// function pushtest(array) {

// // Select odd
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     // console.log(arrbox)
//     if (element % 2 !== 0) {
//         oddbox.push(element) //  = [ 5, 3 ]
//         let sortoddbox = oddbox.sort((a, b) => a - b)
//         console.log(oddbox) // add arrat after sort [ 3, 5, ...]
//     }
// }

//     //Select odd แบบที่สั้นกว่า
//     const oddbox = array.filter(element => element % 2 !== 0).sort((a, b) => a - b)
//     console.log('odd box = ', oddbox) // มันเป็น อาเรย์อยู่แล้วแต่เราใส่ + เลยเป็นสตริง แต่ถ้าใช้ , จะเป็น อาเรย์

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

// pushtest([5, 8, 6, 3, 4])
// pushtest([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])

//=====8. สร้างฟังก์ชันที่รับค่า nums เป็น Array และ target เป็น number จากนั้นให้ รีเทิร์นตำแหน่งของ item ภายใน nums  2ตัวที่มี **ผลรวม (บวก)** เท่ากับ target(40 คะแนน)
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
//         for (let indexx = index + 1; indexx < input.length; indexx++) { // ***
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
// // index 0 + 1 2 3 , 1 + 2 3, 2 + 3 > ไม่กลับมาบวกตัวเอง***

// // calwithtarget(input, target)
// calwithtarget([2, 11, 15, 7], 4)
// // calwithtarget([2, 7, 11, 15], 9)
// // calwithtarget([3, 2, 4], 6)

// //===== 9.1 สร้างฟังก์ชันสำหรับคำนวณตู้ขายน้ำ โดยต้องทอนให้ได้เหรียญหรือแบงค์น้อยที่สุด ประเภทเงินทอน[1, 2, 5, 10, 20, 50, 100, 500, 1000] input: เงินที่ต้องจ่าย, รับเงินที่ลูกค้าจ่าย output: เหรียญหรือแบงค์ที่ต้องทอน(60 คะแนน)
// let coinone = { coin1: 'เหรียญ 1 บาท', amount: 0, pn: 'เหรียญ' }
// let cointwo = { coin2: 'เหรียญ 2 บาท', amount: 0, pn: 'เหรียญ' }
// let coinfive = { coin5: 'เหรียญ 5 บาท', amount: 0, pn: 'เหรียญ' }
// let cointen = { coin10: 'เหรียญ 10 บาท', amount: 0, pn: 'เหรียญ' }
// let notetwenty = { note20: 'แบงค์ 20 บาท', amount: 0, pn: 'แบงค์' }
// let notefifty = { note50: 'แบงค์ 50 บาท', amount: 0, pn: 'แบงค์' }
// let notehundred = { note100: 'แบงค์ 100 บาท', amount: 0, pn: 'แบงค์' }
// let notefivehun = { note500: 'แบงค์ 500 บาท', amount: 0, pn: 'แบงค์' }

// let outputtext1 = 'ทอนด้วย'
// let outputtext2 = 'จำนวน'

// function drinkpayment(price, pay) {
//     let actualchange = pay - price

//     if (pay > price) { console.log('ราคา', price, 'จ่ายมา', pay, 'เงินทอน = ', actualchange) }

//     if (pay < price) {
//         console.log('ราคา', price, 'จ่ายมา', pay, 'กรุณาจ่ายเพิ่มอีก', Math.abs(actualchange), ' บาท')
//     } else if (actualchange !== 0) {

//         let fraction500 = actualchange % 500 // ได้เศษ เก็บไว้***
//         // console.log(fraction500)
//         let of500 = actualchange - fraction500 // ได้500ที่ลงตัว
//         // console.log(of500)
//         let amonthof500 = of500 / 500 // ได้จำนวนแบงค์ 500
//         // console.log(amonthof500)
//         for (let index = 0; index < amonthof500; index++) {
//             notefivehun.amount++ // เก็บจำนวนแบงค์ที่ได้ไว้ใน amouth
//         }
//         console.log(notefivehun) // แสดงประเภทและ จำนวนแบงค์ 500
//         console.log('เศษ = ', fraction500)

//         // หาแบงค์ 100 จากเศษ

//         if (actualchange !== 0) {
//             //separate
//             let fraction100 = fraction500 % 100 // ได้เศษ เก็บไว้***
//             let of100 = fraction500 - fraction100 // ได้100ที่ลงตัว
//             let amonthof100 = of100 / 100 // ได้จำนวนแบงค์ 100
//             for (let index = 0; index < amonthof100; index++) {
//                 notehundred.amount++ // เก็บจำนวนแบงค์ที่ได้ไว้ใน amouth
//             }
//             console.log(notehundred) // แสดงประเภทและ จำนวนแบงค์ 100
//             console.log('เศษ = ', fraction100)

//             // หาแบงค์ 50 จากเศษ

//             if (actualchange !== 0) {
//                 let fraction50 = fraction100 % 50
//                 let of50 = fraction100 - fraction50
//                 let amonthof50 = of50 / 50
//                 for (let index = 0; index < amonthof50; index++) {
//                     notefifty.amount++
//                 }
//                 console.log(notefifty)
//                 console.log('เศษ = ', fraction50)

//                 // หาแบงค์ 20 จากเศษ

//                 if (actualchange !== 0) {
//                     let fraction20 = fraction50 % 20
//                     let of20 = fraction50 - fraction20 //ได้จำนวนแบงค์ 20
//                     let amonthof20 = of20 / 20
//                     for (let index = 0; index < amonthof20; index++) {
//                         notetwenty.amount++
//                     }
//                     console.log(notetwenty)
//                     console.log('เศษ = ', fraction20)

//                     // หาเหรียญ 10 จากเศษ

//                     if (actualchange !== 0) {
//                         let fraction10 = fraction20 % 10
//                         let of10 = fraction20 - fraction10 //
//                         let amonthof10 = of10 / 10
//                         for (let index = 0; index < amonthof10; index++) {
//                             cointen.amount++
//                         }
//                         console.log(cointen)
//                         console.log('เศษ = ', fraction10)

//                         // หาเหรียญ 5 จากเศษ

//                         if (actualchange !== 0) {
//                             let fraction5 = fraction10 % 5
//                             let of5 = fraction10 - fraction5
//                             let amonthof5 = of5 / 5
//                             for (let index = 0; index < amonthof5; index++) {
//                                 coinfive.amount++
//                             }
//                             console.log(coinfive)
//                             console.log('เศษ = ', fraction5)

//                             // หาเหรียญ 2 จากเศษ

//                             if (actualchange !== 0) {
//                                 let fraction2 = fraction5 % 2
//                                 let of2 = fraction5 - fraction2
//                                 let amonthof2 = of2 / 2
//                                 for (let index = 0; index < amonthof2; index++) {
//                                     cointwo.amount++
//                                 }
//                                 console.log(cointwo)
//                                 console.log('เศษ = ', fraction2)

//                                 // หาเหรียญ 1 จากเศษ

//                                 if (actualchange !== 0) {
//                                     let fraction1 = fraction2 % 1
//                                     let of1 = fraction2 - fraction1
//                                     let amonthof1 = of1 / 1
//                                     for (let index = 0; index < amonthof1; index++) {
//                                         coinone.amount++
//                                     }
//                                     console.log(coinone)
//                                     console.log('เศษ = ', fraction1)
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     // Display only amouth !== 0
//     console.log(outputtext1)
//     if (notefivehun.amount !== 0) {
//         console.log(notefivehun.note500, outputtext2, notefivehun.amount, notefivehun.pn)
//     }
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

// drinkpayment(31, 1000)
// // drinkpayment(49, 717)
// // drinkpayment(30, 31)

//9.2 อีกวิธีจาก 9.1

let allnotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
let allchanges = []

function paymentmachine(prize, pay) {

    let changeraw = pay - prize

    if (pay < prize) {
        console.log(`Please pay more ${Math.abs(changeraw)}`)
    } else if (pay > prize) {
        console.log(`จ่ายมา ${pay} ราคา ${prize} ตังทอน ${changeraw}`)

        for (let index = 0; index < allnotes.length; index++) {
            let typeofnotes = allnotes[index];
            // console.log(typeofnotes)

            //หาจำนวนแบงค์
            let findamouthofnotes = Math.floor(changeraw / typeofnotes)
            // console.log(findamouthofnotes)

            //เอาตังทอนมาวนหาเศษเพื่อเอาค่าไปเก็บที่ ตัวมันเอง และนำไปวนลูปด้านบนใหม่
            changeraw = changeraw - typeofnotes * findamouthofnotes

            if (findamouthofnotes > 0) {
                allchanges.push({
                    ประเภทแบงค์หรือเหรียญ: typeofnotes,
                    จำนวนแบงค์หรือเหรียญ: findamouthofnotes,
                })
            }
        }
    } console.log(allchanges)

}

paymentmachine(42, 1000)
// drinkpayment(49, 717)
// drinkpayment(30, 31)