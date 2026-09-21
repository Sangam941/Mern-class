import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import { useContext } from "react"
import { AuthContexProvider } from "./context/AuthContext"
import AddTask from "./pages/AddTask"
import CardDetails from "./pages/CardDetails"
import EditTask from "./pages/EditTask"

const App = () => {
  const {isAuth} = useContext(AuthContexProvider)
  console.log("home",isAuth)
  return (
    <div className="h-screen bg-black text-white">
      <Navbar/>
      <Routes>
        <Route path='/' element={isAuth?<Home/>:<Navigate to='/login'/>}/>
        <Route path='/:id' element={isAuth?<CardDetails/>:<Navigate to='/login'/>}/>
        <Route path="/login" element={isAuth?<Home/>:<Login/>}/>
        <Route path="/add-task" element={isAuth?<AddTask/>:<Navigate to='/login'/>}/>
        <Route path="/edit-task/:id" element={isAuth?<EditTask/>:<Navigate to='/login'/>}/>
      </Routes>
    </div>
  )
}

export default App
