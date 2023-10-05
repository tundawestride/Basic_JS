//1. map() This method creates a new array with the results of calling a provided function on every element in this array. map เป็น Array Method ตัวหนึ่งที่จะวนค่าทุกค่าใน Array ไปเข้า Function แล้ว return ออกมาเป็น array ใหม่ และเราสามารถใช้ .map เมื่อต้องการสร้าง array ใหม่ โดยที่ element แต่ละตัวใน Array ใหม่ มาจาก element แต่ละตัวใน Array เก่าที่ผ่านกระบวนการบางอย่างมาแล้ว เช่น เราต้องการสร้าง Array ใหม่ที่ค่าทุกค่าใน Array มีเป็น 2 เท่าของ Array เดิม ([1, 2, 3, 4, 5] → [2, 4, 6, 8, 10]) ครับ และด้วยความที่มัน return ค่าออกมา มันจึงสามารถเอาไป chain ให้มันทำงานต่อกันได้ครับ https://www.borntodev.com/2022/04/29/%E0%B9%80%E0%B8%9B%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%9A-foreach-map-%E0%B9%81%E0%B8%A5%E0%B8%B0-filter/

// let arraycat = ['Kathy', 'Mary', 'Jovi', 'Shaun']
// const arrcatmapped = arraycat.map(element => element + ' is a Cat')
// console.log(arraycat)
// console.log(arrcatmapped)

// let arrplus = [2, 1, 3, 4]
// let arrplusmapped = arrplus.map(element => element + 9)
// console.log(arrplus)
// console.log(arrplusmapped)

// let arreven0 = [2, 4, 6, 8]

// //เปรียบเทียบกับ forEach ด้านล่าง
// let total0 = 0
// let arrevensum0 = arreven0.map(element => total0 = total0 + element)
// console.log(arrevensum0) // ทำเป็นอาเรย์ใหม่ให้เลย ต่างจาก forEach

//2. filter( ) This method creates a new array with only elements that passes the condition inside the provided function.  filter นั้นรับ array มาวนเหมือนกับ map แต่ว่าเราจะต้องมีการส่ง condition หรือเงื่อนไขว่าเราต้องการที่จะให้ return ค่าอะไรออกมา ซึ่ง filter ก็จะทำการสร้าง array ใหม่เช่นเดียวกัน ในด้าน Performance สำหรับการสร้างวนค่าทุกค่าใน Array แล้วเอา element ที่ตรงกับ condition ที่เราต้องการมาสร้าง Array ใหม่ .map ที่มี if สามารถทำงานได้เร็วกว่า .filter แต่สิ่งที่ควรคำนึงคือ ถ้าเราต้องการนำข้อมูลใน Array นี้ไปใช้เราก็จะต้องหาวิธีในการจะกำจัด undefined ซึ่งก็จะเพิ่มการทำงานให้หนักขึ้นไปอีก แต่ทั้งนี้ ด้วยความที่ทั้งคู่มัน return ค่าออกมา มันจึงสามารถเอาไป chain ให้มันทำงานต่อกันได้ครับ https://www.borntodev.com/2022/04/29/%E0%B9%80%E0%B8%9B%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%9A-foreach-map-%E0%B9%81%E0%B8%A5%E0%B8%B0-filter/

// let arraybeforefil = [9, 1, 8, 4, 6]
// let arrayafterfil = arraybeforefil.filter(element => element % 3 === 0)
// // console.log(arraybeforefil)
// // console.log(arrayafterfil)

// let arraymatchs = arraybeforefil.filter(element => element === 4)
// console.log(arraymatchs)

//3. findIndex( ) This method returns the index of the ***first element in an array that pass the test in a testing function. หา ตำแหน่ง ของ อาเรย ตามเงื่อนไข และแสดงค่าออกมาเป็น Index นั้นๆ
// อิงจากข้อ 2.

// let arrayfindindexof2 = arraybeforefil.findIndex(element => element % 3 === 0) //  first element
// console.log(arrayfindindexof2) // index 0 = 9

// let arrwords = ['Dog', 'Cat', 'Bird', 'Kangkaroo', 'Bird', 'Cat', 'Dog']
// let arrfindsomealphabet = arrwords.findIndex(element => element === 'Cat') //***
// console.log(arrfindsomealphabet)

