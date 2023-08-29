let student = {
    name: "Alice",
    age: 23,
    major: "information technology",
    GPA: 3.78
}

let student2 = {}
console.log(student2);
student2.name = "Bom"
student2['age'] = 22
console.log(student2);
console.log(student2.name);
console.log(student2['age']);

// // // let name = student.name
// // // let age = student.age
// // // let major = student.major
// // // let gpa = student.GPA
let { name, age, major, GPA } = student
console.log(name, age, major, GPA);

// // Object Assign

let info = {
    admission: "20/06/2020",
    gradute: "09/03/2022"
}

Object.assign(student, info)
console.log(student);

// List all keys in objects
console.log(Object.keys(student))

// List all value
console.log(Object.values(student))

// /// Objects in Arrays
// // Objects contains student info

let studentInfo = [
    { // index 1
        name: "Alice",
        age: 23,
        major: "information technology",
        GPA: 3.78
    },
    { // index 2

        name: "Sara",
        age: 25,
        major: "Food Sciences",
        GPA: 3.50
    },
    { // index 3

        name: "Gabriel",
        age: 19,
        major: "English",
        GPA: 2.4
    },

]

for (let i = 0; i < studentInfo.length; i++) { // can using index or i, any dummy

    console.log(studentInfo[i]);

    if (studentInfo[i].GPA > 2.5) {
        console.log("Pass");
    } else {
        console.log("Not pass");
    }
}

//===================================

let word = "Okmemmo"
let cll = word.length
console.log(cll)

//====================================

function checkmaxCharacters(word) {
    let cl = word.length
    console.log(cl)
}
checkmaxCharacters('stirfryrice')

//====================================

// For this is other way, if not understand can go to the next method
// https://stackoverflow.com/questions/22590023/finding-the-most-frequent-character-in-a-string-javascript
// let someword = 'sssdccsdddffffffffgg'
// let somewordCount = {};
// let maxKey = ''

// function checkCharacters() {
//     for (let i = 0; i < someword.length; i++) {
//         let somewordkey = someword[i] // sssdccsdddffffffffgg แยกบรรทัด
//         // console.log(somewordkey)
//         if (!somewordCount[somewordkey]) { //(if not)
//             somewordCount[somewordkey] = 0
//         }
//         somewordCount[somewordkey]++
//         if (maxKey == '' || somewordCount[somewordkey] > somewordCount[maxKey]) {
//             maxKey = somewordkey
//         }
//         console.log(maxKey + ":" + somewordCount[maxKey])

//     }
// }

// checkCharacters()

//====================================


// function checkmaxCharacters(word) {
//     let cl = word.length
//     console.log(cl)
// }
// checkmaxCharacters('stirfryrice')

//====================================

// let result = [] // กล่อง

// function checkCharacters(someword) {
//     for (let i = 0; i < someword.length; i++) {
//         let key = someword[i] // ให้แต่ละอักษรรันแบบ แยกทีละตัว
//         // console.log(key)
//         //  ตัวเก็บค่า     สร้างกล่องเปล่า       เอาไอเท้มมาจาก key
//         let check = result.find((item) => item.name == key)
//         // console.log(check)

//         if (check == undefined) { // ถ้าในกล่องยังไม่มี เพิ่มค่าเข้าไป เป็น 1
//             result.push({ name: key, currentMax: 1 })
//         } else { // ถ้ามีแล้ว ให้ +1 เข้าไป
//             check.currentMax++
//         }
//     }
//     // เรียงค่าจากมากไปน้อย แล้วลบอันข้างหลังสุดออก
//     console.log(result.sort((a, b) => a.currentMax - b.currentMax).pop())
// }

// checkCharacters('ssdccsdddffffffgg')

//====================================

let checkbox = []

function maxCharacters(allkeys) {
    for (let i = 0; i < allkeys.length; i++) {
        let keys = allkeys[i]; // seperate each keys
        // console.log(keys)

        // Storage      checking box      picking each name by keys
        check = checkbox.find((eachkey) => eachkey.name == keys)

        // push eachkey in checkbox if never been in box
        if (check == undefined) {
            checkbox.push({ name: keys, currentMax: 1 })

            // push +1 count characters if already been in box
        } else {
            check.currentMax++
        }
    }
    // console.log(checkbox)
    // console.log(checkbox.sort((a, b) => a.currentMax - b.currentMax))

    //get the last position that sort values ​​ascending น้อยไปมาก and pop the most
    return checkbox.sort((a, b) => a.currentMax - b.currentMax).pop()
}

console.log(maxCharacters('jddddddddsssssskkkkkdjjjdfffffffccccc'))


//====================================
