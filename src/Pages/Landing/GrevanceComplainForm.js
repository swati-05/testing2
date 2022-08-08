 //////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - GrevanceComplainForm
//    DESCRIPTION - GrevanceComplainForm  component is for complain form
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import complain from '../../assets/complain.png'
import SendIcon from '@mui/icons-material/Send';

function GrevanceComplainForm() {
    return (
        <>
{/*                         
                <div class="w-full max-w-6xl rounded bg-white drop-shadow-xl p-5 lg:p-10 mx-auto text-gray-800 relative md:text-left">
                    <div class="md:flex items-center -mx-4">
                        <div class="w-full md:w-1/2 px-8 mb-8 md:mb-0 ">
                            <div class="relative ">
                                <img src={complain} class="w-full relative z-10" alt="" />
                                <div class=" bg-white border-b-2 border-l-2 rounded-3xl shadow-black absolute rotate-[-9deg] bottom-10 left-10 right-10 z-0 h-96 "></div>
                            </div>
                        </div>
                        <form>
                            <div>
                                <h1 className='font-bold text-2xl'>COMPLAIN FORM</h1>
                                <hr/>
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6 mt-2">
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                </div>
                            </div>
                            <div class="relative z-0 mb-6 w-full group">
                                <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div class="relative z-0 mb-6 w-full group">
                                <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>
                            <div class="relative z-0 mb-6 w-full group">
                                <input type="text" name="" id="" class=" h-48 block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />

                                <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 px-2  top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Complaint</label>
                            </div>

                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="inline-block relative w-64">
                                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option>select category</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>

                            </div>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Submit</button>
                        </form>

                    </div>
                </div> */}
            


            <section class="text-gray-600  relative">
                <div class="container px-5  mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-6 p-10 flex items-end justify-start relative">
                        {/* <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
                        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div class="lg:w-1/2 px-6   ">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div class="lg:w-1/2 px-6  lg:mt-0">
                                {/* <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a class="text-indigo-500 leading-relaxed">example@email.com</a> */}
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs ">PHONE</h2>
                                <p class="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6">
                        <h2 class="text-gray-600 text-2xl mb-4 font-bold title-font font-serif">COMPLAIN FORM</h2>
                      
                        <div class="relative mb-4 w-60">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                           
                           
                        </div>
                        <div class="relative mb-4 w-60">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="inline-block relative w-60">
                                    <select class="block appearance-none w-full bg-white border border-gray-300 px-3 py-2 pr-8 rounded focus:outline-none focus:shadow-outline">
                                        <option>select category</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>

                            </div>
                        <div class="relative mb-4 mt-2 w-60">
                            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">SEND  <SendIcon /></button>
                       
                    </div>
                </div>
            </section>


        </>
    )
}

export default GrevanceComplainForm