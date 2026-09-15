import { useNavigate, useParams } from "react-router-dom"

const Persondetails = () => {

    const params = useParams()
    const navigate = useNavigate()

    console.log(params.name)

  return (
    <div>
      <button 
      onClick={()=>{navigate('/')}}
      className="bg-blue-500 px-3 py-2 rounded-md cursor-pointer">Back</button>
      {params.name}
    </div>
  )
}

export default Persondetails
