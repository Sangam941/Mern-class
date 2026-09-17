import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const userContextProvider = createContext()

const UserContext = ({children}) => {
    const [count, setCount] = useState(1)
    const [allData, setAllData] = useState([])

    useEffect(() => {
      const getData = async ()=>{
        try {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
            console.log(data)

            setAllData(data)
        } catch (error) {
            console.log("Error:: ",error)
        }
      }

      getData()
    }, [])
    
  return (
    <userContextProvider.Provider value={{count, setCount, allData}}>
      {children} 
    </userContextProvider.Provider>
  )
}

export default UserContext
