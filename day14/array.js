console.log("array")

// let arr = [1,34,5,6,8,9]

// indexing
// console.log(arr[0])
// console.log(arr[3])

// arr.pop()  //always remove lst element of array
// arr.shift()   remove the first element of array

// console.log(arr)

// arr.push(777)   add the element in the end
// arr.unshift(0)  add the element in the start

// console.log(arr.length)

// arr.splice(2,1)  //we can also remove the data from any index and also insert new data to that index

// let b = arr.slice(2,5)  // that copy the original array and not make change int eh original array
// console.log(b)

// arr.reverse()

// arr.sort((a,b)=>{
//     return b-a
// })

// console.log(arr)


// let arr = [1,2,4,5,7,9,23,4454]

// arr.forEach((element)=>{
//     console.log(element * 2)
// })

// for (const element of arr) {
//     console.log(element)
// }


// map, filter, reduce


// let arr = [1,2,4,5,7,9]

// let new_arr = arr.map((value)=>{
//     return value**3
//     // return 5
// })

// console.log(new_arr)

// [5,5,5,5,5,5]


// filter

// let arr = [1,2,4,5,7,9]

// let filtered_data = arr.filter((elem)=>{
//     return elem%2===0
// })

// console.log(filtered_data)


// let arr = [1,2,4,5,7,9] 

// let sum = arr.reduce((acc, val)=>{
//     return acc - val
// }, 0)

// console.log(sum)


// find
// let arr = [{id:1, value:1}, {id:2, value:1}] 

// let a = arr.find((ele)=>{
//     return ele.value===1
// })

// console.log(a)

// some
// let arr = [1,2,4,1,2,9] 
// let a = arr.some((ele)=>{
//     return ele>5
// })

// console.log(a)



// destructuring and spread operators

let arr = [1,2,4,1,2,9] 

// let [a,b,,c] = arr // destructuring
// console.log(a,b,c)


let arr2 = [...arr] 
console.log(arr2)

console.log(arr2.pop(), arr2)
console.log(arr)