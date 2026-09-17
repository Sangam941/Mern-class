
import Navbar from './components/Navbar'
import Card from './components/Card'
import { useContext } from 'react'
import { userContextProvider } from './context/UserContext'
import { postContextProvider } from './context/PostContext'

const App = () => {
  const {count, allData} = useContext(userContextProvider)
  const {blog} = useContext(postContextProvider)
  return (
    <div className='h-screen bg-black text-white'>
      this is app {count}
          blog is {blog}

      {
        allData.map((item, index)=>{
            return (
                <div key={index}>
                    <Card title= {item.title} body={item.body} id={item.id}/>
                </div>
            )
        })
      }

  

      <Navbar/>
      <Card/>
    </div>
  )
}

export default App


// 1. create context file
// 2. wrap the APP using context file
// 3. create usercontext
// 4. use context
