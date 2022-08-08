//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 08 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - register.js
//    DESCRIPTION - Citizen Registration
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import LandingNav from '../Landing/LandingNav'
import RegistrationSidebar from '../Registration/RegistrationSidebar'
import LoginForm from './LoginForm'

function Login() {
  return (
    <>
      <LandingNav />
      <div>
        <div className='grid grid-cols-12'>
          <div className='col-span-2 h-screen bg-white border-r-2'>
            <RegistrationSidebar />
          </div>
          <div className='col-span-4 h-screen m-5 justify-self-center'>
            <div className=' border py-3 bg-sky-500 text-white text-center shadow-2xl'>
              <h1 className='text-2xl font-semibold '>Citizen Login</h1>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login