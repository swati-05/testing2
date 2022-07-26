import React from 'react'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadButton from './DownloadButton';

function DownloadPage() {
    return (
        <>

            <div class="shadow-lg rounded-xl w-full md:w-80 p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
                <div class="w-full flex items-center justify-between mb-8">
                    <p class="text-gray-800 dark:text-white text-xl">
                        Download Document
                    </p>
                    <a href="#" class="flex items-center text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-gray-500 border-0 focus:outline-none">
                        VIEW ALL
                    </a>
                </div>
                <hr className='mb-4 '/>
                <div class="flex items-center mb-6 rounded justify-between">
                    <span class="rounded-lg ">
                        <PictureAsPdfIcon className='text-red-500 ' />
                    </span>
                    <div class="flex items-center w-full justify-between">
                        <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
                            <p class="dark:text-white">
                                Download 
                            </p>
                        </div>
                        <span >
                        <DownloadButton />
                        </span>
                    </div>
                </div>
                <hr className='mb-4'/>
                <div class="flex items-center mb-6 rounded justify-between">
                    <span class="rounded-lg ">
                        <PictureAsPdfIcon className='text-red-500 ' />
                    </span>
                    <div class="flex items-center w-full justify-between">
                        <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
                            <p class="dark:text-white">
                                Download 
                            </p>
                        </div>
                        <span >
                        <DownloadButton  />
                        </span>
                    </div>
                </div>
                <hr className='mb-4 '/>
                <div class="flex items-center mb-6 rounded justify-between">
                    <span class="rounded-lg ">
                        <PictureAsPdfIcon className='text-red-500 ' />
                    </span>
                    <div class="flex items-center w-full justify-between">
                        <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
                            <p class="dark:text-white">
                                Download 
                            </p>
                        </div>
                        <span >
                        <DownloadButton />
                        </span>
                    </div>
                </div>
                <hr className='mb-4 '/>
                <div class="flex items-center mb-6 rounded justify-between">
                    <span class="rounded-lg ">
                        <PictureAsPdfIcon className='text-red-500 ' />
                    </span>
                    <div class="flex items-center w-full justify-between">
                        <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
                            <p class="dark:text-white">
                                Download 
                            </p>
                        </div>
                        <span >
                           <DownloadButton />
                        </span>
                    </div>
                </div>
                <hr className='mb-4 '/>
                <div class="flex items-center mb-6 rounded justify-between">
                    <span class="rounded-lg ">
                        <PictureAsPdfIcon className='text-red-500 ' />
                    </span>
                    <div class="flex items-center w-full justify-between">
                        <div class="flex text-sm flex-col w-full ml-2 items-start justify-between">
                            <p class="dark:text-white">
                                Download 
                            </p>
                        </div>
                        <span >
                        <DownloadButton />
                        </span>
                    </div>
                </div>
            </div>
            <hr className='mb-4'/>

        </>
    )
}

export default DownloadPage