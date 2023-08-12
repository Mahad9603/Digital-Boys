import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const Services = () => {

    const navigate = useNavigate();

    const services = [
        {img: "Images/1.svg" , title: "Branding Development", des: {1: "Visual Identity", 2: "Brand Assets", 3: "Brand Guidelines"} },
        {img: "Images/2.svg" , title: "Digital Marketing", des: {1: "Search Engine Optimization", 2: "Social media marketing", 3: "Improvement in ROI"} },
        {img: "Images/3.svg" , title: "Website Development", des: {1: "Front-end Development", 2: "CMS Development", 3: "Web Apps"} },
        {img: "Images/4.svg" , title: "Graphic Design", des: {1: "Logo Design", 2: "Borchure Design", 3: "Flyer Design, Many more"} }
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
                            World-class software solutions for business across the globe.
                            </h3>
                        </div>
                        <div className='text[16px] flex flex-row justify-center text-center md:text-[28px] text-white'>
                            <p className='w-auto'>
                            Design. Development. Consultancy.
                            </p>
                        </div>
                        </div>
                        </div>
          </div>
          <div className='flex flex-col items-center font-[poppins]'>
                <div className='space-y-5 pt-10'>
                    <div className='font-[400] text-[12px] md:text-[17px] text-center'>DISCOVERY . DESIGN . DEVELOPMENT . TESTING</div>
                    <div className='font-[600] text-[20px] md:text-[35px] text-center'>Digital demand thrives in our hands</div>
                    <div className='flex flex-row justify-center font-[400] text-[12px] md:text-[17px] w-auto md:w-[874px] text-center px-10 md:px-0'>We bring to you award-winning products, excellent UI/UX, and a world-class tech talent of web and mobile arena that bridges the gap between the creative and technology world. At Cubix, our solutions become a technology brand that others take inspiration from.</div>
                </div>
                <div className='py-20 font-[inter] text-[#AC2624] flex flex-col items-center md:flex-row md:justify-center space-y-5 md:space-y-0 md:space-x-8'>
                    <div className='w-[100px] h-[80px] md:w-[264px] md:h-[167px] flex flex-col items-center justify-center space-y-2'><div className='text-[20px] md:text-[40px] font-[700]'>25%</div><div className='text-[10px] text-center md:text-[14px] font-[400]'>INCREASED RESPONSE TIME</div></div>
                    <div className='w-[100px] h-[80px] md:w-[264px] md:h-[167px] flex flex-col items-center justify-center space-y-2'><div className='text-[20px] md:text-[40px] font-[700]'>85%</div><div className='text-[10px] text-center md:text-[14px] font-[400]'>FASTER DELIVERY TIME</div></div>
                    <div className='w-[100px] h-[80px] md:w-[264px] md:h-[167px] flex flex-col items-center justify-center space-y-2'><div className='text-[20px] md:text-[40px] font-[700]'>95%</div><div className='text-[10px] text-center md:text-[14px] font-[400]'>CLIENT SATISFACTION INDEX</div></div>
                    <div className='w-[100px] h-[80px] md:w-[264px] md:h-[167px] flex flex-col items-center justify-center space-y-2'><div className='text-[20px] md:text-[40px] font-[700]'>75%</div><div className='text-[10px] text-center md:text-[14px] font-[400]'>CLIENT RETENTION RATE</div></div>
                </div>
                <div className='drop-shadow-lg h-auto w-[300px] md:w-[1120px] md:h-[547px] mb-8 flex flex-col items-center md:flex-row md:justify-between p-10'>
                    <div className='w-[300px] md:w-[445px] font-[poppins] space-y-8'>
                        <div className='md:text-left text-center text-[18px] font-[400] text-[#AC2624] underline'>E-COMMERCE, WEBSITE DESIGN</div>
                        <div className='text-[31px] md:text-left text-center font-[400] text-[#242424]'>We create design & develop digital business that generate results</div>
                        <div className='text-[16px] md:text-left text-center font-[400] text-[#5B5B5B]'>
                            Either you are zero dollar business or runninga million 
                            dollar company. You always need change, innovation
                            and creativity. Our digital capabilities knows what
                            makes you great in untouched Space!
                        </div>
                        <div className='flex flex-row justify-center md:justify-start'>
                            <Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>Our Portfolio<img className='pl-4' alt='forward' src='Images/Vectorforward.svg' /></Button>
                        </div>
                    </div>
                    <div className=''>
                <div className='overflow-hidden grid grid-cols-1 md:grid-cols-2 h-[547px] gap-2'>
                  {services.map((p) => (
                    <div className='px-5 py-10  space-y-4 bg-[#F7F7F7] w-[200px] h-[320px] md:w-[260px] md:h-[400px]'>
                      <div className='flex flex-row justify-center'><img alt='logo' src={p.img} /></div>
                      <div className='text-center text-[16px] md:text-[31px]'>{p.title}</div>
                      <div className='text-center text-[12px] md:text-[16px] text-[#5B5B5B]'><p>{p.des[1]}</p><p>{p.des[2]}</p><p>{p.des[3]}</p></div>
                      <div className='flex flex-row justify-center'><Button onClick={() => navigate("/")} style={{ color: "#D02727", fontSize: "16px", fontFamily: "poppins" }}>Read More</Button></div>
                    </div>
                  ))}
                </div>
                    </div>
                </div>
          </div>
          <div className='bg-[#AC2624] font-[poppins] text-white flex flex-col items-center space-y-8 py-16'>
                    <div className='text-center text-[24px] md:text-[40px] font-[700]'>Do you have any Question?</div>
                    <div className='text-[14px] md:text-[21px] font-[400] w-[300px] md:w-[1090px] text-center'>Digital Boys team believes in entertaining our visitors and is ready to answer your questions.Type down your thoughts and get perfect possible solutions to your questions.</div>
                    <div className='flex flex-col items-center md:flex-row md:justify-center space-y-5 md:space-y-0 md:space-x-10'>
                      <Button onClick={() => navigate("/contact")} style={{ background: "#282825", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px", border:"1px solid transparent" }}>CONTACT US</Button>
                      <Button style={{ background: "transpatent", color: "white", fontSize: "16px", textDecoration:"underline", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px", border:"1px solid white" }}>BUSINESS PROFILE</Button>
                    </div>
          </div>
          <div className='bg-[white] font-[poppins] flex flex-col items-center py-12'>
                    <div className='w-[300px] md:w-[1112px] text-[32px] md:text-[48px] font-[700] text-center pb-20'>14 years of building digital products and we are just getting started!</div>
                    <div>
                         <Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>Start a project</Button>
                    </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services;
