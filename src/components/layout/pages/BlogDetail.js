import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from '@mui/material';

const BlogDetail = () => {
  return (
    <div>
      <Navbar />
      <div className='font-[poppins]'>
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
                      OUR STORY.
                      </h3>
                    </div>

                    <div className="text[16px] flex flex-row justify-center text-center md:text-[28px] text-white">
                      <p className="w-2/3">
                        My blog is a collection of answers people don't want to hear
                        to questions they didn't ask. Publish what you think,
                      </p>
                    </div>

                    <div className='flex flex-row justify-center'>
                            <Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>APPLY NOW</Button>
                            </div>
                   </div>
                  </div>
            </div>
            <div className='flex flex-col items-center py-10 space-y-5'>
                <div className='text-[32px] font-[700] text-center'>BLOGS Four Ways a Clean Workplace Makes Employees</div>
                <div className='text-[14px] font-[400] text-center w-[900px]'>My blog is a collection of answers people don't want to hear to questions they didn't ask. Publish what you think, don't put it on social media. Writing is the only way I have to explain my own life to myself.</div>
                <div className='flex flex-col w-[1100px]'>
                    <div className='flex flex-row justify-center'><img alt='logo' src='Images/blogdetail.png' /></div>
                    <div className='flex flex-row justify-start space-x-1 items-center py-5'>
                        <img alt='logo' src='Images/blogprofile.png' />
                        <p>By</p>
                        <p>Jordan Mirchev</p>
                        <p>| Published on</p>
                        <p>07 April , 2023</p>
                        <p>| 2 min read</p>
                    </div>
                    <div>
                        <div className='flex flex-row space-x-10'>
                            <p className='text-[22px] font-[400] w-[300px] md:w-[700px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
                                Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                                Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                            </p>
                            <div className='space-y-16'>
                              <div className='space-y-5'>
                                <p className='text-[14px] font-[400] text-[#AC2624]'>Popular Posts</p>
                                <div className='flex flex-col space-y-5'>
                                      <div className='flex flex-row items-center space-x-3'>
                                      <div><img alt='logo' src='Images/blogmock.png' /></div>
                                      <div>
                                        <p className='text-[12px] font-[400] text-[#AC2624]'>Product</p>
                                        <p className='text-[20px] font-[400] text-[#282825] w-[250px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                      </div>
                                    </div>
                                    <div className='flex flex-row items-center space-x-3'>
                                      <div><img alt='logo' src='Images/blogmock.png' /></div>
                                      <div>
                                        <p className='text-[12px] font-[400] text-[#AC2624]'>Product</p>
                                        <p className='text-[20px] font-[400] text-[#282825] w-[250px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                      </div>
                                    </div>
                                    <div className='flex flex-row items-center space-x-3'>
                                      <div><img alt='logo' src='Images/blogmock.png' /></div>
                                      <div>
                                        <p className='text-[12px] font-[400] text-[#AC2624]'>Product</p>
                                        <p className='text-[20px] font-[400] text-[#282825] w-[250px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                      </div>
                                    </div>
                                    <div className='flex flex-row items-center space-x-3'>
                                      <div><img alt='logo' src='Images/blogmock.png' /></div>
                                      <div>
                                        <p className='text-[12px] font-[400] text-[#AC2624]'>Product</p>
                                        <p className='text-[20px] font-[400] text-[#282825] w-[250px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                      </div>
                                    </div>
                                </div>
                              </div>
                              <div className='bg-[#AC2624] flex flex-col items-center justify-center space-y-5 text-[white] h-[352px] w-[317px] rounded'>
                                <p className='text-[24px] font-[400] text-center w-[250px]'>Get More Done Together With US</p>
                                <p className='text-[22px] font-[400] text-center w-[250px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <Button style={{ background: "#F2F2F2", color: "#AC2624", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>Get Started</Button>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-10 space-y-5'>
                      <p className='text-[52px] text-[#AC2624] font-[400] w-[300px] md:w-[800px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className='text-[22px] font-[400] text-[#282825] w-[300px] md:w-[700px]'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
                          Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                          Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center space-y-5 py-10'>
                      <div className='text-[32px] font-[700] text-center'>Here are some related articles</div>
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
      <Footer />
    </div>
  )
}

export default BlogDetail;
