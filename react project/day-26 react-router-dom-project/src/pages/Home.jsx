
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'

function Home() {

    const [allData, setAllData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchData = async ()=>{
        setLoading(true)
        try{
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')  

            setAllData(data)
            console.log(data)
        }
        catch(error){
            console.log("Error occur:: ", error)
        }
        finally{
          setLoading(false)
        }
      }

      fetchData()
    }, [])
    
  return (
    loading?"loading.....":
    <div className='pt-4 flex gap-3 flex-wrap items-center justify-center'>
      {
        allData.map((item, index)=>{
            return (
                <div key={index}>
                    <Card title= {item.title} body={item.body} id={item.id}/>
                </div>
            )
        })
      }
    </div>
  )
}

export default Home
