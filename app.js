//กรองสระ
const countEl = document.querySelector('.count')
const input = document.querySelector('input')

input.addEventListener("keyup",()=>{
    let word = input.value.toLowerCase() //ดึงค่าที่ผู้ใช้ทำการป้อนโดยเป็นตัวพิมพ์เล็ก
    let vowlCount = 0 //กำหนดตัวแปนเพื่อนับสระ
    //กรองเอาทีละตัวว่ามีสระมั้ย ทีละ 1 ตัวอักษร โดยใช้ For loop
    for(let i = 0; i<word.length;i++){ //ได้ตัวอักษรทีละ 1 มาใช้แล้ว เก็บไว้ในตัวแปร letter
        let letter = word[i]
        //กรองว่าตรงสระภาษาอังกฤษมั้ยโดยทำการเช็ค
        if(letter.match(/([a,e,i,o,u])/)){ //เพื่อเช็คว่าจะต้อง match ตัวอักษรมากกว่า 1 ตัว แล้วใส่เป็นอารเรย์
            vowlCount++
        }
    }
    countEl.innerHTML=`${vowlCount}`
})

