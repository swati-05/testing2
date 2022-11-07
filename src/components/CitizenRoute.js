
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ApplyProperty from '../Pages/Application/ApplyProperty'
import Profile from '../Pages/Application/Profile'
import CitizenNavbar from './citizendashboard/CitizenNavbar'
import CitizenSidebar from './citizendashboard/CitizenSidebar'
import Dashboard from './citizendashboard/Dashboard'

function CitizenRoute() {
    return (
        <>
            <CitizenNavbar />
            <div className='grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto'>
                <div className='col-span-2 z-20 -mt-32 '>
                    <CitizenSidebar />
                </div>
                <div className='col-span-10 z-20 -mt-32'>
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/applyProperty' element={<ApplyProperty />} />
                        <Route path='/profileEdit' element={<Profile />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default CitizenRoute