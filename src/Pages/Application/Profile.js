import React, { useState } from 'react'
import ProfileConponent from '../../components/citizendashboard/ProfileConponent'
import AboutUser from './AboutUser'

function Profile() {

    // state where update input field is hidden  
    const [updateLbl, setupdateLbl] = useState('hidden')
    //onclick it shows the input field for updation 
    const handleShowLabel = () => {
        (updateLbl == 'hidden') ? setupdateLbl('') : setupdateLbl('hidden');

    }
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4'>

                <div className='col-span-8 bg-gray-50'>
                    <div className='grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-1 p-2'>
                        <div className={`col-span-9 `}>
                            <h1 className='text-lg font-bold text-center ml-20'>YOUR DETAIL</h1>
                        </div>
                        <div className={`${updateLbl} col-span-3 `}>
                            <button className='text-xs bg-green-300 py-1 px-4 shadow-lg float-right font-bold '>submit</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-1 p-2'>
                        <div className='shadow-lg bg-white rounded-lg p-2'>
                            <div className="flex space-x-5 pl-4 ">
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>ULB</div>
                                    <div className='font-bold text-sm'>Ranchi</div>
                                </div>
                                <div className='flex-1 text-xs' onClick={handleShowLabel}>
                                    <img src='https://cdn-icons-png.flaticon.com/512/2921/2921222.png' className='h-8 float-right' />
                                    <label className='text-xs text-red-400 float-right'>click me</label>
                                </div>
                            </div>
                            <div className={`${updateLbl} flex space-x-5 pl-4`} >
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Edit Ulb</div>
                                    <div className='font-bold text-sm'>
                                        <div className='font-bold text-sm'><select className='w-full bg-gray-50 shadow lg border rounded-md'>
                                            <option>select</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-lg bg-white rounded-lg p-2'>
                            <div className="flex space-x-5 pl-4 ">
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Full Name</div>
                                    <div className='font-bold text-sm'>Demo</div>
                                </div>
                                <div className='flex-1 text-xs' onClick={handleShowLabel}>
                                    <img src='https://cdn-icons-png.flaticon.com/512/2921/2921222.png' className='h-8 float-right' />
                                    <label className='text-xs mt-6 ml-3 text-red-400'>click me</label>
                                </div>
                            </div>
                            <div className={`${updateLbl} flex space-x-5 pl-4`} >
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Edit Full Name</div>
                                    <div className='font-bold text-sm'><input className='w-full bg-gray-50 shadow lg border rounded-md' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-lg bg-white rounded-lg p-2'>
                            <div className="flex space-x-5 pl-4 ">
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Guardian Name</div>
                                    <div className='font-bold text-sm'>Demo</div>
                                </div>
                                <div className='flex-1 text-xs' onClick={handleShowLabel}>
                                    <img src='https://cdn-icons-png.flaticon.com/512/2921/2921222.png' className='h-8 float-right' />
                                    <label className='text-xs mt-6 ml-3 text-red-400'>click me</label>
                                </div>
                            </div>
                            <div className={`${updateLbl} flex space-x-5 pl-4`} >
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Edit Guardian Name</div>
                                    <div className='font-bold text-sm'><input className='w-full bg-gray-50 shadow lg border rounded-md' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-lg bg-white rounded-lg p-2'>
                            <div className="flex space-x-5 pl-4 ">
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Mobile No.</div>
                                    <div className='font-bold text-sm'>92345678976</div>
                                </div>
                                <div className='flex-1 text-xs' onClick={handleShowLabel}>
                                    <img src='https://cdn-icons-png.flaticon.com/512/2921/2921222.png' className='h-8 float-right' />
                                    <label className='text-xs ml-2 text-red-400'>click me</label>
                                </div>
                            </div>
                            <div className={`${updateLbl} flex space-x-5 pl-4`} >
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Edit Mobile No.</div>
                                    <div className='font-bold text-sm'><input className='w-full bg-gray-50 shadow lg border rounded-md' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 '>
                    <div className='flex bg-white shadow-lg rounded-xl p-1 '>
                        <div className='flex-1 p-4 '>
                            <h1 className='text-xl text-[#37517e]'>User Name</h1>
                            <h1 className='text-md -mt-1 text-[#37517e] opacity-75'>user@gmail.com</h1>

                            <div className='flex flex-row mt-10'>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9 bg-teal-400 rounded-full text-xs px-2 py-1 shadow-lg shadow-sky-300 text-white">
                                        <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                    </svg>
                                    <span className=' text-sky-500 font-bold ml-2 text-2xl'>4</span> <br />
                                    <span className='text-sm text-[#37517e] -ml-4 mt-8'> Services </span>

                                </div>

                                <div className='flex ml-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9 bg-purple-400 rounded-full text-xs px-2 py-1 shadow-lg shadow-sky-200 text-white">
                                        <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                    </svg>
                                    <span className=' text-sky-500 font-bold ml-2 text-2xl'>2</span> <br />
                                    <span className='text-sm text-[#37517e] -ml-4 mt-8'> Statics </span>

                                </div>
                            </div>

                        </div>

                        <div className='flex-1 -ml-12 '>
                            <img src='https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png' className='h-20 ml-10 mt-4' />
                            {/* <Link to='/profileEdit'>
                            <div className=' '>
                                <span className=''>
                                    <button className='bg-teal-400 hover:bg-teal-500 shadow-lg shadow-gray-300 px-3 py-0  ml-12 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg><h1 className='ml-4 -mt-5 text-stone-50 '>Edit</h1>
                                    </button>
                                </span>
                            </div>
                            </Link> */}
                        </div>

                    </div>
                    <div className='flex flex-row bg-white shadow-lg rounded-xl p-1 mt-2 '>
                        <span>
                            <h1 className='p-4 text-gray-500'>Change Password</h1>
                            <p className=' text-xs text-gray-400 ml-4 -mt-4'>If you want to change your password click here</p>
                        </span>
                        <img src='https://cdn-icons-png.flaticon.com/512/2665/2665240.png' className='h-10 ml-3 mt-4' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile