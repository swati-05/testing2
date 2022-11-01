 //////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenNotification
//    DESCRIPTION - CitizenNotification Component is for showing notification on citizen 
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'

function CitizenNotification() {
    return (
        <>
            <div class="grid place-items-center ">
                <div class="lg:w-2/5 sm:w-3/5 w-11/12 bg-gray-100 dark:bg-gray-800 rounded-xl mx-auto border p-5 shadow-sm">
                    <div class="inline-flex items-center justify-between w-full">
                        <h3 class="font-bold text-xl sm:text-2xl text-gray-800 dark:text-white">Notifications</h3>
                        <button
                            class="inline-flex text-xs sm:text-sm bg-white px-2 sm:px-3 py-2 text-blue-500 items-center rounded font-medium
         shadow border focus:outline-none transform active:scale-75 transition-transform duration-700 hover:bg-blue-500
          hover:text-white hover:-translate-y-1 hover:scale-110 dark:text-gray-800 dark:hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 sm:mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                            Close
                        </button>
                    </div>
                    <p class="mt-2 font-medium text-gray-500 text-sm sm:text-base dark:text-white">Today</p>
                    <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                        <div class=" inline-flex items-center justify-between w-full">
                            <div class="inline-flex items-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/763/763812.png"
                                    alt="Training Icon" class="w-6 h-6 mr-3" />
                                <h3 class="font-bold text-base text-gray-800">Training</h3>
                            </div>
                            <p class="text-xs text-gray-500">
                                2 min ago
                            </p>
                        </div>
                        <p class="mt-1 text-sm">
                            Hey! Do you remember about choosing your training regime?
                        </p>
                    </div>
                    <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                        <div class=" inline-flex items-center justify-between w-full">
                            <div class="inline-flex items-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/893/893257.png"
                                    alt="Messages Icon" class="w-6 h-6 mr-3" />
                                <h3 class="font-bold text-base text-gray-800">Messages</h3>
                            </div>
                            <p class="text-xs text-gray-500">
                                1 hour ago
                            </p>
                        </div>
                        <p class="mt-1 text-sm">
                            You have a new message
                        </p>
                    </div>
                    <p class="mt-2 font-medium text-gray-500 dark:text-white text-sm sm:text-base">Yesterday</p>
                    <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                        <div class=" inline-flex items-center justify-between w-full">
                            <div class="inline-flex items-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/6863/6863272.png"
                                    alt="Form Icon" class="w-6 h-6 mr-3" />
                                <h3 class="font-bold text-base text-gray-800">Forms</h3>
                            </div>
                            <p class="text-xs text-gray-500">
                                12:47
                            </p>
                        </div>
                        <p class="mt-1 text-sm">
                            Remember about filling out the COVID-19 from before the next appointment tomorrow
                        </p>
                    </div>
                    <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
                        <div class=" inline-flex items-center justify-between w-full">
                            <div class="inline-flex items-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/763/763812.png"
                                    alt="Training Icon" class="w-6 h-6 mr-3" />
                                <h3 class="font-bold text-base text-gray-800">Training</h3>
                            </div>
                            <p class="text-xs text-gray-500">
                                12:43
                            </p>
                        </div>
                        <p class="mt-1 text-sm">
                            We're glad you've decided to use our training system! Let's now set a complete of things
                        </p>
                    </div>
                    <button
                        class="inline-flex text-sm bg-white justify-center px-4 py-2 mt-12 w-full text-red-500 items-center rounded font-medium
     shadow border focus:outline-none transform active:scale-75 transition-transform duration-700 hover:bg-red-500
      hover:text-white hover:-translate-y-1 hover:scale-110 dark:hover:bg-white dark:text-gray-800 dark:hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 sm:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Clear all notifications
                    </button>
                </div>
            </div>


        </>
    )
}

export default CitizenNotification