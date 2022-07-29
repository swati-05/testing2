import React from 'react'
import ApplySubList from '../Pages/citizen/ApplySubList'
import CitizenView from '../Pages/citizen/CitizenView'
import DashboardNavbar from '../Pages/citizen/DashboardNavbar'
import SideNav from '../Pages/citizen/SideNav'
import LandingNav from './testDelete/LandingNav'


function CitizenDashboardPage() {
  return (
    <>


      {/* <LandingNav /> */}
      <LandingNav />
      {/* <SideNav /> */}
      <CitizenView/>
      


    </>
  )
}

export default CitizenDashboardPage