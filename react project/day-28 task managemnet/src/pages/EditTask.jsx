import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useContext, useLayoutEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TaskContextProvider } from "../context/TaskContext";
import toast from "react-hot-toast";

const EditTask = () => {

    const {editItem} = useContext(TaskContextProvider)

    const navigate = useNavigate()

    const {id} = useParams()

    const {state} = useLocation()
    console.log(state)

    const {register, handleSubmit, formState: { errors },} = useForm({
        defaultValues:{
            Title:state.title,
            Description:state.desc
        }
    })

    const submitData = (data)=>{
        console.log("inside edit submit handler ",  data)
        editItem(id,data)
        navigate('/')
        toast.success("Task Updated Succesfully...")
    }

    // console.log("after task added: ", edited task)

  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-zinc-600 p-5 rounded-xl flex flex-col gap-4 items-center justify-center">
        <h1 className="font-semibold text-zinc-200">Edit Task</h1>

        <form
        onSubmit={handleSubmit(submitData)}
        className="flex flex-col gap-3">
          <Input label="Title" placeholder="Enter your email" type="text" register={register} errors={errors}/>

          <Input label="Description" placeholder="Enter your email" type="text" register={register} errors={errors}/>

          
          <input type="Submit" value="Edit Task" className="bg-blue-600 rounded-md px-2 py-1 cursor-pointer"  />
        </form>
      </div>
    </div>
  );
};

export default EditTask;
