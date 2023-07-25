// function timer() {
//     let a = new Date();
//     return a
// }
// console.log(timer())

//================================

function timer() {
    let a = new Date();
    let hh = a.getHours();
    let mm = a.getMinutes();
    let ss = a.getSeconds();

    let session = "AM";
    if (hh > 12) { session = "PM" };
    if (hh < 10) { hh = "0" + hh } else { hh = hh };
    if (mm < 10) { mm = "0" + mm } else { mm = mm };
    if (ss < 10) { ss = "0" + ss } else { ss = ss };

    let time = hh + ":" + mm + ":" + ss + " " + session
    let myInterval = setInterval(timer, 1000);

    document.getElementById("watchtime").innerHTML = time
}
console.log(timer())

function currentDate() {

    let b = new Date();
    let date = b.getUTCDate();
    let month = b.getUTCMonth();
    let year = b.getUTCFullYear();

    let today = date + " / " + month + " / " + year
    // let myInterval = setInterval(date, 1000); Need or not??

    document.getElementById("watchdate").innerHTML = today
}
console.log(currentDate())


let startbutton = document.querySelector(".stopwatchbt")
let displaytimer = document.querySelector(".dptimer")

startbutton.addEventListener('click', () => {

    function stopwatchfuction() {

    }

    if (startbutton.innerHTML === "Start") {
        startbutton.innerHTML = "Stop";
        console.log()
    } else {
        startbutton.innerHTML = "Start";
        console.log()
    }
}
)


