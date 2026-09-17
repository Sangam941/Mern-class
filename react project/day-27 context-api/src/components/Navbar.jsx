import { useContext } from "react"
import { userContextProvider } from "../context/UserContext"


const Navbar = () => {
    const {count} = useContext(userContextProvider)
  return (
    <div>
      this is navbar {count}
    </div>
  )
}

export default Navbar
