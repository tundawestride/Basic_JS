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

let numcredit = ["01", "  ", "02", "  ", "03", "  ", "04"]
console.log(numcredit)

let cardnumberdisplay = document.getElementById("showcardnumber")
let fillcardnumber = document.getElementById("fillcardnumber")

function trytextandspace1() {
    fillcardnumber.addEventListener('input', (e) => {
        let group1 = (e).target.value
        cardnumberdisplay.textContent = group1.split("") + numcredit[1]

    })
}
trytextandspace1()