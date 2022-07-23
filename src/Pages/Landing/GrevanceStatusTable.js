import React from 'react'
import complain from '../../assets/complain.png'

function GrevanceStatusTable() {
    return (
        <>
            <div class="w-full max-w-6xl rounded bg-white drop-shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div class="md:flex items-center -mx-10">
                    <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0 ">
                        <div class="relative ">
                            <img src={complain} class="w-full relative z-10" alt="" />
                            <div class=" bg-white border-b-2 border-l-2 rounded-3xl shadow-black absolute rotate-[-9deg] bottom-10 left-10 right-10 z-0 h-96 "></div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full text-center border-2">
                                        <thead class="border-b">
                                            <tr>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                                   complain
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                                   Complained Date
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                                Resolved Date
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                              Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>  
                                            <tr class="border-b bg-green-100 border-green-200">
                                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                   Puddle on road
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                   12/07/2022
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    22/07/2022
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Completed
                                                </td>
                                            </tr>
                                            <tr class="border-b bg-red-100 border-red-200">
                                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Puddle on road
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                1/07/2022
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                 dd/mm/yy
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                   Pending..
                                                </td>
                                            </tr>
                                            <tr class="border-b bg-yellow-100 border-yellow-200">
                                                <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Puddle on road
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                   18/07/2022
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    dd/mm/yy
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Process..
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GrevanceStatusTable