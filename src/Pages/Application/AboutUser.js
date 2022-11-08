import React from 'react'

function AboutUser() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 border border-black gap-4'>
                <div className='col-span-8 bg-blue-200'>
                    <div className='bg-white rounded-md'>
                        <div className='bg-green-50 rounded-lg shadow-lg py-6'>
                            <div className="flex space-x-5 pl-4 ">
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>ULB</div>
                                    <div className='font-bold text-sm'></div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>FULL NAME</div>
                                    <div className='font-semibold text-sm'></div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>GUARDIAN NAME</div>
                                    <div className='font-semibold text-sm'></div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>MOBILE NO</div>
                                    <div className='font-bold text-sm'></div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>EMAIL</div>
                                    <div className='font-bold text-sm'></div>
                                </div>
                            </div>

                            <div className="flex space-x-10  pl-4 mt-4">
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>DATE-OF-BIRTH</div>
                                    <div className='font-bold text-sm'>yes</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Armed Force</div>
                                    <div className='font-semibold text-sm'>yes</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Specially Abled</div>
                                    <div className='font-semibold text-sm'>yes</div>
                                </div>
                                <div className='flex-1 text-xs'>

                                </div>
                                <div className='flex-1 text-xs'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 bg-green-200'>
                    2
                </div>
            </div>
        </>
    )
}

export default AboutUser