//4. IndexOf( )This method returns the index of the ***first occurrence of the specified element in the array, or -1 if it is not found. หา ตำแหน่ง ของ อาเรย ตามเงื่อนไข และแสดงค่าออกมาเป็น Value นั้นๆ ***แต่สิ่งที่แตกต่างคือ argument แรกที่รับเข้ามาใน indexOf นั้นไม่ใช่ testing function แต่ว่าจะเป็น ค่าที่เราต้องการจะหาเลย

// let arrflower = ['Lily', 'Tulip', 'Rose', 'Lavender', 'Jasmine']
// let arrfindpurpleflower = arrflower.indexOf('Lavender') // ***
// console.log(arrfindpurpleflower)

// let arrfind4length = arrflower.findIndex(element => element.length === 4) // ***
// console.log(arrfind4length)

// let arrcalsample = [8, 6, 1, 9, 5, 1, 7, 8, 9, 6, 4]
// let findanswer3plus3 = arrcalsample.indexOf(3 + 3)
// console.log(findanswer3plus3)

//5.sort( ) This method is used to arrange/sort array’s elements either in ascending or descending order. จากน้อยไปมาก (A-Z) หรือมากไปน้อย (Z-A), โดยปกติแล้วการ sort() จะเรียงจากตัวอักษรพิมพ์ใหญ่ไปเล็ก เพราะ String ถูกจัดเรียงตาม Character’s Unicode Code นั่นเอง สามารถเชคตัวอักษรได้ .charCodeAt()

// let names = ['john', 'Dana', 'kathy', 'Micheal', 'Tom', 'babara', 'lora']
// let namesortnormal = names.sort()
// console.log(namesortnormal)

// let namesortbylength = names.sort((a, b) => a.length - b.length) // น้อยไปมาก
// console.log(namesortbylength)

//6. forEach( )This method helps to loop over array by executing a provided callback function for each element in an array.เราสามารถใช้ .forEach เมื่อต้องการให้มีการทำงานอะไรบางอย่างในแต่ละค่าใน Array เช่น เราต้องการ console.log ทุก element ออกมา หรือวน element ใน Array เพื่อนำไปบันทึกลงใน Database ซึ่งไม่จำเป็นต้องเก็บ element ที่เราวนได้จาก Array นั้นไว้ครับ และด้วยความที่มันไม่ได้ return อะไรออกมา มันจึงไม่สามารถเอาไป chain ให้ทำงานต่อกันได้ครับ https://www.borntodev.com/2022/04/29/%E0%B9%80%E0%B8%9B%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%9A-foreach-map-%E0%B9%81%E0%B8%A5%E0%B8%B0-filter/ แต่สิ่งที่น่าสนใจคือ ในด้าน Performance สำหรับการวนค่าทุกค่าใน Array เพื่อไปสร้างใน Array ใหม่ forEach กลับสามารถทำงานได้เร็วกว่า .map ครับ

// let arreven = [2, 4, 6, 8]
// arreven.forEach(element => {
//     console.log(element * 10)
// })

//เปรียบเทียบกับ map ด้านบน
// let total = 0
// let arrevensum = arreven.forEach(element => {
//     total = total + element
//     console.log(total) // ต่างจาก map คือต้องสร้าง อาเรเพื่อดันค่าเข้าไป
// })


//7. concat( ) This method is used to merge two or more arrays and returns a new array, without changing the existing arrays. เขียน JavaScript ต่อ array เข้าด้วยกัน ด้วยคำสั่ง concat ตัวอย่างแนะนำการใช้คำสั่ง concat สำหรับต่อ array 2 ตัวเข้าด้วยกัน บทความนี้แนะนำการต่อ array พร้อมกับแสดงผลลัพธ์จากการต่อ array ด้วยคำสั่ง console.log

// let sentence01 = ['Yes', 'No', 'Ok']
// let sentence02 = ['Maybe', 'Probably', 'Kind of']

// let allsentence = sentence01.concat(sentence02)
// console.log(allsentence)

//8.  every( )This method checks every element in the array that passes the condition, returning true or false as appropriate.  Methed จะช่วยให้เราสามารถ Check ทุกๆ Item ใน array โดยเราจะเป็นคนกําหนด Condition โดยถ้าผลออกมาเป็น true ทุก Item จะทําให้ every() return true แต่ถ้ามี Item อันใดอันหนึ่งเป็น false แล้ว every() จะ return false

