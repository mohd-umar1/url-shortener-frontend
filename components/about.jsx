import React from 'react'
import BgImg from '../src/assets/bg8.png'

const about = () => {
  return (
    <div className='lg:px-2 lg:py-6 bg-cover bg-center' style={{backgroundImage:`url(${BgImg})`}}>
       <div className="mx-auto">
        <div className="flex flex-col" >
        <div className='flex items-center justify-center gap-2 mb-4'>
        <h1 className=" text-4xl font-bold  text-[#1F2937]">
          About Us
        </h1>
        {/* <img src="\src\assets\linklogo.png" height={100} width={100} alt="Shorty logo" /> */}
        </div>
        <div className="flex flex-row items-start gap-8 mb-4 lg:mx-50 mx-5">
        <div className="flex flex-col" >
          <h3 className="text-2xl  text-[#1F2937] mb-6 leading-relaxed font-semibold italic" >"Shorty is a URL shortening and analytics service built to make links shorter, cleaner, and easier to manage while providing useful insights into their performance."</h3>
         <h2 className="text-2xl text-[#1F2937] leading-relaxed font-semibold " >Built Beyond URL Shortening</h2>
        <p className="text-lg  text-gray-600 leading-relaxed mb-8  ">
          Shorty gives users the ability to manage their links and understand how they perform. Each shortened URL can become a source of useful information, helping users monitor engagement and make better decisions about the links they share.
        </p>
        <h2 className="text-2xl text-[#1F2937] leading-relaxed font-semibold" >Powerful Link Management</h2>
        <p className="text-lg  text-gray-600 leading-relaxed mb-6 ">
         More than just a URL shortener, the platform gives users the ability to manage their links and understand how they perform. Each shortened URL can become a source of useful information, helping users monitor engagement and make better decisions about the links they share.
        </p>
        <h2 className="text-2xl  text-[#1F2937] leading-relaxed font-semibold" >Meaningful Analytics</h2>
        <p className="text-lg  text-gray-600 leading-relaxed mb-6 ">
        The platform provides a centralized space where users can create, organize, and manage their shortened URLs. This makes it easier to keep track of important links, access them when needed, and maintain a clear overview of the URLs being shared across different platforms.
        </p>
        </div>
        {/* <img src="\src\assets\url_ilustration.jpg" className="w-96 h-96 " alt="illustration" /> */}
        </div>
        </div>
        </div>
       </div>
  )
}

export default about