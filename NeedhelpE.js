//=====Easy part, Spotlight Sum https://edabit.com/challenge/PZ7rZh9C47CvYHfN2

// This is the table example

// let activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];

// console.table(activities);
// console.log(activities[2][1]); // 2
// console.log(activities[4][1]); // 7

// activities.push(['New', 4]); // push to index [5][1] or last
// console.table(activities);

// activities.splice(3, 0, ['Programming', 2]); // splice to add to index [3][0] X Y
// console.table(activities);

// activities.forEach(activities => {
//     let percentage = ((activities[1] / 24) * 100).toFixed();
//     activities[2] = percentage + "%"
// })

// console.table(activities);

// activities.pop(); // deletet last index [6]

// console.table(activities);

// activities.forEach(activities => {
//     activities.pop(2)// delete activities(2)
// })
// console.table(activities)

// function tryforlooptable() {
//     for (let ii = 0; ii < activities.length; ii++) {    // get the size of the inner array
//         let innerArrL = activities[ii].length; // loop the inner array
//         // console.log(ii) // 0 1 2 3 4 5
//         // console.log(innerArrL) // 2 2 2 2 2 2 is 0 and 1 ['Work', 9]... length = two
//         for (let jj = 0; jj < innerArrL; jj++) {
//             // console.log(jj) // 0 1 0 1 0 1 0 1 run loop in innerArrL
//             console.log('[' + ii + ',' + jj + '] = ' + activities[ii][jj]); //
//         }
//     }

//     activities.forEach((activitys) => {
//         activitys.forEach((data) => {
//             console.log(data);
//         });
//     });
// }
// tryforlooptable()

// Spotlight Sum

// let nset = [
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//     [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
//     [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//     [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
//     [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
//     [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
//     [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
//     [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
// ]

// console.log(nset)
// console.table(nset)

// function whatisXYspotlite(sn) {
//     console.log(nset[4][5]) // X4 Y5 = 46
// }

// whatisXYspotlite(46)

// function spotlightSum(sn) {
//     console.log(nset[4][5]) // X4 Y5 = 46
// }

// spotlightSum(15)

//=====================================
