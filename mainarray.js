
// let arr = ["tiger", "lion", "bird", "fish", "cat"]
// // index      0        1       2      3       4
// // length = 5

// // push add
// arr.push("elephant")
// arr.push("dog")

// console.log(arr);
// console.log(arr.length)

// // pop delete
// arr.pop() // delete last position
// arr.pop()

// console.log(arr);
// console.log(arr.length)

// // //unshift add front
// arr.unshift("elephant")
// console.log(arr);

// // // delete front
// arr.shift() // delete front
// console.log(arr);

// // add value between array
// let arr1 = ["shark", ...arr, "crocodile"]
// let arr2 = ["shark", "crocodile", ...arr]
// let arr3 = arr2.join(arr) // connect array and return string not really recommend
// let arr4 = arr2.join(" ")

// console.log(arr4);
// console.log(arr4.length)

// // //========================================== Return Max value of words.

// // console.log("=====Practice join array=====")
// // let word1 = ["I"]
// // let word2 = ["a", "m"]
// // let word3 = ["g", "o", "i", "n", "g"]
// // let word4 = ["t", "o"]
// // let word5 = ["t", "h", "e"]
// // let word6 = ["m", "u", "s", "e", "u", "m"]

// // // console.log(word1)
// // // console.log(word2)
// // // console.log(word3)

// // let word10 = word1.join("")
// // let word20 = word2.join("")
// // let word30 = word3.join("")
// // let word40 = word4.join("")
// // let word50 = word5.join("")
// // let word60 = word6.join("")

// // // console.log(word10)
// // // console.log(word20)
// // // console.log(word30)

// // let word1length = word10.length
// // let word2length = word20.length
// // let word3length = word30.length
// // let word4length = word40.length
// // let word5length = word50.length
// // let word6length = word60.length

// // // console.log(word1length)
// // // console.log(word2length)
// // // console.log(word3length)

// // let sentence = "'" + word10 + " " + word20 + " " + word30 + " " + word40 + " " + word50 + " " + word60 + "'"
// // console.log(sentence)


// // function longestWord() {
// //     let themost = Math.max(word1length, word2length, word3length, word4length, word5length, word6length)
// //     // console.log(themost)
// //     if (themost === word1length) {
// //         console.log("The Longest Word is " + word10)
// //     } else if (themost === word2length) {
// //         console.log("The Longest Word is " + word20)
// //     } else if (themost === word3length) {
// //         console.log("The Longest Word is " + word30)
// //     } else if (themost === word4length) {
// //         console.log("The Longest Word is " + word40)
// //     } else if (themost === word5length) {
// //         console.log("The Longest Word is " + word50)
// //     } else if (themost === word6length) {
// //         console.log("The Longest Word is " + word60)
// //     }
// // }
// // longestWord()

// // //==========================================


// // Slice
// let slicrStart = arr.slice(1, 4) // count by length and cut the last position out
// console.log(slicrStart);

// let sliceEnd = arr.slice(-5, -1) //
// console.log(sliceEnd);

// // // indexOf = is finding position
// console.log(arr.indexOf("bird"));

// // //sort
// let sortArr = [5, 9, 7, 4, 1, 3, 2]
// console.log(sortArr.sort())

// // loop for array

// // let arr = ["tiger", "lion", "bird", "fish", "cat"]
// // index      0        1       2      3       4
// // length = 5
// console.log('arr 2 = ' + arr[2]);

// //for loop example

// for (let i = 0; i < arr.length; i++) { // can using index or i, any dummy

//     const element = arr[i];
//     console.log(arr[i]);
// }

// //while loop example

// let number = 0;
// while (number < 3) {
//     number = number + 1
//     console.log(number);
// }

// //======Rotate array======
//               0    1    2    3    4    5
// let arr00 = ["1", "2", "3", "4", "5", "6"]
// console.log(arr00)
// arr00.splice(3)
// console.log(arr00)

// arr00.reverse()
//After Reverse
//               0    1    2    3    4    5
// let arr00 = ["6", "5", "4", "3", "2", "1"]
// console.log(arr00)
// console.log(arr00[2])

//===================================

// //index      0     1    2    3
// //           -3    -2   -1   0
// let arr01 = ["4", "5", "6", "7"]
// console.log(arr01)

// let arr01reverse = arr01.reverse()    //    0    1    2    3
// console.log(arr01reverse) // [ '7', '6', '5', '4' ]

// let arr01slice = arr01.slice(-2, -1) // Get from -1 but Cut -2 out
// console.log(arr01slice)
// // arr01.splice(1, 1); // At position 1, remove 1 items:
// arr01.splice(2, 1); // At position 2, remove 1 items:
// console.log(arr01)

// let arr01splice = arr01reverse.splice(0, 3)
// console.log(arr01splice)

// let arr01splicereverse = arr01splice.reverse()
// console.log(arr01splicereverse)

// let arr01getunsplice = arr01.pop()
// console.log(arr01getunsplice)

// console.log(arr01splicereverse + "," + arr01getunsplice)

//https://betterprogramming.pub/3-ways-to-rotate-an-array-2a45b39f7bec

//============================================

// arr00.pop()

// console.log(arr00)
// ["1", "2", "3", "4", "5"]

// arr00.unshift(arr00.pop())
// console.log(arr00)

// arr00.unshift([arr00.pop()])
// console.log(arr00)

//============================================

//Practice how to rotate array

// let arr000 = [1, 2, 3]
// arr000.pop() // Delete last, would return 3
// console.log(arr000) // [ 1, 2 ]

// let arr001 = [1, 2, 3]
// arr001.unshift(arr000)
// console.log(arr001) // [ [ 1, 2 ], 1, 2, 3 ]


//============================================
//          0  1  2  3  4
let nums = [1, 2, 3, 4, 5]
let numss = [3, 2, 1]
let numsss = [4, 5, 6, 7]

function rotatearr(nums, i) {
    i = i % nums.length; // we want to set i equal to i % nums.length คือห้ามหมุนมากกว่า จำนวนความยาวอาเรย์ ถ้าใส่จำนวนครั้งที่หมุนมากกว่า จำนวนความยาวอาเรย์จะทำการ หารออกและปัดเศษ เหลือเศษเท่าไหร่ก็หมุนเท่านั้น 
    // console.log(nums.length)
    console.log(nums, i)
    for (let n = 0; n < i; n++) {
        const x = nums.pop();
        nums.unshift(x)
    }
    return nums;

}
console.log(rotatearr(nums, 1)) //
// i = 2 / 5 = เศษ 2 ดังนั้น i = 2
// let n = 0; 0 < [i=3] ; n++)
// แปลว่าเงื่อนไขจะทำต่อในกรณีเป็น n < 2 เพื่อป้องกันการหมุนมากกว่าจำนวน nums.length
//           n       n < 2   n++
//    1st    0        Yes     1
//    2st    1        Yes     2
//    3st    2        No      -
//   ทำการหมุน                2 รอบ
//  const x = nums.pop();    2 รอบ (คือให้ทำการ delete array ด้านหลังออกทีละ 1 ดึงออกมาเก็บไว้)
//  [1, 2, 3, 4, 5] pop     4, 5
//  nums.unshift(x)         4, 5 Add Front
//  return nums; = 4,5 ต่อด้านหน้า 1, 2, 3
//  [ 4, 5, 1, 2, 3 ]
console.log(rotatearr(numss, 2))
console.log(rotatearr(numsss, 3))

//============================================







