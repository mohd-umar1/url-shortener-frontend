import React from 'react'
import { Card, Dropdown, DropdownItem,Button} from "flowbite-react";
import umar_pic from "../src/assets/umar_pic.jpeg"
import BgImg from '../src/assets/bg15.png'


const contact = () => {
  return (
    <div className=" bg-cover bg-center" style={{backgroundImage:`url(${BgImg})`}}>
    <div className="flex justify-center items-center">
     <Card
      className="max-w-sm  mx-10 my-25 "
      imgAlt="Umar Inamdar"
      imgSrc={umar_pic}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Umar Inamdar
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       Umar Inamdar is currenly pursuing Third Year B-Tech in AI-DS at KJSIT 
      </p>
      <div className='flex flex-row justify-center items-center'>
      <Button href="https://www.linkedin.com/in/umar-inamdar/" color="cyan" className='mx-5'>linked in</Button>
      <Button href="https://mail.google.com/mail/u/0/?fs=1&to=mohdumar.i@somaiya.edu&su=FROM_SHORTY&tf=cm" color="cyan" className='mx-5'>Email</Button>
      </div>
    </Card>
    </div>
    </div>
  )
}

export default contact