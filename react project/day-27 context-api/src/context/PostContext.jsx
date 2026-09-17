import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const postContextProvider = createContext()

const PostContext = ({children}) => {
    const [blog, setBlog] = useState('hello')
    
  return (
    <postContextProvider.Provider value={{blog}}>
      {children} 
    </postContextProvider.Provider>
  )
}

export default PostContext
