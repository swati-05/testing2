//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 05 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - register.js
//    DESCRIPTION - Citizen Registration
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import RegistrationForm from './RegistrationForm'
import RegistrationSidebar from './RegistrationSidebar'
// import LandingNav from '../../Pages/Landing/L'
// import LandingNav from '../../components/testDelete/LandingNav'
import LandingNav from '../Landing/LandingNav'

import Stepper from './Components/Stepper'
import DocumentUploadForm from './DocumentUploadForm'
import RegistrationVerify from './RegistrationVerify'

function Register() {
  const [registrationForm, setRegistrationForm] = useState(true)
  const [docUploadForm, setDocUploadForm] = useState("hidden")
  const [regVerifyForm, setRegVerifyForm] = useState("hidden")
  const [colorCode, setcolorCode] = useState(false)
  const [regFormSavedData, setRegFormSavedData] = useState()
  const [finalDocSavedList, setFinalDocSavedList] = useState()
  const [pageTitle, setPageTitle] = useState("Step 1 : Personal Details")

  const regFormNxtBtn = (e) => {
    setRegVerifyForm("hidden")
    setDocUploadForm(true)
    setRegistrationForm("hidden")
    setcolorCode(1)
    setPageTitle("Step 2 : Upload Documents")
  }
  const docFormBackBtn = (e) => {
    setRegVerifyForm("hidden")
    setDocUploadForm("hidden")
    setRegistrationForm(true)
    setPageTitle("Step 1 : Personal Details")
  }
  const docsNextBtn = (e) => {
    setRegVerifyForm(e)
    setDocUploadForm("hidden")
    setRegistrationForm("hidden")
    setcolorCode(2)
    setPageTitle("Step 3 : Verify Details")
  }

  const verifyBackBtn = (e) => {
    setRegVerifyForm("hidden")
    setDocUploadForm(e)
    setRegistrationForm("hidden")
    setPageTitle("Step 2 : Upload Documents")
  }

  const verifyNextBtn = (e) => {
    setcolorCode(3)
  }
  const regFormSaveData = (e) => {
    console.log("Data in Next Page", e)
    setRegFormSavedData(e)
  }

  const finalDocList = (e) =>{
    setFinalDocSavedList(e)
  }

  return (
    <>
      <LandingNav />
      <div>
        <div className='grid grid-cols-12'>
          <div className='col-span-2 h-screen bg-white border-r-2'>
            <RegistrationSidebar />
          </div>
          <div className='col-span-2 h-screen m-5'>
            <Stepper Funstep1={colorCode} />
          </div>
          <div className='col-span-8 h-screen m-5'>
            <div className=' border py-3 bg-sky-500 text-white text-center shadow-2xl'>
              <h1 className='text-2xl font-semibold '>Citizen Registration Form</h1>
              <h3 className='font-semibold'>{pageTitle}</h3>
            </div>
            {/* {registrationForm && <RegistrationForm fun={regFormNxtBtn} regFormData={regFormSaveData} />} */}
            {/* {docUploadForm && <DocumentUploadForm fun1={docFormBackBtn} fun2={docsNextBtn} formData={regFormSavedData} updatedDocList={finalDocList}/>} */}
            {/* {regVerifyForm && <RegistrationVerify backBtn={verifyBackBtn} nxtBtn={verifyNextBtn} formData={regFormSavedData} docList={finalDocSavedList} />} */}
           
             {<div className={registrationForm}> <RegistrationForm fun={regFormNxtBtn} regFormData={regFormSaveData} /> </div>}
            { <div className={docUploadForm}> <DocumentUploadForm fun1={docFormBackBtn} fun2={docsNextBtn} formData={regFormSavedData} updatedDocList={finalDocList}/> </div>}
            { <div className={regVerifyForm}> <RegistrationVerify backBtn={verifyBackBtn} nxtBtn={verifyNextBtn} formData={regFormSavedData} docList={finalDocSavedList} />  </div>}
        
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Register

/*
Exported to -
1. App.js
*/