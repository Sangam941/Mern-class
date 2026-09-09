import { useState } from "react"
import Rating from "./Rating"


const Card = () => {

    const [isFav, setIsFav] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(false)

    const handleToggle = ()=>{
        // setIsFav(!isFav)
        setIsFav((prev)=>!prev)
    }

    // total = price x quantity 
    const price = 500
    const total = price * quantity

    // a>b ? 'a is great': 'b is great'

    // a>b && 'a is great'

  return (
   loading ? <div>loading....</div> :
    <div className="h-[400px] w-[220px] bg-zinc-300 rounded-md overflow-hidden p-4 text-black">
      <div className="image rounded-md overflow-hidden border-1 border-zinc-500">
        <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlnaCUyMGhlZWxzfGVufDB8fDB8fHww" alt="this is high heels image" className="h-54"/>
      </div>

      <div className="below mt-4 flex flex-col gap-2">
        <div className="title flex items-center justify-between">
            <button className="text-xs px-2 py-1 border-1 border-zinc-500 rounded-md font-semibold cursor-pointer">Women Fashion</button>
            <button 
            onClick={handleToggle}
            className={`favorite ${isFav?"text-red-500":"text-white"} cursor-pointer text-xl`}>❤︎</button>
        </div>

        <div className="content">
            <h1 className="uppercase font-bold text-red-600 mb-2">Elegent High Heels</h1>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <Rating/>

            <div className="pricen flex items-center justify-between ">
                <div className="total">
                    Rs. {total}
                </div>

                <div className="counter flex items-center gap-2">
                    <button 
                    onClick={()=>setQuantity(quantity-1)}
                    className="sub px-2 cursor-pointer border-1 border-zinc-500">-</button>

                    <div className="number">{quantity}</div>
                    
                    <button 
                    onClick={()=>{setQuantity(quantity+1)}}
                    className="sub px-2 cursor-pointer border-1 border-zinc-500">+</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
