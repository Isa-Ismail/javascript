const arr = ['apple', 'banana', 'pineapple']
const fruit = []
const list = document.querySelector('.list')
const trigger = document.querySelector('.trigger')
const hide = document.querySelector('.hide')
let i = 0
trigger.addEventListener("click",()=>{
    arr.forEach(e=>{
        list.innerHTML+=`<li>${e}</li>`
    }) 
    fruit[i] = arr[i]
    console.log(fruit)
})

hide.addEventListener("click",()=>{
        list.innerHTML=``
})