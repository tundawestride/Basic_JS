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
    const myInterval = setInterval(timer, 1000);

    document.getElementById("watchtime").innerHTML = time
}
console.log(timer())

function currentDate() {

    let b = new Date();
    let date = b.getUTCDate();
    let month = b.getUTCMonth();
    let year = b.getUTCFullYear();

    let today = date + " / " + month + " / " + year
    const myInterval = setInterval(currentDate, 1000);

    document.getElementById("watchdate").innerHTML = today
}
console.log(currentDate())

//===================================================

stopwatchfunction = function starttimer() {

    let everyonesecond = document.getElementById("oneseconds").innerHTML = "test"
    let everytenmillisecs = document.getElementById("tenmillisecs").innerHTML = "test"


}



//===================================================

let startbutton = document.getElementById("stopwatchbt")

startbutton.addEventListener('click', () => {

    if (startbutton.innerHTML === "Start") {
        startbutton.innerHTML = "Stop";
        console.log(stopwatchfunction())

    } else {
        startbutton.innerHTML = "Start";
        everyonesecond = document.getElementById("oneseconds").innerHTML = "00"
        everytenmillisecs = document.getElementById("tenmillisecs").innerHTML = "00"

    }
}
)




