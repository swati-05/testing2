//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 06 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - RegistrationVerify.js
//    DESCRIPTION -RegistrationVerify
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import { BsPaperclip } from 'react-icons/bs';

function RegistrationVerify(props) {

    // console.log("Data In Vefify PAge----", props.docList)

    const handleBacktBtn = () => {
        props.backBtn(1)
    }

    const handleNxtBtn = () => {
        props.nxtBtn(1)
    }

    const saveFileSelected = (e) => {
        console.log("Updated", e.target.files[0]);
        // setFileSelected(e.target.files[0]);
    };



    return (
        <>
            <div className='bg-white border border-t-0 shadow-md'>
                <div className="inline-block min-w-full rounded-lg overflow-hidden">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div>
                            <dl>
                                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.formData && props.formData.full_name}</dd>
                                </div>
                                
                                <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Guardian Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.formData && props.formData.guardian_name}</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.formData && props.formData.email}</dd>
                                </div>
                                <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.formData && props.formData.mobile_no}</dd>
                                </div>
                                <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Aadhar No</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.formData && props.formData.aadhar}</dd>
                                </div>
                                <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">PAN No</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.formData && props.formData.pan_no}</dd>
                                </div>
                                <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.formData && props.formData.dob}</dd>
                                </div>
                                <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Gender</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.formData && props.formData.gender}</dd>
                                </div>
                                <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Is Armed forces ?</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.formData && props.formData.isArmed}</dd>
                                </div>
                                <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Is Specially Abled ?</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{props.formData && props.formData.isSpecially}</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Ranchi Jakhaed India</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Documents</dt>
                                    <dd className="mt-1 w-96 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                            {
                                                props.docList && props.docList.map((e) => (
                                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                        <div className="w-0 flex-1 flex items-center">
                                                            <BsPaperclip className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                            <span className="ml-2 flex-1 w-0 truncate">{e.docName}</span>
                                                        </div>
                                                        <div className="ml-4 flex-shrink-0">
                                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                View
                                                            </a>
                                                        </div>
                                                    </li>
                                                ))
                                            }

                                        </ul>

                                    </dd>

                                </div>
                            </dl>
                        </div>
                    </div>


                    <div className='grid grid-cols-2 my-5 mx-10'>
                        <div className='col-span-1'><button onClick={handleBacktBtn} className='bg-blue-600 hover:bg-blue-700 px-5 py-2 shadow-xl rounded-md text-white text-base'>Back</button></div>
                        <div className='col-span-1'><button onClick={handleNxtBtn} className='bg-green-600 hover:bg-green-700 px-5 py-2 shadow-xl rounded-md text-white text-base float-right'>Final Submit</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationVerify

/*
Exported to -
1. Register.js
*/