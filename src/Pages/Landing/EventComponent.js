 //////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - EventComponent
//    DESCRIPTION - EventComponent  conating event according to selected ulb in landingPage
//////////////////////////////////////////////////////////////////////////////////////

import React, { useContext } from 'react'
import { contextVar } from '../../components/ContextVar';


function EventComponent() {


    const vals = useContext(contextVar)

    console.log('vals from context ', vals.ulbdata)


    return (
        <>
            <div class="max-w-xl mx-auto">

                <div class="sm:p-2 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-between items-center  border mb-6">
                        <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white ">Jharkhand Headlines</h3>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class=" h-8   inline-block mr-2 text-indigo-800" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                        </a>
                    </div>
                    <div class="flow-root">
                        {vals.ulbdata?.events.map((item) => (
                            <div class="flex items-center space-x-0">
                                <div class="flex flex-col items-center bg-white  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-full   md:h-auto md:w-24  ml-2 mt-2" src="https://cdn.siasat.com/wp-content/uploads/2019/11/events-in-hyderabad.jpg" alt="" />

                                </div>
                                <div class="flex-1 min-w-0">
                                    <div class="flex flex-col justify-between p-3 ml-2 ">
                                        <h5 class="mb-2 text-xs font-bold tracking-tight text-gray-600 dark:text-white">
                                            {item.header}
                                        </h5>

                                    </div>

                                </div>

                            </div>
                        ))}
                        <div class="inline-flex float-right text-base font-semibold text-gray-900 dark:text-white">
                            <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                View all
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EventComponent