import React from 'react'
import { Button, ButtonGroup } from "flowbite-react";
import HeroImage from '../src/assets/hero_image.png'
import BgImg from '../src/assets/url_card_building_image_3.png'
import Sidebar from './sidebar.jsx'
import { Card } from "flowbite-react";
import Url_manage_pic from "../src/assets/url_manage_pic.jpg"
import Url_short_pic from "../src/assets/url_short_pic.jpg"
import analytics_pic from "../src/assets/analytics_img.jpg"


const landingpage = () => {
  return (
    <div>
    <section className='min-h-[calc(100vh)] grid grid-cols-1  items-center gap-12 px-6 lg:px-16 bg-cover bg-center'
    style={{backgroundImage:`url(${BgImg})`}}>
      <div className='flex flex-col justify-center items-center'>
      <h1 className='text-9xl font-semibold mb-6 italic text-white'>Shorty</h1>
      <h2 className='text-4xl font-light mb-6 text-[#ACD1FB] '>Short links. Smarter insights.</h2>
      <h2 className='text-2xl font-light mb-6 text-[#ACD1FB]'>
      Create clean, shareable links and track every click with powerful analytics.</h2>
      <ButtonGroup>
      {/* <Button color="cyan" className='text-xl font-semibold ' href="/login" >Get Started</Button> */}
    </ButtonGroup>
      </div>
    </section>
    <h2 className='flex justify-center items-center text-4xl font-semibold mb-2 mt-15 sm:justify-center '>Everything You Need to Manage Your Links</h2>
    <h2 className='flex justify-center items-center text-2xl font-light mb-2 sm:justify-center'>Shorty gives you the tools to create, customize, and track your links all in one simple platform.</h2>
    <div className='flex flex-col lg:flex-row bg-cover bg-center '>
      <Card
      className="max-w-sm gap-4 mx-10 my-20 flex justify-center items-center "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Url_short_pic} 
    >
      <h5 className="text-3xl font-light tracking-tight text-gray-900 dark:text-white">
        URL Shortening
      </h5>
      <p className="font-normal text-gray-700  dark:text-white">
        Long and complex URLs transformed into short, clean, and memorable links for effortless sharing across platforms.
      </p>
    </Card>
    <Card
      className="max-w-sm gap-4 mx-10 my-20 flex justify-center items-center "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Url_manage_pic}
    >
      <h5 className="text-3xl font-light tracking-tight  text-gray-900 dark:text-white">
        Link Management
      </h5>
      <p className="font-normal text-gray-700  dark:text-white">
        Centralized organization and management of all your links in one place, keeping URLs structured, accessible, and easy to maintain.
      </p>
    </Card>
    <Card
      className="max-w-sm gap-4 mx-10 my-20 flex justify-center items-center"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={analytics_pic}
    >
      <h5 className="text-3xl font-light  tracking-tight text-gray-900 dark:text-white">
        Analytics
      </h5>
      <p className="font-normal text-gray-700  dark:text-white">
        Detailed insights into link performance through click tracking, traffic sources, and audience engagement data.
      </p>
    </Card>
    </div>
    <a href="/login" className='flex justify-center items-center text-3xl font-light mb-15 text-[#1F2937] underline '>Take control of your links →</a>
    </div>
  )
}

export default landingpage