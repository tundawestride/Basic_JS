//https://edabit.com/challenges/javascript => Medium
// and Others 

//0.0 Example All About Anonymous Functions: Adding Suffixes https://edabit.com/challenge/Ra85gzkCTtXrNyCag

// let add_ly = add_suffix("ly") // สร้างฟังชั่นต่อคำท้าย

// function add_suffix(suffix) { // กำหนดว่าคำท้ายจะต้องเป็น ly + xคำหน้า

//     return function (x) { // สร้างคำหน้า
//         let mixword = x + suffix; // คำหน้าคือ x + คำท้าย ly

//         console.log(x) // hopeless // คำหน้าที่จำกำหนดในฟังชั่น
//         console.log(suffix) // ly // คำต่อท้ายที่กำหนดในฟังชั่นซ้อนไว้แล้ว

//         return mixword; // คำต่อท้ายที่กำหนดไว้แล้ว + คำหน้าที่ต้องการกำหนดในฟังชั่น
//     }
// }

// console.log(add_ly("hopeless"))

//=====

// let add_less = add_suffix('less') // กำหนดให้คำท้ายเท่ากับ less

// function add_suffix(suffixless) { // มีคำท้ายแล้ว อยากได้คำหน้า
//     return function (prefix) { // จึงกำหนดให้รีเทินคำหน้า + คำท้ายที่กำหนดไว้แล้วคือ less
//         let prefixsuffix = prefix + suffixless
//         return prefixsuffix
//     }
// }

// console.log(add_less('Fear'))
// console.log(add_less('Ruth'))

//=====1 Move Capital Letters to the Front  https://edabit.com/challenge/8n9RyHThC3dNEPCng

// let uppercasearr = []
// let lowercasearr = []

// function capToFront(s) {

//     for (let index = 0; index < s.length; index++) {
//         const eachindex = s[index];
//         // console.log(eachindex) // รันแยกตัว
//         // console.log(eachindex.toUpperCase()) // รันแยกตัว uppercase

//         if (eachindex.match(eachindex.toUpperCase())) {
//             uppercasearr.push(eachindex)
//             // console.log(uppercasearr)
//         } else if (eachindex.match(eachindex.toLowerCase())) {
//             lowercasearr.push(eachindex)
//             // console.log(lowercasearr)
//         }
//     } return (uppercasearr.join('') + lowercasearr.join(''))
// }

// // console.log(capToFront('WhatIAmFound'))
// console.log(capToFront("moveMENT"))
// // console.log(capToFront("hApPy"))
// // console.log(capToFront("shOrtCAKE"))

//=====2. Xs and Os, Nobody Knows https://edabit.com/challenge/RG5NJWDa7pZGFkhTA

// let xbox = []
// let obox = []

// function XO(str) {

//     let strarr = str.split('')
//     // console.log(strarr) // [..,..,..,,,]

//     for (let index = 0; index < strarr.length; index++) {
//         const element = strarr[index];

//         if (element.toLowerCase() == 'x') {
//             xbox.push(element) // [ 'x', 'x', 'x' ] // length = 3
//         } if (element.toLowerCase() == 'o') {
//             obox.push(element) // [ 'o', 'o' ]  // length = 2
//         }
//     } return xbox.length === obox.length //
//     // (1) if in xbox and obox same amouth will return true (2) if there is no x and o at all will return true because without x and o in the box its mean 0 === 0 (3) if x and o not equal will return false >> Boolean

// }

// // console.log(XO('XxOo')) // true
// // console.log(XO("xoxOx")) // false
// // console.log(XO("ooxXm")) // true
// // console.log(XO("zpzpzpp")) // true
// // console.log(XO("zzoo")) // false
// console.log(XO('XxXmNOopO')) // true

//=====3. Find the Discount https://edabit.com/challenge/L4Hevck84exPwe4wo

// function dis(price, discount) {
//     let discounttocal = discount / 100
//     // console.log(discounttocal)
//     let priceminusdiscount = 1 - discounttocal
//     // console.log(priceminusdiscount)
//     finalprize = price * priceminusdiscount
//     return finalprize
// }

// console.log(dis(89, 20))
// console.log(dis(100, 75))
// console.log(dis(1500, 50))

//=====4. Remove Duplicates from an Array https://edabit.com/challenge/Wd7WKqm95jhcAGATG

// function removeDups(arr) {

//     let newarr = [...new Set(arr)]
//     console.log(newarr)

//     // return console.log(arr.filter((arritem, index) => arr.indexOf(arritem) === index))

// }

// removeDups(["The", "big", "cat"])
// removeDups(["John", "Taylor", "John"])
// removeDups([1, 0, 1, 0])

//=====5. One Odd and One Even https://edabit.com/challenge/d3ZmD3EiNdECFyyPR

let nn = []

function oneOddOneEven(n) {
    nn.push(n)
    let joinarrtostring = nn.join('')
    let splitn = joinarrtostring.split('')
    //let c

    for (let index = 0; index < splitn.length; index++) {
        let a = splitn[0] % 2 === 0 // t or f
        let b = splitn[1] % 2 === 0 // t or f
        return (a !== b) // if t and false will be true cause not equal
    }

    //     if (a !== b) { // in case t and false only 
    //         c = 'true'
    //     } else {
    //         c = 'false'
    //     }
    // } return console.log(c)

}

// console.log(oneOddOneEven(23))
// console.log(oneOddOneEven(55))
console.log(oneOddOneEven(32))
// oneOddOneEven(23)
// oneOddOneEven(33)
// oneOddOneEven(22)
// oneOddOneEven(55)

//=====6. Change website