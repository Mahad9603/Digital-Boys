import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from '@mui/material';

const About = () => {

    const team = [
        {img: "Images/ImageWrapper.png", name: "Full Name", title: "Job Title", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},
        {img: "Images/ImageWrapper.png", name: "Full Name", title: "Job Title", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},
        {img: "Images/ImageWrapper.png", name: "Full Name", title: "Job Title", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
      ]
    const clientlogos = [
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
                            Creative Workforce Behind Successful Journey!
                        </h3>
                    </div>
                    <div className='text[16px] flex flex-row justify-center text-center md:text-[28px] text-white'>
                        <p className='w-auto'>
                            Digital Boys core specialties are website design, UI, SEO and lead generation, which we offer as custom-made solutions to drive your business growth.
                        </p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col items-center font-[poppins] text-[#282825] py-10'>
                    <div className='text-[24px] md:text-[35px] font-[600]'>ABOUT US</div>
                    <div className='text-[14px] md:text-[17px] font-[400] w-[300px] text-center md:w-[874px] pt-3 pb-16'>Digital Boys is a digital marketing agency that offers technology-driven and strategic solutionsto enhance your company’s performance in the market.</div>
                    <div className='flex flex-col items-center md:flex-row md:justify-center space-y-5 md:space-y-0 md:space-x-10'>
                        <div className='w-[300px] md:w-[550px] md:h-[495px]'><img alt='logo' src='Images/aboutpic.png' /></div>
                        <div className='w-[300px] text-center md:w-[498px] text-[12px] md:text-[16px] font-[400] space-y-5'>
                            <div>Our story began with a simple thought: “Reformation needs to be part of our culture. Customers are transforming faster than we are, and if we don’t succeed in reaching them, we’re in misfortune.” We needed one brand that we could go to for trusted products and information. And when we couldn’t find what we were on the lookout for — and realized we weren’t without help — the idea for Digital Boys was brought forth.</div>
                            <div>With rich affluence of experience in the digital world, Artimization can provide a solution to any of your business’s marketing issues. We are more than capable of providing a professional and quality service.</div>
                            <div>Digital Boys was founded in 2011 by Digital Boys and Digital Boys as a full service, integrated and official Digital marketing firm, offering services to individuals and businesses. Depending upon the individual needs and challenges of each sector we serve, we have articulated our services such that we are able to help our clients excel in their niche. This way, we deliver not just a service but value and experience to our clients.</div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#EBEBEB] text-[#AC2624] flex flex-col md:flex-row justify-center md:space-x-48 space-y-5 md:space-y-0 py-16 font-[inter]'>
                    <div className=''>
                        <div className='font-[700] text-[40px] text-center'>12%</div>
                        <div className='font-[400] text-[14px] text-center'>Metric description</div>
                    </div>
                    <div>
                        <div className='font-[700] text-[40px] text-center'>87%</div>
                        <div className='font-[400] text-[14px] text-center'>Metric description</div>
                    </div>
                    <div>
                        <div className='font-[700] text-[40px] text-center'>$5000</div>
                        <div className='font-[400] text-[14px] text-center'>Metric description</div>
                    </div>
                    <div>
                        <div className='font-[700] text-[40px] text-center'>87%</div>
                        <div className='font-[400] text-[14px] text-center'>Metric description</div>
                    </div>
                </div>
                <div className='text-[#000000] font-[poppins] flex flex-col items-center py-24'>
                <div className='w-[300px] md:w-[530px]'>
                    <div className='text-[20px] md:text-[35px] font-[700] text-center pb-5'>Some of our tech experts</div>
                    <p className='text-[14px] md:text-[16px] font-[400] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.</p>
                </div>
                <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 pt-20'>
                  {team.map((t) => (
                    <div className='w-[330px] space-y-5'>
                      <div className='flex flex-row justify-center'><img alt='logo' src={t.img} /></div>
                      <div className='text-[16px] md:text-[20px] font-[700] text-center'>{t.name}</div>
                      <div className='text-[14px] md:text-[18px] font-[400] text-center'>{t.title}</div>
                      <div className='text-[12px] md:text-[16px] font-[400] text-center'>{t.des}</div>
                    </div>
                  ))}
                </div>
                </div>
                <div className='bg-[white] py-24'>
                <div className='text-[35px] text-center font-[poppins] font-[700]'>Clients Section</div>
                <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 py-16 space-y-8 md:space-y-0'>
                {clientlogos.map((c) => (
                    <div className='w-[150px] flex flex-row justify-center'><img alt='logo' src={c.img} /></div>
                ))}
                </div>
               </div>
               <div className='flex flex-col items-center pb-24 space-y-16'>
                    <div className='text-[30px] w-[300px] md:w-[1112px] md:text-[46px] font-[poppins] font-[700] text-center'>
                        14 years of building digital products and we are just getting started!
                    </div>
                    <div><Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>Start a project</Button></div>
               </div>
            </div>
        <Footer />
    </div>
  )
}

export default About;
