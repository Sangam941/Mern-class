import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useContext } from "react";
import { AuthContexProvider } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

    const {setAuth} = useContext(AuthContexProvider)

    const navigate = useNavigate()

    const {register, handleSubmit, formState: { errors },} = useForm()

    const submitData = (data)=>{
        console.log(data)
        setAuth(data) 
        navigate('/')

        toast.success("Login Successfully...")
    }

  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-zinc-600 p-5 rounded-xl flex flex-col gap-4 items-center justify-center">
        <h1 className="font-semibold text-zinc-200">Login your Account</h1>

        <form
        onSubmit={handleSubmit(submitData)}
        className="flex flex-col gap-3">
          <Input label="Email" placeholder="Enter your email" type="text" register={register} errors={errors}/>
          {errors.Email && <p className="text-red-500 text-sm">Email is required.</p>}
          <Input
            label="Password"
            placeholder="Enter your Password"
            type="password"
            register={register}
            errors={errors}
          />
          {errors.Password && <p className="text-red-500 text-sm">Password is required.</p>}
          
          <input type="Submit" className="bg-blue-600 rounded-md px-2 py-1 cursor-pointer"  />
        </form>
      </div>
    </div>
  );
};

export default Login;
