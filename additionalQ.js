// เฉลยแล้วค่ะ 7. เรียงอาร์เรย์จากผลรวมอาร์เรย์ซ้อน คำอธิบาย: ให้เรียงอาร์เรย์ซ้อนตามผลรวมของสมาชิกภายใน ตัวอย่างข้อมูล: [[1, 2, 3], [4], [2, 3]] ผลลัพธ์: [[4], [2, 3, [1, 2, 3]] // เรียงจากผลรวมคือ 4 , 5 , 6

function sortsumtwodimenarr(arr) {

    arr.forEach(element => {
        // console.log(element)
        let sum = element.reduce((total, current) => {
            return total + current
        }, 0)
        console.log(`element = ${element}, sum = ${sum}`)

        console.log(arr.sort((a, b) => a.sum - b.sum)) // 

    });
}

// แบบ สั้น เอาผลรวมมาเรียงกัน
// return console.log(arr.sort((a, b) => a.reduce((total, current) => { return total + current }, 0) - b.reduce((total, current) => { return total + current })))

// }

sortsumtwodimenarr([[1, 2, 3], [4], [2, 3]])

// Q: ลองเขียนแบบยาวเพื่อขยายความเข้าใจ และให้อาเรย์มันเรียงเหมือนกัน แต่ทำไม่ได้ มันไม่เรียงให้ ทั้งๆ ที่ ผลลัพรวมออกมาถูกต้อง คำถามคือ ทำไม  console.log(arr.sort((a, b) => a.sum - b.sum))  มันไม่เรียง อารเรย์ ตาม sum ให้ค่ะ ในเมื่อ sum มันก็คือตัว reduce ที่เราทำกับแต่ละก้อนของอาเรย์ ตามเฉลยแบบสั้น a.reduce((total, current) => { return total + current }, 0) และที่แอปเขียนใหม่แบบยาวมามันก็คือ sum เหมือนกัน ทำไมมันไม่เรียงให้เหมือนกันค่ะ 