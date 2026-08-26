console.log('dom - document object model')

// document.body.style.backgroundColor = 'red'

// nodes
// dom - document object model
// document.body.childNodes
// NodeList(7) [text, comment, text, div.container, text, script, text]
// document.fir
// undefined
// document.firstChild
// <!DOCTYPE html>
// document.body.firstChild
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:3000/day15/index.html?vscode-livepreview=true"childNodes: NodeList []data: "\n"firstChild: nullisConnected: truelastChild: nulllength: 1nextElementSibling: div.containernextSibling: commentnodeName: "#text"nodeType: 3nodeValue: "\n"ownerDocument: documentparentElement: bodyparentNode: bodypreviousElementSibling: nullpreviousSibling: nulltextContent: "\n"wholeText: "\n"[[Prototype]]: Text
// document.body.firstElementChild
// <div class=​"container">​…​</div>​<div class=​"box">​i am a box1​</div>​<div class=​"box">​i am a box2​</div>​<div class=​"box">​i am a box3​</div>​<div class=​"box">​i am a box4​</div>​<div class=​"box">​i am a box5​</div>​</div>​
// document.body.firstElementChild.childnod
// undefined
// document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]0: text1: div.box2: text3: div.box4: text5: div.box6: text7: div.box8: text9: div.box10: textlength: 11[[Prototype]]: NodeList
// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.firstElementChild.children[2]
// <div class=​"box" style=​"color:​ red;​">​i am a box3​</div>​
// document.body.firstElementChild.children[2].previousElementSibling
// <div class=​"box">​i am a box2​</div>​
// document.body.firstElementChild.children[2].nextElementSibling
// <div class=​"box">​i am a box4​</div>​
// document.body.firstElementChild.children[2]
// <div class=​"box" style=​"color:​ red;​ background-color:​ green;​">​i am a box3​</div>​
// document.body.firstElementChild.children[2].style.color = 'red'
// 'red'
// document.body.firstElementChild.children[2].style.backgroundColor = 'green'
// 'green'


// let boxes = document.getElementsByClassName("box")
// let container = document.getElementsByClassName("container")

// let box4 = document.getElementById("box4").style.backgroundColor = 'red'

// console.log(boxes, container, box4)

// let box = document.querySelector(".box").innerHTML

// let boxes = document.querySelectorAll(".box")

// boxes.forEach((box)=>{
//     box.style.backgroundColor = 'red'
//     box.style.color = 'white'
//     console.log(box)
// })
// console.log(boxes)


// manupulating text of html element
// innerHTML
// innerText
// textContent
let box = document.querySelector(".box")
// box.innerHTML = '<b>hello</b>'
box.innerText = 'this is dom class'
console.log(box)


// inserting any new element
let container = document.querySelector(".container")
let div = document.createElement("div")
div.innerHTML = "i am div 6"
container.prepend(div)
