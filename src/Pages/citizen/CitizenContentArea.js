//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenContentArea
//    DESCRIPTION - CitizenContentArea Component is for conating content on dashboard
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'

function CitizenContentArea() {
    return (
        <>

            {/* containg contain  on dashboard */}

           

            <div class="p-0 flex flex-wrap  bg-white itrem-center justify-center">

                <div class="flex-shrink-0 m-3 h-32 w-68 relative overflow-hidden bg-orange-400 rounded-lg max-w-xs shadow-lg">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <span className="text-center inline-block animate-pulse drop-shadow-lg  rounded-lg text-black text-sm">
                        <img src='https://www.iconpacks.net/icons/1/free-hand-cursor-icon-1299-thumb.png' className='h-24 w-24' />
                    </span>

                    <div class="relative text-white px-6 pb-6 -mt-1">
                        <span class="block  -mb-1">View & update your profile </span>

                    </div>
                </div>
                <div class="flex-shrink-0 m-3 h-32 w-68 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <span className="text-center inline-block animate-pulse drop-shadow-lg  rounded-lg text-black text-sm">
                        <img src='https://www.iconpacks.net/icons/1/free-hand-cursor-icon-1299-thumb.png' className='h-24 w-24' />
                    </span>
                    <div class="relative text-white px-6 pb-6 -mt-1">
                        <span class="block  -mb-1">View your applied licenses</span>

                    </div>
                </div>
                <div class="flex-shrink-0 m-3 h-32 w-68 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <span className="text-center inline-block animate-pulse drop-shadow-lg  rounded-lg text-black text-sm">
                        <img src='https://www.iconpacks.net/icons/1/free-hand-cursor-icon-1299-thumb.png' className='h-24 w-24' />
                    </span>
                    <div class="relative text-white px-6 pb-6 -mt-1">
                        <span class="block  -mb-1">View your applied licenses</span>

                    </div>
                </div>
                <div class="flex-shrink-0 m-3 h-32 w-68 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <span className="text-center inline-block animate-pulse drop-shadow-lg  rounded-lg text-black text-sm">
                        <img src='https://www.iconpacks.net/icons/1/free-hand-cursor-icon-1299-thumb.png' className='h-24 w-24' />
                    </span>
                    <div class="relative text-white px-6 pb-6 -mt-1">
                        <span class="block  -mb-1">View your applied licenses</span>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CitizenContentArea