let showtypebankname = document.getElementById("showbankname")
let typebankname = document.getElementById("fillbankname")

typebankname.addEventListener('input', (c) => {
    showtypebankname.textContent = (c).target.value
}
)
let showtypeownername = document.getElementById("showownername")
let typeownername = document.getElementById("fillownername")

typeownername.addEventListener('input', (d) => {
    showtypeownername.textContent = (d).target.value
}
)
let showtypevaliddate = document.getElementById("showvaliddate")
let typevaliddate = document.getElementById("fillvaliddate")

typevaliddate.addEventListener('input', (d) => {
    showtypevaliddate.textContent = (d).target.value
}
)
let showtypesecuritycode = document.getElementById("showsecuritycode")
let typesecuritycode = document.getElementById("fillsecuritycode")

typesecuritycode.addEventListener('input', (d) => {
    showtypesecuritycode.textContent = (d).target.value
}
)

//Try Array and String method to help with this conditions fields.

let cardnumberdisplay = document.getElementById("showcardnumber")
let fillcardnumber = document.getElementById("fillcardnumber")

function fillcn() {
    fillcardnumber.addEventListener('input', (e) => {
        let numberfield = (e).target.value
        let result = []

        for (let index = 0; index < numberfield.length; index++) {
            const alldigits = numberfield[index];

            if ((index + 1) % 4 === 0) {
                result.push(alldigits + " ")
            } else { result.push(alldigits) }
        }
        console.log(result)

        cardnumberdisplay.textContent = result.join("")
    }
    )
}
fillcn()


