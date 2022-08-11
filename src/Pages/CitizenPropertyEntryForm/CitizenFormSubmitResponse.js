//////////////////////////////
//
//
//
// Changed by : Dipu Singh on 11-08-2022
//////////////////////////////

import { CgCheckO } from 'react-icons/cg'

function CitizenFormSubmitResponse() {

    return (
        <>

            <div className="relative w-full md:w-3/6 mx-auto h-96 bg-green-400 rounded-lg shadow-2xl border-2 border-gray-50" >
                <div className="p-10 px-10 bg-green-400  text-center">
                    <h1 className="text-white text-lg font-semibold">SAF application submitted successfully</h1>
                    <CgCheckO className='text-white mx-auto text-5xl mb-5' />
                    <div className='bg-white text-gray-800 py-2 rounded-md shadow-md'>
                        {/* <h1 className='font-semibold'>Ward no - <i className='font-mono font-normal'>20</i></h1> */}
                        <h1 className='font-semibold'>Reference Number - <i className='font-mono font-normal italic'>#89979678500001</i></h1>
                    </div>
                    <button className='bg-blue-600 text-white mt-10 px-5 py-2 text-xl rounded-sm shadow-lg'>Pay Now</button>

                </div>
            </div>

        </>
    )
}

export default CitizenFormSubmitResponse