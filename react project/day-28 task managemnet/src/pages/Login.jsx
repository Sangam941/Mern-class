import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useContext } from "react";
import { AuthContexProvider } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod'

const Login = () => {

  const schema = z.object({
    email: z
    .string()
    .email("Invalid email address"),

    password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, { message: "Must contain one uppercase letter" })
    .regex(/[0-9]/, { message: "Must contain one number" }),
  })

    const {setAuth} = useContext(AuthContexProvider)

    const navigate = useNavigate()

    const {register, handleSubmit, formState: { errors },} = useForm({
      resolver: zodResolver(schema)
    })

    const submitData = (data)=>{
        console.log(data)
        setAuth(data) 
        navigate('/')

        localStorage.setItem("authData", JSON.stringify(data))
        localStorage.setItem("isAuth", true)
        toast.success("Login Successfully...")

    }

  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-zinc-600 p-5 rounded-xl flex flex-col gap-4 items-center justify-center">
        <h1 className="font-semibold text-zinc-200">Login your Account</h1>

        <form
        onSubmit={handleSubmit(submitData)}
        className="flex flex-col gap-3">
          <Input label="email" placeholder="Enter your email" type="text" register={register} errors={errors}/>
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          <Input
            label="password"
            placeholder="Enter your Password"
            type="password"
            register={register}
            errors={errors}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          
          <input type="Submit" className="bg-blue-600 rounded-md px-2 py-1 cursor-pointer"  />
        </form>
      </div>
    </div>
  );
};

export default Login;
