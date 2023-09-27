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

let input = [2, 7, 11, 15]
let target = 9

function calwithtarget(input, target) {
    let total = 0
    output = []

    for (let index = 0; index < input.length; index++) {
        let element = (Number(input[index]));
        // console.log('index = ', element)
        let elementplus = (Number(input[index + 1]))
        // console.log('index +1 = ', elementplus)

        //Sum of couple number
        total = element + elementplus
        // console.log(total)

        if (total === target) {
            output.push(input.indexOf(element), input.indexOf(elementplus))
            // console.log(output)
        }
    } return console.log('target = ', target, 'output = ', output)

}

calwithtarget(input, target)
// calwithtarget([2, 7, 11, 15], 9)
calwithtarget([3, 2, 4], 6)

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

//=====