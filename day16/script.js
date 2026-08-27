console.log("day 16 dom manipulation...");

// let box = document.querySelector(".box")
// // box.classList.add("box")
// box.classList.remove("box1")
// box.classList.toggle("boxes1")
// box.getAttribute("boxes1")
// console.log(box)

// let img = document.querySelector("img")
// // img.getAttribute('src')
// img.setAttribute("src", "http://ajsdhasjkdf")
// img.setAttribute("height", "200")
// img.removeAttribute("src")
// console.log(img)

// event  listener
let box = document.querySelector(".box");

// box.addEventListener("dblclick", ()=>{
//     console.log("hey i am box 1")
// })
// box.addEventListener("mouseover", ()=>{
//     box.style.backgroundColor = 'red'
// })
// box.addEventListener("mouseout", ()=>{
//     box.style.backgroundColor = 'white'
// })
// box.addEventListener("mousedown", ()=>{
//     box.style.backgroundColor = 'red'
// })
// box.addEventListener("mouseup", ()=>{
//     box.style.backgroundColor = 'white'
// })

// box.addEventListener("contextmenu", () => {
//     alert('hello i am context menu')
// });

// let btn = document.querySelector(".btn")

// let r = Math.floor(0 + Math.random()*255)
// let g = Math.floor(0 + Math.random()*255)
// let b = Math.floor(0 + Math.random()*255)  // 0-255

// console.log(r,g,b)

// btn.addEventListener("click", ()=>{
//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// })

// input uplaod file

// let inputFile = document.querySelector("input")
// let uplaodBtn = document.querySelector(".upload")

// uplaodBtn.addEventListener("click", ()=>{
//     inputFile.click()
// })

// window.addEventListener("keydown", (e) => {
// //   console.log(e.key);
//   if(e.key == ' ') {
//     console.log(e)
//     document.querySelector("h1").innerText = 'SPACE';
//   }
//   document.querySelector("h1").innerText = e.key;
// });

// window.addEventListener("keyup", ()=>{
//     alert("hello")
// })


// let inputField = document.querySelector("input")

// inputField.addEventListener("keydown", (e)=>{
//     console.log(e.target.value)
// })

let form = document.querySelector('form')
let name = document.querySelector('input')
let email = document.querySelector('.email')
let textArea = document.querySelector('textarea')

let cardContainer = document.querySelector('.cardContainer')

form.addEventListener('submit', (e)=>{
    console.log(e)
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].value)
    e.preventDefault()

    let card = document.createElement('div')
    card.classList.add('card')

    cardContainer.append(card)

    let h1 = document.createElement('h1')
    h1.innerText = e.target[0].value
    card.append(h1)


    let p1 = document.createElement('p')
    p1.innerText = e.target[1].value
    card.append(p1)


    let p2 = document.createElement('p')
    p2.innerText = e.target[2].value
    card.append(p2)

    e.target[0].value = ""
    e.target[1].value = ""
    e.target[2].value = ""
})
