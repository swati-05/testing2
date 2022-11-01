 //////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ComplainGrivanceMainPage
//    DESCRIPTION - ComplainGrivanceMainPage Component is a parent component of Complain and Grivances
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import GrevanshesPage from '../Pages/Landing/GrevanshesPage'
import complain from '../assets/complain.png'
import LandingNav from '../Pages/Landing/LandingNav'
import TimeLine from './TimeLine'

function ComplainGrivanceMainPage() {
  return (
    <>
      <LandingNav />
      <div class="grid grid-cols-10 ">
        <div class=" bg-white   col-span-2  ">
          <div class=" py-12 mb-8 ">
            <div class="relative ">
              <img src={complain} class="w-full  relative  " alt="" />
              {/* <div class=" bg-white border-b-2 border-l-2 rounded-3xl shadow-black absolute rotate-[-9deg] bottom-10 left-10 right-10 z-0 h-96 "></div> */}
            </div>
          </div>
        </div>
        <div className="col-span-8 bg-white ">
          <GrevanshesPage />
        </div>
      </div>
    </>
  )
}

export default ComplainGrivanceMainPage