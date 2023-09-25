// console.log("===== start for loop =====");
// for (let i = 1; i <= 100; i++) {

//     switch (i) {
//         case i % 3 == 0:
//             console.log("Fizz");
//         case i % 5 == 0:
//             console.log("Buzz");
//     }

//     console.log(i);
// }
// console.log("===== End for loop =====");

// Switch case using when the value is not have any conditions, just a value. If you want to add conditions, must using if else method


for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 === 0) output += "Fizz";
    if (n % 5 === 0) output += "Buzz";
    console.log(output || n);
}

// Start with for loop and add conditions if, the program will calculate every step
// การเพิ่มค่าทีละ 1 ** [i++  หรือ i = i + 1 หรือ i += 1] **
//     let, const ใช้ output ได้หมด ( var ไม่ใช้แล้ว )
// **+= เป็นการเอาข้อความมาต่อกันในกรณีที่เป็น string **
//     output = ประกาศตัวแปล
//         = เอาค่าไปเก็บไว้
//         == , === เป็นการเทียบค่า
// "" = String เปล่า
// let ประกาสตัวแปรเปลี่ยนค่าได้
// const เปลี่ยนค่าไม่ได้
// **|| = หรือ ตัวใดตัวนึงเป็นจริงจะแสดงตัวนั้น **
