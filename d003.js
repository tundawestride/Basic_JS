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

function trytextandspace1() {
    fillcardnumber.addEventListener('input', (e) => {
        let group1 = (e).target.value
        //console.log(e)
        let result = []

        for (let index = 0; index < group1.length; index++) {
            const element = group1[index];

            // 0 1 2 3 4 5 6 อยากให้เริ่มที่ 1 ก็ 0+1 
            if ((index + 1) % 4 === 0) {
                result.push(element + " ")
            }
            else {
                result.push(element)
            }
        }
        console.log(result)
        cardnumberdisplay.textContent = result.join("")
    })
}
trytextandspace1()

