import React,{useState} from 'react'
import BgImg from '../src/assets/bg14.png'
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import api from "../src/apis/api"
import toast, { Toaster } from 'react-hot-toast';
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
  Card,
} from "flowbite-react";

const Register = () => {
  
  const navigate = useNavigate();
  const [loader,setloader] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState:{errors}
  }= useForm({
    defaultValues: {
        name:"",
        username:"",
        email:"",
        password:"",
    }
  });

  const  RegisterHandler = async (data)=>{
      setloader(true);
      try {
        const {data:response} = await api.post("api/auth/register",data);
        reset();
        toast.success('Registeration Sucessfull :)');
        navigate("/login");
        
      } catch (error) {
        console.error(error);
        toast.error('There was some error in Registeration :(');
        reset();
      }finally{
        setloader(false);
      }
  }

  return (
    <div className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center' style={{backgroundImage:`url(${BgImg})`}}>
      <Toaster position="bottom-center"/>
      <Card className="min-w-[30vw] flex justify-center">
     <form onSubmit={handleSubmit(RegisterHandler)} className="flex max-w-2md flex-col gap-4">
       <div>
        <div className="mb-2 block">
          <Label htmlFor="name"  className=' font-light text-xl'> Name</Label>
        </div>
        <TextInput id="name" type="text" placeholder="eg-john doe" required shadow
        {...register("name")} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username"  className=' font-light text-xl'> Username</Label>
        </div>
        <TextInput id="username" type="text" placeholder="eg-johndoe123" required shadow 
        {...register("username")}/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email"  className=' font-light text-xl'> Email</Label>
        </div>
        <TextInput id="email" type="email" placeholder="eg-jhondoe@email.com" required shadow 
        {...register("email")}/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password"  className=' font-light text-xl'> Password</Label>
        </div>
        <TextInput id="password" type="password" required shadow 
        {...register("password")}/>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className='flex  font-light text-xl'>
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500  font-light text-xl">
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button 
      disabled={loader}
      type="submit" color="cyan" className=' font-semibold  text-xl'>
        {loader ? "Registering..." : "Register"}
      </Button>
      <a href="/login" className="flex justify-center text-white  font-light text-xl underline">Already have a account</a>
    </form>
    </Card>
    </div>
  )
}

export default Register