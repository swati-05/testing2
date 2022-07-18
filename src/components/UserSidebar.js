import React from 'react'
import { Link } from 'react-router-dom'

function UserSidebar() {
    return (
        <>
            <div class="absolute inset-y-0 right-0 w-60 bg-slate-50 h-96 mt-44  drop-shadow-lg shadow-slate-100">
                <div className=' mt-2'>
                    <img src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' className='h-16 pl-20 ' />
                </div>
                <div className='text-center text-sm'>
                    <h1>Citizen Name</h1>
                    <h1>citizen@gmail.com</h1>
                </div>
                <div className=' pl-3 pt-8'>
                    <button className='bg-violet-500 hover:text-white hover:bg-violet-600 text-white font-bold py-2 px-12 rounded-full text-xs drop-shadow-md shadow-slate-100 w-48 ml-4 flex justify-center items-center' >                   
                        <Link to="/appliedLicense">Applied Licenses</Link>
                    </button>
                    <button className='bg-violet-500 hover:text-white hover:bg-violet-600 text-white font-bold py-2 px-12 rounded-full text-xs drop-shadow-md shadow-slate-100 w-48 ml-4 mt-1 flex justify-center items-center' >                   
                        <Link to="/firmDetail">Firm Details</Link>
                    </button>
                    <button className='bg-violet-500 hover:text-white hover:bg-violet-600 text-white font-bold py-2 px-12 rounded-full text-xs drop-shadow-md shadow-slate-100 w-48 ml-4 mt-1 flex justify-center items-center' >                
                        <Link to="/ownerDetail">Owner Details</Link>
                    </button>
                    <button className='bg-violet-500 hover:text-white hover:bg-violet-600 text-white font-bold py-2 px-12 rounded-full text-xs drop-shadow-md shadow-slate-100 w-48 ml-4 mt-1 flex justify-center items-center' >                     
                        <Link to="/downloads">Downloads</Link>
                    </button>
                </div>

            </div>
        </>
    )
}

export default UserSidebar