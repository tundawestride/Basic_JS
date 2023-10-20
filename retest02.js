//2. หาสมาชิกที่ซ้ำกัน ตัวอย่างข้อมูล: [1, 2, 3, 4], [3, 4, 5, 6] ผลลัพธ์: [3, 4]

// let duptwoarr = []

// function findduparr(arrA, arrB) {

//     //find A in B
//     for (let index = 0; index < arrA.length; index++) {
//         const elementA = arrA[index];
//         // console.log(elementA)

//         if (arrB.includes(elementA)) {
//             duptwoarr.push(elementA)
//         }
//     } return console.log(duptwoarr)

//     //find B in A
//     // for (let indexx = 0; indexx < arrB.length; indexx++) {
//     //     const elementB = arrB[indexx];
//     //     // console.log(elementA)

//     //     if (arrA.includes(elementB)) {
//     //         console.log(elementB)
//     //     }
//     // }

// }

// findduparr([1, 2, 3, 4], [3, 4, 5, 6])


// 8. หาค่าที่ไม่ซ้ำ ตัวอย่างข้อมูล: [3, 1, 3, 5, 2, 5, 1] ผลลัพธ์: [3, 1, 5, 2]

// function findnotdup(arroneset) {

//     let nodup = [...new Set(arroneset)]
//     console.log(nodup)
// }

// findnotdup([3, 1, 3, 5, 2, 5, 1])

// 9. หมุนอาร์เรย์ ให้เขียนฟังก์ชันเพื่อหมุนอาร์เรย์ N ตำแหน่งไปทางซ้าย ตัวอย่างข้อมูล: [1, 2, 3, 4, 5], 2 ผลลัพธ์: [3, 4, 5, 1, 2]

// function movetoleft(arrtororate, rotate) {

//     for (let index = 0; index < rotate; index++) {
//         const element = arrtororate[index];
//         // console.log(element)

//         let roratetoleft = arrtororate.shift()
//         // console.log(roratetoleft)

//         arrtororate.push(roratetoleft)

//     } return console.log(arrtororate)

// }

// movetoleft([1, 2, 3, 4, 5], 2)

//4. แปลงอาร์เรย์ของอ็อบเจกต์ 4. **ลงอาร์เรย์ของอ็อบเจกต์** คำอธิบาย: ให้แปลงอาร์เรย์ของอ็อบเจกต์ที่มีคุณสมบัติ name และ age เป็นอาร์เรย์ของสตริง ตัวอย่างข้อมูล: [{name: "สมชาย", age: 25}, {name: "สมหญิง", age: 30}] ผลลัพธ์: ["สมชาย อายุ 25 ปี", "สมหญิง อายุ 30 ปี"]

// let data = [{
//     name: "สมชาย",
//     age: 25
// }, {
//     name: "สมหญิง",
//     age: 30
// }]

// let answer = []

// function objectdatatostring(data) {
//     // console.log(data)
//     // console.log(data[0])

//     for (let index = 0; index < data.length; index++) {
//         const element = data[index];
//         // console.log(element)
//         answer.push(`${element.name} อายุ ${element.age} ปี`)
//     }
//     return console.log(answer)
// }

// objectdatatostring(data)

//5. จัดกลุ่มตามคุณสมบัติ คำอธิบาย: ให้จัดกลุ่มอ็อบเจกต์ในอาร์เรย์ตามคุณสมบัติที่กำหนด ตัวอย่างข้อมูล: [{name: "สมชาย", city: "กรุงเทพ"}, {name: "สมหญิง", city: "เชียงใหม่"}, {name: "สมศรี", city: "กรุงเทพ"}], 'city' ผลลัพธ์: {"กรุงเทพ": [{name: "สมชาย", city: "กรุงเทพ"}, {name: "สมศรี", city: "กรุงเทพ"}], "เชียงใหม่": [{name: "สมหญิง", city: "เชียงใหม่"}]}

let persondata = [{
    name: "สมชาย",
    city: "กรุงเทพ"
}, {
    name: "สมหญิง",
    city: "เชียงใหม่"
}, {
    name: "สมศรี",
    city: "กรุงเทพ"
}]

let object1 = []
let object2 = []

let object = {
    กรุงเทพ: object1,
    เชียงใหม่: object2
}

function groupingbycity(persondata, city) {
    // console.log(persondata)

    for (let index = 0; index < persondata.length; index++) {
        const element = persondata[index];
        // console.log(element)
        // console.log(element.city)

        if (element.city === 'กรุงเทพ') {
            object1.push(element)
        } if (element.city === 'เชียงใหม่') {
            object2.push(element)
        }
    }

    // console.log(object1)
    // console.log(object2)
    console.log(object)
}

groupingbycity(persondata)

//