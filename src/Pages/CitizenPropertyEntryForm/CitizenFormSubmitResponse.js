//////////////////////////////
//
//
//
// Changed by : Dipu Singh on 11-08-2022
//////////////////////////////

import { CgCheckO } from 'react-icons/cg'
import UndoIcon from '@mui/icons-material/Undo';

function CitizenFormSubmitResponse() {

    return (
        <>

            {/* <div className="relative w-full md:w-3/6 mx-auto h-96 bg-green-400 rounded-lg shadow-2xl border-2 border-gray-50" >
                <div className="p-10 px-10 bg-green-400  text-center">
                    <h1 className="text-white text-lg font-semibold">SAF application submitted successfully</h1>
                    <CgCheckO className='text-white mx-auto text-5xl mb-5' />
                    <div className='bg-white text-gray-800 py-2 rounded-md shadow-md'>
                      
                        <h1 className='font-semibold'>Reference Number - <i className='font-mono font-normal italic'>#89979678500001</i></h1>
                    </div>
                    <button className='bg-blue-600 text-white mt-10 px-5 py-2 text-xl rounded-sm shadow-lg'>Pay Now</button>
                    <button className='bg-blue-600 text-white mt-10 px-5 py-2 text-xl rounded-sm shadow-lg'>Pay Now</button>

                </div>
            </div> */}

            <div className="relative w-full md:w-2/6 mx-auto rounded-lg drop-shadow-lg border border-lime-300">
                <div className=' bg-lime-400 h-48  '>
                    <div className='p-12'>
                        <CgCheckO className='text-white mx-auto text-7xl ' />
                        <h1 className="text-white text-xl text-normal text-center mt-2">SUCCESS</h1>
                    </div>

                </div>
                <div className='bg-white h-80  '>
                    <div>
                        <h1 className="text-gray-400 text-lg text-center p-8"> Your Self Assesment Form  Is Submitted <br/>Successfully</h1>
                        
                    </div>
                    <button className='bg-lime-400 text-white mt-10 px-5 py-2 text-xl rounded-full shadow-lg ml-44'>Pay Now</button>
                    <div className='flex'>
                        <div className='flex-1'>
                        <img src='https://img.freepik.com/free-vector/uploading-concept-illustration_114360-2860.jpg?w=740&t=st=1660387064~exp=1660387664~hmac=878f7a595718930788abf230939994fd11f6fd923d6f737ef2c9c39098c6e4fc' className='h-44 -mt-16'/>
                        </div>
                        <div className='flex-1 '>
                        <button className='bg-lime-600 text-white mt-8 mr-4 px-4 py-2 text-xs font-bold rounded-full shadow-lg ml-44 '><UndoIcon />Back</button>
                        </div>
                    </div>
                  
                    
                </div>

            </div>


        </>
    )
}

export default CitizenFormSubmitResponse