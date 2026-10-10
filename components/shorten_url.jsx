import {React, useState} from 'react'
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Contextprovider,useStoredContext } from '.././components/contextapi/contextapi'
import BgImg from '../src/assets/bg6.png'
import toast, { Toaster } from 'react-hot-toast';
import {useForm} from "react-hook-form"
import api from '../src/apis/api';

const shorten_url = () => {
  const [loading,setloding] = useState(false);
  const {token} = useStoredContext();
  const [response, setResponse] = useState({});

   const {
      register,
      handleSubmit,
      reset,
      formState:{errors}
    } = useForm({
      defaultValues:{
        originalURL:"",
      }
    });

    const submithandler = async (data)=> {
         setloding(true);
          setResponse({});
          try {
           const {data:response} = await api.post("api/url/shorten",data,{
              headers:{
                            "Content-Type":"application/json",
                             Accept:"application/json",
                             Authorization: "Bearer "+token,
                          }
            })
            setResponse(response);
            reset();
            console.log(response)
            navigator.clipboard.writeText(
              `http://localhost:8080/${response.shortURL}`
            )
            toast.success("Short Url Copied to clipboard");
  
          } catch (error) {
            console.error(error);
            toast.error("Error")
          }finally{
            setloding(false);
          }
    }
  return (
    <div className='flex justify-center items-center h-screen bg-cover bg-center'
    style={{backgroundImage:`url(${BgImg})`}} >
    <Card className="min-w-[30vw] flex justify-center">
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit(submithandler)}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="url" className=' font-light text-xl'>Enter Long URL</Label>
          </div>
          <TextInput {...register("originalURL")} id="originalURL" type="text" placeholder="www.google.com" required />
        </div>
        <Button type="submit" color="cyan" className=" font-semibold  text-xl">
          {loading?"Shortening url" :"Shorten it !"}
        </Button>
      </form>
      <h1 className='dark:text-white'>{response.shortURL? `original url: ${response.originalURL}`:``}</h1>
      <h1 className='dark:text-white'>{response.shortURL? `shorturl: http://localhost:8080/${response.shortURL}`:``}</h1>
    </Card>
    </div>
  )
}

export default shorten_url