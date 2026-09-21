import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { TaskContextProvider } from "../context/TaskContext"

const CardDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const {fetchSingleData, singleData} = useContext(TaskContextProvider)

    useEffect(() => {
      fetchSingleData(id)
    }, [id])

    console.log(singleData[0])

    
  return (
    <div>
        <button 
        onClick={()=>navigate('/')}
        className="px-2 py-1 bg-blue-500 rounded-md cursor-pointer text-xl">Back</button>


      <div className="container">
        <h1>{singleData[0]?.title}</h1>
        <p>{singleData[0]?.desc}</p>
      </div>
    </div>
  )
}

export default CardDetails
