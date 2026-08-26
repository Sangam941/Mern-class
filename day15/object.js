console.log("object in day 15")

// const obj = {
//     name: "ram",
//     age: 12,
//     isAdmin:false
// }

// accessing the object keys and value
// obj.name = "shyam"
// console.log(obj)
// // console.log(obj.age)
// console.log(obj['age'])


// nested object

// const user = {
//     name: "ram",
//     age: 40,
//     location: {
//         city: "kathmandu",
//         postalCode: 46000,

//     }
// }

// // optional chaining ?
// console.log(user?.location?.city)


// destructuring
// const { city, postalCode } = user.location

// console.log(city, postalCode)

// const obj2 = {
//     name: 'ram',
//     age: 20,
//     email: 'ram@gmail.com'
// }
// obj2['age'] = 20 


// for in loop in object

// for (const key in obj2) {
//     const element = obj2[key];
//     console.log(key, element)
    
// }


// object.entries
// const obj2 = {
//     name: 'ram',
//     age: 20,
//     email: 'ram@gmail.com'
// }

// console.log(Object.entries(obj2))



// spread operator

// const obj2 = {
//     name: 'ram',
//     age: 20,
//     email: 'ram@gmail.com',
//     location:{
//         city:"kathmandu",
//         postalCode:46000
//     }
// }

// let obj3 = { ...obj2 }
// obj3.name = 'ramuuuu'
// obj3.location.city = 'pokhara'
// console.log(obj3, obj2)



// deep clone
const obj2 = {
    name: 'ram',
    age: 20,
    email: 'ram@gmail.com',
    location:{
        city:"kathmandu",
        postalCode:46000
    }
}

// obj2 --> string --> back to object
// JSON.parse()
let obj4 = JSON.parse(JSON.stringify(obj2))

obj4.location.city = 'pokhara'

console.log(obj4, obj2)