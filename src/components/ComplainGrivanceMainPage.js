import React from 'react'
import GrevanshesPage from '../Pages/Landing/GrevanshesPage'
import complain from '../assets/complain.png'
import LandingNav from '../Pages/Landing/LandingNav'
import TimeLine from './TimeLine'


function Complain_Grivance() {
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

export default Complain_Grivance