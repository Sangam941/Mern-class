
// const App = () => {


import Card from "./components/Card"
import Test from "./components/Test"

//   const handleHello = (e)=>{
//     console.log('hello', e)
//   }

//   const handleSubmit = (e)=>{
//     e.preventDefault()
//     console.log('submitted')
//   }
  
//   return (
//     <div className='h-screen bg-black text-white'>
//       <button
//       onClick={(e)=>{
//         handleHello(e)
//       }}
//       className="px-4 py-3 bg-green-500 text-black cursor-pointer rounded-xl ">click me</button>

//       <form onSubmit={(e)=>{
//         handleSubmit(e)
//       }} action="">
//         <input type="text" />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App


// const App = () => {
//   const [number, setNumber] = useState(0) //initial value

//   const handleNumber = ()=>{
//     setNumber(number+1)
//     console.log(number)
//   }
//   const handleNumber2 = ()=>{
//     setNumber(number-1)
//     console.log(number)
//   }

//   return (
//     <div>
//         <div>
//           {number}
//         </div>
//       <button onClick={handleNumber}>
//         +
//       </button>
//       <button onClick={handleNumber2}>
//         -
//       </button>
//     </div>
//   )
// }

// export default App




const App = () => {
  return (
    <div className="h-screen bg-black text-white flex items-center justify-center">
      <Card/>
      <Test/>
    </div>
  )
}

export default App
