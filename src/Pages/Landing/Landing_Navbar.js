import { useEffect, useState } from 'react'
import { People } from '@mui/icons-material'
import CardNotify from './CardNotify'
import Peoples from './Peoples'
import axios from 'axios'


function Landing_Navbar() {
   
    const [ulbSelect, setulbSelect] = useState({ header: "Ranchi", lbid: 1 }, { header: " Dhanbad", ulbid: 2 })
    useEffect(() => {
        axios.get("http://localhost:3000/Select")
            .then(function (response) {
                // handle success
                console.log(response);
                setulbSelect(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })

    }, [])

// console.log(ulbSelect)
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
                                    <h1 class="text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600">LOGIN</h1>
                                    <h1 class="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">SIGNUP</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main>

                <section className='m-0 p-0'>
                    <div class="bg-slate-50 sm:grid grid-cols-5  px-4 py-6   space-y-6 sm:space-y-0 sm:gap-4">

                        <div class="h-96 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md flex items-center">
                            <div class="ml-20 w-80">
                                <h2 class="text-white text-4xl">GOVERNMENT OF JHARKHAND</h2>
                                <p class="text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7"></p>

                                <a href="#" class="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">get start</a>
                            </div>

                        </div>
                        <div class="h-96 col-span-1 drop-shadow-md">
                            <div class="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">

                                <select placeholder="search" class=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" >
                                    <option >SELECT YOUR ULB</option>
                                    {
                                        ulbSelect?.map((items) => (
                                            <option >{items.header}</option>
                                        ))
                                    }

                                </select>
                                <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg></span>
                            </div>
                            <div class="bg-white  rounded-md">

                                <h1 class="text-center text-lg my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-900">Service</h1>
                                <div class="bg-white rounded-md list-none  text-center ">
                                    
                                    <li class="text-center text-lg my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-900"><a href="#" class="list-none  hover:text-indigo-600">Department</a></li>
                                    <li class="text-center text-lg my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-900"><a href="#" class="list-none  hover:text-indigo-600">District</a></li>
                                    <li class="text-center text-lg my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-900"><a href="#" class="list-none  hover:text-indigo-600">State Agency</a></li>
                                    <li class="text-center text-lg my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-900"><a href="#" class="list-none  hover:text-indigo-600">Complain & Grievance</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>

                </section>

                <CardNotify />
                <Peoples />
            </main>
        </>
    )
}

export default Landing_Navbar