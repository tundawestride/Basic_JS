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



let displaymessage = document.getElementById("message")
let displaymessagebt = document.getElementById("displaym")

displaymessagebt.addEventListener('click', () => {
    console.log(displaymessage.style.color);

    if (displaymessage.style.display === "none") {

        displaymessage.innerHTML = "This is message"

        displaymessage.style.display = "block"

        console.log(document.getElementsByClassName("message")[0])

    } else {
        displaymessage.style.display = "none"
    }
}
)