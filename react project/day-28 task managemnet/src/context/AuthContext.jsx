import { createContext, useEffect, useState } from "react"

export const AuthContexProvider = createContext()

const AuthContext = ({children}) => {

    const [auth, setAuth] = useState(null)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
      const checkAuth = ()=>{
        if(auth) {setIsAuth(true)}
        else{
            setIsAuth(false)
        }
      }

      checkAuth()
    }, [auth])
    
  return (
    <AuthContexProvider.Provider value={{auth, setAuth, isAuth}}>
      {children}
    </AuthContexProvider.Provider>
  )
}

export default AuthContext
