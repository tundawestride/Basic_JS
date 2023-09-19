//https://docs.google.com/document/d/1Q5GV4SSq_qmgbQg7TS0usI8x0aw9dTvEXJZxLTxlPKo/edit

//test1 ลบเครื่องหมายออกจากส่วนท้ายของสตริง (10 คะแนน)

// function remove(n) {
//     let nsplit = n.split("")
//     // console.log(nsplit)
//     nsplit.pop()
//     // console.log(nsplit)
//     word = nsplit.join('')
//     console.log(word)
// }

// // remove("Hi!")
// // remove("Hi! Hi!")
// remove("Hi!!!")

//!!!! test2 เขียนฟังก์ชั่นรวมตัวเลขที่รับมา  (15 คะแนน)

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

let arrbox = []

function sumfinal(num) {
    let numtostring = num.toString()
    numarray = numtostring.split("")
    // console.log(numarray) // [ '9', '9', '9' ]
    // console.log(numarray.length) // 3
    //factorial

    // for 3 digits
    if (numarray.length == 3) {
        total1 = 1
        for (let index = 0; index < numarray.length; index++) {
            let element = numarray[index];
            // console.log(element)
            total1 = total1 * element
            // console.log(total1)
        }
        let total1tostring = total1.toString()
        total1array = total1tostring.split("")
        // console.log(total1array)
        // console.log(total1array.length)

        total2 = 1
        for (let indexx = 0; indexx < total1array.length; indexx++) {
            let elementt = total1array[indexx];
            // console.log(elementt)
            total2 = total2 * elementt
            // console.log(total2)
        }
        let total2tostring = total2.toString()
        total2array = total2tostring.split("")
        // console.log(total2array)

        total3 = 1
        for (let indexxx = 0; indexxx < total2array.length; indexxx++) {
            let elementtt = total2array[indexxx];
            // console.log(elementtt)
            total3 = total3 * elementtt
            // console.log(total3)
        }

        let total3tostring = total3.toString()
        total3array = total3tostring.split("")
        // console.log(total3array)

        total4 = 1
        for (let indexxxx = 0; indexxxx < total3array.length; indexxxx++) {
            let elementttt = total2array[indexxxx];
            // console.log(elementttt)
            total4 = total4 * elementttt
            // console.log(total4)
        } return console.log(total4)

        //for 2 digits
    } else if (numarray.length == 2) {
        total1 = 1
        for (let index = 0; index < numarray.length; index++) {
            let element = numarray[index];
            // console.log(element)
            total1 = total1 * element
            // console.log(total1)
        }
        let total1tostring = total1.toString()
        total1array = total1tostring.split("")
        // console.log(total1array)
        // console.log(total1array.length)

        total2 = 1
        for (let indexx = 0; indexx < total1array.length; indexx++) {
            let elementt = total1array[indexx];
            // console.log(elementt)
            total2 = total2 * elementt
            // console.log(total2)
        }
        let total2tostring = total2.toString()
        total2array = total2tostring.split("")
        // console.log(total2array)

        total3 = 1
        for (let indexxx = 0; indexxx < total2array.length; indexxx++) {
            let elementtt = total2array[indexxx];
            // console.log(elementtt)
            total3 = total3 * elementtt
            // console.log(total3)
        } return console.log(total3)

    } else {
        return (console.log(num))
    }

}

// sumfinal(999)
// sumfinal(39)
sumfinal(723)
// sumfinal(9)

// test4 เขียนฟังก์ชันรีเทิร์นค่า ตัวอักษรที่อยู่กึ่งกลางของข้อความ  (20 คะแนน)

// function middleword(word) {
//     console.log(word)
//     let wsplit = word.split("")
//     console.log(wsplit)
//     // console.log(wsplit.length)
//     // console.log(wsplit.length % 2 !== 0)

//     //คี่
//     if (wsplit.length % 2 !== 0) {
//         let middle = word.length / 2
//         let middlefront = Math.floor(middle)
//         // let middleback = Math.ceil(middle)

//         //middle
//         // console.log(middlefront) // ตำแหน่งตรงกลาง
//         // console.log(middleback)
//         console.log(wsplit[middlefront])

//         //คู่
//     } else if (wsplit.length % 2 == 0) {
//         let middle = word.length / 2
//         // console.log(middle)
//         let middlefr = middle - 1
//         console.log(wsplit[middlefr] + wsplit[middle]) // กลาง2ตัว
//     }
//     else (console.log(word))

// }
// middleword('pompom')
// middleword('test')
// middleword('testing')
// middleword('middle')
// middleword('a')

//test 5 เขียนฟังก์ชั่นเเสดงข้อความที่มีจำนวนตัวอักษรเท่ากับตำแหน่งของตัวอักษรนั้นๆ(20 คะแนน)

// let box = []

// function display(word) {
//     let splitword = word.split("")
//     // console.log(splitword)

//     for (let index = 0; index < splitword.length; index++) {
//         const element = splitword[index];
//         let indexset = splitword.indexOf(element, index)
//         // console.log(element)
//         // console.log(index)
//         // console.log(indexset)
//         let newbox = box.push(splitword[index])
//         console.log(newbox)
//         console.log(box)
//     }

// }

// display("abcd")

// ตัวอย่าง
// "abcd" -> "a-bb-ccc-dddd"
// "big" -> "b-ii-ggg"
// "test" -> "t-ee-sss-tttt"
