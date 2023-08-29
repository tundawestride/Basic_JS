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
        let numberfield = (e).target.value // This is filling field
        let result = [] // build empty array 

        for (let index = 0; index < numberfield.length; index++) {
            const alldigits = numberfield[index];

            if ((index + 1) % 4 === 0) { // Make index start at 1 and every 4 take action 
                result.push(alldigits + " ") // make input push " " ebery 4 digits in empty array
            } else { result.push(alldigits) } // if not at 4, can show regular input
        }
        // console.log(result)

        cardnumberdisplay.textContent = result.join("") // make allnumber join 
    }
    )
}
fillcn()


