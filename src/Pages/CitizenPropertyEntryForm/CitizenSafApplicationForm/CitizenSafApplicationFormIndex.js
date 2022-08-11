//////////////////////////////
//
//
//
// API Integration By : Dipu Singh on 08-11-2022
//////////////////////////////

import { useState, useEffect } from 'react'
import CitizenBasicDetails from './CitizenBasicDetails'
import CitizenFormStatusTimeline from './CitizenFormStatusTimeline'
import CitizenElectricityWaterDetails from './CitizenElectricityWaterDetails.js'
import CitizenPropertyAddressDetails from './CitizenPropertyAddressDetails'
import CitizenOwnerDetails from './CitizenOwnerDetails'
import CitizenFloorDetails from './CitizenFloorDetails'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImUpload2 } from 'react-icons/im'
import FormSubmitResponse from '../CitizenFormSubmitResponse'
import { TbWebhook } from 'react-icons/tb'
import { useParams } from 'react-router-dom'
import LandingNav from '../../Landing/LandingNav'
import axios from "axios";


function CitizenSafApplicationFormIndex() {
    const [formIndex, setFormIndex] = useState(1) //formindex specifies type of form like basicdetails at index 1 ...
    const [animateform1, setAnimateform1] = useState('translate-x-0') //slide animation control state for BasicDetails form
    const [animateform2, setAnimateform2] = useState('pl-20 translate-x-full')//slide animation control state for PropertyAddressDetails form
    const [animateform3, setAnimateform3] = useState('pl-20 translate-x-full')//slide animation control state for ElectricityWaterDetails form
    const [animateform4, setAnimateform4] = useState('pl-20 translate-x-full')//slide animation control state for OwnerDetails form
    const [animateform5, setAnimateform5] = useState('pl-20 translate-x-full')//slide animation control state for FloorDetails form
    const [submitStatus, setSubmitStatus] = useState(false) //checking full form filled status to toggle final submit button
    const [allFormData, setAllFormData] = useState({})
    const [responseScreenStatus, setResponseScreenStatus] = useState('')
    //assessment type
    const [assTypeText, setAssTypeText] = useState()

    const [bearerToken, setBearerToken] = useState()

    //useEffect to extract assessment type from url and set in state
    let { assType } = useParams()
    useEffect(() => {
        { assType == 'new' && (setAssTypeText('New-Assessment')) }
        { assType == 're' && (setAssTypeText('Re-Assessment')) }
        { assType == 'mu' && (setAssTypeText('Mutation')) }
        // setAssTypeText(assType)
    }, [])

    useEffect(() => {
        const bearerTokenInit = localStorage.getItem('token');
        setBearerToken(bearerTokenInit)
        console.log("Token is : ", bearerToken)
    }, [])


    console.log('ass type . from main ', assTypeText)



    const backFun = (formIndex) => {
        let tempFormIndex = formIndex
        if (tempFormIndex == 2) { //backward by current form index 2
            setFormIndex(1) // go to form index 1 since back from index 2
            setAnimateform1('translate-x-0') // always setstate one index less than current index
            setAnimateform2('pl-20 translate-x-full') //always current index setstate
        }
        if (tempFormIndex == 3) {
            setFormIndex(2)
            setAnimateform2('translate-x-0')
            setAnimateform3('pl-20 translate-x-full')
        }
        if (tempFormIndex == 4) {
            setFormIndex(3)
            setAnimateform3('translate-x-0')
            setAnimateform4('pl-20 translate-x-full')
        }
        if (tempFormIndex == 5) {
            setFormIndex(4)
            setAnimateform4('translate-x-0')
            setAnimateform5('pl-20 translate-x-full')
        }


    }
    const nextFun = (formIndex) => {
        let tempFormIndex = formIndex
        if (tempFormIndex == 1) { //forward by current form index 1
            setFormIndex(2) //go to form index 2 since forward from index 1
            setAnimateform1(' -translate-x-full right-80')  //always current index setstate
            setAnimateform2('pl-0 translate-x-0') // always setstate one index greater than current index
        }
        if (tempFormIndex == 2) {
            setFormIndex(3)
            setAnimateform2('-translate-x-full right-80')
            setAnimateform3('pl-0 translate-x-0')
        }
        if (tempFormIndex == 3) {
            setFormIndex(4)
            setAnimateform3('-translate-x-full right-80')
            setAnimateform4('pl-0 translate-x-0')
        }
        if (tempFormIndex == 4) {
            setFormIndex(5)
            setAnimateform4('-translate-x-full right-80')
            setAnimateform5('pl-0 translate-x-0')
        }

    }
    //activating notification if no owner or no floor added
    const notify = (toastData) => {
        toast.dismiss();
        toast.error(toastData)
    };

    //
    const submitButtonToggle = () => {
        setSubmitStatus(true)
    }

    // const header = {
    //     headers:
    //     {
    //         Authorization: `Bearer 146|2Q3eNCD6I5gUy4rSnWtJfNjjXsTcFVSFZVV7Z5Oe`,
    //         Accept: 'application/json',
    //     }
    // }

    const handleFinalSubmiBtn = () => {
        console.log("Dipu FUll Data === ", allFormData)
        console.log("Basic Details === ", allFormData.basicDetails)
        console.log("PropertyAddressDetails === ", allFormData.propertyAddressDetails)
        console.log("OwnerDetails === ", allFormData.ownerDetails)
        console.log("floorDetails === ", allFormData.floorDetails)
        console.log("bearerToken === ", bearerToken)


        // const ownerDataArr = allFormData.ownerDetails.map((e,i=0)=>{
        //     <li>{i}</li>,
        //     "ownerName" : e.ownerName
        // })

        //SAF Appply Data using AXIOS POST

        let formDataToSubmit = {
            "hasPreviousHoldingNo": "0",
            "previousHoldingId": "0123456789",
            "previousWard": "1",
            "isOwnerChanged": "0",
            "transferMode": "2",
            "safNo": "SAF00001",
            "holdingNo": "0123456789",
            "ward": "5",
            "ownershipType": "2",
            "propertyType": "5",
            "apartmentName": "lorem ipsem",
            "flatRegistryDate": "2022-06-06",
            "zone": "2",
            "electricityConnection": "0",
            "electricityCustNo": "JH0326587",
            "electricityAccNo": "JH0563987",
            "electricityBindBookNo": "012345679",
            "electricityConsCategory": "A",
            "buildingPlanApprovalNo": "0123456789",
            "buildingPlanApprovalDate": "2022-07-06",
            "waterConnNo": "05236",
            "waterConnDate": "2022-06-06",
            "khataNo": "123456789",
            "plotNo": "546123587",
            "villageMaujaName": "lorem Ipsem",
            "roadType": "5",
            "areaOfPlot": "12.21",
            "propAddress": "lorem Ipsem",
            "propCity": "Ranchi",
            "propDist": "Ranchi",
            "propPinCode": "834005",
            "isCorrAddDiffer": "0",
            "corrAddress": "Lorem Ipsem",
            "corrCity": "Ranchi",
            "corrDist": "Ranchi",
            "corrPinCode": "834005",
            "isMobileTower": "0",
            "towerArea": "653.66",
            "towerInstallationDate": "2022-06-06",
            "isHoardingBoard": "1",
            "hoardingArea": "500.62",
            "hoardingInstallationDate": "2022-02-01",
            "isPetrolPump": "1",
            "undergroundArea": "200.12",
            "petrolPumpCompletionDate": "2022-06-01",
            "isWaterHarvesting": "0",
            "landOccupationDate": "2022-05-12",
            "paymentStatus": "5",
            "docVerifyStatus": "2",
            "docVerifyDate": "2022-05-02",
            "docVerifyEmpDetail": "21",
            "docVerifyCancelRemark": "good",
            "fieldVerifyStatus": "5",
            "fieldVerifyDate": "2022-03-04",
            "fieldVerifyEmpDetail": "5",
            "empDetails": "5",
            "applyDate": "2022-06-02",
            "safPendingStatus": "0",
            "assessmentType": "lorem Ipsem",
            "docUploadStatus": "0",
            "safDistributedDtl": "5",
            "propDtl": "1",
            "propState": "Jharkhand",
            "corrState": "Jharkhand",
            "holdingType": "asd",
            "ipAddress": "192.168.0.166",
            "propertyAssessment": "4",
            "newWard": "6",
            "percOfPropertyTransfer": "66",
            "apartmentDetail": "4",
            "owner": allFormData.ownerDetails,
            "floor": allFormData.floorDetails,

        }


        // console.log('data to submit ', formDataToSubmit)
        // return
        axios({
            method: "post",
            url: "http://192.168.0.166/api/apply-for-saf",
            data: formDataToSubmit,
            headers: {
                Authorization: `Bearer ${bearerToken}`,
                Accept: 'application/json',
            }
        })
            .then(function (response) {
                console.log("SAF uploaded......", response);
                setResponseScreenStatus('success')

                // console.log("Message", response.data);
                // setRegMsg(response.data);
                // regComplated()
            })
            .catch(function (response) {
                // console.log("Failed", response.response.data.ulb[0]);
                console.log("Failed", response);
                // console.log("Message", response.message);
                // setRegMsg(response.message);
                // setRegMsg(response.response.data.ulb[0]);
            });

    }

    const collectAllFormData = (key, formData) => {
        console.log('prev Data', allFormData)
        // setAllFormData({...allFormData,formData}) //this is going to replace upcoming data since has same formData key all the time
        setAllFormData({ ...allFormData, [key]: formData })
    }
    if (responseScreenStatus == 'success') {
        return (
            <>
                <FormSubmitResponse />
            </>
        )
    }
    return (
        <>
            <LandingNav />
            <div className='w-10/12 ml-48 overflow-x-hidden h-screen '>
                <ToastContainer position="top-right"
                    autoClose={2000} />
                <div className="grid grid-cols-2">
                    <div>
                        {/* <div className='text-left relative top-0'>
                    <span className='bg-sky-100 border-l border-b border-white text-black col-span-12 sm:col-span-2 sm:col-start-11 pl-4 rounded-l shadow-lg font-semibold pr-4'>prev-holding : A0101010101010101</span>
                </div> */}
                    </div>
                    <div><div className='text-right relative top-0'>
                        <span className='bg-sky-100 border-l border-b border-white text-black col-span-12 sm:col-span-2 sm:col-start-11 pl-4 rounded-l shadow-lg font-semibold pr-4'><TbWebhook className='inline' /> {assTypeText}</span>
                    </div></div>
                </div>
                {/* <div className="flex mt-0">
                    <CitizenFormStatusTimeline active={formIndex == 1 && true} index="1" level="Basic Details" verificationStatus={formIndex >= 2 && true} last={false} />
                    <CitizenFormStatusTimeline active={formIndex == 2 && true} index="2" level="Property Details" verificationStatus={formIndex >= 3 && true} last={false} />
                    <CitizenFormStatusTimeline active={formIndex == 3 && true} index="3" level="Electricity & Water" verificationStatus={formIndex >= 4 && true} last={false} />
                    <CitizenFormStatusTimeline active={formIndex == 4 && true} index="4" level="Owner Details" verificationStatus={formIndex >= 5 && true} last={false} />
                    <CitizenFormStatusTimeline active={formIndex == 5 && true} index="5" level="Floor Details" verificationStatus={formIndex >= 6 && true} last={true} />
                </div> */}


                <div className={`${animateform1} transition-all relative`}><CitizenBasicDetails collectFormDataFun={collectAllFormData} submitFun={submitButtonToggle} toastFun={notify} backFun={backFun} nextFun={nextFun} /></div>
                {/* collectDataFun to receive form data on every save&next */}
                {/* submitFun to activate final submit button when all forms are filled */}
                {/* toastFun to activate toast notification via receiving toast message */}
                {/* backFun to go back from any specific form level */}
                {/* nextFun to go next from any specific form level */}
                <div className={`${animateform2} transition-all relative`}><CitizenPropertyAddressDetails collectFormDataFun={collectAllFormData} submitFun={submitButtonToggle} toastFun={notify} backFun={backFun} nextFun={nextFun} /></div>
                <div className={`${animateform3} transition-all relative`}><CitizenElectricityWaterDetails collectFormDataFun={collectAllFormData} submitFun={submitButtonToggle} backFun={backFun} nextFun={nextFun} /></div>
                <div className={`${animateform4} transition-all relative`}><CitizenOwnerDetails assType={assTypeText} collectFormDataFun={collectAllFormData} submitFun={submitButtonToggle} toastFun={notify} backFun={backFun} nextFun={nextFun} /></div>
                <div className={`${animateform5} transition-all relative`}><CitizenFloorDetails collectFormDataFun={collectAllFormData} submitFun={submitButtonToggle} toastFun={notify} backFun={backFun} nextFun={nextFun} /></div>

                {/* {submitStatus && <div onClick={() => setResponseScreenStatus('success')} className="flex items-center justify-center"><button type="submit" className="absolute bottom-40 mx-auto px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Submit Form <ImUpload2 className='inline text-xl' /></button> */}
                {submitStatus && <div onClick={() => handleFinalSubmiBtn()} className="flex items-center justify-center"><button type="submit" className="absolute bottom-40 mx-auto px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Submit Form <ImUpload2 className='inline text-xl' /></button>
                </div>}


            </div>

        </>
    )
}

export default CitizenSafApplicationFormIndex


