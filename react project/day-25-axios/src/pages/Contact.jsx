import {useNavigate} from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate()
  return (
    <div>
      this is contact page

      <button 
      onClick={()=>{navigate('/about/ram')}}
      className="bg-blue-500 px-3 py-2 rounded-md cursor-pointer">View More</button>
    </div>
  )
}

export default Contact
