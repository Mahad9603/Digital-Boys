import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from '@mui/material';



const JobDetail = () => {
   
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
                        Software Developer
                        </h3>
                    </div>
                    <div className='text[16px] flex flex-row justify-center text-center md:text-[28px] text-white'>
                        <p className='w-auto'>
                        Job Type: Full Time   No of Vacancies:02
                        </p>
                    </div>
                    <div className='flex flex-row justify-center'>
                     <Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>APPLY NOW</Button>
                    </div>
                    </div>
                    </div>
                 </div>
                 <div className='text-[#282825] font-[poppins] flex flex-col items-center py-20 space-y-8'>
                    <div className='text-[45px] font-[600] text-center'>Job Details</div>
                    <div className='text-[17px] font-[400] text-center w-[300px] md:w-[650px]'>Cubix aims to build high-quality software while also fostering an enjoyable work environment that allows everyone the opportunity to reach their highest potential.</div>
                    <div className='flex flex-col items-center md:flex-row md:justify-center md:items-start'>
                        <div className='space-y-8'>
                            <div className='text-[#001833] text-[36px] font-[700] text-center md:text-left'>Software Developer</div>
                            <div className='space-y-3'>
                                <p className='text-[24px] font-[500]'>Who Are We Looking For</p>
                                <ul className='space-y-3 list-disc'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                            <div className='space-y-3'>
                                <p className='text-[24px] font-[500]'>What You Will Be Doing</p>
                                <ul className='space-y-3 list-disc'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                            <div className='space-y-3'>
                                <p className='text-[24px] font-[500]'>Bonus Points for Familiarity with</p>
                                <ul className='space-y-3 list-disc'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                            <div className='w-[300px] md:w-[650px] space-y-3'>
                                <p className='text-[24px] font-[500]'>Educational Requirement</p>
                                <p>
                                 Contrary to popular belief, Lorem Ipsum is not simply random text.
                                  It has roots in a piece of classical Latin literature from 45 BC,
                                   making it over 2000 years old. Richard McClintock, a Latin professor
                                    at Hampden-Sydney College in Virginia, looked up one of the more obscure
                                     Latin words, consectetur, from a Lorem Ipsum passage, and going
                                </p>
                            </div>
                            <div className='space-y-3'>
                                <p className='text-[24px] font-[500]'>Salary</p>
                                <ul className='space-y-3 list-disc'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                            <div className='space-y-3'>
                                <p className='text-[24px] font-[500]'>Working Hours</p>
                                <ul className='space-y-3 list-disc'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                            <div className='space-y-3'>
                                <p className='text-[24px] font-[500]'>Working Days</p>
                                <ul className='space-y-3 list-disc'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                            <div className='space-y-3'>
                                <p className='text-[24px] font-[500]'>Perks & Benefits You’ll Get </p>
                                <ul className='space-y-3 list-disc'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                            <div className='space-y-3'>
                                <p className='text-[24px] font-[500]'>The Application Process</p>
                                <ul className='space-y-3 list-disc'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </ul>
                            </div>
                            <div className='w-[300px] md:w-[650px] space-y-3'>
                                <p className='text-[24px] font-[500]'>Our Statement</p>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical Latin literature from 45 BC, 
                                    making it over 2000 years old. Richard McClintock, a Latin professor
                                     at Hampden-Sydney College in Virginia, looked up one of the more obscure
                                      Latin words, consectetur, from a Lorem Ipsum passage, and going
                                </p>
                            </div>
                            <div>
                                <Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>APPLY NOW</Button>
                            </div>
                        </div>
                        <div>
                        <div className='bg-[#F9F9F9] py-16 px-12 space-y-12'>
                            <div className='flex flex-row justify-center'><Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>APPLY NOW</Button></div>
                            <div className='space-y-8'>
                                <div className='text-[17px] font-[700] text-[#282825]'>Job Summary</div>
                                <div className='flex flex-row items-center space-x-3'>
                                    <div><img alt='logo' src='Images/location.svg' /></div>
                                    <div>
                                        <div className='text-[#BBBBBB] text-[17px] font-[400]'>Location</div>
                                        <div className='text-[#001833] text-[17px] font-[400]'>Shouth Breeze Center,Banani11</div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center space-x-3'>
                                    <div><img alt='logo' src='Images/job.svg' /></div>
                                    <div>
                                        <div className='text-[#BBBBBB] text-[17px] font-[400]'>Job Type</div>
                                        <div className='text-[#001833] text-[17px] font-[400]'>Full Time</div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center space-x-3'>
                                    <div><img alt='logo' src='Images/calender.svg' /></div>
                                    <div>
                                        <div className='text-[#BBBBBB] text-[17px] font-[400]'>Date posted</div>
                                        <div className='text-[#001833] text-[17px] font-[400]'>posted 1 month ago</div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center space-x-3'>
                                    <div><img alt='logo' src='Images/exp.svg' /></div>
                                    <div>
                                        <div className='text-[#BBBBBB] text-[17px] font-[400]'>Experience</div>
                                        <div className='text-[#001833] text-[17px] font-[400]'>Experience: 1-3 year</div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center space-x-3'>
                                    <div><img alt='logo' src='Images/watch.svg' /></div>
                                    <div>
                                        <div className='text-[#BBBBBB] text-[17px] font-[400]'>Working Hours</div>
                                        <div className='text-[#001833] text-[17px] font-[400]'>9 AM - 6 PM</div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center space-x-3'>
                                    <div><img alt='logo' src='Images/workingdays.svg' /></div>
                                    <div>
                                        <div className='text-[#BBBBBB] text-[17px] font-[400]'>Working Days</div>
                                        <div className='text-[#001833] text-[17px] font-[400]'>Weekly: 5days</div>
                                        <div className='text-[#001833] text-[17px] font-[400]'>Weekend: Saturday,Sunday</div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center space-x-3'>
                                    <div><img alt='logo' src='Images/chair.svg' /></div>
                                    <div>
                                        <div className='text-[#BBBBBB] text-[17px] font-[400]'>Vacancy</div>
                                        <div className='text-[#001833] text-[17px] font-[400]'>No.of Vacancy:3</div>
                                    </div>
                                </div>
                                 </div>
                                 <div className='text-[#001833] text-[17px] font-[500] underline'>View all job</div>
                            </div>
                            <div className='pt-8 space-y-10'>
                                <div className='text-[#001833] font-[400] text-[17px]'>Share this:</div>
                                <div className='flex flex-row space-x-8'>
                                    <img alt='logo' src='Images/facebook2.svg' />
                                    <img alt='logo' src='Images/twitter2.svg' />
                                    <img alt='logo' src='Images/linkedin2.svg' />
                                    <img alt='logo' src='Images/instagram3.svg' />
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
     
        <Footer />
    </div>
  )
}

export default JobDetail;
