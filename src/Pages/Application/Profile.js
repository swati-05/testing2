import React from 'react'

function Profile() {
    return (
        <>
            <div className='grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12  '>
                <div className='bg-sky-600 col-span-12 rounded-t-lg p-6'>
                    <img src='https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png' className='w-40 h-40 mt-4 mx-auto py-4 px-4' />
                    <h1 className='text-3xl text-gray-100 font-semibold text-center'>User Name</h1>
                    <h1 className='text-2xl -mt-1 text-gray-100 font-semibold opacity-75 text-center'>user@gmail.com</h1>
                </div>
                <div className='bg-slate-200 col-span-12 rounded-b-lg p-2'>
                    <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 -mb-2" id="tabs-tabFill"
                        role="tablist">
                        <li class="nav-item flex-auto text-center" role="presentation">
                            <a href="#tabs-homeFill" class=" nav-link w-full block  text-md  uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-gray-400 focus:border-transparent active font-semibold " id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
                                aria-controls="tabs-homeFill" aria-selected="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 ml-4 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <h1 className='-mt-6 -ml-14 text-blue-600'>About</h1></a>
                        </li>
                     
                        <li class="nav-item flex-auto text-center" role="presentation">
                            <a href="#tabs-homeFill" class=" nav-link w-full block  text-md  uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-gray-400 focus:border-transparent active font-semibold " id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
                                aria-controls="tabs-homeFill" aria-selected="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 ml-4 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <h1 className='-mt-6 -ml-14 text-blue-600'>About</h1></a>
                        </li>
                        <li class="nav-item flex-auto text-center" role="presentation">
                            <a href="#tabs-homeFill" class=" nav-link w-full block  text-md  uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-gray-400 focus:border-transparent active font-semibold " id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
                                aria-controls="tabs-homeFill" aria-selected="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 ml-4 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <h1 className='-mt-6 -ml-14 text-blue-600'>About</h1></a>
                        </li>
                        <li class="nav-item flex-auto text-center" role="presentation">
                            <a href="#tabs-homeFill" class=" nav-link w-full block  text-md  uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-gray-400 focus:border-transparent active font-semibold " id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
                                aria-controls="tabs-homeFill" aria-selected="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 ml-4 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <h1 className='-mt-6 -ml-14 text-blue-600'>About</h1></a>
                        </li>
                    </ul>
                    <div class="tab-content" id="tabs-tabContentFill">

                        {/*************** About User ******************/}
                        <div class="tab-pane fade show active" id="tabs-homeFill" role="tabpanel" aria-labelledby="tabs-home-tabFill">
                     
                        </div>
                        <div class="tab-pane fade" id="tabs-profileFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                          
                        </div>
                        <div class="tab-pane fade" id="tabs-messagesFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile