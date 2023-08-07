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

//Try Array and String method to help with this conditions fields.

