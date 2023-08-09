
// // // Picking the fruits

// // index              0         1        2        3           4           5       
// const testFruits = ["Papaya", "Mango", "Apple", "Lychee", "Watermalon", "Banana"]
// console.log(testFruits)
// // let printfruits = testFruits[3]
// // console.log(printfruits)
// // console.log(testFruits[5])

// // Fruits loop array

// function runfruittest() {

//     for (let runfruits = 0; runfruits < testFruits.length; runfruits++) {
//         // console.log(testFruits[0] + " is not my favorite fruit")

//         if (runfruits === 2) {
//             console.log(testFruits[runfruits] + " Nice!")
//             // } if (runfruits === 3) { // if using this will checking again not continue
//         } else if (runfruits === 3) {
//             console.log(testFruits[runfruits] + " Yummy!!")
//         } else { console.log(testFruits[runfruits] + " is not my favorite fruit") }
//     }

// }

// runfruittest()


// // Select month name

// const now = new Date()
// console.log(now)

// const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// console.log(monthName)

// let currentmonth = monthName[now.getMonth()]
// console.log(currentmonth)

// const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// console.log(weekday)

// let currentweekday = weekday[now.getDay()]
// console.log(currentweekday)

// //===============Array Practice========================

//      index     0     1     2      3     4     5     6
let numcredit = ["01", "  ", "02", "  ", "03", "  ", "04"]
console.log(numcredit)

// function cutarray() {
//     letposition0 = numcredit[0]
//     letposition1 = numcredit[1]
//     letposition2 = numcredit[2]
//     letposition3 = numcredit[3]
//     letposition4 = numcredit[4]
//     letposition5 = numcredit[5]
//     letposition6 = numcredit[6]

//     console.log(letposition0, letposition1, letposition2, letposition3, letposition4, letposition5, letposition6)
// }

// cutarray()

let testdisplay1 = document.getElementById("displaytext")
let testfill1 = document.getElementById("texttodisplay")

// function trydisplayarr0() {
//     testdisplay1.innerHTML = numcredit[0]
// }
// trydisplayarr0()

// function trytextandspace0() {
//     testdisplay1.innerHTML = "group1" + numcredit[1] + "group2" + numcredit[3] + "group3" + numcredit[5] + "group4"
// }
// trytextandspace0()

function trytextandspace1() {
    testfill1.addEventListener('input', (e) => {
        let group1 = (e).target.value
        testdisplay1.textContent = group1.split("")

    })
}
trytextandspace1()


