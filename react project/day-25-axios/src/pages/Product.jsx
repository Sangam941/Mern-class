import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Product = () => {

    const navigate  = useNavigate()
  return (
    <div>
      product page

      <button 
      onClick={()=>{navigate('/product/men')}}
      className="bg-blue-500 px-3 py-2 rounded-md cursor-pointer">Men</button>

      <button 
      onClick={()=>{navigate('/product/women')}}
      className="bg-blue-500 px-3 py-2 rounded-md cursor-pointer">Women</button>


      <Outlet/>
    </div>
  )
}

export default Product
