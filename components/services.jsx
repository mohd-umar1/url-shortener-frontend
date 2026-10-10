import React from 'react'
import { Card } from "flowbite-react";
import Url_manage_pic from "../src/assets/url_manage_pic.jpg"
import Url_short_pic from "../src/assets/url_short_pic.jpg"
import analytics_pic from "../src/assets/analytics_img.jpg"
import BgImg from '../src/assets/bg2.png'

const services = () => {
  return (
    <div className='flex flex-col lg:flex-row bg-cover bg-center' style={{backgroundImage:`url(${BgImg})`}}>
      <Card
      className="max-w-sm gap-4 mx-10 my-20 flex justify-center items-center "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Url_short_pic} 
    >
      <h5 className="text-2xl font-bold  tracking-tight text-gray-900 dark:text-white">
        URL Shortening
      </h5>
      <p className="font-normal text-gray-700  dark:text-gray-400">
        Long and complex URLs transformed into short, clean, and memorable links for effortless sharing across platforms.
      </p>
    </Card>
    <Card
      className="max-w-sm gap-4 mx-10 my-20 flex justify-center items-center "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Url_manage_pic}
    >
      <h5 className="text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
        Link Management
      </h5>
      <p className="font-normal text-gray-700  dark:text-gray-400">
        Centralized organization and management of all your links in one place, keeping URLs structured, accessible, and easy to maintain.
      </p>
    </Card>
    <Card
      className=" max-w-sm gap-4 mx-10 my-20 flex justify-center items-center"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={analytics_pic}
    >
      <h5 className="text-2xl font-bold  tracking-tight text-gray-900 dark:text-white">
        Analytics
      </h5>
      <p className="font-normal text-gray-700  dark:text-gray-400">
        Detailed insights into link performance through click tracking, traffic sources, and audience engagement data.
      </p>
    </Card>
    </div>
  )
}

export default services