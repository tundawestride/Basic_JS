// 1. ผลรวมของอาร์เรย์ซ้อน - คำอธิบาย: ให้หาผลรวมของตัวเลขทั้งหมดในอาร์เรย์ซ้อน ตัวอย่างข้อมูล: [[1, 2], [3, 4, 5], [6]] ผลลัพธ์: 21

// function sumtwodimenarr(...arr) {

//     let arr1 = arr[0][0]
//     let sum1 = 0
//     for (let index = 0; index < arr1.length; index++) {
//         let element1 = arr1[index];
//         sum1 = sum1 + element1
//     }
//     // console.log(sum1)

//     let arr2 = arr[0][1]
//     let sum2 = 0
//     for (let index = 0; index < arr2.length; index++) {
//         let element2 = arr2[index];
//         sum2 = sum2 + element2
//     }
//     // console.log(sum2)

//     let arr3 = arr[0][2]
//     let sum3 = 0
//     for (let index = 0; index < arr3.length; index++) {
//         let element3 = arr3[index];
//         sum3 = sum3 + element3
//     }
//     // console.log(sum3)

//     let summary = sum1 + sum2 + sum3
//     console.log(summary)

// }

// // sumtwodimenarr([[1, 2], [3, 4, 5], [6]])
// sumtwodimenarr([[8, 5], [6, 7, 4], [8, 2]])

// 7. เรียงอาร์เรย์จากผลรวมอาร์เรย์ซ้อน คำอธิบาย: ให้เรียงอาร์เรย์ซ้อนตามผลรวมของสมาชิกภายใน ตัวอย่างข้อมูล: [[1, 2, 3], [4], [2, 3]] ผลลัพธ์: [[4], [2, 3, [1, 2, 3]] // เรียงจากผลรวมคือ 4 , 5 , 6

// let newarr = []

// function sortsumtwodimenarr(...arr) {

//     let arr1 = arr[0][0]
//     let sum1 = 0
//     for (let index = 0; index < arr1.length; index++) {
//         let element1 = arr1[index];
//         sum1 = sum1 + element1

//     } newarr.push(sum1)
//     // console.log(sum1)

//     let arr2 = arr[0][1]
//     let sum2 = 0
//     for (let index = 0; index < arr2.length; index++) {
//         let element2 = arr2[index];
//         sum2 = sum2 + element2

//     } newarr.push(sum2)
//     // console.log(sum2)

//     let arr3 = arr[0][2]
//     let sum3 = 0
//     for (let index = 0; index < arr3.length; index++) {
//         let element3 = arr3[index];
//         sum3 = sum3 + element3

//     } newarr.push(sum3)

//     return console.log(newarr.sort((a, b) => a - b))
// }

// // sortsumtwodimenarr([[1, 2, 3], [4], [2, 3]])
// sortsumtwodimenarr([[5, 5, 5, 5, 5], [5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]])

// 3. ตรวจสอบความเท่ากันของอาร์เรย์ซ้อน คำอธิบาย: ให้เขียนฟังก์ชันเพื่อตรวจสอบว่าอาร์เรย์สองอันมีความยาวเท่ากันหรือไม่ ตัวอย่างข้อมูล: [[1, 2], [3, 4]] , [[1, 2], [3, 4]] ผลลัพธ์: true

function comparelength(...arrtwodimen) {
    // console.log(arrtwodimen)
    // console.log(arrtwodimen.length)

    return console.log(arrtwodimen[0].length == arrtwodimen[1].length)

    // for (let index = 0; index < arrtwodimen.length; index++) {
    //     const element = arrtwodimen[index];
    //     // console.log(element)
    //     // console.log(element.length)
    //     // console.log(arrtwodimen[0].length)
    //     // console.log(arrtwodimen[1].length)

    //     console.log(arrtwodimen[0].length == arrtwodimen[1].length)

    // }

}
// comparelength([[1, 2], [3, 4]], [[1, 2], [3, 4]])
comparelength([[1, 2], [3, 4]], [[1, 2], [3, 4], [6]])

//