import React from 'react'

function UserSidebar() {
    return (
        <>
            <div class="absolute inset-y-0 right-0 w-60 bg-slate-100 h-96 mt-48 drop-shadow-lg shadow-slate-100">
                <div className=' mt-2'>
                    <img src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' className='h-24 pl-20 '/>
                </div>
                <div>
                    <h1>Citizen Name</h1>
                    <h1>citizen@gmail.com</h1>
                </div>
                <div className=' pl-10 pt-8'>
                  <p className='bg-green-600 h-10 w-40 pt-2 text-sm drop-shadow-lg'>APPLIED LICENSES</p>
                </div>

            </div>
        </>
    )
}

export default UserSidebar