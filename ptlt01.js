//=====Practice Question=====

console.log("=====RETURN LONGEST WORD=====")
let word1 = ["I"]
let word2 = ["a", "m"]
let word3 = ["g", "o", "i", "n", "g"]
let word4 = ["t", "o"]
let word5 = ["t", "h", "e"]
let word6 = ["m", "u", "s", "e", "u", "m"]

let word10 = word1.join("")
let word20 = word2.join("")
let word30 = word3.join("")
let word40 = word4.join("")
let word50 = word5.join("")
let word60 = word6.join("")

let word1length = word10.length
let word2length = word20.length
let word3length = word30.length
let word4length = word40.length
let word5length = word50.length
let word6length = word60.length

let sentence = "'" + word10 + " " + word20 + " " + word30 + " " + word40 + " " + word50 + " " + word60 + "'"
console.log(sentence)

function longestWord() {
    let themost = Math.max(word1length, word2length, word3length, word4length, word5length, word6length)
    // console.log(themost)
    if (themost === word1length) {
        console.log("The Longest Word is " + "'" + word10 + "'")
    } else if (themost === word2length) {
        console.log("The Longest Word is " + "'" + word20 + "'")
    } else if (themost === word3length) {
        console.log("The Longest Word is " + "'" + word30 + "'")
    } else if (themost === word4length) {
        console.log("The Longest Word is " + "'" + word40 + "'")
    } else if (themost === word5length) {
        console.log("The Longest Word is " + "'" + word50 + "'")
    } else if (themost === word6length) {
        console.log("The Longest Word is " + "'" + word60 + "'")
    }
}
longestWord()


console.log("=====FACTORIAL FUCNTION=====")

function factorial(x) {
    if (x === 1 || x === 0) return 1;
    for (let y = x - 1; y > 0; y--) {
        x = x * y
        // Explanation 
        //  fac     x-1 = [y]     y > 0 ?   [y--]     (x=4 or [x] = x * y )
        //  1st     4-1 = [3]       Yes     [3]       4 * 3 = [12]  // Storage for loop
        //  2st     3-1 = [2]       Yes     [2]       [12] * 2 = [24]
        //  3st     2-1 = [1]       Yes     [1]       [24] * 1 = [24]
        //  4st     1-1 = [0]       No      [0]       Stop  
    }
    return x
}
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))

console.log("=====ROTATE ARRAY=====")

function rotatearr(nums, i) {
    i = i % nums.length; // Divide the [remainder], to fix not pop more than array length
    // console.log(nums, i)
    for (let n = 0; n < i; n++) { // to fix not pop more than [array length] or [remainder]
        const x = nums.pop();
        // console.log(x)
        nums.unshift(x)
    }
    return nums;
}
console.log([1, 2, 3, 4, 5], 1) // Q 
console.log(rotatearr([1, 2, 3, 4, 5], 1)) // A
console.log([3, 2, 1], 2)
console.log(rotatearr([3, 2, 1], 2))
console.log([4, 5, 6, 7], 3)
console.log(rotatearr([4, 5, 6, 7], 3))

console.log("=====FIND MISSING NUMBER?=====")

function findmissingnumber(arr) {
    console.log(arr)

    let maxarr = Math.max(...arr)
    let minarr = Math.min(...arr)

    result = []

    for (let i = minarr; i <= maxarr; i++) {
        // console.log(i)
        if (!arr.includes(i)) {
            result.push(i)
        }
    }
    console.log("missing number is")
    return console.log(result)
}
findmissingnumber([2, 1, 3, 7, 6])
findmissingnumber([8, 1, 3])

console.log("=====REMOVE DUPLICATES=====")

let arr1 = ([9, 0, 0, 3, 3, 3, 4, 5, 5, 6, 6, 7, 7, 7, 7, 8])
let arr2 = ["21", "22", "23", "30", "45", "45", "65"]

function removedup(arr) {
    // return [...new Set(arr)];
    return [...new Set(arr)]
}

console.log(arr1)
console.log("Remove duplicates = " + (removedup(arr1)))
console.log(arr2)
console.log("Remove duplicates = " + (removedup(arr2)))
