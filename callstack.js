function greeting() {
    let result = sayHi();
    console.log("floor1")
    console.log(result)
}

function sayHi() {
    let result = sayYes()
    console.log("floor2")

    return result
}

function sayYes() {
    console.log("floor3")

    return "Yes"
}

greeting();