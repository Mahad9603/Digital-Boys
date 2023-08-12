import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useForm, Controller } from "react-hook-form";

const Careers = () => {

    const { control } = useForm();

    const recruitment = [
        {img: "Images/recr1.svg", name: "Application", des: "Submit your application through our website. Your application is being read by real humans."},
        {img: "Images/recr2.svg", name: "Interview", des: "Let us get familiar with your competencies and experience in the field." },
        {img: "Images/recr3.svg", name: "Offer", des: "Congratulations! You have made it. Sign the agreement and you are on-board with us."}
    ]

    const popularJobs = [
        {date: "Apr 03 2023", name: "Software Developer", depart: "Human Resources & Recruitment",
        des: "We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!", 
        mapIcon: "Images/LocationIcon.svg", location: "Sydney > CBD, Inner West & Eastern",
        dollarIcon: "Images/SalaryIcon.svg", salaray: "$80,000 - $99,999 + Super"},

        {date: "Apr 03 2023", name: "UI/UX Designer", depart: "Human Resources & Recruitment",
        des: "We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!", 
        mapIcon: "Images/LocationIcon.svg", location: "Sydney > CBD, Inner West & Eastern",
        dollarIcon: "Images/SalaryIcon.svg", salaray: "$80,000 - $99,999 + Super"},

        {date: "Apr 03 2023", name: "Graphic Designer", depart: "Human Resources & Recruitment",
        des: "We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!", 
        mapIcon: "Images/LocationIcon.svg", location: "Sydney > CBD, Inner West & Eastern",
        dollarIcon: "Images/SalaryIcon.svg", salaray: "$80,000 - $99,999 + Super"},

        {date: "Apr 02 2023", name: "IT Assistant", depart: "Human Resources & Recruitment",
        des: "We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!", 
        mapIcon: "Images/LocationIcon.svg", location: "Sydney > CBD, Inner West & Eastern",
        dollarIcon: "Images/SalaryIcon.svg", salaray: "$80,000 - $99,999 + Super"},

        {date: "Apr 02 2023", name: "IT Senior Associate", depart: "Human Resources & Recruitment",
        des: "We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!", 
        mapIcon: "Images/LocationIcon.svg", location: "Sydney > CBD, Inner West & Eastern",
        dollarIcon: "Images/SalaryIcon.svg", salaray: "$80,000 - $99,999 + Super"},

        {date: "Apr 02 2023", name: "IT Support Assistant", depart: "Human Resources & Recruitment",
        des: "We are looking for an enthusiastic and confident individual who has experience in Recruitment. Join our wonderful team and elevate your career!", 
        mapIcon: "Images/LocationIcon.svg", location: "Sydney > CBD, Inner West & Eastern",
        dollarIcon: "Images/SalaryIcon.svg", salaray: "$80,000 - $99,999 + Super"}
    ]

    const clientLogos = [
        {img: "Images/LogoWrapper1.png"},
        {img: "Images/LogoWrapper2.png"},
        {img: "Images/LogoWrapper3.png"},
        {img: "Images/LogoWrapper4.png"},
        {img: "Images/LogoWrapper5.png"},
        {img: "Images/LogoWrapper6.png"}
      ]

  return (
    <div>
        <Navbar />
            <div>
                <div style={{
                                backgroundImage: "url('Images/mainpageimagemasked.png')",
                            }}
                                className='w-full h-screen bg-no-repeat bg-cover font-[poppins]'
                            >
                                <div className='bg-black w-full h-screen bg-opacity-70 flex flex-col justify-center items-center'> 
                                <div className='space-y-10 w-[300px] md:w-auto'>
                                <div className='text-white'>
                                    <h3 className='text-[30px] text-center md:text-[70px] font-[700]'>
                                    Careers
                                    </h3>
                                </div>
                                <div className='text[16px] flex flex-row justify-center text-center md:text-[28px] text-white'>
                                    <p className='w-auto'>
                                    ou’ll be part of an inclusive and diverse team, and you’ll receive the training you
                                    need to help keep you and us greater than.
                                    </p>
                                </div>
                                </div>
                                </div>
                </div>
                <div className='font-[poppins] flex flex-col items-center space-y-5 py-20'>
                    <div className='text-[30px] md:text-[45px] font-[600] text-center'>Our recruitment process</div>
                    <div className='text-[14px] md:text-[17px] font-[400] text-center w-[300px] md:w-[700px]'>Cubix aims to build high-quality software while also
                         fostering an enjoyable work environment that allows everyone
                          the opportunity to reach their highest potential.</div>
                    <div className='flex flex-col items-center md:flex-row md:justify-center space-y-5 md:space-y-0 md:space-x-14 pt-14'>
                        {recruitment.map((r) => (
                             <div className='flex flex-col items-center space-y-5'>
                               <div><img alt='logo' src={r.img} /></div>
                               <div className='text-center text-[31px] font-[400]'>{r.name}</div>
                               <div className='text-center text-[16px] font-[400] w-[300px]'>{r.des}</div>
                             </div>
                        ))}
                    </div>
                </div>
                <div className='bg-[#F7F7F7] font-[poppins] flex flex-col items-center pt-10'>
                        <div className='text-[30px] md:text-[45px] font-[600] text-center'>Explore popular jobs</div>
                        <div className='text-[16px] md:text-[22px] font-[300] text-center'>Join our innovative and dynamic team.</div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-20'>
                            {popularJobs.map((p) => (
                                <div className='bg-[#F2F2F2] py-16 px-10 space-y-5'> 
                                    <div className='font-[kanit] font-[500] text-[18px] text-center'>{p.date}</div>
                                    <div className='font-[400] text-[30px] text-center'>{p.name}</div>
                                    <div className='font-[600] text-[14px] text-center'>{p.depart}</div>
                                    <div className='font-[400] text-[14px] text-center w-[300px]'>{p.des}</div>
                                    <div className='flex flex-row justify-center space-x-2'><img alt='logo' src={p.mapIcon} /><p className='text-[14px] font-[400]'>{p.location}</p></div>
                                    <div className='flex flex-row justify-center space-x-2'><img alt='logo' src={p.dollarIcon} /><p className='text-[14px] font-[400]'>{p.salaray}</p></div>
                                    <div className='flex flex-row justify-center'><Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>Check Detail</Button></div>
                                </div>
                            ))}
                        </div>
                </div>
                <div className='bg-[#282825] font-[poppins] text-[white] flex flex-col items-center md:flex-row md:justify-around py-16'>
                  <div className='space-y-5 pt-16 md:pt-0'>
                      <div className='text-[20px] text-center md:text-left md:text-[30px] font-[700] w-[300px] md:w-[402px]'>Want to speak with anSEO strategist? Reach us here!</div>
                      <div className='space-y-5 flex flex-col items-center md:items-start'>
                          <p className='text-[#AC2624] text-[16px] font-[600]'>CALL US:</p>
                          <p className='flex flex-row'><img alt='logo' className='pr-2' src='Images/Phone.svg' />+12345678900000</p>
                      </div>
                      <div className='space-y-5 flex flex-col items-center md:items-start'>
                          <p className='text-[#AC2624] text-[16px] font-[600]'>EMAIL:</p>
                          <p className='flex flex-row'><img alt='logo' className='pr-2' src='Images/EnvelopeSimple.svg' />info@digitalboys.com</p>
                      </div>
                      <div className='space-y-5 flex flex-col items-center md:items-start'>
                          <p className='text-[#AC2624] text-[16px] font-[600]'>FAX:</p>
                          <p className='flex flex-row'><img alt='logo' className='pr-2' src='Images/MapPin.svg' />Seriously?</p>
                      </div>
                  </div>
                  <div className='space-y-5'>
                      <div className='text-[20px] md:text-[30px] font-[700] text-center md:text-left'>Apply for an internship now.</div>
                      <div className='space-y-5'>
                          <div className='flex flex-col md:flex-row space-y-5 md:space-x-5 md:space-y-0'>
                                <Controller
                                  name="email"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField className='w-[250px] md:w-full'
                                      sx={{
                                        background: "white",
                                        borderRadius: "4px"
                                    }}
                                      {...field}
                                      placeholder="Your Email"
                                    />
                                  )}
                                />  
                          </div>
                      </div>
                      <div className='flex flex-row justify-center md:items-start'><Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>Increase my sales</Button></div>
                      <div className='text-[16px] font-[400] text-center md:text-left'>Will contact you in 1 working day*</div>
                  </div>
                </div>
                <div className='bg-[white] py-24'>
                     <div className='text-[35px] text-center font-[poppins] font-[700]'>Clients Section</div>
                     <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 py-16 space-y-8 md:space-y-0'>
                    {clientLogos.map((c) => (
                     <div className='w-[150px] flex flex-row justify-center'><img alt='logo' src={c.img} /></div>
                      ))}
                    </div>
                 </div>
            </div>
        <Footer />
    </div>
  )
}

export default Careers;
