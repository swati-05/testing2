//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 13 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SelfAdvtApplicationForm.js
//    DESCRIPTION - Self Advt Applicatin  Component
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import { Formik } from 'formik';
// import rightImg from './tick-tick-verified.gif'
// import rightImg from './checkmark-transparent.gif'
import { MdVerified } from 'react-icons/md';
import * as Yup from 'yup';
import "yup-phone";
import Tooltip from "@material-ui/core/Tooltip";

const panRegEx = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

const SignupSchema = Yup.object().shape({
    applicant_name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    father_name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    // mobile_no: Yup.string()
    //     .required('Required')
    //     .phone("IN"),
    // aadhar: Yup.string()
    //     .min(12, 'Too Short')
    //     .max(12, "Too Long")
    //     .required('Required'),
    // pan_no: Yup.string()      
    //     .required('Required')
    //     .matches(panRegEx, "Enter Valid PAN No"),
    unique_id: Yup.string()
        .min(1, 'Too Short')
        .max(40, "Too Long")
        .required('Required'),
    licence_year: Yup.string()
        .required('Required'),
    entity_name: Yup.string()
        .min(3, 'Too Short')
        .max(40, "Too Long")
        .required('Required'),
    entity_ward: Yup.string()
        .max(20, "Too Long")
        .required('Required'),
    trade_licence_no: Yup.string()
        .min(5, 'Too Short')
        .max(40, "Too Long")
        .required('Required'),
    entity_address: Yup.string()
        .min(10, 'Too Short')
        .max(100, "Too Long")
        .required('Required'),
});

