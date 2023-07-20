document.getElementById("h3").innerHTML = "Hello world";
// [1,3,4] Array in squarebacket
document.querySelectorAll(".header").forEach(e => {
    e.innerHTML = "Westride"
})

// Using Array
document.querySelectorAll(".header")[1].innerHTML = "Skills"

let p = document.getElementsByClassName("p")
p[0].innerHTML = "double"
p[1].innerHTML = "double"

document.getElementById("img").src = "https://meowcattery.co/wp-content/uploads/2023/01/w1200.jpg"

let color = document.querySelector(".colors");
color.style.color = "red"
color.style.backgroundColor = "blue"
color.style.fontSize = "40px"


let message = document.querySelector(".display")
let button = document.querySelector(".button")

button.addEventListener('click', (display) => {
    console.log(message.style.display);

    if (message.style.display === "none") {
        message.style.display = "block"
    } else {
        message.style.display = "none"
    }
})

function currentTime() {
    let date = new Date()
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let session = "AM"

    if (hh > 12) {
        session = "PM"
    }
    //Normal
    // if (hh < 10) {
    //     hh = "0" + hh
    // } else {
    //     hh = hh
    // }
    //Short if
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerHTML = time

    //setTimeout continue 
    let t = setTimeout(function () {
        currentTime()
    }, 1000)

}
// currentTime();

function onValidate() {
    let text = document.getElementById("numb").value

    console.log(text);

    let result
    if (text < 5) {
        result = "value less than 5"
    } else {
        result = "value more than 5"
    }

    document.getElementById("result").innerHTML = result
}