import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import LandingNav from '../../components/testDelete/LandingNav';
import TimeLine from '../../components/TimeLine';



function CitizenLicenseFullDetail() {
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
            <LandingNav />
   

            <div class="grid grid-cols-5 gap-5 bg-white">
                <div class=" bg-white mt-2 ml-2 col-span-1">
<TimeLine/>
                    
                </div>
                <div className="col-span-4 ">
                
                <form >
                    <div className=''>
                    <div class="px-4  mr-6 bg-white mt-7  m-auto ">
                            <div className='bg-slate-500 rounded  w-full h-10'>
                                <h1 className='text-xl font-serif p-1 px-4 text-white'> APPLIED LICENSE DETAIL</h1>
                            </div>
                            <div class="grid grid-cols-6 gap-6 px-4 mt-2">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Application No:-
                                        <span className="text-green-600 font-bold text-base leading-4 my-1"> {dastaList?.applicationNo} </span>
                                    </label>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="last-name" class="block text-sm font-medium text-gray-700">Application Type :-
                                        <span className="text-green-600 font-bold text-base leading-4 my-1">{dastaList?.applicationNo}</span>
                                    </label>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email-address" class="block text-sm font-medium text-gray-700">Firm Name :-
                                        <span className="text-green-600 font-bold text-base leading-4 my-1">{dastaList?.firmName} </span>
                                    </label>

                                </div>

                                <div class="col-span-6 sm:col-span-3">

                                    <label for="mobile" class="block text-sm font-medium text-gray-700">Ownership Type :-
                                        <span className="text-green-600 font-bold text-base leading-4 my-1">{dastaList?.ownershipType}</span>
                                    </label>

                                </div>

                                <div class="col-span-6 sm:col-span-3">

                                    <label for="mobile" class="block text-sm font-medium text-gray-700">Applied Date :-
                                        <span className="text-green-600 font-bold text-base leading-8  "> {dastaList?.appliedDate}</span>
                                    </label>

                                </div>
                            </div>
                        </div>
                        <div class="px-4 mt-2  mr-6 bg-white   m-auto ">
                            <div className='bg-slate-500 rounded  w-full h-10'>
                                <h1 className='text-xl font-serif p-1 px-4 text-white'> APPLIED LICENSE DETAIL</h1>
                            </div>
                            <div class="grid grid-cols-6 gap-6 px-4 mt-2">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Application No:-
                                        <span className="text-green-600 font-bold text-base leading-4 my-1"> {dastaList?.applicationNo} </span>
                                    </label>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="last-name" class="block text-sm font-medium text-gray-700">Application Type :-
                                        <span className="text-green-600 font-bold text-base leading-4 my-1">{dastaList?.applicationNo}</span>
                                    </label>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email-address" class="block text-sm font-medium text-gray-700">Firm Name :-
                                        <span className="text-green-600 font-bold text-base leading-4 my-1">{dastaList?.firmName} </span>
                                    </label>

                                </div>

                                <div class="col-span-6 sm:col-span-3">

                                    <label for="mobile" class="block text-sm font-medium text-gray-700">Ownership Type :-
                                        <span className="text-green-600 font-bold text-base leading-4 my-1">{dastaList?.ownershipType}</span>
                                    </label>

                                </div>

                                <div class="col-span-6 sm:col-span-3">

                                    <label for="mobile" class="block text-sm font-medium text-gray-700">Applied Date :-
                                        <span className="text-green-600 font-bold text-base leading-8  "> {dastaList?.appliedDate}</span>
                                    </label>

                                </div>
                            </div>
                        </div>
                        <div class="px-4  mr-6 bg-white mt-2  m-auto ">
                            <div className='bg-slate-500 rounded  w-full h-10'>
                                <h1 className='text-xl font-serif p-1 px-4 text-white'> APPLIED LICENSE DETAIL</h1>
                            </div>
                            <div class="grid grid-cols-6 gap-6 px-4 mt-2">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Application No:-
                                        <span className="text-green-600 font-bold text-base leading-4 my-1"> {dastaList?.applicationNo} </span>
                                    </label>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="last-name" class="block text-sm font-medium text-gray-700">Application Type :-
                                        <span className="text-green-600 font-bold text-base leading-4 my-1">{dastaList?.applicationNo}</span>
                                    </label>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email-address" class="block text-sm font-medium text-gray-700">Firm Name :-
                                        <span className="text-green-600 font-bold text-base leading-4 my-1">{dastaList?.firmName} </span>
                                    </label>

                                </div>

                                <div class="col-span-6 sm:col-span-3">

                                    <label for="mobile" class="block text-sm font-medium text-gray-700">Ownership Type :-
                                        <span className="text-green-600 font-bold text-base leading-4 my-1">{dastaList?.ownershipType}</span>
                                    </label>

                                </div>

                                <div class="col-span-6 sm:col-span-3">

                                    <label for="mobile" class="block text-sm font-medium text-gray-700">Applied Date :-
                                        <span className="text-green-600 font-bold text-base leading-8  "> {dastaList?.appliedDate}</span>
                                    </label>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
           
                </div>
                
            </div>
           
        </>
    )
}

export default CitizenLicenseFullDetail