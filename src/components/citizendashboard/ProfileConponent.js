import React from 'react'
import ApplicationPending from './ApplicationPending'
import CitizenNotification from './CitizenNotification'
import PaymentComponent from './PaymentComponent'

function ProfileConponent() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-2'>
                <div className='flex bg-sky-100 rounded-xl p-4 '>
                    <div className='flex-1 p-4'>
                        <h1 className='text-xl p-3'>User Name</h1>
                        <span>
                            <button className='bg-green-300 shadow-lg px-4 py-0 rounded-md'>edit</button>
                        </span>
                        <span className='ml-3'>
                            <button className='bg-yellow-200 shadow-lg px-4 py-0 rounded-md'>view</button>
                        </span>
                    </div>
                    <div className='flex-1'>
                        <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Photos.png' className='h-32 float-right' />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 p-2 mt-8'>
                <div>
                    <ApplicationPending />
                </div>
                <div>
                    <ApplicationPending />
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 p-2 mt-8'>
            
                <div>
                    <PaymentComponent />
                </div>
                <div>
                    <CitizenNotification />
                </div>
            </div>
        </>
    )
}

export default ProfileConponent