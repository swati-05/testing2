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

function Landing_Navbar() {
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

            <header>

                <nav class="shadow-md bg-white border-b-2">
                    <div class="flex justify-between items-center py-2 px-4 container mx-auto drop-shadow-md">
                        <div className='flex  '>
                            <div className=' '>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png' className='h-16' />
                            </div>
                            <div className=' ml-4 mt-2  '>
                                <h1 className='text-center '>Jharkhand Urban Infrastructure <br /> Development Company</h1>
                            </div>
                        </div>

                        <div>

                            <div class="hover:cursor-pointer sm:hidden">
                                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                            </div>
                            <div class="flex items-center">

                                {/* <div class="flex items-center  space-x-2  shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                                    <div class="flex bg-gray-100 p-2 w-64 space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <input class="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
                                    </div>
                                    <div class="flex py-3 px-4  text-gray-500 font-semibold cursor-pointer">
                                        <span>All categorie</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div class="bg-indigo-600 py-2 px-5 text-white font-semibold  hover:shadow-lg transition duration-3000 cursor-pointer">
                                        <span>Search</span>
                                    </div>
                                </div> */}

                                <ul class="sm:flex space-x-4 hidden items-center">
                                    <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md ">Home</a></li>
                                    <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md ">About</a></li>
                                    <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md ">Services</a></li>
                                    <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md ">Products</a></li>
                                    <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md ">Contact</a></li>
                                </ul>

                                <div class="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                                   <Link to="citizenDashboard"> <h1 class="text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600">LOGIN</h1></Link>
                                    <h1 class="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">SIGNUP</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main>

                <section className='m-0 p-0'>
                    <div class="bg-slate-50 sm:grid grid-cols-5  px-4 py-6   space-y-6 sm:space-y-0 sm:gap-4">

                        <div class="h-96 col-span-4 rounded-md flex items-center shadow-xl shadow-indigo-500/50 bg-cover" style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/4/4c/Jharkhand_Legislative_Assembly_%28Jharkhand_Vidhan_Sabha%29_%28%E0%A4%9D%E0%A4%BE%E0%A4%B0%E0%A4%96%E0%A4%82%E0%A4%A1_%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE%29.png')` }}>    
                      <JuidcoContentHead />
                      
                        </div>
                        <div class="h-96 col-span-1 drop-shadow-md">
                            <div class="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">

                                <select placeholder="search" class=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" >                                  
                                    {/* {
                                        ulbSelect?.map((items) => (
                                            <option >{items.header}</option>
                                        ))
                                    } */}
                                </select>
                                <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg></span>
                            </div>
                            <div class="bg-white  rounded-md">

                                <h1 class="text-center text-md my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-900">SERVICES</h1>
                                <div class="bg-white rounded-md list-none  text-center ">

                                    <li class="text-center text-md my-4  bg-white py-1 rounded-md border-b-2 cursor-pointer  text-gray-900"><a href="#" class="list-none  hover:text-indigo-600">DEPARTMENT</a></li>
                                    <li class="text-center text-md my-4  bg-white py-1 rounded-md border-b-2 cursor-pointer  text-gray-900"><a href="#" class="list-none  hover:text-indigo-600">DISTRICT</a></li>
                                    <li class="text-center text-md my-4  bg-white py-1 rounded-md border-b-2 cursor-pointer  text-gray-900"><a href="#" class="list-none  hover:text-indigo-600">STATE AGENCY</a></li>
                                    <li class="text-center text-md my-4  bg-white py-1 rounded-md border-b-2 cursor-pointer  text-gray-900"><a href="#" class="list-none  hover:text-indigo-600">STATE AGENCY</a></li>

                                    <li class="text-center text-md my-4  bg-white  rounded-md border-b-2 cursor-pointer  text-gray-900">
                                        <div >
                                            <Button onClick={handleOpen} >COMPLAIN & GRIEVANCE</Button>
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
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>

                </section>

              
            </main>
        </>
    )
}

export default Landing_Navbar