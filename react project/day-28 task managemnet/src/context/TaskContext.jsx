import { createContext, useState } from "react"

export const TaskContextProvider = createContext()

const TaskContext = ({children}) => {
    const [allTask, setAllTask] = useState([])

    const addNewTask = (task)=>{
        const newTask = {
            id: new Date(),
            // ...task
            title: task.Title,
            desc: task.Description
        }

        setAllTask([...allTask, newTask])
    }
  return (
    <TaskContextProvider.Provider value={{addNewTask, allTask}}>
      {children}
    </TaskContextProvider.Provider>
  )
}

export default TaskContext