// let setof5 = [15, 5, 25, 35, 65, 85, 105, 45, 55]
// let checklessthan50 = setof5.every(num => num < 55);
// console.log(checklessthan50)
// let checklessthan500 = setof5.every(num => num < 500);
// console.log(checklessthan500)
// let checkmodulo5 = setof5.every(e => e % 5 === 0)
// console.log(checkmodulo5)
// let checkmodulo3 = setof5.every(e => e % 3 === 0)
// console.log(checkmodulo3)

//9. some() This method checks if at least one element in the array that passes the condition, returning true or false as appropriate. Methed จะช่วยให้เราสามารถ Check ทุกๆ Item ใน array โดยเราจะเป็นคนกําหนด Condition โดยถ้า Item อันใดอันหนึ่งผลออกมาเป็น true จะทําให้ผลลัพธ์เป็น true ทันที แต่กรณีที่ผลเป็น false ทุก Item ผลลัพธ์จะออกมาเป็น false

// let setof5 = [15, 5, 25, 35, 65, 85, 105, 45, 55]
// let checksomelessthan50 = setof5.some(num => num < 55);
// console.log(checksomelessthan50)
// let checksomelessthan500 = setof5.some(num => num < 500);
// console.log(checksomelessthan500)
// let checksomemorethan500 = setof5.some(num => num > 500);
// console.log(checksomemorethan500)
// let checksomemodulo5 = setof5.some(e => e % 5 === 0)
// console.log(checksomemodulo5)
// let checksomemodulo3 = setof5.some(e => e % 3 === 0)
// console.log(checksomemodulo3)

//10. includes() This method checks if an array includes the element that passes the condition, returning true or false as appropriate. Methed สําหรับ Check ว่าใน Array มี Item นี้อยู่หรือป่าว โดยจะ return ออกมาเป็น boolean  // includes JavaScript คือคำสั่งค้นหาข้อมูล ***โดยรองรับการค้นหาข้อมูลจาก string และค้นหาข้อมูลจาก array โดยคำสั่ง includes รับค่า parameter 1 ตัวคือข้อมูลที่ต้องการค้นหา และคืนค่าเป็น true และ false

// let setofvarynum = [8, 1, 6, 7, 0, 4, 9, 3, 4, 5]
// let checksomenum04 = setofvarynum.includes(0, 4)
// console.log(checksomenum04)
// let checksomenum2 = setofvarynum.includes(2)
// console.log(checksomenum2)

// let newsetofvarynum1 = [8, 4]
// for (let index = 0; index < setofvarynum.length; index++) {
//     const element = newsetofvarynum1[index];
//     let checkbothset1 = setofvarynum.includes(element)
//     console.log(checkbothset1)
// }

// let newsetofvarynum2 = 2
// let checkbothset2 = setofvarynum.includes(newsetofvarynum2)
// console.log(checkbothset2)

// let newsetofvarynum3 = 1
// let checkbothset3 = setofvarynum.includes(newsetofvarynum3)
// console.log(checkbothset3)

// let wordstwo = ['Minny', 'Toffy']
// let wordsminny = 'Minny'
// let checkMinny = wordstwo.includes(wordsminny)
// console.log(checkMinny)

//11.  join( ) This method returns a new string by concatenating all of the array’s elements separated by the specified separator.Methed สําหรับรวม Array ให้เป็น string โดยสามารถกําหนด separator ในการรวมได้

// Return String
// const arr = ['c', 'a', 't']
// let arrjoin = arr.join('')
// console.log(arrjoin)

// let arr2 = ['What', 'is', 'This', 5, 4, 'number']
// let arr2join = arr2.join()
// console.log(arr2join)
// let arr3join = arr2.join('')
// console.log(arr3join)

//12.  reduce( ) This method applies a function against an accumulator and each element in the array to reduce it to a single valueเราสามารถใช้ Methed ในการรวมข้อมูลใน array ได้ครับ หรือนําไปใช้ในแบบอื่นๆได้  https://www.borntodev.com/2022/05/06/reduce-%E0%B9%83%E0%B8%99-javascript/

// let arr = [3, 4, 8, 6, 1, 5]

