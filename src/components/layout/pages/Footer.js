import React from 'react'

const Footer = () => {
  return (
    <div className='font-[poppins] bg-[#282825] text-white'> 
     <div className='flex flex-row justify-center py-20'><img src='Images/logo.png' alt='logo' /></div>
      <div className='flex flex-col items-center md:flex-row justify-around md:items-start space-y-10 md:space-y-0 cursor-pointer'>
        <div className='flex flex-col items-center md:items-start'>
        <h3 className='font-bold pb-4'>COMPANY</h3>
        <ul className='space-y-4 flex flex-col items-center md:items-start'>
          <li>How it works</li>
          <li>Pricing</li>
          <li>Demo</li>
        </ul>
      </div>
      <div className='flex flex-col items-center md:items-start'>
      <h3 className='font-bold pb-4'>RESOURCES</h3>
      <ul className='space-y-4 flex flex-col items-center md:items-start'>
        <li>Blog post name goes here</li>
        <li>Blog post name goes here</li>
        <li>Blog post name goes here</li>
        <li>See all resources</li>
      </ul>
     </div>
     <div className='flex flex-col items-center md:items-start'>
      <h3 className='font-bold pb-4'>ABOUT</h3>
      <ul className='space-y-4 flex flex-col items-center md:items-start'>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
     </div>
     <div className='flex flex-col items-center md:items-start'>
      <h3 className='font-bold pb-4'>ABOUT</h3>
      <ul className='space-y-4 flex flex-col items-center md:items-start'>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
     </div>
      </div>
     <div className='flex flex-row justify-center pb-6 pt-16'>Copyright © 2023 Company name</div>
    </div>
  )
}

export default Footer;
