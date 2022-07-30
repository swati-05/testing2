import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SearchBox(props) {

    const [selectUlb, setselectUlb] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3333/Select')
            .then(function (response) {
                // handle success
                console.log("ulbid",response.data);
                setselectUlb(response.data)
            })

    }, [])

    const handleChange = (e) => {
       

        props.funGetData(e.target.value)
        e.preventDefault()
    }

    return (
        <>
            <div>

                {/* <div class="flex items-center  ">
                    <div class="flex bg-gray-100 p-2 w-72 space-x-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input class="bg-gray-100 " type="text" placeholder="Article name or keyword..." />
                    </div>
                    <div class="flex  rounded-lg text-gray-500 font-semibold cursor-pointer">
                        <span>All categorie</span>
                        

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div class="bg-indigo-600 py-1 px-2 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                        <span>Search</span>
                    </div>
                </div> */}


                <form>
                    <div class="flex">
                        {/* <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label> */}

                        <select class="flex-shrink-0  inline-flex items-center py-1 px-0 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" onChange={handleChange} >
                            <option value={0}>Jharkhand</option>
                            {selectUlb.map((items) => (
                                <option value={items.ulbid}>{items.header}</option>
                            ))}
                        </select>
                        <div class="relative w-full">
                            <input type="search" id="search-dropdown" class=" p-2 w-full  text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search ..." required />
                            <button type="submit" class="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchBox