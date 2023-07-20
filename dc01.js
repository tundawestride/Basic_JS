document.getElementById("topic").innerHTML = "This is Click and Display practice"


let displaycolor = document.querySelector(".color")
let displaycolorbt = document.querySelector(".displayc")

displaycolorbt.addEventListener('click', (display) => {
    console.log(displaycolor.style.display);

    // Value that set and than style.display on CSS
    if (displaycolor.style.display === "none") {
        displaycolor.style.display = "block"
    } else {
        displaycolor.style.display = "none"
    }
}
)

document.getElementsByClassName("message").innerHTML = "This is message"

let displaymessage = document.querySelector(".message")
let displaymessagebt = document.querySelector(".displaym")

displaymessagebt.addEventListener('click', (display) => {
    console.log(displaymessage.style.color);

    if (displaymessage.style.display === "none") {
        displaymessage.style.display = "block"
    } else {
        displaymessage.style.display = "none"
    }
}
)