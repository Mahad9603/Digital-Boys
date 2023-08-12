import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Navbar = () => {

    let [open,setOpen] = useState(false);

  return (
    <div>
         <div className="absolute top-0 md:flex flex-row items-center justify-around py-4 px-7 z-50 w-full md:py-12 font-[poppins]">
                <div>
                    <Link to="/"><img src='Images/logo.png' alt='logo' /></Link>
                </div>
                <div className={`bg-black bg-opacity-90 md:bg-transparent md:opacity-100 space-y-5 md:space-y-0 md:flex md:items-center md:space-x-10 absolute md:static text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pt-0 pt-5 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                    <div className='text-xl pl-9 md:pl-0 hover:text-[#D02727] hover:underline hover:underline-offset-[14px]'>
                        <Link to='/Services'><h1>SERVICES</h1></Link>
                    </div>
                    <div className='text-xl pl-9 md:pl-0 hover:text-[#D02727] hover:underline hover:underline-offset-[14px]'>
                        <Link to="/About"><h1>ABOUT</h1></Link>
                    </div>
                    <div className='text-xl pl-9 md:pl-0 hover:text-[#D02727] hover:underline hover:underline-offset-[14px]'>
                        <Link to='/Careers'><h1>CAREERS</h1></Link>
                    </div>
                    <div className='text-xl pl-9 md:pl-0 hover:text-[#D02727] hover:underline hover:underline-offset-[14px]'>
                        <Link to='/Blog'><h1>BLOGS</h1></Link>
                    </div>
                    <div className='text-xl pl-9 md:pl-0 hover:text-[#D02727] hover:underline hover:underline-offset-[14px]'>
                        <Link to='/Contact'><h1>CONTACT</h1></Link>
                    </div>
                    <div className="flex flex-col md:pb-0 pb-8 items-center md:space-y-0 space-x-0 space-y-5 md:flex-row cursor-pointer md:space-x-5">
                        <Button 
                            style={{
                                backgroundColor: "transparent",
                                padding: "10px 30px 10px 30px",
                                border: " 2px solid #AC2624",
                                color: "white",
                                fontSize: "16px",
                                borderRadius: "4px"
                            }}> 
                            +1234567890<img alt='logo' src='Images/navbuttonicon.svg' />
                        </Button>
                        <Button 
                            style={{
                                backgroundColor: "#AC2624",
                                padding: "10px 30px 10px 30px",
                                border: " 1.5px solid #AC2624",
                                color: "white",
                                fontSize: "16px",
                                borderRadius: "4px"
                            }}>
                                QOUTE
                        </Button>
                </div>
                </div>
                <div onClick={()=>setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden'>
                  <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
            </div>
    </div>
  )
}

export default Navbar;
