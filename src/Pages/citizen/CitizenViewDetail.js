import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";


function CitizenViewDetail() {
    const [dastaList, setDastaList] = useState()

    const { userId } = useParams();
    // console.log("id" , userId)
    useEffect(() => {

        axios.get(`http://localhost:3333/licenseTable?id=${userId}`)
            .then(function (response) {
                // handle success
                console.log('data of licence ', response.data);
                setDastaList(response.data[0])
            })
            .catch(function (error) {
                console.log(error)
            })
        // setDastaList(data.data)
    }, [])

    return (
        <>
            <div>
              
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="mt-5 md:mt-0 md:col-span-4">
                        <form action="#" method="POST">
                            <div class="shadow sm:rounded-md sm:overflow-hidden">
                                <div class="px-4 py-5 bg-slate-100 space-y-6 sm:p-6">

                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="first-name" class="block text-sm font-medium text-gray-700">Application No:-
                                                <span className="text-green-600 font-bold text-base leading-8 my-1"> {dastaList?.applicationNo} </span>
                                            </label>

                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">Application Type :-
                                                <span className="text-green-600 font-bold text-base leading-8 my-1">{dastaList?.applicationNo}</span>
                                            </label>

                                        </div>

                                        <div class="col-span-6 sm:col-span-4">
                                            <label for="email-address" class="block text-sm font-medium text-gray-700">Firm Name :-
                                                <span className="text-green-600 font-bold text-base leading-8 my-1">{dastaList?.firmName} </span>
                                            </label>

                                        </div>

                                        <div class="col-span-6 sm:col-span-3">

                                            <label for="mobile" class="block text-sm font-medium text-gray-700">Ownership Type :-
                                                <span className="text-green-600 font-bold text-base leading-8 my-1">{dastaList?.ownershipType}</span>
                                            </label>

                                        </div>
                                        <div class="col-span-6 sm:col-span-3">

                                            <label for="mobile" class="block text-sm font-medium text-gray-700">Applied Date :-
                                                <span className="text-green-600 font-bold text-base leading-8 my-1"> {dastaList?.appliedDate}</span>
                                            </label>

                                        </div>


                                    </div>
                                </div>

                                {/* <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button class=" p-2.5 bg-indigo-800 rounded-xl hover:rounded-3xl hover:bg-indigo-800 transition-all duration-300 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CitizenViewDetail