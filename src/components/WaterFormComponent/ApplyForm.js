import React, { useState } from 'react'

function ApplyForm() {

    const [openDropdown, setopenDropdown] = useState('hidden')
    const handleDropDown = () => {
        alert("alert")
        openDropdown ? setopenDropdown('') : setopenDropdown('hidden')
    }

    return (
        <>
            <div className='p-3  '>
                <div>
                    <h1 className='text-center font-semibold text-xl text-gray-600'>WATER & SEWERAGE</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-11 lg:grid-cols-11 gap-2 container mx-auto p-3 bg-gray-100 rounded-lg'>
                    <div className='col-span-1 '>

                    </div>
                    <div className='col-span-3 '>
                        <div className=' border-[#37517e] border shadow-md bg-white'>
                            <div className='flex flex-row  p-2  border-b-2 border-[#37517e] '>
                                <div className=''>
                                    <img src='https://cdn-icons-png.flaticon.com/512/3220/3220358.png' className='h-14 w-16 -mb-2' />
                                </div>
                                <div className='flex'>
                                    <h1 className='text-md lg:text-xs md:text-sm text-center p-2 ml-2 mt-2 text-gray-500 '>Apply For New Connection</h1>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-span-3'>
                        <div className=' border-[#37517e] border shadow-md '>
                            <div className='flex flex-row bg-white p-2  border-b-2 border-[#37517e] '>
                                <div className=''>
                                    <img src='https://cdn-icons-png.flaticon.com/512/3220/3220358.png' className='h-14 w-16 -mb-2' />
                                </div>
                                <div className='flex'>
                                    <h1 className='text-md lg:text-xs md:text-sm text-center p-2 ml-2 mt-2 text-gray-500 '>Pay Water & Sewerge Bill</h1>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-500 ml-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-span-3'>
                        <div className=' border-[#37517e] border shadow-md '>
                            <div className='flex flex-row bg-white p-2  border-b-2 border-[#37517e] '>
                                <div className=''>
                                    <img src='https://cdn-icons-png.flaticon.com/512/3220/3220358.png' className='h-14 w-16 -mb-2' />
                                </div>
                                <div className='flex'>
                                    <h1 className='text-md lg:text-xs md:text-sm text-center p-2 ml-2 mt-2 text-gray-500 '>My Connection</h1>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-500 ml-20">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 '>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-11 lg:grid-cols-11 gap-2 container mx-auto p-3 -mt-8 lg:-mt-4 md:-mt-4  bg-gray-100 rounded-lg'>
                    <div className='col-span-1 '>

                    </div>
                    <div className=' col-span-3'>
                        <div className=' border-[#37517e] border shadow-md '>
                            <div className='flex flex-row bg-white p-2  border-b-2 border-[#37517e]'>
                                <div className=''>
                                    <img src='https://cdn-icons-png.flaticon.com/512/3220/3220358.png' className='h-14 w-16 -mb-2' />
                                </div>
                                <div className='flex'>
                                    <h1 className='text-md lg:text-xs md:text-sm text-center p-2 ml-2 mt-2 text-gray-500 '>My Applicaion</h1>
                                    <button type='button' className=' font-semibold border border-orange-500 text-xl text-center w-6 h-6 text-orange-500 ml-20 ' onClick={handleDropDown}>2</button>
                                </div>
                            </div>
                        </div>
                        <div className={`${openDropdown}`}>
                            <div className='bg-[#e6fbfb] p-6 '>
                                <div className='divide-y'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/2792/2792623.png' className='w-5 h-5 text-green-300 -ml-5 -mt-6' />
                                    <h1 className='text-xs -mt-5 ml-1 font-mono font-semibold text-gray-700'>Water Connection No. 234567890</h1>
                                    <button className='text-xs float-right bg-cyan-500 hover:bg-cyan-600 text-stone-50 rounded-md px-3 py-0.5 ml-2 shadow-lg '>View</button>
                                </div>

                            </div>
                            <div className='bg-[#e6fbfb] p-6'>
                                <div className='divide-y'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/2792/2792623.png' className='w-5 h-5 text-green-300 -ml-5 -mt-6' />
                                    <h1 className='text-xs -mt-5 ml-1 font-mono font-semibold text-gray-700'>Water Connection No. 234567890</h1>
                                    <button className='text-xs float-right bg-cyan-500 hover:bg-cyan-600 text-stone-50 rounded-md px-3 py-0.5 ml-2 shadow-lg '>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-span-3'>
                        <div className=' border-[#37517e] border shadow-md '>
                            <div className='flex flex-row bg-white p-2  border-b-2 border-[#37517e]'>
                                <div className=''>
                                    <img src='https://cdn-icons-png.flaticon.com/512/3220/3220358.png' className='h-14 w-16 -mb-2' />
                                </div>
                                <div className='flex'>
                                    <h1 className='text-md lg:text-xs md:text-sm text-center p-2 ml-2 mt-2 text-gray-500 '>Past Payment</h1>
                                    <h1 className=' font-semibold border border-orange-500 text-xl text-center w-6 h-6 text-orange-500 ml-20 '>4</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className=' border-[#37517e] border shadow-md '>
                            <div className='flex flex-row bg-white p-2  border-b-2 border-[#37517e] '>
                                <div className=''>
                                    <img src='https://cdn-icons-png.flaticon.com/512/3220/3220358.png' className='h-14 w-16 -mb-2' />
                                </div>
                                <div className='flex'>
                                    <h1 className='text-md lg:text-xs md:text-sm text-center p-2 ml-2 mt-2 text-gray-500 '>How It Work ?</h1>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-500 ml-20">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 '>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplyForm