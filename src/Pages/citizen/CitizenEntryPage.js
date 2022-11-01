//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenEntryPage
//    DESCRIPTION - CitizenEntryPage Component is for landing in citizen dashboard 
//////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react'


function CitizenEntryPage(props) {




    const [citizenName, setcitizenName] = useState();
    useEffect(() => {
        setcitizenName(props.citizenName)

    }, [props.citizenName])

    return (
        <>
            <div>
          <div class="bg-white text-white rounded shadow-xl py-5 px-5 w-full  " >
                    <div class="flex flex-wrap -mx-3 items-center">
                        <div class="w-1/4 px-3 text-center hidden md:block">
                            <div class="p-5 xl:px-2 md:py-2 ">
                                <img src='https://img.freepik.com/free-vector/corporate-portrait-office-workers-employees_74855-5471.jpg?w=740&t=st=1659529815~exp=1659530415~hmac=5d8974059e46334b5ae662a6d219ba5ff0cd56229bfe8558bc311bb3a534d6a4' />
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-2/4 px-2 text-left">
                            <div class="p-5 xl:px-8 md:py-2">
                                <h3 class="text-4xl text-gray-600 font-sans p-4">Welcome, {citizenName?.name}!</h3>
                               
                                <p class="text-sm text-gray-500 ">This is your dashboard,Find all your information here.</p>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
                            <div class="p-5 xl:px-8 md:py-5">
                                <img src='https://img.freepik.com/free-vector/computer-monitor-graphic-animator-creating-video-game-modeling-motion-processing-video-file-using-professional-editor-vector-illustration-graphic-design-art-designer-workplace-concept_74855-13038.jpg?w=740&t=st=1659530577~exp=1659531177~hmac=0dce89b7e3c956fa8e564eb9e7ea851cde39468b5422ffb48d93cfeb0421b7c1' />
                            </div>
                        </div>
                    </div>
                </div>

              
            </div>

        </>
    )
}

export default CitizenEntryPage