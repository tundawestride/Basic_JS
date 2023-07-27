let myInterval1

function timer() {
    clearInterval(myInterval1)
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
    myInterval1 = setInterval(timer, 1000);

    document.getElementById("watchtime").innerHTML = time
}
timer()

let myInterval2

function currentDate() {
    clearInterval(myInterval2)

    let b = new Date();
    let date = b.getUTCDate();
    let month = b.getUTCMonth();
    let year = b.getUTCFullYear();

    let today = date + " / " + month + " / " + year
    myInterval2 = setInterval(currentDate, 1000);

    document.getElementById("watchdate").innerHTML = today
}
currentDate()

let everyonesecond = document.getElementById("oneseconds")
let everytenmillisecs = document.getElementById("tenmillisecs")

let task
let secs = 0;
let mils = 0;

function starttimer() {

    task = setInterval(() => {
        mils++
        everytenmillisecs.innerHTML = mils < 10 ? "0" + mils : mils

        if (mils == 99) {
            secs++
            everyonesecond.innerHTML = secs < 10 ? "0" + secs : secs
            mils = 0
        }

    }, 10)

}

let startbutton = document.getElementById("startwatchbt")

startbutton.addEventListener('click', () => {


    if (startbutton.innerHTML === "Start") {
        startbutton.innerHTML = "Stop";
        starttimer()

    } else {
        startbutton.innerHTML = "Start";
        clearInterval(task)

    }
}
)


