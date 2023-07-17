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