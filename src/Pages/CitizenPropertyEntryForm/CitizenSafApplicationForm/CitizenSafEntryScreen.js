import { useState } from 'react'
import newSvg from './new.svg'
import re from './re.svg'
import mu from './mu.svg'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { TiArrowBack } from 'react-icons/ti'
import { TbSearch } from 'react-icons/tb'
import { FcHome } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SideNav from '../../citizen/SideNav'
import LandingNav from '../../Landing/LandingNav'
// import LandingNav from '../Landing/LandingNav'
// import SideNav from './SideNav'

function CitizenSafEntryScreen() {

    const [newStatus, setnewStatus] = useState('col-span-12 md:col-span-4 py-6')// to maintain the hide show state of new-assessment
    const [reStatus, setreStatus] = useState('col-span-12 md:col-span-4 py-6')// to maintain the hide show state of re-assessment
    const [mutationStatus, setmutationStatus] = useState('col-span-12 md:col-span-4 py-6')// to maintain the hide show state of mutation
    const [dataListStatus, setDataListStatus] = useState(false) //to toggle hide show of data list table after finding the holding data from search holding
    const [holdingData, setholdingData] = useState() //to hold found holding data
    const [asstypeStatus, setasstypeStatus] = useState('both') //to hold found holding data

    const navigate = useNavigate()
    //function to hide and show and animate assessment options

    const assStatus = (type) => {
        setasstypeStatus(type)
        if (type == 'new') {
            setnewStatus('col-span-12 md:col-span-12 py-0 block')
            setreStatus('w-0 col-span-0 md:col-span-0 hidden')
            setmutationStatus('w-0 col-span-0 md:col-span-0 hidden')
        }
        if (type == 're') {
            setnewStatus('w-0 col-span-0 md:col-span-0 hidden')
            setreStatus('col-span-12 md:col-span-12 py-0 block')
            setmutationStatus('w-0 col-span-0 md:col-span-0 hidden')
        }
        if (type == 'mu') {
            setnewStatus('w-0 col-span-0 md:col-span-0 hidden')
            setreStatus('w-0 col-span-0 md:col-span-0 hidden')
            setmutationStatus('col-span-12 md:col-span-12 py-0 block')
        }
        if (type == 'back') {
            setDataListStatus(false)
            setnewStatus('col-span-12 md:col-span-4 py-6')
            setreStatus('col-span-12 md:col-span-4 py-6')
            setmutationStatus('col-span-12 md:col-span-4 py-6')
        }
    }

    const validationSchema = yup.object({
        holdingNo: yup.string().required('Enter holding no.')
    })
    const formik = useFormik({
        initialValues: {
            holdingNo: ''
        },

        onSubmit: (values, resetForm) => {
            console.log('propertyaddressdetails ', values)
            findHolding()
        }
        , validationSchema
    })

    //function to fetch holding data and set into data table
    const findHolding = () => {
        // let holdingNo = formik.holdingNo
        let holdingNo = 601
        //fetch holding data
        axios.get(`http://localhost:3001/dummyHolding/${holdingNo}`)
            .then(function (response) {
                console.log('serahed data....', response.data)
                setholdingData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }


    return (
        <>

            <div className='flex flex-row'>
                <div>
                    <SideNav />
                </div>
                <div>
                    <LandingNav />
                    <div className='flex flex-row bg-white'>
                        <div>
                            <div className=" flex-wrap justify-center mt-4">

                                <div className={` ${newStatus} p-4 ml-5 md:p-10`} onClick={() => navigate('/safform/new')} >
                                    <div className="w-full flex items-center justify-center bg-transparent ">
                                        <div className="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 bg-blue-200 rounded-br-full pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
                                            <div className="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
                                                <div className="rounded-full w-16 sm:w-18 md:w-20 overflow-auto">
                                                    <span className="flex h-0 w-3">
                                                        <span className="animate-ping absolute inline-flex h-14 w-14 ml-3 mt-3 rounded-full bg-blue-500 opacity-75"></span>
                                                        {/* <span className="relative inline-flex rounded-full h-2 w-2  bg-red-400"></span> */}
                                                    </span>
                                                    <img src="https://img.freepik.com/free-vector/giant-check-list_23-2148087771.jpg?w=740&t=st=1659778834~exp=1659779434~hmac=5198b204d78b6707eafcb79c86b615dcc2619319896b1ea90f14ebcad1c8e81d" className="" />
                                                </div>
                                            </div>
                                            <Link to="citizenSafApply">
                                                <div className='flex flex-col space-y-2 md:space-y-4'  >
                                                    <label className="absolute font-semibold text-gray-500 text-sm text-start top-3 left-9 sm:left-10">
                                                        NEW-ASSIGNMENT
                                                    </label>
                                                    <p className="absolute text-gray-500 text-sm mt-1 leading-relaxed left-10  sm:left-10">
                                                        Apply
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={` ${reStatus} p-4 ml-5 md:p-10 `} onClick={() => assStatus('re')}>
                                    <div className="w-full flex items-center justify-center bg-transparent ">
                                        <div className="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 bg-blue-200 rounded-br-full pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
                                            <div className="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
                                                <div className="rounded-full w-16 sm:w-18 md:w-20 overflow-auto">
                                                    <span className="flex h-0 w-3">
                                                        <span className="animate-ping absolute inline-flex h-14 w-14 ml-3 mt-3 rounded-full bg-blue-500 opacity-75"></span>
                                                        {/* <span className="relative inline-flex rounded-full h-2 w-2  bg-red-400"></span> */}
                                                    </span>
                                                    <img src="https://img.freepik.com/free-vector/giant-check-list_23-2148087771.jpg?w=740&t=st=1659778834~exp=1659779434~hmac=5198b204d78b6707eafcb79c86b615dcc2619319896b1ea90f14ebcad1c8e81d" className="" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col space-y-2 md:space-y-4">
                                                <label className="absolute font-semibold text-gray-500 text-sm text-start top-3 left-9 sm:left-10">
                                                    RE-ASSIGNMENT
                                                </label>
                                                <p className="absolute text-gray-500 text-sm mt-1 leading-relaxed left-10  sm:left-10">
                                                    Apply
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={` ${mutationStatus} p-4 ml-5 md:p-10 `} onClick={() => assStatus('mu')}>
                                    <div className="w-full flex items-center justify-center bg-transparent ">
                                        <div className="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 bg-blue-200 rounded-br-full pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
                                            <div className="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
                                                <div className="rounded-full w-16 sm:w-18 md:w-20 overflow-auto">
                                                    <span className="flex h-0 w-3">
                                                        <span className="animate-ping absolute inline-flex h-14 w-14 ml-3 mt-3 rounded-full bg-blue-500 opacity-75"></span>
                                                        {/* <span className="relative inline-flex rounded-full h-2 w-2  bg-red-400"></span> */}
                                                    </span>
                                                    <img src="https://img.freepik.com/free-vector/giant-check-list_23-2148087771.jpg?w=740&t=st=1659778834~exp=1659779434~hmac=5198b204d78b6707eafcb79c86b615dcc2619319896b1ea90f14ebcad1c8e81d" className="" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col space-y-2 md:space-y-4">
                                                <label className="absolute font-semibold text-gray-500 text-sm text-start top-3 left-9 sm:left-10">
                                                    MUTATION
                                                </label>
                                                <p className="absolute text-gray-500 text-sm mt-1 leading-relaxed left-10  sm:left-10">
                                                    Apply
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="flex p-4 ml-5 md:p-10">
                        <div className="w-full flex items-center justify-center bg-transparent">
                            <div className="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 rounded-tr-full pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center bg-white">
                                <div className="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
                                    <div className="rounded-full  w-16 sm:w-18 md:w-20 overflow-auto">
                                        <span className="flex h-0 w-3">
                                            <span className="animate-ping absolute inline-flex h-14 w-14 ml-3 mt-3 rounded-full bg-blue-500 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2  bg-red-400"></span>
                                        </span>
                                        <img src="https://img.freepik.com/free-vector/giant-check-list_23-2148087771.jpg?w=740&t=st=1659778834~exp=1659779434~hmac=5198b204d78b6707eafcb79c86b615dcc2619319896b1ea90f14ebcad1c8e81d" className="" />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 md:space-y-4">
                                    <label className="absolute font-semibold text-gray-500 text-sm text-start top-3 left-9 sm:left-10">
                                        MUTATION
                                    </label>
                                    <p className="absolute text-gray-200 text-sm mt-1 leading-relaxed left-8  sm:left-10">
                                       Apply
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                                <section className={`${(reStatus == 'col-span-12 md:col-span-12 py-0 block' || mutationStatus == 'col-span-12 md:col-span-12 py-0 block') ? 'block' : 'block'} text-gray-600 body-font overflow-hidden mt-10 shadow-lg p-10 border border-gray-200`}>
                                    <h1 className="text-gray-700 text-xl title-font font-medium mb-4 flex items-center"><FcHome className="inline" /> <p className='ml-3'>Find Holding</p></h1>

                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="grid grid-cols-12">
                                            <div className="form-group mb-6 col-span-12 md:col-span-3 ">
                                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Holding no.</label>
                                                <input {...formik.getFieldProps('holdingNo')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                                    placeholder="Enter holding no." />
                                                <span classNameName="text-red-600 absolute text-xs">{formik.touched.holdingNo && formik.errors.holdingNo ? formik.errors.holdingNo : null}</span>
                                            </div>
                                            <div className="form-group mb-6 col-span-12 md:col-span-3 align-bottom">
                                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold invisible"><small className="block mt-1 text-sm font-semibold text-red-600 inline  ">*</small>Enter Holding no.</label>
                                                <div className='md:px-10 text-right'>
                                                    <button onClick={() => setDataListStatus(true)} type="submit" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"><TbSearch className="inline text-sm font-bold" />Find</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>


                                    {/* found holding */}
                                    {
                                        dataListStatus && <div className="py-2 overflow-x-auto bg-white">
                                            <div className="inline-block min-w-full rounded-lg overflow-hidden bg-white">
                                                <table className="min-w-full leading-normal">
                                                    <thead className='font-bold text-left text-sm bg-sky-50'>
                                                        <tr >
                                                            <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Holding No</th>
                                                            <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Owner Name</th>
                                                            <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Guardian Name</th>
                                                            <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Address</th>
                                                            <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Action</th>


                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm">
                                                        <tr className="bg-white shadow-lg border-b border-gray-200">
                                                            <td className="px-2 py-2 text-sm text-left">{holdingData?.holdingNo}</td>
                                                            <td className="px-2 py-2 text-sm text-left">{holdingData?.ownerName}</td>
                                                            <td className="px-2 py-2 text-sm text-left">{holdingData?.guardianName}</td>
                                                            <td className="px-2 py-2 text-sm text-left">{holdingData?.Address}</td>
                                                            <td className="px-2 py-2 text-sm text-left">
                                                                {(asstypeStatus == 're' || asstypeStatus == 'both') && <button onClick={() => navigate('/safform/re')} type="button" className=" px-2 py-1 bg-green-200 text-black hover:text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Re-Assessment</button>}
                                                                {(asstypeStatus == 'mu' || asstypeStatus == 'both') && <button onClick={() => navigate('/safform/mu')} type="button" className="ml-2 px-2 py-1 bg-orange-200 text-black hover:text-white font-medium text-xs leading-tight  rounded  hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">Mutation</button>}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    }
                                </section>

                            </div>
                        </div>


                        <div>
                            ftsydughf
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default CitizenSafEntryScreen