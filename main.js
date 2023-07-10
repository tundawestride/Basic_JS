
let arr = ["tiger", "lion", "bird", "fish", "cat"]
// index      0        1       2      3       4
// length = 5

// push add
arr.push("elephant")
arr.push("dog")

console.log(arr);
console.log(arr.length)

// pop delete
arr.pop() // delete last position
arr.pop()

console.log(arr);
console.log(arr.length)

//unshift add front 
arr.unshift("elephant")
console.log(arr);

// delete front
arr.shift() // delete front
console.log(arr);