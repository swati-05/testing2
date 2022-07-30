import React, { useState, useEffect } from 'react'
import axios from 'axios'

function NewsComponent(props) {
    console.log('news at news component ',props.newsData)

    const [newsByUlb, setnewsByUlb] = useState([]);


    useEffect(() => {
        setnewsByUlb(props.newsData)
    
    }, [])
    

    
    // const [getNews, setgetNews] = useState([])
    // useEffect(() => {
    //     axios.get('http://localhost:3333/news')
    //         .then(function (response) {
    //             // handle success
    //             console.log(response.data);
    //             setgetNews(response.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })

    // }, [])


    return (
        <>
            <div class="max-w-xl mx-auto">

                <div class="sm:p-2 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-between items-center  border mb-6">
                        <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white ">Jharkhand Headlines</h3>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class=" h-8   inline-block mr-2 text-indigo-800" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                        </a>
                    </div>
                    <div class="flow-root">

                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 ">
                            {newsByUlb?.map((item) => (
                                <li class="py-1 sm:py-2">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-1 min-w-0">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {item.header}
                                            </p>
                                        </div>

                                    </div>
                                    {/* <hr /> */}

                                </li>
                            ))}

                        </ul>
                        <div class="inline-flex float-right text-base font-semibold text-gray-900 dark:text-white">
                            <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                View all
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewsComponent