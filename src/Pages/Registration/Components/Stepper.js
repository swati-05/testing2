//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 05 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Stepper.js
//    DESCRIPTION - Stepper Verticle
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState,useEffect } from 'react'

function Stepper(props) {

    const [stepOneDone, setStepOneDone] = useState("white")
    const [stepTwoDone, setStepTwoDone] = useState("white")
    const [stepThreeDone, setStepThreeDone] = useState("white")
    const [stepFourDone, setStepFourDone] = useState("white")


    useEffect(() => {
        const colorValue = props.Funstep1;

        if(colorValue === 1){
            setStepOneDone("green-300")        
        }else if(colorValue == 2){
            setStepTwoDone("green-300")
        }else if(colorValue == 3){
            setStepThreeDone("green-300")
        }else if(colorValue == 4){
            setStepFourDone("green-300")
        }

    }, [props.Funstep1])

    return (
        <>
            <div class="w-full mt-20">
                <div class="flex">
                    <div class="flex flex-col items-center mr-4">
                        <div>
                            <div class={`flex items-center justify-center w-10 h-10 border rounded-full bg-${stepOneDone}`}>
                                <p className='text-gray-500 text-lg font-semibold'>1</p>
                            </div>
                        </div>
                        <div class={`w-0.5 h-full bg-${stepOneDone}`}></div>
                    </div>
                    <div class="pb-8 ">
                        <p class="mb-2 text-lg font-bold text-gray-600">Personal Details</p>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-col items-center mr-4">
                        <div>
                            <div class={`flex items-center justify-center w-10 h-10 border rounded-full bg-${stepTwoDone}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                                </svg>
                            </div>
                        </div>
                        <div class={`w-0.5 h-full bg-${stepTwoDone}`}></div>
                    </div>
                    <div class="pb-8 ">
                        <p class="mb-2 text-lg font-bold text-gray-600">Document Upload</p>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex-col items-center mr-4">
                        <div>
                            <div class={`flex items-center justify-center w-10 h-10 border rounded-full bg-${stepThreeDone}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                                </svg>
                            </div>
                        </div>
                        <div class={`w-0.5 h-full bg-${stepThreeDone}`}></div>
                    </div>
                    <div class="pb-8 ">
                        <p class="mb-2 text-lg font-bold text-gray-600">Verify</p>
                        {/* <p class="text-gray-700"> Step 3</p> */}
                    </div>
                </div>

                <div class="flex">
                    <div class="flex flex-col items-center mr-4">
                        <div>
                        <div class={`flex items-center justify-center w-10 h-10 border rounded-full bg-${stepFourDone}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="pt-1">
                        <p class="mb-2 text-lg font-bold text-gray-600">Done</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stepper

/*
Exported to -
1. Register.js
*/
