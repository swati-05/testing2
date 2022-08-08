 //////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - About
//    DESCRIPTION - About Component is for juidco information
//////////////////////////////////////////////////////////////////////////////////////
 
 import React from 'react'
import LandingNav from '../Pages/Landing/LandingNav'
import Footer from './Footer'

function About() {
    return (
        <>
            <div>
                <div>
                    <LandingNav />
                </div>
                <div>
                    <section className="text-gray-600 bg-white">
                        <div className="container px-1 py-12 mx-auto">
                            <div className="text-center mb-20">
                                <h1 className="sm:text-3xl text-2xl font-medium text-left text-gray-900 mb-4">About Us</h1>
                                <p className="text-md mx-auto text-left text-gray-700">JUIDCO organization was formed on 19-11-2013 under The Companies Act, 1956 with its aims to Administer, Manage or Control works and conveniences of all kinds whether for any Government, Public Body, Local Authority, or any other company by itself or through any other agency or its individual.<br /><br />

                                    JUIDCO is dedicated to Public works, Government projects of all kinds and all other works of Urban Development and conveniences or other public or private liability. JUIDCO assists financially for starting, running, expanding, modernizing, shifting or otherwise and in finding markets for manufactured goods of Indian and Foreign origin and secure sound investments of foreign capital in Indian Undertakings and Enterprises.<br /><br />

                                    JUIDCO acts as advisors and/or consultants on all matters and problems relating to Urban and Town Planning, Administration, Management, Organization, Manufacture, Production, Storage, Process, Systems and Account, Training of personnel, Marketing, Distributing and selling methods and principles. JUIDCO is dedicated to engage and/or to avail the services of an individual, firm, body corporate or any other agency whether established in India or abroad.</p>

                            </div>
                            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-5 -mt-2 md:space-y-0 space-y-4">
                                <div className="p-4 md:w-1/3  flex flex-col text-center items-center ">
                                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Vision & Mission</h2>
                                        <p className="leading-relaxed text-base">The vision of JUIDCO is to become an organization of excellence...</p>

                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 flex flex-col text-center items-center ">
                                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Objectives</h2>
                                        <p className="leading-relaxed text-base">To construct, execute, carry out, equip, improve, alter, develop, decorate, maintain,...</p>

                                    </div>
                                </div>
                                <div className="p-4 md:w-1/3 flex flex-col text-center items-center  ">
                                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-md title-font font-medium mb-2">Major Achivements</h2>
                                        <p className="leading-relaxed text-sm">Centrally sponsored schemes and externally aided programs including...</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
                <div>
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default About