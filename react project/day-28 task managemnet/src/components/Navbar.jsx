import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContexProvider } from '../context/AuthContext'

const Navbar = () => {
    const navigate = useNavigate()

    const {isAuth, setAuth} = useContext(AuthContexProvider)

    const handleLogout = ()=>{
        setAuth(null)

        navigate('/login')
        }

  return (
    <div className='bg-blue-400 px-4 py-2 flex items-center justify-between cursor-pointer'>
        <button 
        onClick={()=>navigate('/')}
        className='font-semibold cursor-pointer'>Task Management</button>
      
      {
        isAuth && <ul className='flex items-center jusitfy-center gap-3'>
        <Link to='/add-task'><li>Add Task</li></Link>
        
      </ul>
      }


{
    isAuth?<button 
      onClick={handleLogout}
      className='font-semibold cursor-pointer'>Logout</button>:
        <button 
      onClick={()=>navigate('/login')}
      className='font-semibold cursor-pointer'>Login</button>
}
      
      
    </div>
  )
}

export default Navbar
