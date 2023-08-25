//=====Practice Question=====

console.log("=====RETURN LONGEST WORD=====")

function longestword(sentence) {
    console.log(sentence)

    let splitsentence = sentence.split(' ')
    // console.log(splitsentence)  // ['..', '..', '..', ...] array

    // sort by array length
    let longestwordlength = splitsentence.sort((a, b) => a.length - b.length)
    // console.log(longestwordlength) // ['.shortestlength.', ...'...longestlength...']

    return longestwordlength.pop() // [ return last word ]
}

console.log("Longest word is = " + longestword('I want to travel to galapagos island because it is very beautiful.'))
console.log("Longest word is = " + longestword('I am feeling great right now.'))
console.log("Longest word is = " + longestword('Would you buy me a movie ticket please!'))


console.log("=====FACTORIAL FUCNTION=====")

function factorial(x) {
    let result = 1
    for (let index = 1; index <= x; index++) {
        result = result * index // 1 2 3 4 5
    }
    return result
}

console.log(factorial(3)) // 1*2*3 = 6
console.log(factorial(4)) // 1*2*3*4 = 24
console.log(factorial(5)) // 1*2*3*4*5 = 120

// How to make 1*2*3 ?? the result not correct

console.log("=====ROTATE ARRAY=====")

function rotatearr(nums, i) {
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
    return result
}
findmissingnumber([2, 1, 3, 7, 6])
findmissingnumber([8, 1, 3])

console.log("=====REMOVE DUPLICATES=====")

function removedup(arr) {
    // return [...new Set(arr)];
    let nodup = [...new Set(arr)]
    return nodup
}

console.log("Remove duplicates = " + (removedup([9, 0, 0, 3, 3, 3, 4, 5, 5, 6, 6, 7, 7, 7, 7, 8])))


console.log("=====MAX CHARACTERS=====")

let checkbox = []

function maxCharacters(allkeys) {
    for (let i = 0; i < allkeys.length; i++) {
        let keys = allkeys[i];
        // Storage      checking box      picking each name by keys
        check = checkbox.find((eachkey) => eachkey.name == keys)

        if (check == undefined) {
            checkbox.push({ name: keys, currentMax: 1 })
        } else {
            check.currentMax++
        }
    }
    //get the last position that sort values ​​ascending and pop the most
    console.log(checkbox.sort((a, b) => a.currentMax - b.currentMax).pop())
}

maxCharacters('jddddddddsssssskkkkkdjjjdfffffffccccc')
