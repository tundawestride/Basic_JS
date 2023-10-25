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

//*** Recheck 5. จัดกลุ่มตามคุณสมบัติ คำอธิบาย: ให้จัดกลุ่มอ็อบเจกต์ในอาร์เรย์ตามคุณสมบัติที่กำหนด ตัวอย่างข้อมูล: [{name: "สมชาย", city: "กรุงเทพ"}, {name: "สมหญิง", city: "เชียงใหม่"}, {name: "สมศรี", city: "กรุงเทพ"}], 'city' ผลลัพธ์: {"กรุงเทพ": [{name: "สมชาย", city: "กรุงเทพ"}, {name: "สมศรี", city: "กรุงเทพ"}], "เชียงใหม่": [{name: "สมหญิง", city: "เชียงใหม่"}]} // The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.ตัวดำเนินการ Nullish coalescing เป็นตัวดำเนินการที่ใช้เพื่อเลือกค่าระหว่างสองค่าหรือใช้สำหรับกำหนดค่าเริ่มต้นให้กับตัวแปร ในกรณีที่ค่านั้นเป็น null หรือ undefined ในการใช้งานตัวดำเนินการ Nullish coalescing (??) เพื่อเลือกค่าระหว่างสองค่าที่อยู่ทางด้านซ้ายและขวาของตัวดำเนินการ ถ้าหาก value1 มีค่าเป็น null หรือ undefined ผลลัพธ์ที่ได้จะเป็นค่าจากทางด้านขวา value2 แต่ถ้าหากไม่ใช่ผลลัพธ์ทีไ่ด้จะเป็นค่าจากตัวแปร value1 http://marcuscode.com/lang/javascript/operators-ii

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

let result = {}

function findbyprovice(persondata) {

    persondata.forEach(element => {
        // console.log(element)
        // เช็คบรรทัดที่ 90 ว่ามีกรุงเทพไหม
        if (result[element.city]) {
            result[element.city] = [...result[element.city], element] // เก็บกรุงเทพ และรายละเอียด element เหมือน Push
        } else { result[element.city] = [element] } // ถ้าไม่มีคือค่าเริ่มต้น

    });

    // // กำหนด ค่ากลาง และลูป
    // let groupbyprovince = persondata.reduce((g, persondata) => {
    //     let { city } = persondata; // เลือกค่าที่จะจัดกลุ่ม
    //     // console.log({ city })
    //     // console.log(persondata)

    //     g[city] = g[city] ?? [];
    //     //เลือกค่าระหว่างสองค่า โดยกำหนดค่าให้ค่ากลาง g[city] เก็บเลือกระหว่างด้านซ้ายและขวาของตัวดำเนินการ Nullish coalescing (??) ถ้าหาก value1 มีค่าเป็น null หรือ undefined ผลลัพธ์ที่ได้จะเป็นค่าจากทางด้านขวาหรือ value2 แต่ถ้าหากไม่ใช่ผลลัพธ์ทีไ่ด้จะเป็นค่าจากตัวแปร value1 ในกรณีนี้คือเก็บ value1

    //     g[city].push(persondata);
    //     //
    //     return g;
    // }, {});

    // console.log(groupbyprovince)

    console.log(result)
}

findbyprovice(persondata)

