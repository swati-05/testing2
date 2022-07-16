import React from 'react'
import logo from '../logo.svg'
import bg from './bg.png'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>

            <div className=' flex drop-shadow-md' style={{ backgroundImage: `url('${bg}')`}}>
                <div className='flex-3 w-1/12 h-8 pt-6'>
                    <a href="https://flowbite.com/" class="flex items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png" class="mr-3  " alt="Flowbite Logo" />

                    </a>
                </div>
                <div className='flex-1  '>
                    <div className=' border-b-2 border-gray-400 h-16'>
                        <div class="hidden relative md:block w-1/3 mx-auto pt-4">
                            <div class="flex absolute inset-y-0 pt-4 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 opacity-75" placeholder="Search..." />
                        </div>
                    </div>

                    <div>
                        <nav class=" border-gray-200 px-2 sm:px-4 py-0 rounded dark:bg-gray-900 h-24 pt-9 ">
                            <div class="container flex flex-wrap justify-between  ">
                              
                                <div class="flex md:order-2">
                                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Search</span>
                                    </button>
                                   
                                    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                                        <span class="sr-only">Open menu</span>
                                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
                                    <div class="relative mt-3 md:hidden">
                                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                                    </div>
                                    <ul class="flex flex-col mt-4 md:flex-row ml-6 md:mt-0 md:text-sm md:font-medium h-4">
                                        <li>
                                            <button className=' hover:text-white hover:bg-violet-600 text-slate-900 font-bold py-2 px-12 rounded-full' >                                              
                                                <Link to="/property">PROPERTY</Link>
                                                </button>

                                        </li>
                                        <li>
                                            <button className=' hover:text-white hover:bg-violet-600 text-slate-900 font-bold py-2 px-12 rounded-full'>                                           
                                                <Link to="/trade">TRADE</Link>
                                            </button>

                                        </li>
                                        <li>
                                            <button className=' hover:text-white hover:bg-violet-600 text-slate-900 font-bold py-2 px-12 rounded-full'>                                              
                                                <Link to="/water">WATER</Link>
                                            </button>
                                        </li>
                                        <li>
                                            <button className=' hover:text-white hover:bg-violet-600 text-slate-900 font-bold py-2 px-12 rounded-full' >
                                                <Link to="/building">BUILDING PLAN</Link>
                                                </button>

                                        </li>
                                        <li>
                                            <button className=' hover:text-white hover:bg-violet-600 text-slate-900 font-bold py-2 px-12 rounded-full'>                                            
                                                <Link to="/birth">BIRTH & DEATH</Link>
                                            </button>

                                        </li>
                                        <li>
                                            <button className=' hover:text-white hover:bg-violet-600 text-slate-900 font-bold py-2 px-12 rounded-full'>                                               
                                                <Link to="/advertisement">ADVERTISEMENT</Link>
                                            </button>
                                        </li>
                                        <li>
                                            <button className=' hover:text-white hover:bg-violet-600 text-slate-900 font-bold py-2 px-12 rounded-full'>             
                                                <Link to="/solidWaste">SOLID WASTE</Link>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar