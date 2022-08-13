import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs';

function SuccessfullMessage() {
    return (
        <>
            <div className='grid grid-cols-12'>
                <div className='col-span-2'></div>
                <div className='col-span-8'>
                    <div className='bg-cyan-200 py-10 my-5 rounded-md shadow-md'>
                        <div className='flex justify-center'><BsCheckCircleFill fill='green' size={80} /></div>
                        <div className='text-center my-5'>
                            <h1 className='font-semibold text-xl '>Your Application have been Submitted Successfully.</h1>
                            <h2 className='italic my-1'>Your Reference No <span>#8457566864</span></h2>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-blue-500 hover:bg-blue-600 mx-2 text-white font-semibold text-base px-4 py-2 rounded-md shadow-xl'>Home</button>
                            <button className='bg-blue-500 hover:bg-blue-600 mx-2 text-white font-semibold text-base px-4 py-2 rounded-md shadow-xl'>Dashboard</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'></div>

            </div>
        </>
    )
}

export default SuccessfullMessage