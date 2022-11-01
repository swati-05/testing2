//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 08 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - register.js
//    DESCRIPTION - Citizen Registration
//////////////////////////////////////////////////////////////////////////////////////
import React,{useEffect} from 'react'
import LandingNav from '../Landing/LandingNav'
import RegistrationSidebar from '../Registration/RegistrationSidebar'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  useEffect(() => {

      let login = localStorage.getItem('token');
      if(login){
         return navigate('/citizenDashboard')
      }
  });  

  return (
    <>
      {/* <LandingNav /> */}
      <div>
        <div className='md:grid md:grid-cols-1 m-2'>
          {/* <div className='col-span-2 h-screen bg-white border-r-2'>
            <RegistrationSidebar />
          </div> */}
          <div className='col-span-1 justify-self-center md:mt-20 mt-10'>
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