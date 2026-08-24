// console.log("conditional statement")

// // if, if else, switch case, early return, ternary operator

// let age = 16

// if(age >= 18){
//     // statement
//     console.log("you can vote...")
// } else{
//     console.log("you cannot vote...")
// }

// age>=18?console.log("you can vote..."):console.log("you cannot vote...")

// // odd or even

// let num = 26

// // let num = parseInt(prompt("enter your number"))   //user input

// if(num % 2 === 0){
//     console.log(`${num} is even number`)
// }else{
//     console.log(`${num} is odd number`)
// }

// num % 2 === 0? console.log(`${num} is even number`) : console.log(`${num} is odd number`)

// //marks = 90, A 70 B, 60 C

// let marks = 80

// if(marks>=90){
//     console.log("A+")
// }else if(marks>=70){
//     console.log("B+")
// }else{
//     console.log("C")
// }

// marks>=90? console.log("A") : marks>=70? console.log("B+") : console.log("C")

// return

// function calc(marks) {
//   if (marks >= 90) return "A+"
//     if (marks >= 70) return "B+";
//     return "C";

// }

// let a = calc(80);
// console.log(a)

// if(num % 2 === 0){
//     console.log(`${num} is even number`)
// }else{
//     console.log(`${num} is odd number`)
// }

// function calc(num) {
//   if (num % 2 === 0) return `${num} is even number`
//   return "odd"
// }

// let a = calc(80);
// console.log(a);

// let val1 = 1;  // user input
// let val2 = 3;  // user input
// let op = '-' // + / * 

// let val1 = parseInt(prompt("enter first value: "))
// let op = prompt("enter your operator: ")
// let val2 = parseInt(prompt("enter second value: "))

// switch (op) {
//   case '+':
//     console.log(val1+val2);
//     break;

//   case '-':
//     console.log(val1-val2);
//     break;

//   case '/':
//     console.log(val1/val2);
//     break;

//   case '*':
//     console.log(val1*val2);
//     break;

//   case '%':
//     console.log(val1%val2);
//     break;

//   default:
//     console.log("not match");
// }


// rock paper scicors 

// computer
// user
// rock>scisor, scissors>paper, paper>rock

// function game(user, computer){
//     if(user===computer) return 'draw'
//     if(user==='rock' && computer==='scissors') return 'user won'
//     if(user === 'scissors' && computer=== 'paper') return 'user won'
//     if(user === 'paper' && computer=== 'rock') return 'user won'

//     return 'computer won'
// }

// let a = game('rock', 'paper')

// console.log(a)


// loops

//  1 1 1 1 1 1 1 1 1 1 1 1 1 
// 1 2 3 4 5

// for loop
// starting, ending, change/increment/decrement 

// staring value = 1
// ending value = 10

// for (let i=1; i<=100; i++) {
//     console.log(i)
// }

// while
// kaile samma chalne

let i = 1

// while(i!==10){
//     console.log(i)
//     i++
// }

// do while
// do{
//     console.log("hello")
// }while(i==10)


// for in loop, for of loop, foreach loop

// let arr = [1,2,3,4]

// // for (const element of arr) {
// //     console.log(element)
// // }

// arr.forEach(element => {
//     console.log(element)
// });

// const obj = {
//     'name':'ram',
//     'age':12,
//     'sa;ary': 23423
// }
// obj['name']

// for (const key in obj) {
    
//     const element = obj[key];
//     console.log(element)
    
// }


// break and continue

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
//     if(i===5){
//         break;
//     }
    
// }


// for (let i = 1; i <= 10; i++) {
//     if(i==5){
//         continue;
//     }
//     console.log(i)
    
// }



// function

// function statement
// function abcd(){
//     console.log("hello")
// }

// abcd()  // calling the function


// function expression
let a = 10;
let fn = function (){
    console.log("fn ")
}

fn()


let fn2 = ()=>{
    console.log("form the arrow function")
}

fn2()

// arrow function



// console.log(fn())

// let d; //undefined
// console.log(d)

function sum(a=1,b=1){  //parameters 
    console.log(a+b)
}

sum(3)  //arguments
// sum(21, 56) 
// sum(2100, 560) 

function game(user, computer){  // parameter
    if(user===computer) return 'draw'
    if(user==='rock' && computer==='scissors') return 'user won'
    if(user === 'scissors' && computer=== 'paper') return 'user won'
    if(user === 'paper' && computer=== 'rock') return 'user won'

    return 'computer won'
}

let b = game('rock', 'paper') // arguments

console.log(b)


