//============================================

console.log('CHALLENGE Question 1')

function addition(x1, x2) {
    return (x1 + x2);
}

let addition1 = addition(3, 2);
let addition2 = addition(-3, -6);
let addition3 = addition(7, 3);

console.log(addition1)
console.log(addition2)
console.log(addition3)

//============================================

console.log('CHALLENGE Question 2')

function convert(n) {
    return (n * 60);
}

let convert1 = convert(5)
let convert2 = convert(3)
let convert3 = convert(2)

console.log('5 minutes = ' + convert1 + ' seconds')
console.log('3 minutes = ' + convert2 + ' seconds')
console.log('2 minutes = ' + convert3 + ' seconds')

//============================================

console.log('CHALLENGE Question 3')

function findPerimeter(x, y) {
    let result = x + y;
    return (result) * 2
}

console.log('Perimeter1 = ' + (findPerimeter(6, 7)))
console.log('Perimeter2 = ' + (findPerimeter(20, 10)))
console.log('Perimeter3 = ' + (findPerimeter(2, 9)))

//============================================

console.log('CHALLENGE Question 4')

function checkDivide(x, y) {
    // let i = x % y;

    // if (i === 0) { result = 'true' }
    // else { result = 'false' };

    // return result;

    return x % y === 0; // === is a compare operations

}

console.log(checkDivide(5, 1))
console.log(checkDivide(6, 3))
console.log(checkDivide(10, 3))

//============================================

console.log('CHALLENGE Question 5')

function calcAge(i) {
    return i * 365
}

console.log(' 65 Years Old time on earth = ' + calcAge(65) + ' Days')
console.log(' 0 Years Old time on earth = ' + calcAge(0) + ' Days')
console.log(' 20 Years Old time on earth = ' + calcAge(20) + ' Days')

//============================================

console.log('CHALLENGE Question 6')


function footballPoints(x, y, z) {
    let wins = 3; let draws = 1; let losses = 0;
    let total = (x * wins) + (y * draws) + (z * losses);

    return total
}

console.log('Total Points 1 = ' + footballPoints(3, 4, 2))
console.log('Total Points 2 = ' + footballPoints(5, 0, 2))
console.log('Total Points 3 = ' + footballPoints(0, 0, 1))

//============================================