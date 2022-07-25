import React from 'react'

function DashboardNavbar() {
    return (
        <>

            <nav class="shadow-md bg-white border-b-2 h-20">
                <div class="flex justify-center items-center py-2 px-4 container mx-auto drop-shadow-md">
                   

                    <div>

                        <div class="flex items-center">


                                <div class="flex bg-slate-100 p-2 w-96 mt-3 space-x-4 rounded-md transform hover:scale-105 transition duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <input class="bg-slate-100 outline-none " type="text" placeholder="Article name or keyword..." />
                                </div>
                               <div>
                                
                               
                                
                               </div>
                                
                            </div>

                        </div>
                    </div>
              
            </nav>

        </>
    )
}

export default DashboardNavbar