import React from 'react'
import { Card, Dropdown, DropdownItem } from "flowbite-react";
import umar_pic from "../src/assets/umar_pic.jpeg"
import BgImg from '../src/assets/bg2.png'

const privacy = () => {
  return (
    <div className=" bg-cover bg-center" style={{backgroundImage:`url(${BgImg})`}}>
        <div className="flex justify-center items-center">
         <Card
          className="max-w-sm  mx-10 my-25 "
          imgAlt="Umar Inamdar"
          imgSrc={umar_pic}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           See This guy
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
           You Really Think Website Made by Him has a Privacy policy 
          </p>
        </Card>
        </div>
        </div>
  )
}

export default privacy