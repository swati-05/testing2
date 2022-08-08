 //////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - GrevanceStatusTable
//    DESCRIPTION - GrevanceStatusTable Component is for showing complain list by particular citizen
//////////////////////////////////////////////////////////////////////////////////////

import { Link, Outlet, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import complain from '../../assets/complain.png'
import { Hidden } from '@mui/material'

function GrevanceStatusTable() {

    const [complainRecordTable, setcomplainRecordTable] = useState([])
    const [closeTable, setcloseTable] = useState('')

    useEffect(() => {
        axios.get(' http://localhost:3333/complainRecord')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setcomplainRecordTable(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })

    }, [])
    const closeForm = () => {
        setcloseTable('hidden')

    }

    return (
        <>
           

             {/* this is for showing complain list in a table of grivance page */}

            <div className={closeTable}>
                <div className=' flex justify-between bg-slate-500 w-full'>
                    <div>

                    </div>
                    <div>
                        <h1 className='text-white font-serif p-3 text-xl'> COMPLAIN DETAIL </h1>
                    </div>

                    <div>
                        <button className=' font-serif p-2 text-xl' onClick={closeForm}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                            </svg>
                        </button>    </div>
                </div>

                <div class={"-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 "}>

                    <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                        <table class="min-w-full">
                            <thead>
                                <tr>
                                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Complain For</th>
                                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Complain Date</th>
                                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                {complainRecordTable.map((items) => (
                                    <tr>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div class="text-sm leading-5 text-blue-900">{items.complainedFor}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{items.complainedDate}</td>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                            <span class="relative inline-block px-3 py-1 font-semibold text-gray-800 leading-tight">
                                                <span aria-hidden class="absolute inset-0 bg-indigo-600 opacity-50 rounded-full"></span>
                                                <span class="relative text-xs">{items.status}</span>
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                            {/* <Link to={`/appliedLicenseDetail/${items.id}`} key={items.id}><button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button></Link> */}
                                            <Link to={`/test/${items.id}`} key={items.id}><button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Track Status</button></Link>
                                            <Outlet />
                                        </td>

                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    </div>
                    <div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GrevanceStatusTable