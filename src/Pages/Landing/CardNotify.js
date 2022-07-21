import React from 'react'
import OurDomain from '../OurDomain'
import TestingFile from '../OurDomain'

function CardNotify() {

 

    return (
        <>

            <div class="bg-slate-50 drop-shadow-lg flex justify-center items-center">
                {/* <!-- Card 1 --> */}
                <div class="grid col-span-4 relative">
                    <div class="bg-white relative shadow  w-5/6 md:w-4/6  lg:w-3/6 xl:w-96 h-2/5 mx-auto ">
                        <div class="flex justify-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="rounded-full h-20 shadow-xl  inline-block mr-2 text-indigo-800" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                        </div>

                        <div class="mt-2">
                            <h1 class="font-bold text-center text-xl text-gray-900">News Headlines</h1>
                            <div class="my-3 px-6">
                                <a href="#" class="text-gray-200 block rounded-md  text-center font-medium leading-6 px-1 py-1 bg-indigo-800 hover:indigo-800 hover:text-white">JHARKHAND NEWS</a>
                            </div>
                            <div >
                                <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm bg-white border">
                                    <p class=" border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">Today's news</p>
                                    <button className='text-red-600 w-28 ml-48 '>view more</button>

                                    <p class=" border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">Today's news</p>
                                    <button className='text-red-600 w-28 ml-48 '>view more</button>

                                    <p class="border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">Today's news</p>
                                    <button className='text-red-600 w-28 ml-48 '>view more</button>
                                    <p class="border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">Today's news</p>
                                    <button className='text-red-600 w-28 ml-48 '>view more</button>

                                    <p class=" border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">Today's news</p>
                                    <button className='text-red-600 w-28 ml-48 '>view more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* <!-- Card 2 --> */}
              
                <div class="grid col-span-4 ml-4 relative">
                  <OurDomain />
                </div>

                {/* <!-- Card 3 --> */}
                <div class="grid col-span-4 ml-4 relative">
                    <div className=' '>
                        <div class="bg-white relative shadow  w-5/6 md:w-4/6  lg:w-3/6 xl:w-96 h-2/5 mx-auto ">
                            <div class="flex justify-center ">
                           
                           
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 shadow-xl rounded-full text-indigo-800" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                            </svg>
                            </div>

                            <div class="mt-2">
                                <h1 class="font-bold text-center text-xl text-gray-900">Notice</h1>
                                <div class="my-3 px-6">
                                    <a href="#" class="text-gray-200 block rounded-md  text-center font-medium leading-6 px-1 py-1 bg-indigo-800 hover:indigo-800 hover:text-white">Notice Board</a>
                                </div>
                                <div >
                                    <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm bg-white border">
                                        <p class=" border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">Today's news</p>
                                        <button className='text-red-600 w-28 ml-48 '>view more</button>

                                        <p class=" border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">Today's news</p>
                                        <button className='text-red-600 w-28 ml-48 '>view more</button>

                                        <p class="border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">Today's news</p>
                                        <button className='text-red-600 w-28 ml-48 '>view more</button>
                                        <p class="border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">Today's news</p>
                                        <button className='text-red-600 w-28 ml-48 '>view more</button>

                                        <p class=" border-t border-gray-100 text-gray-600 py-1 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">Today's news</p>
                                        <button className='text-red-600 w-28 ml-48 '>view more</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>



        </>
    )
}

export default CardNotify