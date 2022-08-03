import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import {contextVar} from '../../components/ContextVar'


function SearchBox() {

   
    const vals = useContext(contextVar)

    const [selectUlb, setselectUlb] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3333/Select')
            .then(function (response) {
                // handle success
                console.log("ulbid ",response.data);
                setselectUlb(response.data)
            })

    }, [])

    const handleChange = (e) => {
       
        let ulbids = e.target.value;
        console.log('ulbids : ',ulbids);
        axios.get('http://localhost:3333/Select/'+ulbids)
        .then(function (response) {
            // handle success
            console.log("ulbidnews ",response.data.news);
            vals.ulbdatafun(response.data)
        })
        e.preventDefault()
    }

    return (
        <>
            <div>

                <form>
                    <div class="flex">
                        {/* <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label> */}

                        <select class="flex-shrink-0  inline-flex items-center py-1 px-0 text-sm font-medium text-center text-gray-600 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200  dark:bg-gray-500 dark:hover:bg-gray-200 dark:focus:ring-gray-500 dark:text-white dark:border-gray-600" onChange={handleChange} >
                        <option value={0}>Jharkhand</option>
                            {selectUlb.map((items) => (
                                <option value={items.id}>{items.header}</option>
                            ))}
                        </select>
                        <div class="relative w-full">
                            <input type="search" id="search-dropdown" class=" p-2 w-full  text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search ..." required />
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