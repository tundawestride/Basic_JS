//function outside() {
// const x = 5
//function inside(x) {
//  return x * 2
// }
//console.log(number)
//console.log(inside(10))
//}

//outside() //not return function inside, but inside return function outside
function outside() {

    const x = 5
    function inside(y) {
        return x * 2
    }
    console.log(inside(10))

}

outside() 