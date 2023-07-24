document.getElementById("namewatch").innerHTML = 'WeStride-22 The Smartest Watch';
document.getElementById("namewatch").style.color = "palevioletred";
document.getElementById("namewatch").style.fontSize = "25px";
document.getElementById("namewatch").style.fontWeight = "bold";

document.getElementById("descriptwatch").innerHTML = "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
document.getElementById("descriptwatch").style.fontSize = "15px"

let displaywatchcolor = document.getElementById("displaywatch")

let colorclickhere1 = document.getElementById("color1")
colorclickhere1.addEventListener('click', function () {
    displaywatchcolor.src = "https://cdn.pic.in.th/file/picinth/black-watch.png";
    displaywatchcolor.alt = "black-watch";
}
)

let colorclickhere2 = document.getElementById("color2")
colorclickhere2.addEventListener('click', () => {
    displaywatchcolor.src = "https://cdn.pic.in.th/file/picinth/orenge-watch.png";
    displaywatchcolor.alt = "orange-watch";
}
)

let colorclickhere3 = document.getElementById("color3")
colorclickhere3.addEventListener('click', () => {
    displaywatchcolor.src = "https://cdn.pic.in.th/file/picinth/purple-watch.png";
    displaywatchcolor.alt = "purple-watch";
}
)


let colorclickhere4 = document.getElementById("color4")
colorclickhere4.addEventListener('click', () => {
    displaywatchcolor.src = "https://cdn.pic.in.th/file/picinth/pink-watch.png";
    displaywatchcolor.alt = "pink-watch";
}
)





