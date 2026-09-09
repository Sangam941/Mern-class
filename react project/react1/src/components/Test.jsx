import { useState } from 'react'

const Test = () => {

    const [data, setData] = useState([
  {
    "id": 1,
    "name": "ram",
    "age": 32
  },
  {
    "id": 2,
    "name": "sita",
    "age": 28
  },
  {
    "id": 3,
    "name": "hari",
    "age": 25
  },
  {
    "id": 4,
    "name": "gita",
    "age": 30
  },
  {
    "id": 5,
    "name": "shyam",
    "age": 35
  }
])

    console.log(data)

    // const handleChange = ()=>{
    //     setData({...data, salary:5000})
    // }


    const handleChange = ()=>{
        setData(data.filter((item)=>{
            return item.id!= 3
        }))
    }

    console.log(data)
    
  return (
    <div>
        <p>{data.name}, {data.age}</p>
      <button onClick={handleChange}>Chnage data</button>
    </div>
  )
}

export default Test
