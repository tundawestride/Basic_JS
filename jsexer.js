// //https://edabit.com/challenges/javascript


//=====Older Than Me https://edabit.com/challenge/iwdZiFucR5wkQsFHu

let p1 = {
    name: 'Sammy',
    Age: 40
}

let p2 = {
    name: 'Joel',
    Age: 36
}

let p3 = {
    name: 'Lily',
    Age: 24
}
let p4 = {
    name: 'Mariel',
    Age: 24
}

// console.log(p1.name)
// console.log(p1.Age)

function CompareAge(px, py) {
    let pxAge = px.Age
    let pyAge = py.Age
    let differage = pxAge - pyAge
    let resultdiffer = Math.sign(differage) //The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.
    if (resultdiffer == 1) {
        console.log(px.name + ' is older than me')
    } else if (resultdiffer == -1) {
        console.log(px.name + ' is younger than me')
    } else { console.log(px.name + ' is the same age as me') }

}

CompareAge(p2, p3)
CompareAge(p1, p2)
CompareAge(p3, p1)
CompareAge(p3, p4)

//Q: How to make code accept in form function p2.compareAge(p1)??

//=====




