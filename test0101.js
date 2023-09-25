//https://docs.google.com/document/d/1Q5GV4SSq_qmgbQg7TS0usI8x0aw9dTvEXJZxLTxlPKo/edit

//=====test1 ลบเครื่องหมายออกจากส่วนท้ายของสตริง (10 คะแนน)

// function remove(n) {
//     let nsplit = n.split("")
//     // console.log(nsplit)
//     // console.log(nsplit.pop()) // last pop out

//     if (nsplit.pop() === "!") {
//         word = nsplit.join('')
//         console.log(word)
//     } else { console.log(n) }
// }
// ok (เพิ่มเงื่อนไข ! ค่อยตัด)

// remove("Hi!")
// remove("Hi! Hi!")
// remove("Hi!!!")
// remove("Hi")

//=====test2 เขียนฟังก์ชั่นรวมตัวเลขที่รับมา  (15 คะแนน)

// sumbox = []

// function crossinput(number) {
//     let numtostring = number.toString()
//     let y = numtostring.split("")
//     // console.log(y) // [ '1', '2', '3' ]
//     // console.log(y[1]) //  2 = number
//     for (let index = 0; index < y.length; index++) {
//         let element = y[index];
//         // console.log(element)
//         // console.log(y.length)
//         let result = element ** (index + 1)
//         // console.log(index + 1) // 1 2 3 4
//         // console.log(result) // 3 ** 1, 2 ** 2, 1 ** 3
//         sumbox.push(result)
//         // console.log(sumbox)
//     }

//     //sum
//     let sum = 0
//     for (let i = 0; i < sumbox.length; i++) {
//         let eachnum = sumbox[i];
//         sum = sum + eachnum
//         // console.log(sum)
//     } return console.log(sum)
// }

// // crossinput(321)
// // crossinput(89)
// // crossinput(123)
// crossinput(65)

//test 3 หาผลรวมสุดท้ายของตัวเลขที่รับมา(20 คะแนน)

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

// test4 เขียนฟังก์ชันรีเทิร์นค่า ตัวอักษรที่อยู่กึ่งกลางของข้อความ  (20 คะแนน)

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

//test 5 เขียนฟังก์ชั่นเเสดงข้อความที่มีจำนวนตัวอักษรเท่ากับตำแหน่งของตัวอักษรนั้นๆ(20 คะแนน)

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

//===== test 6 ไม่เข้าใจโจทย์ สร้างฟังก์ชั่นที่หาความแตกต่างของ array 2 ตัว และเรียงจาก น้อยไปมาก(30 คะแนน)
// ตัวอย่าง
// diffArray([1, 2, 3], [100, 2, 1, 10]) => [3, 10, 100]

//=====test 7 สร้างฟังก์ชั่นเรียงเลขคี่ โดยที่เลขคู่จะต้องอยู่ตำแหน่งเดิม(35 คะแนน)

let oddbox = []
let sortedbox = []

function pushtest(array) {

    //Select odd
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        // console.log(arrbox)
        if (element % 2 !== 0) {
            oddbox.push(element) //  = [ 5, 3 ]
            let sortoddbox = oddbox.sort((a, b) => a - b)
            console.log(oddbox) // add arrat after sort [ 3, 5, ...]
        }
    }

    // Rearrengment only 'odd' but even stay the same index 
    for (let i = 0; i < array.length; i++) {
        const each = array[i];

        if (each % 2 === 0) {
            sortedbox.push(each)
        } else if (each % 2 !== 0) {
            // sortedbox.push('test')
            // console.log(oddbox.shift()) remove the first array
            sortedbox.push(oddbox.shift()) // push the selected removed array above
        }

        console.log(sortedbox)
    }
}

// pushtest([5, 8, 6, 3, 4])
pushtest([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])

// 9.สร้างฟังก์ชันสำหรับคำนวณตู้ขายน้ำ โดยต้องทอนให้ได้เหรียญหรือแบงค์น้อยที่สุด ประเภทเงินทอน[1, 2, 5, 10, 20, 50, 100, 500, 1000] input: เงินที่ต้องจ่าย, รับเงินที่ลูกค้าจ่าย output: เหรียญหรือแบงค์ที่ต้องทอน(60 คะแนน)

// ตัวอย่าง Input:

// จำนวนเงินที่ต้องจ่าย 35 บาท ลูกค้าจ่ายเข้ามา 100 บาท

// Output: ทอนด้วยแบงค์ 50 1 ใบ, เหรียญ 10 1 เหรียญ, เหรียญ 5 1 เหรียญ