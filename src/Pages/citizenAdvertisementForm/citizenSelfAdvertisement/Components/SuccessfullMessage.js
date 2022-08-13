//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 13 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SuccessfullMessage.js
//    DESCRIPTION - Self Advt SuccessfullMessage  Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SuccessfullMessage() {
    return (
        <>
            <div className='grid grid-cols-12'>
                <div className='col-span-2'></div>
                <div className='col-span-8'>
                    <div className='bg-cyan-200 py-2 my-5 rounded-md shadow-md'>
                        <div className='flex justify-center'><BsCheckCircleFill fill='green' size={50} /></div>
                        <div className='text-center my-2'>
                            <h1 className='font-semibold text-xl '>Your Application have been Submitted Successfully.</h1>
                            <h2 className='italic my-1'>Your Reference No <span>#8457566864</span></h2>
                        </div>
                        <div className='flex justify-center'>
                           <Link to="/"> <button className='bg-blue-500 hover:bg-blue-600 mx-2 text-white font-semibold text-base px-4 py-2 rounded-md shadow-xl'>Home</button></Link>
                           <Link to="/citizenDashboard"><button className='bg-blue-500 hover:bg-blue-600 mx-2 text-white font-semibold text-base px-4 py-2 rounded-md shadow-xl'>Dashboard</button></Link>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'></div>

            </div>
        </>
    )
}

export default SuccessfullMessage