 //////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  -DownloadPage
//    DESCRIPTION - DownloadPage Component is for download section
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadButton from './DownloadButton';
import SideNav from '../Pages/citizen/SideNav';

function DownloadPage() {
    return (
        <>
  

            <div className='flex flex-row'>
              
        
                    <div class="w-70   dark:bg-gray-800 relative overflow-hidden ">
                        <div class="w-full flex items-center justify-between mb-1">
                            <p class="text-gray-800 dark:text-white text-xl">
                               Document
                            </p>
                            <a href="#" class="flex ml-24 text-sm hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-gray-500 border-0 focus:outline-none">
                                VIEW ALL
                            </a>
                        </div>
                        <hr className='mb-1 ' />
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
                        <hr className='mb-1' />
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
                        <hr className='mb-1 ' />
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
                        <hr className='mb-1 ' />
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
                        <hr className='mb-1 ' />
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
             
            </div>



        </>
    )
}

export default DownloadPage