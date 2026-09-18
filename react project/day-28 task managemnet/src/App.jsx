import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import { useContext } from "react"
import { AuthContexProvider } from "./context/AuthContext"
import AddTask from "./pages/AddTask"

const App = () => {
  const {isAuth} = useContext(AuthContexProvider)
  console.log(isAuth)
  return (
    <div className="h-screen bg-black text-white">
      <Navbar/>
      <Routes>
        <Route path='/' element={isAuth?<Home/>:<Navigate to='/login'/>}/>
        <Route path="/login" element={isAuth?<Home/>:<Login/>}/>
        <Route path="/add-task" element={isAuth?<AddTask/>:<Navigate to='/login'/>}/>
      </Routes>
    </div>
  )
}

export default App
