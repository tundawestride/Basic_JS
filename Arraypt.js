
// // Picking the fruits

// index              0         1        2        3           4           5       
const testFruits = ["Papaya", "Mango", "Apple", "Lychee", "Watermalon", "Banana"]
console.log(testFruits)
// let printfruits = testFruits[3]
// console.log(printfruits)
// console.log(testFruits[5])

// Fruits loop array

function runfruittest() {

    for (let runfruits = 0; runfruits < testFruits.length; runfruits++) {
        // console.log(testFruits[0] + " is not my favorite fruit")

        if (runfruits === 2) {
            console.log(testFruits[runfruits] + " Nice!")
            // } if (runfruits === 3) { // if using this will checking again not continue
        } else if (runfruits === 3) {
            console.log(testFruits[runfruits] + " Yummy!!")
        } else { console.log(testFruits[runfruits] + " is not my favorite fruit") }
    }

}

runfruittest()


// Select month name

const now = new Date()
console.log(now)

const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
console.log(monthName)

let currentmonth = monthName[now.getMonth()]
console.log(currentmonth)

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(weekday)

let currentweekday = weekday[now.getDay()]
console.log(currentweekday)
