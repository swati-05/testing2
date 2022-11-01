import React from 'react'
import ProfileConponent from './ProfileConponent'

function Dashboard() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto '>
                <div className='col-span-8 bg-sky-50 rounded-lg '>
                    <div className=' rounded-md shadow-lg p-2'>
                        <h1 className='text-lg text-center font-semibold text-blue-800'>APPLY  SERVICES</h1>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-1 container mx-auto p-2'>
                            <div className='bg-white rounded-b-3xl rounded-l-3xl p-4 shadow-lg'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8780/8780337.png' className='h-20 mx-auto p-2' />
                                <h1 className='text-center '>ADVERTISEMENT</h1>
                                <h1 className='text-xs text-center'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                                </h1>
                            </div>
                            <div className='bg-white rounded-r-3xl rounded-t-3xl p-4 shadow-lg'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8780/8780337.png' className='h-20 mx-auto p-2' />
                                <h1 className='text-center '>ADVERTISEMENT</h1>
                                <h1 className='text-xs text-center'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                                </h1>
                            </div>
                            <div className='bg-white rounded-b-3xl rounded-l-3xl p-4 shadow-lg'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8780/8780337.png' className='h-20 mx-auto p-2' />
                                <h1 className='text-center '>ADVERTISEMENT</h1>
                                <h1 className='text-xs text-center'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                                </h1>
                            </div>


                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-1 container mx-auto p-2'>
                            <div className='bg-white rounded-b-3xl rounded-l-3xl p-4 shadow-lg'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8780/8780337.png' className='h-20 mx-auto p-2' />
                                <h1 className='text-center '>ADVERTISEMENT</h1>
                                <h1 className='text-xs text-center'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                                </h1>
                            </div>
                            <div className='bg-white rounded-r-3xl rounded-t-3xl p-4 shadow-lg'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8780/8780337.png' className='h-20 mx-auto p-2' />
                                <h1 className='text-center '>ADVERTISEMENT</h1>
                                <h1 className='text-xs text-center'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                                </h1>
                            </div>
                            <div className='bg-white rounded-b-3xl rounded-l-3xl p-4 shadow-lg'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8780/8780337.png' className='h-20 mx-auto p-2' />
                                <h1 className='text-center '>ADVERTISEMENT</h1>
                                <h1 className='text-xs text-center'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                                </h1>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='col-span-4 '>
                    <ProfileConponent />
                </div>
            </div>
        </>
    )
}

export default Dashboard