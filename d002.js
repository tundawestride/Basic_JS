window.onload = function () {// function timer() {
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
    timer()

    function currentDate() {

        let b = new Date();
        let date = b.getUTCDate();
        let month = b.getUTCMonth();
        let year = b.getUTCFullYear();

        let today = date + " / " + month + " / " + year
        const myInterval = setInterval(currentDate, 1000);

        document.getElementById("watchdate").innerHTML = today
    }
    currentDate()

    //===================================================

    let everyonesecond = document.getElementById("oneseconds")
    let everytenmillisecs = document.getElementById("tenmillisecs")

    let task
    let secs = 0;
    let mils = 0;

    function starttimer() {
        // clearInterval(task)
        //loop function unlimit
        task = setInterval(() => {
            mils++
            everytenmillisecs.innerHTML = mils < 10 ? "0" + mils : mils
            // everyonesecond.innerHTML = secs
            console.log(secs);

            if (mils == 99) {
                secs++
                everyonesecond.innerHTML = secs < 10 ? "0" + secs : secs
                mils = 0
            }


        }, 10)

    }


    //===================================================

    let startbutton = document.getElementById("startwatchbt")
    // console.log(startbutton);
    startbutton.addEventListener('click', () => {

        // console.log(startbutton);

        if (startbutton.innerHTML === "Start") {
            startbutton.innerHTML = "Stop";
            starttimer()

        } else {
            startbutton.innerHTML = "Start";
            clearInterval(task)
            // everyonesecond = document.getElementById("oneseconds").innerHTML = "00"
            // everytenmillisecs = document.getElementById("tenmillisecs").innerHTML = "00"

        }
    }
    )




}