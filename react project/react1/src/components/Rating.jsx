import { useState } from 'react'

const Rating = () => {

    const [currentRating, setSetCurrentRating] = useState(3)
  return (
    <div>
      {
        [1,2,3,4,5].map((item, index)=>{
            return (
                <button 
                onClick={()=>{
                    setSetCurrentRating(item)
                }}
                key={index} className={`cursor-pointer ${item<=currentRating ? "text-yellow-500": "text-white"}`}>
                    ★
                </button>
            )
        })
      }
    </div>
  )
}

export default Rating
