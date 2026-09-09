import {useState} from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    // api call
    setName('')
    setLastName('')
  }

//   const [info, setInfo] = useState({'name':'ram', 'age':43})


//   // localstorage
// // add item
//   localStorage.setItem("info", JSON.stringify(info))

//   // get item
//   const obj1 = JSON.parse(localStorage.getItem('info'))


  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
          console.log(e.target.value)
        }}
        type="text" className='border-2 border-zinc-300'/>


        <input 
        value={lastName}
        onChange={(e)=>{
          setLastName(e.target.value)
        }}
        type="text" 
        
        className='border-2 border-zinc-300'
        />

        <input type="submit" value="Submit" />


      </form>
    </div>
  )
}

export default App
