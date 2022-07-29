import React from 'react'

function LandingNav() {
    return (
        <>
            <header>
                <nav class="shadow-md bg-white border-b-2 h-22">
                    <div class="flex justify-between items-center py-1 px-2 container mx-auto ">
                        <div className='flex  '>
                            <div className=' '>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png' className='h-20' />
                            </div>
                            <div className=' ml-4 mt-4  '>
                                <h1 className='text-center text-lg  text-gray-600'>Jharkhand Urban Infrastructure <br /> Development Company</h1>
                            </div>
                        </div>
                        <div>
                            <div class="hover:cursor-pointer sm:hidden">
                                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                            </div>
                            <div class="flex items-center ml-6">
                                <ul class="sm:flex hidden items-center ">
                                    <div>
                                        <div class="flex-col  ">
                                            <div class="flex w-60 justify-center space-x-0 ">
                                                <button class="min-w-auto w-12 h-10 bg-white p-2 rounded-l-full hover:bg-gray-500 hover:text-white  text-gray-500 font-semibold  hover:flex-grow hover: will-change-contents transition-all duration-200 ease-in-out ">
                                                    <div className='flex flex-row'>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className='ml-4 text-sm mt-1'>HOME</p>
                                                        </div>
                                                    </div>
                                                </button>
                                                <button class="min-w-auto w-12 h-10 bg-white p-2 rounded-none hover:bg-gray-500 hover:text-white  text-gray-500 font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
                                                    <div className='flex flex-row'>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className='ml-4 text-sm mt-1'>ABOUT</p>
                                                        </div>
                                                    </div>
                                                </button>

                                                <button class="min-w-auto w-12 h-10 bg-white p-2 rounded-r-full hover:bg-gray-500 hover:text-white  text-gray-500 font-semibold hover:flex-grow transition-all duration-200 ease-in-out">
                                                    <div className='flex flex-row'>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        {/* <div>
                                                            <p className='text-sm'>CONTACT</p>
                                                        </div> */}
                                                    </div>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </ul>
                                <div>

                                    <div class="relative  bg-white px-1 pt-1 pb-1    sm:mx-auto sm:max-w-lg sm:px-1">
                                        <div >



                                            <form class="flex items-center">
                                                <label for="simple-search" class="sr-only">Search</label>
                                                <div class="relative w-full">
                                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                                    </div>
                                                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required=""/>
                                                </div>
                                                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                    <span class="sr-only">Search</span>
                                                </button>
                                            </form>




                                        </div>
                                    </div>

                                </div>
                                {/* <div class="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                                    <h1 class="text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600">LOGIN</h1>
                                    <h1 class="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">SIGNUP</h1>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </nav>
            </header>



        </>
    )
}

export default LandingNav