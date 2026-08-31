console.log("day 18 oop");

// class and object
// class -> blueprint
// object -> instance - crated from class

// class BricksFactory{
//     constructor(name, qty, color){
//         this.name = name
//         this.qty = qty
//         this.color = color

//         console.log({name:this.name, qty:this.qty, color:this.color})
//     }

//     // methods
//     getQuantity(){
//         return this.qty
//     }

//     setQuantity(value){
//         return this.qty = value
//     }
// }

// let b1 = new BricksFactory("abc", 6,'red')
// let b2 = new BricksFactory("xyz", 10, 'orange')
// let b3 = new BricksFactory("apple", 20, "green")

// b1.getQuantity()

// inheritence
// class Animal{

//     constructor(name){
//         this.name = name
//     }
//     eat(){
//         console.log("eating...")
//     }
// }

// // let a1 = new Animal()

// class Dog extends Animal{
//     constructor(name, age){
//         super(name)
//         this.age = age
//     }
//     eat(){
//         console.log("dog is eating")
//     }

// }

// let d1 = new Dog("tommy", 13)

// async / sync js

// async function hello() {
//   console.log(1);
//   console.log(2);

//   await setTimeout(() => {
//     console.log(3);
//   }, 2000);
//   console.log(4);
// }

// hello();

// callbacks

// function greet(value, cb){
//     setTimeout(() => {
//         console.log("hello")
//         cb({name:value, age:16, id:1})
//     }, 2000);
// }

// function getId(id,cb){
//     setTimeout(() => {
//         cb(id)
//     }, 2000);

// }

// greet("hello", function getUserData({name, age, id}){
//     console.log({
//         name,age,id
//     })

//     getId(id, (id2)=>{
//         console.log(id2)

//         getPost(()=>{
//             getpostid(()=>{

//             })
//         })
//     })    
// })



// promises

// resolve, reject


// fetch()

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let result = fetch('https://randomuser.me/api/')

//         if(result) return resolve(result)
//             return reject(result)

//     }, 2000);
// })

// p1.then((response)=>{
//     return response.json()
//     // console.log(response.json())
// })
// .then((data)=>{
//     let data2 = data
//     console.log(data2)
    
//     console.log(data2.results[0].name.first)
// })
// .catch((err)=>{
//     console.error(err)
// })


// async await

async function abc(){
    try{
        let response = await fetch('https://randomuser.me/api/')
        let data = await response.json()
        console.log(data.results[0].name.first)
    }catch(err){
        console.log(err)
    }
}

abc()