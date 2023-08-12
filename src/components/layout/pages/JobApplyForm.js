import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Padding } from '@mui/icons-material';
import { fontWeight } from '@mui/system';
import { red } from '@mui/material/colors';


const JobApplyForm = () => {

    const navigate = useNavigate();

    const socialMedia = [
        {img: "Images/facebook.svg", name: "FACEBOOK", des: "Submit your application through our website. Your application is being read by real humans."},
        {img: "Images/insta.svg", name: "INSTAGRAM", des: "Let us get familiar with your competencies and experience in the field."},
        {img: "Images/linkedin.svg", name: "LINKEDIN", des: "Congratulations! You have made it. Sign the agreement and you are on-board with us."}
    ]

    const { control } = useForm();

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                                        You think, We build!
                                        </h3>
                                    </div>
                                    <div className='text[16px] flex flex-row justify-center text-center md:text-[28px] text-white'>
                                        <p className='w-auto'>
                                        Tell us about your needs, we’d love to collaborate with you.
                                        </p>
                                    </div>
                                    </div>
                                    </div>
                </div>
                <div className='bg-[#282825] font-[poppins] text-white flex flex-col items-center space-y-5 md:space-y-0 md:flex-row md:justify-around md:items-start py-20'>
                    <div className='space-y-5'>
                        <div className='text-[30px] font-[700]'>GET A FREE QUOTE</div>
                        <div className='text-[18px] space-y-3'>
                            <div className='text-[#AC2624]'>CALL US:</div>
                            <div className='flex flex-row space-x-3'><img alt='logo' src='Images/Phone.svg' /><p>+12345678900000</p></div>
                        </div>
                        <div className='text-[18px] space-y-3'>
                            <div className='text-[#AC2624]'>EMAIL:</div>
                            <div className='flex flex-row space-x-3'><img alt='logo' src='Images/EnvelopeSimple.svg' /><p>info@digitalboys.com</p></div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                    <div className='flex flex-col items-center md:flex-row space-y-5 md:space-x-5 md:space-y-0'>
                              <Controller
                                  name=""
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
                                  name=""
                                  control={control}
                                  render={({ field }) => (
                                    <TextField className='w-[250px] md:w-[310px]'
                                      sx={{
                                        background: "white",
                                        borderRadius: "4px",
                                    }}
                                      {...field}
                                      placeholder="Last Name*"
                                    />
                                  )}
                                />
                        </div>
                        <div className='flex flex-col items-center md:flex-row space-y-5 md:space-x-5 md:space-y-0'>
                              <Controller
                                  name=""
                                  control={control}
                                  render={({ field }) => (
                                    <TextField className='w-[250px] md:w-[310px]'
                                      sx={{
                                        background: "white",
                                        borderRadius: "4px"
                                    }}
                                      {...field}
                                      placeholder="Email*"
                                    />
                                  )}
                                />
                                <Controller
                                  name=""
                                  control={control}
                                  render={({ field }) => (
                                    <TextField className='w-[250px] md:w-[310px]'
                                      sx={{
                                        background: "white",
                                        borderRadius: "4px",
                                    }}
                                      {...field}
                                      placeholder="Phone*"
                                    />
                                  )}
                                />
                        </div>
                        <div className='flex flex-col items-center md:items-start space-y-5'>
                            <FormControl className='w-[250px] md:w-full'
                                        sx={{
                                            background: "white",
                                            borderRadius: "4px"
                                        }}>
                                <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                <MenuItem value="">
                                    <em className='text-gray-400 not-italic'>Select Country</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className='w-[250px] md:w-full'
                                        sx={{
                                            background: "white",
                                            borderRadius: "4px"
                                        }}>
                                <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                <MenuItem value="">
                                    <em className='text-gray-400 not-italic'>What are you interested in?</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>                  
                        </div>
                        <div className='ml-2 md:ml-0'>
                            <Controller
                                    name=""
                                    control={control}
                                    render={({ field }) => (
                                        <TextField className='w-[250px] md:w-full '
                                        sx={{
                                            background: "white",
                                            borderRadius: "4px"
                                        }}
                                        {...field } 
                                          placeholder="Tell us about your project"
                                        />
                                    )}
                                    />
                         </div>
                        <div className='flex flex-row items-center space-x-8'>
                        <div className='flex flex-row justify-center md:justify-start'><Button style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }}>SEND</Button></div>
                        <div>OR</div> 
                        <div>
                        <Button  style={{ background: "#AC2624", color: "white", fontSize: "16px", fontFamily: "poppins", paddingTop: "12px", paddingBottom: "12px", paddingRight: "24px", paddingLeft: "24px" }} aria-describedby={id} variant="contained" onClick={handleClick}>
                        Send to email
                        </Button>
                        <Popover
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                        >
                          <Typography sx={{ p: 15 , fontWeight:700,}}  ><a href="mailto:someone@example.com">digitalBoys@gmail.com</a></Typography>
                        </Popover>
                        </div>
                        </div>
                        <div className='text-[16px] font-[400] text-center md:text-left'>Will contact you in 1 working day*</div>
                    </div>
                </div>
            </div>
  
            
        <Footer />
    </div>
  )
}

export default JobApplyForm;
