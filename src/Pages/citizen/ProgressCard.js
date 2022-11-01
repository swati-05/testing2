import React from 'react'

function ProgressCard() {
    return (
     <>
     
<div class="shadow-lg rounded-xl w-60 md:w-72 p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 relative overflow-hidden">
    <a href="#" class="w-full h-full block">
        <div class="w-full">
            <p class="text-gray-700 dark:text-white  text-2xl font-light mb-4">
                Task Progress
            </p>
            <div class="flex items-center justify-between text-gray-400 text-sm">
                <p>
                    Design
                </p>
                <p>
                    3/8
                </p>
            </div>
            <div class="w-full h-2 bg-green-100 rounded-full mb-4">
                <div class="w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full">
                </div>
            </div>
            <div class="flex items-center justify-between text-gray-400 text-sm">
                <p>
                    Development
                </p>
                <p>
                    6/10
                </p>
            </div>
            <div class="w-full h-2 bg-indigo-100 rounded-full mb-4">
                <div class="w-2/3 h-full text-center text-xs text-white bg-indigo-400 rounded-full">
                </div>
            </div>
            <div class="flex items-center justify-between text-gray-400 text-sm">
                <p>
                    DevOps
                </p>
                <p>
                    2/8
                </p>
            </div>
            <div class="w-full h-2 bg-blue-100 rounded-full mb-4">
                <div class="w-1/4 h-full text-center text-xs text-white bg-blue-400 rounded-full">
                </div>
            </div>
            <div class="flex items-center justify-between text-gray-400 text-sm">
                <p>
                    Marketing
                </p>
                <p>
                    8/8
                </p>
            </div>
            <div class="w-full h-2 bg-pink-100 rounded-full">
                <div class="w-full h-full text-center text-xs text-white bg-pink-400 rounded-full">
                </div>
            </div>
        </div>
    </a>
</div>

     </>
    )
}

export default ProgressCard