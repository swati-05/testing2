import React from 'react'
import { Link } from 'react-router-dom'
import LandingNav from '../Landing/LandingNav'
import SideNav from './SideNav'

function CitizenSubPropertyCategory() {
    return (
        <>

            <div className='flex flex-row'>
                <div>
                    <SideNav />
                </div>
                <div>
                    <LandingNav />
                    <div className='flex flex-row bg-white'>
                        <div>
                            <div class=" flex-wrap justify-center mt-4">

                                <div class=" p-4 ml-5 md:p-10 ">
                                    <div class="w-full flex items-center justify-center bg-transparent ">
                                        <div class="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 bg-blue-200 rounded-br-full pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
                                            <div class="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
                                                <div class="rounded-full w-16 sm:w-18 md:w-20 overflow-auto">
                                                    <span class="flex h-0 w-3">
                                                        <span class="animate-ping absolute inline-flex h-14 w-14 ml-3 mt-3 rounded-full bg-blue-500 opacity-75"></span>
                                                        {/* <span class="relative inline-flex rounded-full h-2 w-2  bg-red-400"></span> */}
                                                    </span>
                                                    <img src="https://img.freepik.com/free-vector/giant-check-list_23-2148087771.jpg?w=740&t=st=1659778834~exp=1659779434~hmac=5198b204d78b6707eafcb79c86b615dcc2619319896b1ea90f14ebcad1c8e81d" class="" />
                                                </div>
                                            </div>
                                            <Link to="citizenSafApply">
                                                <div class="flex flex-col space-y-2 md:space-y-4">
                                                    <label class="absolute font-semibold text-gray-500 text-sm text-start top-3 left-9 sm:left-10">
                                                        NEW-ASSIGNMENT
                                                    </label>
                                                    <p class="absolute text-gray-500 text-sm mt-1 leading-relaxed left-10  sm:left-10">
                                                        Apply
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class=" p-4 ml-5 md:p-10 ">
                                    <div class="w-full flex items-center justify-center bg-transparent ">
                                        <div class="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 bg-blue-200 rounded-br-full pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
                                            <div class="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
                                                <div class="rounded-full w-16 sm:w-18 md:w-20 overflow-auto">
                                                    <span class="flex h-0 w-3">
                                                        <span class="animate-ping absolute inline-flex h-14 w-14 ml-3 mt-3 rounded-full bg-blue-500 opacity-75"></span>
                                                        {/* <span class="relative inline-flex rounded-full h-2 w-2  bg-red-400"></span> */}
                                                    </span>
                                                    <img src="https://img.freepik.com/free-vector/giant-check-list_23-2148087771.jpg?w=740&t=st=1659778834~exp=1659779434~hmac=5198b204d78b6707eafcb79c86b615dcc2619319896b1ea90f14ebcad1c8e81d" class="" />
                                                </div>
                                            </div>
                                            <div class="flex flex-col space-y-2 md:space-y-4">
                                                <label class="absolute font-semibold text-gray-500 text-sm text-start top-3 left-9 sm:left-10">
                                                    RE-ASSIGNMENT
                                                </label>
                                                <p class="absolute text-gray-500 text-sm mt-1 leading-relaxed left-10  sm:left-10">
                                                    Apply
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" p-4 ml-5 md:p-10 ">
                                    <div class="w-full flex items-center justify-center bg-transparent ">
                                        <div class="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 bg-blue-200 rounded-br-full pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
                                            <div class="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
                                                <div class="rounded-full w-16 sm:w-18 md:w-20 overflow-auto">
                                                    <span class="flex h-0 w-3">
                                                        <span class="animate-ping absolute inline-flex h-14 w-14 ml-3 mt-3 rounded-full bg-blue-500 opacity-75"></span>
                                                        {/* <span class="relative inline-flex rounded-full h-2 w-2  bg-red-400"></span> */}
                                                    </span>
                                                    <img src="https://img.freepik.com/free-vector/giant-check-list_23-2148087771.jpg?w=740&t=st=1659778834~exp=1659779434~hmac=5198b204d78b6707eafcb79c86b615dcc2619319896b1ea90f14ebcad1c8e81d" class="" />
                                                </div>
                                            </div>
                                            <div class="flex flex-col space-y-2 md:space-y-4">
                                                <label class="absolute font-semibold text-gray-500 text-sm text-start top-3 left-9 sm:left-10">
                                                    MUTATION
                                                </label>
                                                <p class="absolute text-gray-500 text-sm mt-1 leading-relaxed left-10  sm:left-10">
                                                    Apply
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div class="flex p-4 ml-5 md:p-10">
                        <div class="w-full flex items-center justify-center bg-transparent">
                            <div class="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 rounded-tr-full pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center bg-white">
                                <div class="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
                                    <div class="rounded-full  w-16 sm:w-18 md:w-20 overflow-auto">
                                        <span class="flex h-0 w-3">
                                            <span class="animate-ping absolute inline-flex h-14 w-14 ml-3 mt-3 rounded-full bg-blue-500 opacity-75"></span>
                                            <span class="relative inline-flex rounded-full h-2 w-2  bg-red-400"></span>
                                        </span>
                                        <img src="https://img.freepik.com/free-vector/giant-check-list_23-2148087771.jpg?w=740&t=st=1659778834~exp=1659779434~hmac=5198b204d78b6707eafcb79c86b615dcc2619319896b1ea90f14ebcad1c8e81d" class="" />
                                    </div>
                                </div>
                                <div class="flex flex-col space-y-2 md:space-y-4">
                                    <label class="absolute font-semibold text-gray-500 text-sm text-start top-3 left-9 sm:left-10">
                                        MUTATION
                                    </label>
                                    <p class="absolute text-gray-200 text-sm mt-1 leading-relaxed left-8  sm:left-10">
                                       Apply
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                            </div>
                        </div>


                        <div>
                            <div className='bg-white w-full h-screen overflow-auto'>
                                <div className=' p-12'>
                                    <div className='flex flex-row'>
                                        <div className='flex-1'>
                                            <h1 className='font-semibold text-xl mt-1'>
                                                PROPERTY TAX
                                            </h1>
                                        </div>
                                        <button
                                            class="h-8 w-12 bg-red-400 rounded-full drop-shadow-lg text-sm text-white duration-300 hover:bg-green-500  ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />
                                            </svg>

                                        </button>
                                        <div className='flex-1 ml-96 -mt-3' >
                                            <img src='https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?w=826&t=st=1659784290~exp=1659784890~hmac=ebdaac857732a1bae2aa343b76514f5a34cd662dc447907ccdade20efbfe5bab'></img>

                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                    <h1 className='text-bold mt-2 text-md text-black'>Introduction:</h1>
                                    <p className='text-sm text-gray-600'>
                                        ‘Property tax’ or ‘House tax’ is a land tax on building, along with appurtenant (belonging) land. It is imposed on the Possessor and not on the custodian of the property.<br />
                                        The project will tackle difficulties faced by the land owners and tax collector for the survey, assessment, calculation and payment of property tax.<br />
                                        The project in whole will deal with all aspects of property tax management, from survey to collection.<br /><br />
                                    </p>

                                    <h1 className='text-bold mt-2 text-md text-black'> Project Scope:</h1>
                                    <p className='text-sm text-gray-600'>
                                        The main scope of the Tax Management system is to generate unique ID demand & unique property ID generation for citizens, direct form filling from the tax collector’s device (tab or a smartphone), e signature/confirmation done by the property owner after reviewing the details of self-assessment. Hence reducing the workload of back office for digitization.
                                    </p>

                                    <div className='mt-4'>
                                        <h1 className='font-semibold text-lg'> Citizen Portal: - </h1>
                                        <div>
                                            <h1 className='text-bold mt-2 text-md text-black'>New-assessment </h1>
                                            <p className='text-sm text-gray-600'>
                                                The citizen themselves can fill in their online assessment form.
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className='text-bold mt-2 text-md text-black'>Reassessment  </h1>
                                            <p className='text-sm text-gray-600'>
                                                The citizen themselves reassess their previous property details in case there is addition to a building in terms of construction, or reassessment for a new financial year.
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className='text-bold mt-2 text-md text-black'>Reassessment with mutation  </h1>
                                            <p className='text-sm text-gray-600'>
                                                The citizen can use this portal for reassessment if a property is being sold or transferred to another person. This reassessment will require prescribed documents that have to be uploaded at the time of filling..
                                            </p>
                                        </div>

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

export default CitizenSubPropertyCategory