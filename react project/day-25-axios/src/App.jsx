// import { useEffect, useState } from "react"
// import axios from "axios"

// const App = () => {

//   // const fetchData = async () => {
//   //   try {
//   //     const response = await fetch("https://randomuser.me/api/?results=5");
//   //     const data = await response.json();
//   //     console.log(data);
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   }
//   // }

//   // get, post, put ,patch, delete 

//   const [allData, setAllData] = useState([])

//   const fetchData = async () => {
//     try {
//       const {data} = await axios.get("https://randomuser.me/api/?results=10");
//       // const data = await response.data;
//       setAllData(data.results)
//       console.log(data.results);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, [])
  
//   return (
//     <div className="h-screen bg-black text-white flex flex-col items-center justify-center gap-5">

//       <button className="bg-blue-600 px-4 py-2 rounded-md" onClick={()=>{fetchData()}}>Get Data</button>

//       <div className="flex gap-5 flex-wrap">
//         {
//           allData.map((item, index)=>{
//             return (
//               <div key={index}>
//                 <img src={item.picture.thumbnail} alt="" className="h-[100px] w-[100px]"/>
//               </div>
//             )
//           })
//         }
//       </div>
      
//     </div>
//   )
// }

// export default App


// react router dom

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Persondetails from './pages/Persondetails'
import Product from './pages/Product'
import DynamicProduct from './pages/DynamicProduct'
import Men from './pages/Men'
import Women from './pages/Women'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about/:name' element={<Persondetails/>}/>
        <Route path='/product/:id' element={<DynamicProduct/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/product' element={<Product/>}>
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Women/>}/>
        </Route>
        
      </Routes>
    </div>

    // products/1
    // product/2 
    // product/3 

  )
}

export default App

