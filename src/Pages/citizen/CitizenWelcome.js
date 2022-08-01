import React from 'react'
import ApplySubList from './ApplySubList'
import bgApply from '../../assets/bgApply.jpg'

function CitizenWelcome() {
  return (
    <>

      {/* <ApplySubList /> */}
      {/* style={{ backgroundImage: `url(${bgApply})` }} */}

      {/* <div class="bg-white  rounded-lg m-16 col-span-4 flex items-center opacity-75  h-48">
          <div class="flex flex-col p-5  px-8 space-y-1 items-center text-center col-span-4">
            <h1 className='text-5xl font-bold font-serif'>WELCOME
            <span className='text-md font-bold '> User</span>
            </h1>
          </div>
        </div> */}


      <div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div class="bg-indigo-600 text-white rounded shadow-xl py-5 px-5 w-full lg:w-10/12 xl:w-3/4" >
          <div class="flex flex-wrap -mx-3 items-center">
            <div class="w-1/4 px-3 text-center hidden md:block">
              <div class="p-5 xl:px-8 md:py-5">

              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-2/4 px-3 text-left">
              <div class="p-5 xl:px-8 md:py-5">
                <h3 class="text-2xl">Welcome, Scott!</h3>
                <h5 class="text-xl mb-3">Lorem ipsum sit amet</h5>
                <p class="text-sm text-indigo-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sit asperiores perferendis odit enim natus ipsum reprehenderit eos eum impedit tenetur nemo corporis laboriosam veniam dolores quos necessitatibus, quaerat debitis.</p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/4 px-3 text-center">
                <div class="p-5 xl:px-8 md:py-5">
                <img src='https://img.freepik.com/free-vector/welcome-concept-illustration_114360-240.jpg?w=740&t=st=1659360473~exp=1659361073~hmac=715b0cd3fa7935b017c9d06eb53b74c3d7deb5a61a5901987479d3bd48860abd'/>
                </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default CitizenWelcome