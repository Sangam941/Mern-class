import { createContext, useState } from "react"

export const TaskContextProvider = createContext()

const TaskContext = ({children}) => {
    const [allTask, setAllTask] = useState(()=>{
      const data = localStorage.getItem("task")
      console.log("get data ", data)

      return data? JSON.parse(data):[]
    })
    const [singleData, setSingleData] = useState({})

    const addNewTask = (task)=>{
        const newTask = {
            id: new Date(),
            // ...task
            title: task.Title,
            desc: task.Description
        }
        const updatedTask = [...allTask, newTask]

        setAllTask(updatedTask)


        localStorage.setItem("task", JSON.stringify(updatedTask))

    }

    const fetchSingleData = (id)=>{
      const data = allTask.filter((item)=>{
        return item.id == id
      })

      setSingleData(data)
    }

    const deleteItem = (id)=>{
      const data = allTask.filter((item)=>{
        return item.id !== id
      })

      setAllTask(data)

      localStorage.setItem("task", JSON.stringify(data))
    }


    const editItem = (id, updateTask)=>{

      let title = updateTask.Title
      let desc = updateTask.Description
      
      const data = allTask.map((item)=>{
        if(item.id == id){
          return (
            {...item, title, desc}
            // {id:1, title:'title', desc:'desc', title:"title3", desc:'second'}

            // {id:1, title:"title3",desc:"second"}
          )
        }
        else{
          return item
        }
      })

      console.log("after edited: ", data)

      setAllTask(data)
      localStorage.setItem("task", JSON.stringify(data))

      // {id:1, title:'title', desc:'desc'}, {id:1, title:'hello', desc:"hellod desc"}

      // item.id = updated.id
      // item.title = updated.id
      // item.desc = updated.desc
    }
  return (
    <TaskContextProvider.Provider value={{addNewTask, allTask, fetchSingleData, singleData, deleteItem, editItem}}>
      {children}
    </TaskContextProvider.Provider>
  )
}

export default TaskContext
