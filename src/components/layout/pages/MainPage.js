import { Button } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { TextField } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const MainPage = () => {

  const { control } = useForm();

  const navigate = useNavigate();

  const services = [
    {img: "Images/1.svg" , title: "Branding Development", des: {1: "Visual Identity", 2: "Brand Assets", 3: "Brand Guidelines"} },
    {img: "Images/2.svg" , title: "Digital Marketing", des: {1: "Search Engine Optimization", 2: "Social media marketing", 3: "Improvement in ROI"} },
    {img: "Images/3.svg" , title: "Website Development", des: {1: "Front-end Development", 2: "CMS Development", 3: "Web Apps"} },
    {img: "Images/4.svg" , title: "Graphic Design", des: {1: "Logo Design", 2: "Borchure Design", 3: "Flyer Design, Many more"} }
  ]
  const team = [
    {img: "Images/ImageWrapper.png", name: "Full Name", title: "Job Title", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},
    {img: "Images/ImageWrapper.png", name: "Full Name", title: "Job Title", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},
    {img: "Images/ImageWrapper.png", name: "Full Name", title: "Job Title", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
  ]
  const features = [
    {img: "Images/ImageWrapper2.png", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros."},
    {img: "Images/ImageWrapper2.png", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros."},
    {img: "Images/ImageWrapper2.png", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros."}
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
          <div className='bg-black w-full h-screen bg-opacity-70 flex flex-col justify-center pl-7 md:pl-0 md:items-end'> 
            <div className='pr-[10%] space-y-10'>
            <div className='text-white'>
              <h3 className='text-[30px] md:text[46px]'>Ready for Next</h3>
              <h2 className='font-[700] text-[48px] md:text-[90px]'>Big Thing?</h2>
            </div>
            <div className='text[16px] md:text-[21px] text-white md:w-[574px]'>
              <p>We are data-driven digital marketing agency who knows how to elevate your online business ranking and create beautiful visuals that works best.</p>
            </div>
            <div className='flex flex-col md:flex-row space-y-3 md:space-x-10 md:space-y-0'>
              <Button 
                onClick={() => navigate("/About")}
                style={{
                padding: "10px 40px 10px 40px",
                backgroundColor: "#D02727",
                fontSize: "16px",
                border: "2px solid #D02727",
                borderRadius: "4px",
                color: "white"
              }}>
                ABOUT COMPANY
              </Button>
              <Button 
                  onClick={() => navigate("/Contact")}
                  style={{
                  padding: "10px 40px 10px 40px",
                  backgroundColor: "tranparent",
                  fontSize: "16px",
                  border: "2px solid white",
                  borderRadius: "4px",
                  color: "white"
              }}>
                CONTACT US
              </Button>
            </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center bg-white font-[poppins]'>
              <div className='w-[300px] md:w-[710px] py-10 space-y-5'>
                <div className='text-[30px] md:text-[45px] text-center font-[600]'>
                  Excellent Services & Innovative Branding Strategies
                </div>
                <p className='text-[14px] md:text-[17px] text-center font-[400]'>
                  Our state-of-the-art strategies are designed to take your business’s success to thenext level, 
                  backed by industry experts with extensive experience in creating andexecuting winning strategies.
                </p>
              </div>
              <div>
                  <div className='flex flex-col md:flex-row'>
                    {services.map((p) => (
                      <div className='px-5 py-10 w-[200px] h-[300px] md:w-[260px] md:h-[400px] space-y-4 bg-[#FFFFFF]'>
                        <div className='flex flex-row justify-center'><img alt='logo' src={p.img} /></div>
                        <div className='text-center text-[16px] md:text-[31px]'>{p.title}</div>
                        <div className='text-center text-[12px] md:text-[16px] text-[#5B5B5B]'><p>{p.des[1]}</p><p>{p.des[2]}</p><p>{p.des[3]}</p></div>
                        <div className='flex flex-row justify-center'><Button style={{ color: "#D02727", fontSize: "16px", fontFamily: "poppins" }}>Explore Now</Button></div>
                      </div>
                    ))}
                  </div>
                  <div className='flex flex-row justify-center py-10'><Button onClick={() => navigate("/Services")} style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>VIEW ALL SERVICES</Button></div>
              </div>
        </div>
        <div className="flex flex-col items-center bg-white pt-10">
              <div className='text-center text-[18px] font-[poppins] text-[#AC2624] underline'>12 YEARS OF BRILLIANCE</div>
              <div className='text-[30px] md:text-[57px] font-[poppins] font-[600] text-center w-[300px] md:w-[873px] py-8'>
                    1000+ Customers & 500+
                    Online Reviews Being The Best
                    Digital Marketing Company
              </div>
              <div className='text-center text-[14px] md:text-[16px] text-[#5B5B5B] font-[poppins] font-[400] w-[300px] md:w-[720px]'>
                  Artimization is a digital marketing company that offers web design, website development,
                  social media marketing, and SEO services globally. Our goal is to help your brand succeed
                  on social media platforms and engage with your audience.
              </div>
              <div className='flex flex-col pt-10 space-y-16'>
                  <div className='flex flex-col items-center md:flex-row md:items-start md:space-x-5'>
                      <div className='pb-5 md:pb-0'><img className='w-[300px] md:w-auto' alt='logo' src='Images/main1.png' /></div>
                      <div className='space-y-7'>
                          <div className='text-[16px] md:text-[18px] md:text-left text-center text-[#AC2624] font-[poppins] font-[400] underline'>E-COMMERCE, WEBSITE DESIGN</div>
                          <div className='text-[20px] md:text-[31px] md:text-left text-center text-[#242424] font-[poppins] font-[400]'>Lifestyle Collection</div>
                          <div className='text-[14px] md:text-[16px] md:text-left text-center text-[#5B5B5B] font-[poppins] font-[400] w-[300px] md:w-[505px]'>
                            LifeStyle Collection is well known for its extensive assortment of 
                            branded, 100% authentic and genuine products, a one stop
                            solution to associate the consumer with the brand 
                            savvy world.
                          </div>
                          <div className='flex flex-row justify-center md:justify-start'><Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>Visit Live Website</Button></div>
                      </div>
                  </div>
                  <div className='flex flex-col-reverse items-center md:flex-row md:items-start md:space-x-5'>
                      <div className='space-y-7'>
                          <div className='text-[16px] md:text-[18px] text-[#AC2624] md:text-left text-center font-[poppins] font-[400] underline'>E-COMMERCE, WEBSITE DESIGN</div>
                          <div className='text-[20px] md:text-[31px] text-[#242424] md:text-left text-center font-[poppins] font-[400]'>Lifestyle Collection</div>
                          <div className='text-[14px] md:text-[16px] text-[#5B5B5B] md:text-left text-center font-[poppins] font-[400] w-[300px] md:w-[505px]'>
                            LifeStyle Collection is well known for its extensive assortment of 
                            branded, 100% authentic and genuine products, a one stop
                            solution to associate the consumer with the brand 
                            savvy world.
                          </div>
                          <div className='flex flex-row justify-center md:justify-start'><Button onClick={() => navigate("/")} style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>Visit Live Website</Button></div>
                      </div>
                      <div><img className='w-[300px] md:w-auto' alt='logo' src='Images/main2.png' /></div>
                  </div>
              </div>
              <div className='py-20'><Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>SHOW ALL PORTFOLIO</Button></div>
        </div>
        <div className='bg-[#282825] font-[poppins] text-[white] flex flex-col items-center md:flex-row md:justify-around py-16'>
                  <div className='space-y-5'>
                      <div className='text-[20px] md:text-[30px] font-[700] text-center md:text-left'>Let’s Get You Ranked!</div>
                      <div className='text-[14px] md:text-[16px] font-[400] text-center md:text-left'>Measure Your Websites Performance</div>
                      <div className='space-y-5'>
                          <div className='flex flex-col items-center md:flex-row space-y-5 md:space-x-5 md:space-y-0'>
                              <Controller
                                  name="firstName"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField className='w-[250px] md:w-[310px]'
                                      sx={{
                                        background: "white",
                                        borderRadius: "4px"
                                    }}
                                      {...field}
                                      placeholder="Your Name"
                                      
                                    />
                                  )}
                                />
                                <Controller
                                  name="email"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField className='w-[250px] md:w-[310px]'
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
                          <div className='flex flex-col items-center md:flex-row space-y-5 md:space-x-5 md:space-y-0'>
                                <Controller
                                    name="phone"
                                    control={control}
                                    render={({ field }) => (
                                      <TextField className='w-[250px] md:w-[310px]'
                                        sx={{
                                          background: "white",
                                          borderRadius: "4px"
                                      }}
                                        {...field}
                                        placeholder="Phone"
                                      />
                                    )}
                                  />
                                  <Controller
                                    name="weburl"
                                    control={control}
                                    render={({ field }) => (
                                      <TextField className='w-[250px] md:w-[310px]'
                                        sx={{
                                          background: "white",
                                          borderRadius: "4px",
                                      }}
                                        {...field}
                                        placeholder="Website URL*"
                                      />
                                    )}
                                  />
                          </div>
                          <div className='w-[250px] ml-2 md:w-auto md:ml-0'>
                            <Controller
                                name="interest"
                                control={control}
                                render={({ field }) => (
                                  <TextField className='md:w-auto'
                                    sx={{
                                      background: "white",
                                      borderRadius: "4px",
                                  }}
                                    fullWidth
                                    {...field}
                                    placeholder="What are you interested in?"
                                  />
                                )}
                              />
                          </div>
                      </div>
                      <div className='flex flex-row justify-center md:items-start'><Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>Increase my sales</Button></div>
                      <div className='text-[16px] font-[400] text-center md:text-left'>Will contact you in 1 working day*</div>
                  </div>
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
        </div>
        <div className='text-[#000000] font-[poppins] flex flex-col items-center py-24'>
                  <div className='w-[300px] md:w-[530px]'>
                      <div className='text-[20px] md:text-[35px] font-[700] text-center'>Team section</div>
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
        <div className='bg-[#EBEBEB] font-[poppins] text-[#000000] py-16 flex flex-col items-center md:flex-row justify-around'>
                <div className='w-[300px] md:w-[510px] space-y-5 pb-10 md:pb-0'>
                  <div className='text-[20px] text-center md:text-left md:text-[35px] font-[700]'>Features section</div>
                  <div className='text-[12px] md:text-[14px] text-center md:text-left font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem. Etiam sodales ac felis id interdum.</div>
                  <div className='text-[12px] md:text-[14px] text-center md:text-left font-[400]'>Learn more</div>
                </div>
                <div className='space-y-2'>
                    {features.map((f) => (
                      <div className='flex flex-row w-[300px] md:w-[410px] space-x-4'>
                          <div className='w-[80px] h-[80px]'><img alt='logo' src={f.img} /></div>
                          <div className='text-[12px] md:text-[14px] font-[400]'>{f.title}</div>
                      </div>
                    ))}
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

export default MainPage;
