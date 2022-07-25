import React from 'react'
import { useParams } from "react-router-dom";

function CitizenViewDetail() {
  
    const { userId } = useParams();
// console.log("id" , userId)
    return (
        <>
       <div>User details page {userId}</div>
         <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Application No:-
                        <span className="text-green-600 font-bold text-base leading-8 my-1">  </span></label>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Application Type :-
                        <span className="text-green-600 font-bold text-base leading-8 my-1"> New Apply</span></label>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Firm Name :-
                        <span className="text-green-600 font-bold text-base leading-8 my-1"> Testing </span></label>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Ownership Type :-
                        <span className="text-green-600 font-bold text-base leading-8 my-1"> Own Property</span></label>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Applied Date :-
                        <span className="text-green-600 font-bold text-base leading-8 my-1"> 22/07/2022</span></label>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Firm Establishment Date :-
                        <span className="text-green-600 font-bold text-base leading-8 my-1"> 20/07/2022 </span></label>
                </div>
             {/* <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">First name :-
                        <span className="text-green-600 font-bold text-base leading-8 my-1"> sZFdxgchv</span></label>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">First fdsname :-
                        <span className="text-green-600 font-bold text-base leading-8 my-1"> sZFdxgchv</span></label>
                </div>  */}
            </div>
        </>
    )
}

export default CitizenViewDetail