// let container =  document.querySelector(".container")
// let boxContainer = document.querySelector(".boxContainer")
// let box = document.querySelector(".box")

// container.addEventListener("click", ()=>{
//     alert("i am a container")
// })
// boxContainer.addEventListener("click", ()=>{
//     alert("i am a box-container")
// })
// box.addEventListener("click", (e)=>{
//     e.stopPropagation()
//     alert("i am a box")
// })


// form validation

// let username = document.querySelector("input")
// let form = document.querySelector("form")
// let span = document.querySelector("span")

// const usernameRegex = /^[A-Za-z]{3,}$/;

// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     console.dir(username.value)

//     if(!usernameRegex.test(username.value))
//         return span.innerText = "Username is invalid!"
    

//     span.innerText = ""
//     username.value = ""
// })


// timers and intervals
// setTimeout and setIntervals

// setTimeout(()=>{
//     console.log("hello from settimerout")
// }, 5000) //1sec


// let interval = setInterval(() => {
//     console.log("from the se interval")
// }, 2000);

// clearInterval(interval)

// let count = 10

// let interval = setInterval(() => {
//     if(count>=1){
//         count--
//         console.log(count)
//     }else{
//         clearInterval(interval)
//     }
// }, 1000);

// downlaoding file progress bar

let progress = document.querySelector("#progress-bar")
let count = 0
let btn = document.querySelector("#download-btn")

let interval = setInterval(() => {
    if(count<100){
        count++
        progress.style.width = `${count}%`
        progress.innerHTML = `${count}%`

    }else{
        btn.innerHTML = "Download Completed"
        btn.style.backgroundColor = "green"
        clearInterval(interval)
    }
}, 10000/100);