// const arrreduce = arr.reduce((total, times) => total * times) // total default = 0 , times = current or arr
// console.log(arrreduce) // 3 * 4 * 8 * 6 * 1 * 5

// let arrcompare = [55, 45, 65, 75, 15]
// let findmax = arrcompare.reduce(function (allarr, current) { return current > allarr ? current : allarr; })
// // allarr หมายถึง ทั้งหมด, current คือค่าที่ต้องการหา
// console.log(findmax)

//สามารถใช้แทน Map และ Filter ได้นะ (เอาธรรมดาให้คล่องก่อนแล้วกัน)

// let box = []

// let arrreducefilter = [15, 35, 11, 17, 36, 27, 58, 65]
// let findmodulo5 = arrreducefilter.reduce(function (allarr, element) {
//     if (element % 5 === 0) {
//         return console.log(element)
//     }
// }, [])

// 13. find( )This method returns the value of the first element in an array that pass the test in a testing function.

// let arr = [7, 4, 8, 72, 98, 4]

// let arrmorethan50 = arr.find(element => element > 50)
// console.log(arrmorethan50) // result value


//14. fill( ) This method fills the elements in an array with a static value and returns the modified array.Methed นี้จะช่วยให้เราสามารถใส่ข้อมูลเข้าไปทุกช่องของ Array https://www.somkiat.cc/fix-array-method-in-javascript/

// let arremtpy = [] // can not using with fill
// let arremtpy2 = new Array(5) // gonna be only this format

// // console.log(arremtpy2.fill('Lana', 4))
// // console.log(arremtpy2.fill('Sara', 'Mac', 'Olive', 'Peter', 1))
// // console.log(arremtpy2.fill(2))
// // console.log(arremtpy2.fill(1, 'Dada'))
// // console.log(arremtpy2.fill(0, 1)) // Array ที่ต้องการให้แทนที่, จำนวนที่ว่าง
// // console.log(arremtpy.fill(0, 1)) // still empty
// console.log(arremtpy2.fill(8, 4)) // Array ที่ต้องการให้แทนที่, จำนวนที่ว่าง

//15. slice()This method returns a new array with specified start to end elements. https://armshare.medium.com/%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B8%81%E0%B9%87%E0%B9%80%E0%B8%84%E0%B8%A2%E0%B8%AA%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%AB%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87-slice-splice-%E0%B9%81%E0%B8%A5%E0%B8%B0-split-%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B9%87-%E0%B8%95%E0%B8%B1%E0%B8%94-%E0%B9%81%E0%B8%9A%E0%B9%88%E0%B8%87-%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99-b06dd9bd5966

// slice() เริ่มตัวที่ n, ตัดถึงตัวที่ n ใช้กับ arr + string
// splice() เริ่มตัวที่ n, ตัดออก n ตัว ใช้กับ arr เท่านั้น
// split() ใช้งานกับ string และจะ return ค่าที่เป็น array มาให้เราใช้งานต่อ ใช้กับ string เท่านั้น

// let arr = [5, 9, 78, 'whatis', 1, 7]
// let string = 'todayisathrusday'

// console.log(arr.slice(1, 3))
// console.log(arr.splice(2, 3))
// console.log(string.split())
// console.log(string.split(''))

//16 reverse( )This method reverses an array in place.Element at last index will be first and element at 0 index will be last. Methed นี้จะช่วยให้เราสามารถ Reverse ข้อมูลใน Array ได้ง่ายๆ

// let arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.reverse())

//17. push() This method adds one or more elements to the end of array and returns the new length of the array. เพิ่มหลัง***

// let arr = ['i', 'am']
// arr.push('a cat')
// console.log(arr)

//18. pop( )This method removes the last element from the end of array and returns that element. ***ลบหลัง

// let arr = [9, 8, 8, 4, 6, 3, 4, 5]
// // console.log(arr.pop())
// // console.log(arr.pop())
// let arrpop = arr.pop()
// console.log(arrpop)

//19.shift( )This method removes the first element from an array and returns that element.
// console.log(arr.shift()) *** ลบหน้า

//20.unshift()This method adds one or more elements to the beginning of an array and returns the new length of the array.Methed นี้จะใช้ในการเพิ่มข้อมูลเข้าไปในส่วนแรกของ Array *** เพิ่มหน้า
// arr.unshift(0)
// console.log(arr)

