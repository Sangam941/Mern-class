import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-green-700 px-5 py-4 flex items-center justify-center'>
        <ul className='flex items-center justify-center gap-5 cursor-pointer'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact </Link></li>
            <li><Link to='/product'>Product </Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