const SelfAdvtApplicatioForm = (props) => {
    const [submitData, setSubmitData] = useState()
    return (
        // <div className='w-9/12 h-screen ml-80 p-10'>
        <div className='w-9/12 h-screen ml-44 p-10'>
            {/* <Test /> */}
            <Formik
                initialValues={{ file1: '', applicant_name: '', father_name: '', mobile_no: '', email: '', aadhar: '', pan_no: '', unique_id: '', licence_year: '', entity_name: '', entity_ward: '', trade_licence_no: '', entity_address: '' }}
                //   validate={values => {
                //     const errors = {};
                //     if (!values.email) {
                //       errors.email = 'Required';
                //     } else if (
                //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //     ) {
                //       errors.email = 'Invalid email address';
                //     }
                //     return errors;
                //   }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        setSubmitData(values)
                        setSubmitting(false);
                        // console.log("Data values :- ",values)
                        props.selfAdvtApplicationData(values)
                    }, 100);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <div className='shadow-lg rounded-lg'>
                        <form onSubmit={handleSubmit}>
                            <div className="text-center p-2 font-bold leading-5 bg-green-500 rounded-t-lg">
                                <p className="tracking-wide">Personal Details</p>
                                {/* <hr className='pt-2' /> */}
                            </div>
                            <div className="grid md:grid-cols-3 text-sm place-items-center">
                                <div className='my-3 relative'>
                                    <div className='text-gray-800 static mb-1'>Applicant Name</div>
                                    <input
                                        type="text"
                                        name="applicant_name"
                                        placeholder='Applicant Name'
                                        className='border border-gray-400 outline-blue-500 rounded-sm pl-2 h-6 w-56'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.applicant_name}
                                    />
                                    {errors.applicant_name && touched.applicant_name ? (
                                        <div className='text-red-600 absolute'>{errors.applicant_name}*</div>
                                    ) : null}
                                </div>
                                <div className='my-3 relative'>
                                    <div className='text-gray-800 mb-1'>Father Name</div>
                                    <input
                                        type="text"
                                        name="father_name"
                                        placeholder='Father Name'
                                        className='border border-gray-400 outline-blue-500 rounded-sm pl-2 h-6 w-56'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.father_name}
                                    />
                                    {errors.father_name && touched.father_name ? (
                                        <div className='text-red-600 absolute'>{errors.father_name}*</div>
                                    ) : null}
                                </div>
                                <div className='my-3 relative'>
                                    <div className='text-gray-800 mb-1'>Mobile No</div>
                                    <input
                                        type="number"
                                        name="mobile_no"
                                        placeholder='Mobile No'
                                        className='border border-gray-400 outline-blue-500 rounded-sm pl-2 h-6 w-56'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.mobile_no}
                                    />
                                    {errors.mobile_no && touched.mobile_no ? (
                                        <div className='text-red-600 absolute'>Enter Valid phone Number*</div>
                                    ) : null}
                                </div>
                                <div className='my-3 relative'>
                                    <div className='text-gray-800 mb-1'>Email Address</div>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder='Email Address'
                                        className='border border-gray-400 outline-blue-500 rounded-sm pl-2 h-6 w-56'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {errors.email && touched.email ? (
                                        <div className='text-red-600 absolute'>{errors.email}*</div>
                                    ) : null}
                                </div>
                                <div className='my-3 relative'>
                                    <div className='text-gray-800 mb-1'>Aadhar No</div>
                                    <input
                                        type="number"
                                        name="aadhar"
                                        placeholder='Aadhar No'
                                        className='border border-gray-400 outline-blue-500 rounded-sm pl-2 h-6 w-56'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.aadhar}
                                    />
                                    {errors.aadhar && touched.aadhar ? (
                                        <div className='text-red-600 absolute'>{errors.aadhar}*</div>
                                    ) : null}
                                </div>
                                <div className='my-3 relative'>
                                    <div className='text-gray-800 mb-1'>PAN No</div>
                                    <input
                                        type="text"
                                        name="pan_no"
                                        placeholder='PAN No'
                                        className='border border-gray-400 outline-blue-500 rounded-sm pl-2 h-6 w-56'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.pan_no}
                                    />
                                    {errors.pan_no && touched.pan_no ? (
                                        <div className='text-red-600 absolute'>{errors.pan_no}*</div>
                                    ) : null}
                                </div>

                            </div>
                            <div className="text-center font-bold bg-sky-100 leading-8 my-4">
                                <span className="tracking-wide">Entity Details</span>
                                <hr />
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 text-sm place-items-center">
                                <div className='relative'>
                                    <div className='font-bold text-gray-600 mb-1'>Unique ID</div>
                                    <input
                                        type="text"
                                        name="unique_id"
                                        placeholder='Unique Id'
                                        className='border border-gray-400 outline-blue-500 rounded-sm pl-2 h-6 w-56'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.unique_id}
                                    />
                                    {errors.unique_id && touched.unique_id ? (
                                        <div className='text-red-600 absolute'>{errors.unique_id}*</div>
                                    ) : null}
                                </div>
                                <div className='relative'>
                                    <div className='font-bold text-gray-600 mb-1'>Licence Year</div>
                                    <input
                                        type="text"
                                        name="licence_year"
                                        placeholder='Licence Year'
                                        className='border border-gray-400 outline-blue-500 rounded-sm pl-2 h-6 w-56'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.licence_year}
                                    />
                                    {errors.licence_year && touched.licence_year ? (
                                        <div className='text-red-600 absolute'>{errors.licence_year}*</div>
                                    ) : null}
                                </div>
                                <div className='relative'>
                                    <div className='font-bold text-gray-600 mb-1'>Entity Name</div>
                                    <input
                                        type="text"
                                        name="entity_name"
                                        placeholder='Entity Name'
                                        className='border border-gray-400 outline-blue-500 rounded-sm pl-2 h-6 w-56'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.entity_name}
                                    />
                                    {errors.entity_name && touched.entity_name ? (
                                        <div className='text-red-600 absolute'>{errors.entity_name}*</div>
                                    ) : null}
                                </div>
                                <div className='mt-4 relative'>
                                    <div className='font-bold text-gray-600 mb-1'>Entity Ward</div>
                                    <input
                                        type="text"
                                        name="entity_ward"
                                        placeholder='Entity Ward'
                                        className='border border-gray-400 outline-blue-500 rounded-sm pl-2 h-6 w-56'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.entity_ward}
                                    />
                                    {errors.entity_ward && touched.entity_ward ? (
                                        <div className='text-red-600 absolute'>{errors.entity_ward}*</div>
                                    ) : null}
                                </div>
                                <div className='mt-4 relative'>
                                    <div className='font-bold text-gray-600 mb-1'>Trade Licence No</div>
                                    <input
                                        type="text"
                                        name="trade_licence_no"
                                        placeholder='Trade Licence No'
                                        className='border border-gray-400 outline-1 h-6 w-56 outline-blue-500 rounded-sm pl-2 '
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.trade_licence_no}
                                    />
                                    {errors.trade_licence_no && touched.trade_licence_no ? (
                                        <div className='text-red-600 absolute'>{errors.trade_licence_no}*</div>
                                    ) : null}
                                </div>
                                <div className='mt-4 relative'>
                                    <div className='font-bold text-gray-600 mb-1'>Any Field</div>
                                    <input
                                        type="text"
                                        name="any_field"
                                        placeholder='Any Data'
                                        className='border border-gray-400 outline-1 h-6 w-56 focus:outline-blue-500 focus:ring-red-600 rounded-sm pl-2 '
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.any_field}
                                    />
                                </div>

                            </div>
                            <div className='relative grid px-6 md:col-span-3 md:px-4 '>
                                <div className='font-bold mt-5 text-gray-600 text-sm mb-1'>Entity Address</div>
                                <textarea
                                    rows="2"
                                    name='entity_address'
                                    className="py-2 text-sm px-3 text-gray-900 w-full rounded-sm border border-gray-400 outline-blue-500"
                                    placeholder="Responsive Margin need to be fixed"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.entity_address}
                                >
                                </textarea>
                                {errors.entity_address && touched.entity_address ? (
                                    <div className='text-red-600 relative'>{errors.entity_address}*</div>
                                ) : null}
                            </div>

                            {/* File Upload */}
                            {/* <div className='mx-20 w-52'>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
                                <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                            </div> */}

                            {/* <input name="file" type="file" onChange={(event) => {
                                setFieldValue("file", event.currentTarget.files[0]);
                            }} /> */}

                            <input
                                type="file"
                                name="file1"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.file1}
                            />

                            {/* {errors.email && touched.email && errors.email} */}
                            <div className='grid place-items-center'>

                                <Tooltip title="Check All Fields before update." placement="right" arrow>
                                    <button
                                        type="submit"
                                        className='my-5 px-5 py-2 hover:img-src font-bold bg-green-600 hover:bg-blue-500 text-white rounded-md'
                                        disabled={isSubmitting}>
                                        Apply
                                    </button>
                                </Tooltip>

                            </div>
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
}


export default SelfAdvtApplicatioForm
