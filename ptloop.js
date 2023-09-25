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

