//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 13 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenSelfAdvtDetailForm.js
//    DESCRIPTION - Citizen Self Advt DetailForm  Component
//////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from 'react'
import SelfAdvtApplicatioForm from './Components/SelfAdvtApplicatioForm'
import axios from 'axios'
import SuccessfullMessage from './Components/SuccessfullMessage'
import SideNav from '../../citizen/SideNav'
import LandingNav from '../../Landing/LandingNav'

function CitizenSelfAdvtDetailForm() {
  const [bearerToken, setBearerToken] = useState()
  const [appliedSuccessus, setAppliedSuccessus] = useState(false)
  const [selfAdvtApplicationForm, setSelfAdvtApplicationForm] = useState(true)

  useEffect(() => {
    const bearerTokenInit = localStorage.getItem('token');
    setBearerToken(bearerTokenInit)
    console.log("Token is : ", bearerToken)
  }, [])

  const selfAdvtApplicationData = (e) => {
    console.log("Data in Main form", e)

    let formDataToSubmit = {
      "licenseYear": e.licence_year,
      "applicant": e.applicant_name,
      "father": e.father_name,
      "email": e.email,
      "residenceAddress": "Ranchi",
      "wardNo": e.entity_ward,
      "permanentAddress": "Patna",
      "mobile": e.mobile_no,
      "aadharNo": e.aadhar,
      "entityName": e.entity_name,
      "entityAddress": e.entity_address

    }
    axios({
      method: "post",
      url: "http://192.168.0.166/api/crud/store-selfadvertisement",
      data: formDataToSubmit,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        Accept: 'application/json',
      }
    })
      .then(function (response) {
        console.log("Form Submitted......", response);
        // console.log("Message", response.data);  
        if (response.data.status) {
          setSelfAdvtApplicationForm(false)
          setAppliedSuccessus(true)
        }
        // console.log("+++++++",response.data.status)
      })
      .catch(function (response) {
        // console.log("Failed", response.response.data.ulb[0]);
        console.log("Failed", response);
        // console.log("Message", response.message);
        // setRegMsg(response.message);
        // setRegMsg(response.response.data.ulb[0]);
      });
  }

  return (
    <>
      <LandingNav />
      {appliedSuccessus && <SuccessfullMessage />}
      {selfAdvtApplicationForm && <SelfAdvtApplicatioForm selfAdvtApplicationData={selfAdvtApplicationData} />}
    </>
  )
}

export default CitizenSelfAdvtDetailForm