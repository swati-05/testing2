import { Link, Outlet, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function CitizenAppliedLicenseDetail() {

    const [appliedLicenseTable, setappliedLicenseTable] = useState([])

    // const [getData, setgetData] = useState()
    // let {id} = useParams();
    // console.log(id)

    useEffect(() => {
        axios.get('http://localhost:3333/licenseTable')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setappliedLicenseTable(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })

    }, [])
    return (
        <>
            <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">

                <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">License For</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Applied Date</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                            {appliedLicenseTable.map((items) => (
                                <tr>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                        <div class="text-sm leading-5 text-blue-900">{items.licensedFor}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{items.appliedDate}</td>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                        <span class="relative inline-block px-3 py-1 font-semibold text-gray-800 leading-tight">
                                            <span aria-hidden class="absolute inset-0 bg-indigo-600 opacity-50 rounded-full"></span>
                                            <span class="relative text-xs">{items.status}</span>
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                    {/* <Link to={`/appliedLicenseDetail/${items.id}`} key={items.id}><button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button></Link> */}
                                    <Link to={`/test/${items.id}`} key={items.id}><button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button></Link>
                                        <Outlet />
                                    </td>

                                </tr>
                            ))}
                           
                            {/* <tr>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div class="text-sm leading-5 text-blue-900">Water Connection</div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">12/04/2022</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                    <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span aria-hidden class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                        <span class="relative text-xs">Rejected</span>
                                    </span>
                                </td>
                                <td class="px-6 py-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                                </td>
                            </tr> */}
                            {/* <tr>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div class="text-sm leading-5 text-blue-900">Water Connection</div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">12/04/2022</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                    <span class="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                        <span aria-hidden class="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"></span>
                                        <span class="relative text-xs">Pending</span>
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                    
                                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div class="text-sm leading-5 text-blue-900">Water Connection</div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">12/04/2022</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative text-xs">Approved</span>
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                                </td>
                            </tr> */}



                        </tbody>
                    </table>
                </div>


                <div>

                </div>



            </div>

        </>
    )
}

export default CitizenAppliedLicenseDetail