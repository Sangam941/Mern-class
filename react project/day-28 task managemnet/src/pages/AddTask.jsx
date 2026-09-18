import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContextProvider } from "../context/TaskContext";
import toast from "react-hot-toast";

const AddTask = () => {

    const {addNewTask, allTask} = useContext(TaskContextProvider)

    const navigate = useNavigate()

    const {register, handleSubmit, formState: { errors },} = useForm()

    const submitData = (data)=>{
        console.log(data)
        addNewTask(data)
        navigate('/')
        toast.success("new task added...")
    }

    console.log("after task added: ", allTask)

  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-zinc-600 p-5 rounded-xl flex flex-col gap-4 items-center justify-center">
        <h1 className="font-semibold text-zinc-200">Add New Task</h1>

        <form
        onSubmit={handleSubmit(submitData)}
        className="flex flex-col gap-3">
          <Input label="Title" placeholder="Enter your email" type="text" register={register} errors={errors}/>

          <Input label="Description" placeholder="Enter your email" type="text" register={register} errors={errors}/>

          
          <input type="Submit" value="Add New Task" className="bg-blue-600 rounded-md px-2 py-1 cursor-pointer"  />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
