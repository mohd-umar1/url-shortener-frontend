import React,{useContext, useState} from 'react'
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import BgImg from '../src/assets/bg14.png'
import {useForm} from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import { RouterContextProvider, useNavigate } from 'react-router-dom';
import api from "../src/apis/api"
import { Contextprovider, useStoredContext } from './contextapi/contextapi';


const login = () => {
 
  const {settoken} = useStoredContext();
  const [loader,setloader] = useState((false));
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState:{errors}
  } = useForm({
    defaultValues:{
      username:"",
      password:"",
    }
  });

  const loginhandler = async (data)=>{
    setloader(true)
    try {
      const {data:response} = await api.post("api/auth/login",data);
      reset();
      toast.success("loggen in sucessfully")
      settoken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
      console.log(response.token);
      navigate("/dashboard")
    } catch (error) {
      console.error("login failed")
      toast.error("login failed")
       console.error("backend response:", error.response?.data);

    }finally{
      setloader(false)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-cover bg-center' 
    style={{backgroundImage:`url(${BgImg})`}}>
    <Toaster position='bottom-center'/>
    <Card className="min-w-[30vw] flex justify-center">
      <form onSubmit={handleSubmit(loginhandler)} className="flex flex-col gap-4 ">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" className=' font-light text-xl'>Username</Label>
          </div>
          <TextInput {...register("username")} id="username" type="text" placeholder="john123" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" className=' font-light text-xl'>Password</Label>
          </div>
          <TextInput {...register("password")}id="password1" type="password" required />
        </div>
        <Button type="submit" color="cyan" className=" font-semibold  text-xl">
          {loader?"logging in ...":"login"}
        </Button>
        <a href="/register" className="flex justify-center text-white  font-light text-xl underline">Register here</a>
      </form>
    </Card>
    </div>
  )
}

export default login