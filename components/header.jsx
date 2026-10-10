import React, { useState } from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Contextprovider, useStoredContext } from './contextapi/contextapi';

const header = () => {
  const {token,settoken} = useStoredContext();
  const login_buttonhandler = ()=>{
    localStorage.removeItem("JWT_TOKEN");
    settoken("")
  }
  return (
    <Navbar fluid rounded className='sticky top-0 rounded-none z-50' >
      <NavbarBrand >
        {/* <img src="\src\assets\hero.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-4xl font-semibold italic dark:text-white">Shorty</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button color='cyan' className='text-xl font-semibold  ' href={token?undefined:"/login"}
        onClick={token ? login_buttonhandler : undefined}>{token?"logout":"login"}</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink id="home" href="/" className='text-xl'>
          Home
        </NavbarLink>
        <NavbarLink id="about" href="/about" className='text-xl'>About</NavbarLink>
        {/* <NavbarLink id="services" href="/services" className='text-xl'>Services</NavbarLink> */}
         <NavbarLink id="dashboard" href={token?"/dashboard":"/login"} className='text-xl'>Get Started ! </NavbarLink>
         <NavbarLink id="contact" href="/contact" className='text-xl'>Contact</NavbarLink>

      </NavbarCollapse>
    </Navbar>
  )
}

export default header