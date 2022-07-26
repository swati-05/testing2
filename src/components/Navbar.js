import * as React from 'react'

import { Link, useNavigate } from "react-router-dom";






function Navbar() {




    return (
        <>

            <header>

                <nav class="shadow-md bg-white border-b-2">
                    <div class="flex justify-between items-center py-2 px-4 container mx-auto drop-shadow-md">
                        <div className='flex  '>
                            <div className=' '>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png' className='h-16' />
                            </div>
                            <div className=' ml-4 mt-2  '>
                                <h1 className='text-center '>Jharkhand Urban Infrastructure <br /> Development Company</h1>
                            </div>
                        </div>

                        <div>

                            <div class="hover:cursor-pointer sm:hidden">
                                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                            </div>
                            <div class="flex items-center">



                                <ul class="sm:flex space-x-4 hidden items-center">
                                    <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md ">Home</a></li>
                                    <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md ">About</a></li>
                                    <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md ">Services</a></li>
                                    <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md ">Products</a></li>
                                    <li><a href="#" class="text-gray-700 hover:text-indigo-600 text-md ">Contact</a></li>
                                </ul>

                                <div class="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                                    <div>

                                        <div class="relative rounded-2xl bg-white px-1 pt-1 pb-1 shadow-xl ring-1 ring-gray-600/5 sm:mx-auto sm:max-w-lg sm:px-1">
                                            <div class="mx-auto max-w-md">


                                                <form action="" class="relative mx-auto w-max">
                                                    <input type="search"
                                                        class="peer cursor-pointer relative z-10 h-8 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </form>


                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </div>
                                    {/* <h1 class="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">SIGNUP</h1> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Navbar