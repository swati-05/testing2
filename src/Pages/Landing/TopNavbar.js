import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Link, useNavigate } from "react-router-dom";
import JuidcoContentHead from './JuidcoContentHead';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function TopNavbar() {


    let navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [otpText, setotpText] = useState()

    const [showFormOne, setshowFormOne] = useState('')
    const [showForm2, setshowForm2] = useState('hidden')
    const [InputOtp, setInputOtp] = useState()


    const confirmSubmit = () => {
        // alert(InputOtp +" "+ otpText)

        if (InputOtp == otpText) {
            alert('Mobile number verified');
            setshowForm2('hidden');
            setshowFormOne('');
            navigate(`/grivancePage`);
            // <Link to="/grivancePage">{GrevanshesPage}</Link>;
        } else {
            alert('check OTP')
        }

        setOpen(false);
        // setotpText();
    }


    const handleSubmit = (e) => {
        // alert("submit");

        setotpText(Math.floor(Math.random() * (9999 - 1000 + 1)));
        setshowForm2('');
        setshowFormOne('hidden');
        e.preventDefault();

    }


    return (
        <>
            <header >
                <nav class="shadow-md bg-white drop-shadow-sm h-8  ">


                    <div>

                        <div class="relative   ">
                            <div class="md:flex   float-right w-96 ">
                                <div className='mr-6  w-60  rounded-full text-center h-6  opacity-95 hover:scale-105 transition-all transform duration-500 '>
                                <div className='flex-1 '>
                                       
                                    </div>
                                    <div >
                                        {/* <span class="flex h-2 w-3"> */}
                                        <span class="animate-ping absolute inline-flex h-4 w-36 mt-2 ml-3 bg-red-700 opacity-75"></span>
                                        {/* <span class="relative inline-flex rounded-full h-2 w-2  bg-red-400"></span> */}
                                        {/* </span> */}
                                        <Button onClick={handleOpen} >Complain & Grevances</Button>
                                        <Modal

                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style} className='border'>
                                                <form onSubmit={handleSubmit} id="form1" className={showFormOne}>
                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                        Enter your number
                                                    </Typography>
                                                    <hr className='pt-2 ' />

                                                    <input type="tel" required className=' bg-slate-200 py-1 px-8' placeholder='eg : 0123456789' min="10" />

                                                    <button type='submit' className='bg-indigo-700 rounded-md py-1 px-2 text-white ml-48 mt-4' ><SendIcon /> Send OTP</button>
                                                </form>
                                                <form id="form" className={showForm2} onSubmit={confirmSubmit}>
                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                        Enter OTP
                                                    </Typography>
                                                    <hr className='pt-2 ' />

                                                    <h5 className='text-green-600'> your otp is  {otpText} </h5> <br />
                                                    <input type="text" required className=' bg-slate-200 py-1 px-8' placeholder='eg :1234' onChange={(e) => setInputOtp(e.target.value)}>
                                                    </input>
                                                    <button type='submit' className='bg-indigo-700 rounded-md py-1 px-2 text-white ml-48 mt-4'><ThumbUpAltIcon /> Confirm</button>
                                                </form>
                                            </Box>
                                        </Modal>
                                    </div>
                                </div>

                                <div className='flex  mt-2 w-18'>
                                    <div className='flex-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#004A7C]" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                        </svg>
                                    </div>
                                    <div className='flex-1'>
                                        <Link to="/login">
                                            <h2 class="   hover:cursor-pointer px-1 hover:text-[#004A7C] text-[#004A7C] text-sm">Login</h2>
                                        </Link>
                                    </div>
                                </div>



                                <div className=' flex mt-2 w-18 px-2'>
                                    <div className='flex-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#004A7C]" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className='flex-1'>
                                        <Link to='/register'>
                                            <h2 class=" hover:cursor-pointer px-1  hover:text-[#004A7C] text-[#004A7C]  text-sm ">Signup</h2>
                                        </Link>
                                    </div>
                                </div>


                                
                            </div>
                        </div>

                    </div>

                </nav>
            </header>
        </>
    )
}

export default TopNavbar