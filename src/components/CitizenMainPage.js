import React from 'react'
import ApplySubList from '../Pages/citizen/ApplySubList'
import CitizenContentArea from '../Pages/citizen/CitizenContentArea'
import CitizenEntryPage from '../Pages/citizen/CitizenEntryPage'
import DashboardNavbar from '../Pages/citizen/DashboardNavbar'
import SideNav from '../Pages/citizen/SideNav'
import LandingNav from './testDelete/LandingNav'


function CitizenDashboardPage() {
  return (
    <>


      {/* <LandingNav /> */}
      <LandingNav />
            <div className='flex flex-row'>
                <div>
                    <SideNav />
                </div>
                <div>

                   <CitizenEntryPage />
                   <CitizenContentArea />
            

                </div>
            </div>
    

      


    </>
  )
}

export default CitizenDashboardPage