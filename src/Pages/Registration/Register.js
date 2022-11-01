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
import DocumentUploadForm from './DocumentUploadForm'
import RegistrationVerify from './RegistrationVerify'
import axios from "axios";
import NewStepper from './Components/NewStepper'
import RegistrationSuccess from './RegistrationSuccess'

function Register() {
  const [registrationForm, setRegistrationForm] = useState(true)
  const [docUploadForm, setDocUploadForm] = useState("hidden")
  const [regVerifyForm, setRegVerifyForm] = useState("hidden")
  const [regSuccessPage, setregSuccessPage] = useState("hidden")
  const [colorCode, setcolorCode] = useState(false)
  const [pageTitle, setPageTitle] = useState("Step 1 : Personal Details")
  const [finalDocSavedList, setFinalDocSavedList] = useState()
  const [regFormSavedData, setRegFormSavedData] = useState()  //Registration Form Data
  const [regCurrentStep, setRegCurrentStep] = useState(1)

  const [regMsg, setRegMsg] = useState(" ")

  const regFormNxtBtn = (e) => {
    setRegVerifyForm("hidden")
    setDocUploadForm(true)
    setRegistrationForm("hidden")
    setcolorCode(1)
    setPageTitle("Step 2 : Upload Documents")
    setRegCurrentStep(2)
  }
  const docFormBackBtn = (e) => {
    setRegVerifyForm("hidden")
    setDocUploadForm("hidden")
    setRegistrationForm(true)
    setPageTitle("Step 1 : Personal Details")
    setRegCurrentStep(1)
  }
  const docsNextBtn = (e) => {
    setRegVerifyForm(e)
    setDocUploadForm("hidden")
    setRegistrationForm("hidden")
    setcolorCode(2)
    setPageTitle("Step 3 : Verify Details")
    setRegCurrentStep(3)
  }

  const verifyBackBtn = (e) => {
    setRegVerifyForm("hidden")
    setDocUploadForm(e)
    setRegistrationForm("hidden")
    setPageTitle("Step 2 : Upload Documents")
    setRegCurrentStep(2)
  }

  const regFormSaveData = (e) => {
    console.log("Data in Next Page", e)
    setRegFormSavedData(e)
  }

  const finalDocList = (e) => {
    setFinalDocSavedList(e)
  }

  const regComplated = () => {
    setRegVerifyForm("hidden")
    setDocUploadForm("hidden")
    setRegistrationForm("hidden")
    setregSuccessPage()
    setPageTitle("Step 4 : Registration Complated")
    setcolorCode(4)
    setRegCurrentStep(4)
  }

  const verifyFinalSubmitBtn = (e) => {
    setcolorCode(3)
    console.log("Form Data:- ", regFormSavedData.ulb)

    //Registration Data using AXIOS POST
    axios({
      method: "post",
      url: "http://192.168.0.166/api/citizen-register",
      // url: "http://192.168.0.166/api/register",
      data: {
        "name": regFormSavedData.full_name,
        "mobile": regFormSavedData.mobile_no,
        "email": regFormSavedData.email,
        "password": regFormSavedData.password,
        // "userType": "Citizeh",
        "ulb": regFormSavedData.ulb,
        "role": "1",
        "description": "asdf",
        "workflowParticipant": "false"

      },
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log("Sussuss", response);
        // console.log("Message", response.data);
        setRegMsg(response.data);
        regComplated()
      })
      .catch(function (response) {
        // console.log("Failed", response.response.data.ulb[0]);
        console.log("Failed", response);
        // console.log("Message", response.message);
        setRegMsg(response.message);
        // setRegMsg(response.response.data.ulb[0]);
      });

  }

  return (
    <>
      <LandingNav />
      <div>
        <div className='grid grid-cols-12'>
          <div className='md:block hidden col-span-2 h-screen bg-white border-r-2'>
            <RegistrationSidebar />
          </div>
          <div className='md:block hidden col-span-1 h-screen'></div>
          <div className='md:col-span-8 col-span-12 md:h-screen md:m-5'>
            <NewStepper colorCode={colorCode} currentStep={regCurrentStep}  />
            <div className='mt-4'>
              <div className=' border py-3 bg-sky-500 text-white text-center shadow-2xl'>
                <h1 className='text-2xl font-semibold '>Citizen Registration Form</h1>
                <h3 className='font-semibold'>{pageTitle}</h3>
              </div>
             
              {<div className={registrationForm}> <RegistrationForm fun={regFormNxtBtn} regFormData={regFormSaveData} /> </div>}
              {<div className={docUploadForm}> <DocumentUploadForm fun1={docFormBackBtn} fun2={docsNextBtn} formData={regFormSavedData} updatedDocList={finalDocList} /> </div>}
              {<div className={regVerifyForm}> <RegistrationVerify backBtn={verifyBackBtn} regMsg={regMsg} nxtBtn={verifyFinalSubmitBtn} formData={regFormSavedData} docList={finalDocSavedList} />  </div>}
              {<div className={regSuccessPage}> <RegistrationSuccess />  </div>}

            </div>
          </div>
          <div className='md:visible invisible md:col-span-1 md:h-screen md:m-5'></div>
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