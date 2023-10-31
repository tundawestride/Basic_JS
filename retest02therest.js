//*** 1. ผลรวมของอาร์เรย์ซ้อน - คำอธิบาย: ให้หาผลรวมของตัวเลขทั้งหมดในอาร์เรย์ซ้อน ตัวอย่างข้อมูล: [[1, 2], [3, 4, 5], [6]] ผลลัพธ์: 21

// let array = [[8, 5], [6, 7, 4], [8, 2]]

// let sumoftwoarr = 0

// function sumtwodimenarr(array) {

//     for (let index = 0; index < array.length; index++) {
//         let element = array[index];
//         // console.log(element)

//         for (let indexx = 0; indexx < element.length; indexx++) {
//             let elementt = element[indexx];
//             console.log(elementt)
//             sumoftwoarr += elementt
//         }
//     } return console.log(sumoftwoarr)
// }

// // // sumtwodimenarr([[1, 2], [3, 4, 5], [6]])
// sumtwodimenarr([[8, 5], [6, 7, 4], [8, 2]])

// เฉลยแล้วค่ะ 7. เรียงอาร์เรย์จากผลรวมอาร์เรย์ซ้อน คำอธิบาย: ให้เรียงอาร์เรย์ซ้อนตามผลรวมของสมาชิกภายใน ตัวอย่างข้อมูล: [[1, 2, 3], [4], [2, 3]] ผลลัพธ์: [[4], [2, 3, [1, 2, 3]] // เรียงจากผลรวมคือ 4 , 5 , 6

function sortsumtwodimenarr(arr) {

    arr.forEach(element => {
        console.log(element)
        //     let sum = element.reduce((total, current) => {
        //         return total + current
        //     }, 0)
        //     console.log(`element = ${element}, sum = ${sum}`)
        // หากจะเอามา sort จะต้องกำหนดรายละเอียดให้กับ a ด้วย

        //a.sum กับ b.sum จะใช้ไม่ได้ ต้องเอา reduce กำหนดให้ a ตรงๆ เช่น a.reduce ตามด้านล่าง
    })

    console.log(arr.sort((a, b) => a.reduce((total, current) => {
        return total + current
    }, 0) - b.reduce((total, current) => { return total + current })))

}

// // sortsumtwodimenarr([1, 2, 3, 4, 2])
// sortsumtwodimenarr([[1, 2, 3], [4], [2, 3]])
// // // sortsumtwodimenarr([[5, 5, 5, 5, 5], [5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]])


// เพิ่มเติมการ sort

// let arrnumber = [2, 9, 4, 5, 8, 1, 4, 7]
// let arralphabet = ['f', 'h', 'd', 'e', 's', 'v']

// function sorttest(arralphabet) {
//     console.log(arralphabet.sort((a, b) => a.localeCompare(b)))
// }
// sorttest(arralphabet)


//***3. ตรวจสอบความเท่ากันของอาร์เรย์ซ้อน คำอธิบาย: ให้เขียนฟังก์ชันเพื่อตรวจสอบว่าอาร์เรย์สองอันมีความยาวเท่ากันหรือไม่ ตัวอย่างข้อมูล: [[1, 2], [3, 4]] , [[1, 2], [3, 4]] ผลลัพธ์: true

// function comparelength(arrtwodimen1, arrtwodimen2) {

//     let sumlengtharr1 = 0
//     let sumlengtharr2 = 0

//     // วนลูปก้อนแรก
//     for (let index = 0; index < arrtwodimen1.length; index++) {
//         let element = arrtwodimen1[index];
//         // console.log(element)
//         // console.log(element.length)
//         sumlengtharr1 = sumlengtharr1 + element.length
//     }
//     // console.log(sumlengtharr1)

//     for (let indexx = 0; indexx < arrtwodimen2.length; indexx++) {
//         let elementt = arrtwodimen2[indexx];
//         // console.log(elementt)
//         // console.log(elementt.length)
//         sumlengtharr2 = sumlengtharr2 + elementt.length
//     }
//     // console.log(sumlengtharr2)

//     return console.log(sumlengtharr1 === sumlengtharr2)

// }


// comparelength([[1, 2], [3, 4]], [[1, 2], [3, 4]])
// // comparelength([[1, 2], [5, 6, 7], [3, 4]], [[1, 2], [3, 4]])
// // comparelength([[1, 2], [3, 4]], [[1, 2], [3, 4]])


//***6. กรองข้อมูลผิดปกติ คำอธิบาย: ให้กรองตัวเลขที่อยู่นอกเหนือจากควอไทล์ที่ 25 และ 75 ตัวอย่างข้อมูล: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ผลลัพธ์: [3, 4, 5, 6, 7, 8] // ควอไทล์คือเปอร์เซ็นช่วง ถ้า ควอไทล์ที่ 25 ก็หมายถึงช่วงที่ 25 หรือ 25% ของความยาวทั้งหมด


// function quatile25to75(arr) {
//     // console.log(arr)
//     // console.log(arr.length)

//     let qtile25 = Math.floor((25 * arr.length) / 100)
//     console.log(qtile25)

//     let qtile75 = Math.ceil((75 * arr.length) / 100)
//     console.log(qtile75)

//     return console.log(arr.slice(qtile25, qtile75))
// }

// quatile25to75([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])