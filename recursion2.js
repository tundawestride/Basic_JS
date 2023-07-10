function sum(number) {
    if (number === 0) {
        return 0
    }
    console.log(number)
    return number + sum(number - 1)
}

sum(10)

//10 + 9
//10 + ( 9 - 1 )
//10 + ( 8 - 1 )
//until
//10 + ( 1 - 1 ) 
// 10 times sum = 55 

console.log('result = ', sum(10))