import React from 'react'
import { Link } from 'react-router-dom'
import imgRegDone from './regdone.png'

function RegistrationSuccess() {
    return (
        <>
            <div className='text-center bg-white shadow-xl '>
                <div className='pt-10 z-50'>
                    <h1 className='text-4xl text-gray-700'>Registration Successfull</h1>
                    <div className='py-5'>
                        Please Login with your Registered Email Id and Password.
                    </div>
                    <div>
                        <Link to="/login" className='text-blue-600 font-semibold'>Login Page</Link>
                    </div>
                </div>
                <div className="md:inline-flex justify-center z-0">
                    <img className='opacity-60 h-60' src={imgRegDone} alt="Registration Complated Image" />
                </div>
            </div>
        </>
    )
}

export default RegistrationSuccess