// //https://edabit.com/challenges/javascript


//=====1. Older Than Me https://edabit.com/challenge/iwdZiFucR5wkQsFHu

let p1 = {
    name: 'Sammy',
    Age: 40
}

let p2 = {
    name: 'Joel',
    Age: 36
}

let p3 = {
    name: 'Lily',
    Age: 24
}
let p4 = {
    name: 'Mariel',
    Age: 24
}

// console.log(p1.name)
// console.log(p1.Age)

// function CompareAge(px, py) {
//     let pxAge = px.Age
//     let pyAge = py.Age
//     let differage = pxAge - pyAge
//     let resultdiffer = Math.sign(differage) //The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.
//     if (resultdiffer == 1) {
//         console.log(px.name + ' is older than me')
//     } else if (resultdiffer == -1) {
//         console.log(px.name + ' is younger than me')
//     } else { console.log(px.name + ' is the same age as me') }

// }

// CompareAge(p2, p3)
// CompareAge(p1, p2)
// CompareAge(p3, p1)
// CompareAge(p3, p4)

//Q: How to make code accept in form function p2.compareAge(p1)??

//=====2. Number Split https://edabit.com/challenge/xsi99TwpGyFC8KS6d

// let xy = []
// function numberSplit(n) {
//     let nhalf = n / 2 // 5 / 2
//     // console.log(nhalf) // 2.5
//     let x = Math.floor(nhalf)
//     // console.log(x) // 2
//     let y = Math.ceil(nhalf)
//     // console.log(y) // 3
//     xy.push(x, y) // push [ 2, 3 ]
//     console.log(xy)
// }
// numberSplit(17) // [ 8, 9 ]

//=====3. Absolute Sum

// let arrabssum = []

// function getAbsSum(arr) {
//     totalsum = 0
//     for (let index = 0; index < arr.length; index++) {
//         let arrelement = arr[index];
//         // console.log(arrelement) // 4 -8 -10 9 7
//         totalsum += Math.abs(arrelement)
//         //let abselement = Math.abs(arrelement)
//         // totalsum = totalsum + abselement
//     }
//     return totalsum
// }

// console.log(getAbsSum([4, -8, -10, 9, 7]))
// console.log(getAbsSum([1, 2, 3, 4, 5]))
// console.log(getAbsSum([1, -2, -3, 4, 5]))

//=====4. Sort an Array by String Length

// function sortByLength(arr) {
//     let sorting = arr.sort((a, b) => a.length - b.length)
//     return sorting
// }

// console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]))
// console.log(sortByLength(["Turing", "Einstein", "Jung"]))

//=====5. Incorrect Import Statement

//from module_name import object

// function fixImport(s)

//     letwords = s.split(' ')
//     //                index          0        1        2         3
//     // console.log(letwords) // ['import', 'object', 'from', module_name]
//     // resequence 2 3 0 1
//     let fixim = letwords[2] + ' ' + letwords[3] + ' ' + letwords[0] + ' ' + letwords[1]
//     return fixim
// }

// console.log(fixImport('import object from module_name'))
// console.log(fixImport("import randint from random"))
// console.log(fixImport("import pi from math"))

//=====6. Find the Bomb

// function bomb(str) {
//     strlowercase = str.toLowerCase()
//     if (strlowercase.includes('bomb')) {
//         console.log('Duck!')
//     } else (console.log("There is no bomb, relax."))
// }

// bomb("There is a BoMb.")
// bomb("Hey, did you think there is a bomb?.")
// bomb("This goes boom!!!")

//=====7. Tuck in Array https://edabit.com/challenge/7ysTEDruHz2prcJQ9

// function tuckIn(arr1, arr2) {
//     // console.log(arr1[0])
//     // console.log(arr1[1])

//     letarr2tuckin = [arr1[0], ...arr2, arr1[1]]
//     return letarr2tuckin

// }

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))
// console.log(tuckIn([15, 150], [45, 75, 35]))
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]))

//====8. Phone Number Formatting https://edabit.com/challenge/Z6oY6EWwT9rde8YXm

// function formatPhoneNumber(numbers) {

//     let joinallnums = numbers.join('')
//     // console.log(joinallnums)
//     // console.log(joinallnums[0])

//     // Shorter method
//     //  numbers.splice(6, 0, "-");
//     // numbers.splice(3, 0, ") ");
//     // numbers.splice(0, 0, "(");
//     // return numbers.join('');

//     let newformat = '"' + "(" + joinallnums[0] + joinallnums[1] + joinallnums[2] + ")" + " " + joinallnums[3] + joinallnums[4] + joinallnums[5] + "-" + joinallnums[6] + joinallnums[7] + joinallnums[8] + joinallnums[9] + '"'
//     return newformat

// }

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// console.log(formatPhoneNumber(([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])))
// console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]))

//=====9. Learn Lodash (2): Compact https://edabit.com/challenge/M6fbYyBkzJXMAu39G

// function compact(arr) {
//     // console.log(arr)
//     // console.log(Boolean(0)) // false
//     // console.log(Boolean("")) // true
//     // console.log(Boolean(1)) // true
//     // let cutmorethan2 = arr.filter((arr) => arr > 2)
//     // console.log(cutmorethan2) // 3
//     let cutonlyBoolean = arr.filter(Boolean)
//     return (cutonlyBoolean)
// }

// //false, null, 0, "", undefined, and NaN = False

// console.log(compact([0, 1, false, 2, "", 3]))
// console.log(compact([5, 1, true, " + ", undefined, 3]))
// console.log(compact([false, null, 0, "", undefined, NaN]))

//=====10.Is it Time for Milk and Cookies? https://edabit.com/challenge/hPWnaSckJke5FXNEH

function timeForMilkAndCookies(date) {
    // console.log(date)
    let getdate = date.getDate();
    let getmo = date.getMonth();
    // console.log(getdate) // 24
    // console.log(getmo) // 11
    if (getdate == 24 && getmo == 11) {
        return true
    } else { return false }

}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))
console.log(timeForMilkAndCookies(new Date(2013, 0, 23)))
console.log(timeForMilkAndCookies(new Date(3000, 10, 24)))

//=====