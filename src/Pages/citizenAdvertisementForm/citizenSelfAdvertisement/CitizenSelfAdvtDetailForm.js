import React, { useEffect, useState } from 'react'
import SelfAdvtApplicatioForm from './Components/SelfAdvtApplicatioForm'
import axios from 'axios'
import SuccessfullMessage from './Components/SuccessfullMessage'

function CitizenSelfAdvtDetailForm() {
  const [bearerToken, setBearerToken] = useState()

  useEffect(() => {
    const bearerTokenInit = localStorage.getItem('token');
    setBearerToken(bearerTokenInit)
    console.log("Token is : ", bearerToken)
  }, [])

  const selfAdvtApplicationData = (e) => {
    console.log("Data in Main form", e)

    let formDataToSubmit = {
      "licenseYear" : "2018-2019",
      "applicant" : "Dipu",
      "father" : "H P Singh",
      "email" : "testdipu@gmail.com",
      "residenceAddress" : "Ranchi",
      "wardNo" : 1,
      "permanentAddress" : "Patna",
      "mobile" : 32645454,
      "aadharNo" : "1020304050",
      "entityName" : "Dipu George Enterprises",
      "entityAddress" : "Calurfirania"

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
      {/* <SuccessfullMessage /> */}
      <SelfAdvtApplicatioForm selfAdvtApplicationData={selfAdvtApplicationData} />
    </>
  )
}

export default CitizenSelfAdvtDetailForm