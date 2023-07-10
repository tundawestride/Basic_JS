
// let arr = ["tiger", "lion", "bird", "fish", "cat"]
// // index      0        1       2      3       4
// length = 5

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

// //unshift add front
// arr.unshift("elephant")
// console.log(arr);

// // delete front
// arr.shift() // delete front
// console.log(arr);

// add value between array
// let arr1 = ["shark", ...arr, "crocodile"]
// let arr2 = ["shark", "crocodile", ...arr]
// // let arr3 = arr2.join(arr) // connect array and return string

// console.log(arr2);

//Slice
// let slicr=eStart = arr.slice(1, 4) // count by length and cut the last position out
// console.log(sliceStart);

// let sliceEnd = arr.slice(-5, -1) //
// console.log(sliceEnd);

// // indexOf = is finding position
// console.log(arr.indexOf("bird"));

// //sort
// let sortArr = [5, 9, 7, 4, 1, 3, 2]
// console.log(sortArr.sort())

// // loop for array

let arr = ["tiger", "lion", "bird", "fish", "cat"]
// index      0        1       2      3       4
// length = 5
console.log('arr 2 = ' + arr[2]);

//for loop example

for (let i = 0; i < arr.length; i++) { // can using index or i, any dummy

    const element = arr[i];
    console.log(arr[i]);
}

//while loop example 

let number = 0;
while (number < 3) {
    number = number + 1
    console.log(number);
}

