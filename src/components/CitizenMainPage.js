//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenMainPage
//    DESCRIPTION - CitizenMainPage Component is a parent component of citizen dashboard
//////////////////////////////////////////////////////////////////////////////////////


import React from 'react'
import ApplySubList from '../Pages/citizen/ApplySubList'
import CitizenContentArea from '../Pages/citizen/CitizenContentArea'
import CitizenEntryPage from '../Pages/citizen/CitizenEntryPage'
import DashboardNavbar from '../Pages/citizen/DashboardNavbar'
import SideNav from '../Pages/citizen/SideNav'
import LandingNav from '../Pages/Landing/LandingNav'


function CitizenMainPage() {
  return (
    <>
      <div className='flex flex-row'>
        <div>
          <SideNav />
        </div>
        <div>
          <LandingNav />
          <CitizenEntryPage />
          <CitizenContentArea />
        </div>
      </div>
    </>
  )
}

export default CitizenMainPage