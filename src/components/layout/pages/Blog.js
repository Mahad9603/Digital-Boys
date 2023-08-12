import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from '@mui/material';

const Blog = () => {
  return (
    <div>
        <Navbar />
            <div>
                <div
                  style={{
                    backgroundImage: "url('Images/mainpageimagemasked.png')",
                  }}
                  className="w-full h-screen bg-no-repeat bg-cover font-[poppins]"
                  >
                  <div className="bg-black w-full h-screen bg-opacity-70 flex flex-col justify-center items-center">
                  <div className="space-y-10 w-[300px] md:w-auto">
                    <div className="text-white">
                      <h3 className="text-[30px] text-center md:text-[70px] font-[700]">
                        Our Latest Strory.
                      </h3>
                    </div>

                    <div className="text[16px] flex flex-row justify-center text-center md:text-[28px] text-white">
                      <p className="w-2/3">
                        My blog is a collection of answers people don’t want to hear to
                        question they didn’t ask.
                      </p>
                    </div>

                    <div className='flex flex-row justify-center'>
                            <Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>APPLY NOW</Button>
                            </div>
                   </div>
                  </div>
                </div>
                <div className='font-[poppins] flex flex-col items-center py-10 space-y-10'>
                    <div className='flex flex-col items-center space-y-5'>
                      <div className='text-[32px] font-[700]'>LATEST BLOGS</div>
                      <div className='text-[14px] font-[400] w-[300px] md:w-[550px] text-center'>My blog is a collection of answers people don't want to hear to questions they didn't ask. Publish what you think, don't put it on social media. Writing is the only way I have to explain my own life to myself.</div>
                    </div>
                    <div className='grid grid-cols-4 gap-8'>
                      <div className='flex flex-col space-y-5'>
                        <div><img alt='logo' src='Images/blogpic.png' /></div>
                        <div className='text-[18px] font-[600] w-[250px]'>Quick and Easy Flaky Pastry for Tasty Breakfast</div>
                        <div className='flex flex-row space-x-5'>
                          <div><img alt='logo' src='Images/blogprofile.png' /></div>
                          <div className='font-[400] text-[14px] w-[180px] text-[#AAAAAA]'>BY WILL JOHN | 06 April 2023</div>
                        </div>
                      </div>
                      <div className='flex flex-col space-y-5'>
                        <div><img alt='logo' src='Images/blogpic.png' /></div>
                        <div className='text-[18px] font-[600] w-[250px]'>Quick and Easy Flaky Pastry for Tasty Breakfast</div>
                        <div className='flex flex-row space-x-5'>
                          <div><img alt='logo' src='Images/blogprofile.png' /></div>
                          <div className='font-[400] text-[14px] w-[180px] text-[#AAAAAA]'>BY WILL JOHN | 06 April 2023</div>
                        </div>
                      </div>
                      <div className='flex flex-col space-y-5'>
                        <div><img alt='logo' src='Images/blogpic.png' /></div>
                        <div className='text-[18px] font-[600] w-[250px]'>Quick and Easy Flaky Pastry for Tasty Breakfast</div>
                        <div className='flex flex-row space-x-5'>
                          <div><img alt='logo' src='Images/blogprofile.png' /></div>
                          <div className='font-[400] text-[14px] w-[180px] text-[#AAAAAA]'>BY WILL JOHN | 06 April 2023</div>
                        </div>
                      </div>
                      <div className='flex flex-col space-y-5'>
                        <div><img alt='logo' src='Images/blogpic.png' /></div>
                        <div className='text-[18px] font-[600] w-[250px]'>Quick and Easy Flaky Pastry for Tasty Breakfast</div>
                        <div className='flex flex-row space-x-5'>
                          <div><img alt='logo' src='Images/blogprofile.png' /></div>
                          <div className='font-[400] text-[14px] w-[180px] text-[#AAAAAA]'>BY WILL JOHN | 06 April 2023</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row items-center py-10 space-x-10'>
                      <div className='w-[300px]'>
                        <div className='text-[36px] font-[600] text-[#D6D5D5] overline'>BLOGS</div>
                        <div className='text-[36px] font-[600] text-[#000000]'>DISCOVER OUR LATESTS STORY.</div>
                      </div>
                      <div className='grid grid-cols-2 gap-8'>
                            <div className='flex flex-col space-y-5'>
                              <div><img alt='logo' src='Images/blogpic.png' /></div>
                              <div className='text-[18px] font-[600] w-[250px]'>Quick and Easy Flaky Pastry for Tasty Breakfast</div>
                              <div className='flex flex-row space-x-5'>
                                <div><img alt='logo' src='Images/blogprofile.png' /></div>
                                <div className='font-[400] text-[14px] w-[180px] text-[#AAAAAA]'>BY WILL JOHN | 06 April 2023</div>
                              </div>
                            </div>
                            <div className='flex flex-col space-y-5'>
                              <div><img alt='logo' src='Images/blogpic.png' /></div>
                              <div className='text-[18px] font-[600] w-[250px]'>Quick and Easy Flaky Pastry for Tasty Breakfast</div>
                              <div className='flex flex-row space-x-5'>
                                <div><img alt='logo' src='Images/blogprofile.png' /></div>
                                <div className='font-[400] text-[14px] w-[180px] text-[#AAAAAA]'>BY WILL JOHN | 06 April 2023</div>
                              </div>
                            </div>
                            <div className='flex flex-col space-y-5'>
                              <div><img alt='logo' src='Images/blogpic.png' /></div>
                              <div className='text-[18px] font-[600] w-[250px]'>Quick and Easy Flaky Pastry for Tasty Breakfast</div>
                              <div className='flex flex-row space-x-5'>
                                <div><img alt='logo' src='Images/blogprofile.png' /></div>
                                <div className='font-[400] text-[14px] w-[180px] text-[#AAAAAA]'>BY WILL JOHN | 06 April 2023</div>
                              </div>
                            </div>
                            <div className='flex flex-col space-y-5'>
                              <div><img alt='logo' src='Images/blogpic.png' /></div>
                              <div className='text-[18px] font-[600] w-[250px]'>Quick and Easy Flaky Pastry for Tasty Breakfast</div>
                              <div className='flex flex-row space-x-5'>
                                <div><img alt='logo' src='Images/blogprofile.png' /></div>
                                <div className='font-[400] text-[14px] w-[180px] text-[#AAAAAA]'>BY WILL JOHN | 06 April 2023</div>
                              </div>
                            </div>
                      </div>
                    </div>
                    <div className='flex flex-col items-center space-y-5 py-10'>
                      <div className='text-[32px] font-[700] text-center'>Read All News</div>
                      <div className='text-[17px] font-[400] text-center w-[300px] md:w-[700px]'>Cubix aims to build high-quality software while also fostering an enjoyable work environment that allows everyone the opportunity to reach their highest potential.</div>
                      <div className='grid grid-cols-3 gap-8'>
                        <div className='flex flex-col items-center space-y-2'>
                          <div><img alt='logo' src='Images/blogpic2.png' /></div>
                          <div className='text-[14px] font-[400] text-[#AC2624]'>Design , Branding</div>
                          <div className='text-[24px] font-[400] text-[#282825] w-[280px] text-center'>Designers are meant to be loved, not to be understood.</div>
                          <div className='text-[14px] font-[400] text-[#AC2624]'>06 April 2023</div>
                          <div><Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>READ MORE</Button></div>
                        </div>
                        <div className='flex flex-col items-center space-y-2'>
                          <div><img alt='logo' src='Images/blogpic2.png' /></div>
                          <div className='text-[14px] font-[400] text-[#AC2624]'>Design , Branding</div>
                          <div className='text-[24px] font-[400] text-[#282825] w-[280px] text-center'>Designers are meant to be loved, not to be understood.</div>
                          <div className='text-[14px] font-[400] text-[#AC2624]'>06 April 2023</div>
                          <div><Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>READ MORE</Button></div>
                        </div>
                        <div className='flex flex-col items-center space-y-2'>
                          <div><img alt='logo' src='Images/blogpic2.png' /></div>
                          <div className='text-[14px] font-[400] text-[#AC2624]'>Design , Branding</div>
                          <div className='text-[24px] font-[400] text-[#282825] w-[280px] text-center'>Designers are meant to be loved, not to be understood.</div>
                          <div className='text-[14px] font-[400] text-[#AC2624]'>06 April 2023</div>
                          <div><Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>READ MORE</Button></div>
                        </div>
                      </div> 
                    </div>
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default Blog;
