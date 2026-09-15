
import { useParams } from 'react-router-dom'

const DynamicProduct = () => {

    const params = useParams()

    console.log(params)
  return (
    <div>
      dynamic - {params.id}
    </div>
  )
}

export default DynamicProduct
