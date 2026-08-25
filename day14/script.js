console.log("day 14 function")

// rest operators

// function abcd(...data){
//     console.log("from function", data)
// }

// abcd(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)

// ... rest, spread
// ...rest
// ...spread


// return 

// function abcd(){
//     return 'hello'
// }

// console.log(abcd())


// first class function
// function sum(a){
//     // console.log(a)
//     a()
// }

// sum(function abcd(){
//     console.log("i am a first class function")
// })

// sum(12)


// higher order function
// either return function or accept any function in its parameter
// function sum(){
//     return function abcd(){
//         console.log("hello from higher order function")
//     }
// }

// // sum(function abcd(){
// //     console.log("i am a first class function")
// // })
// console.log(sum())


// pure and impure function
// pure function
// let a = 5
// function abcd (){
//     console.log("hello")
// }


// abcd()

// console.log(a)

// impure function
// let a = 5
// function abcd (){
//     a++
// }

// abcd()

// console.log(a)


// closure
// function abcd(){
//     let a = 10
//     return function abcd2(){
//         console.log(a)
//     }
// }
// abcd()()

// lexical scoping
// function abcd(){
//     let a = 10
//     function abcd2(){
//         let b=4
//         console.log(a)
//         function abcd3(){
//             console.log(a)
//             console.log(b)
//         }
//     }
// }


// IIFE - Immediately Envoked Function Expression
// (function abcd(){
//     console.log('hello there')
// })()

// (() => {
//   console.log("Arrow");
// })();


// hoisting

// hello()
// // hoist
// function hello(){
//     console.log('function statement')
// }

// h1()

// let h1 = function (){
//     console.log("function expression")
// }


// function sum(a,b){
//     console.log(a+b)
// }

// sum(12,5)
// sum(342,5)
// sum(12,5)

