import React from 'react'
import { Link } from 'react-router-dom'
import CitizenDashboardPage from '../../components/CitizenDashboardPage'
import LandingNav from '../../components/testDelete/LandingNav'
import SideNav from './SideNav'

function ApplySubList() {

    return (
        <>

            <LandingNav />
            <div className='flex flex-row'>
                <div>
                    <SideNav />
                </div>
                <div>

                    <section class="text-gray-600 ">
                        <div class="container grid grid-cols-1 col-span-2 -mb-28 mx-auto  p-4  ">
                            {/* <div class="flex flex-col text-center w-full mb-20">
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-100 font-serif ">Welcome  user</h1>
                                <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-100 ">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                            </div> */}
                            <div class="  grid grid-cols-4 transition delay-700 duration-1000  w-full  ">
                                <div class=" sm:w-full p-4 rounded-lg">
                                    <div class="flex relative drop-shadow-md rounded-lg " >
                                        <img alt="gallery" class="absolute inset-0 w-60 h-50 object-cover object-center drop-shadow-lg" src="https://i.10xmt.com/unsafe/400x0/smart/lorryzone/img/permission1.jpg" />
                                        <button class="dark:bg-gray-800  focus:ring-gray-400 bottom-0 absolute  font-medium leading-none text-gray-800 py-1 w-full  bg-slate-50  text-sm">Advertisement</button>
                                        <div class="px-4 py-6 relative z-5 w-60 border-2 bg-white opacity-0 hover:opacity-100 drop-shadow-lg">

                                            <h1 class="title-font text-md font-medium font-serif text-gray-900 mb-3">Advertisement</h1>
                                            <p class="text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" sm:w-full p-4 ">
                                    <div class="flex relative drop-shadow-md " >
                                        <img alt="gallery" class="absolute inset-0 w-60 h-50 object-cover object-center drop-shadow-lg" src="https://image.slidesharecdn.com/deathandbirthcertificate-131013141947-phpapp02/85/death-and-birth-certificate-1-320.jpg?cb=1381674712" />
                                        <button class="dark:bg-gray-800  focus:ring-gray-400 bottom-0 absolute  font-medium leading-none text-gray-800 py-1  bg-slate-50 w-full text-sm">Birth & Death Certificate</button>
                                        <div class="px-4 py-6 relative z-5 w-60 border-2 bg-white opacity-0 hover:opacity-100 drop-shadow-lg">

                                            <h1 class="title-font text-md font-medium font-serif text-gray-900 mb-3">Birth & Death Certificate</h1>
                                            <p class="text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/citizenSafForm">
                                    <div class=" sm:w-full p-4 ">
                                        <div class="flex relative drop-shadow-md " >
                                            <img alt="gallery" class="absolute inset-0 w-60 h-50 object-cover object-center drop-shadow-lg" src="https://www.automationmag.com/wp-content/uploads/2022/01/Word-of-Law-Nov-Dec-21.png" />
                                            <button class="dark:bg-gray-800  focus:ring-gray-400 bottom-0 absolute  font-medium leading-none text-gray-800 py-1  bg-slate-50 w-full text-sm">Property</button>
                                            <div class="px-4 py-6 relative z-5 w-60 border-2 bg-white opacity-0 hover:opacity-100 drop-shadow-lg">

                                                <h1 class="title-font text-md font-medium font-serif text-gray-900 mb-3">Property</h1>
                                                <p class="text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div class=" sm:w-full p-4 ">
                                    <div class="flex relative drop-shadow-md " >
                                        <img alt="gallery" class="absolute inset-0 w-60 h-50 object-cover object-center drop-shadow-lg" src="https://www.indiafilings.com/learn/wp-content/uploads/2019/05/Chennai-Water-Tax.jpg" />
                                        <button class="dark:bg-gray-800  focus:ring-gray-400 bottom-0 absolute  font-medium leading-none text-gray-800 py-1  bg-slate-50 w-full text-sm">Water</button>
                                        <div class="px-4 py-6 relative z-5 w-60 border-2 bg-white opacity-0 hover:opacity-100 drop-shadow-lg">

                                            <h1 class="title-font text-md font-medium font-serif text-gray-900 mb-3">Water</h1>
                                            <p class="text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" sm:w-full p-4 ">
                                    <div class="flex relative drop-shadow-md " >
                                        <img alt="gallery" class="absolute inset-0 w-60 h-50 object-cover object-center drop-shadow-lg" src="https://www.e-japan-jil.com/wp-content/uploads/2021/03/3458210_m-890x500.jpg" />
                                        <button class="dark:bg-gray-800  focus:ring-gray-400 bottom-0 absolute  font-medium leading-none text-gray-800 py-1  bg-slate-50 w-full text-sm">Trade</button>
                                        <div class="px-4 py-6 relative z-5 w-60 border-2 bg-white opacity-0 hover:opacity-100 drop-shadow-lg">

                                            <h1 class="title-font text-md font-medium font-serif text-gray-900 mb-3">Trade</h1>
                                            <p class="text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" sm:w-full p-4 ">
                                    <div class="flex relative drop-shadow-md " >
                                        <img alt="gallery" class="absolute inset-0 w-60 h-50 object-cover object-center drop-shadow-lg" src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2018/10/26/file6x9l0o8wg9w4f94be1y-1540556369.jpg?itok=KwO7GsZM" />
                                        <button class="dark:bg-gray-800  focus:ring-gray-400 bottom-0 absolute  font-medium leading-none text-gray-800 py-1  bg-slate-50 w-full text-sm">Building Plan Approval</button>
                                        <div class="px-4 py-6 relative z-5 w-60 border-2 bg-white opacity-0 hover:opacity-100 drop-shadow-lg">

                                            <h1 class="title-font text-md font-medium font-serif text-gray-900 mb-3">Building Plan Approval</h1>
                                            <p class="text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="sm:w-full  p-4 ">
                                    <div class="flex relative drop-shadow-md " >
                                        <img alt="gallery" class="absolute inset-0 w-60 h-[58] object-cover object-center drop-shadow-lg" src="https://corpbiz.io/learning/wp-content/uploads/2022/02/Solid-Waste-Management-Authorization-Form-Documents-and-Norms-1.jpg" />
                                        <button class="dark:bg-gray-800  focus:ring-gray-400 bottom-0 absolute  font-medium leading-none text-gray-800 py-1  bg-slate-50 w-full text-sm">Solid Waste Management</button>
                                        <div class="px-4 py-6 relative z-5 w-60 border-2 bg-white opacity-0 hover:opacity-100 drop-shadow-lg">

                                            <h1 class="title-font text-md font-medium font-serif text-gray-900 mb-3">Solid Waste Management</h1>
                                            <p class="text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" sm:w-full p-4 ">
                                    <div class="flex relative drop-shadow-md " >
                                        <img alt="gallery" class="absolute inset-0 w-60 h-50 object-cover object-center drop-shadow-lg" src="https://www.indiafilings.com/learn/wp-content/uploads/2019/05/Chennai-Water-Tax.jpg" />
                                        <button class="dark:bg-gray-800  focus:ring-gray-400 bottom-0 absolute  font-medium leading-none text-gray-800 py-1  bg-slate-50 w-full text-sm">Water</button>
                                        <div class="px-4 py-6 relative z-5 w-60 border-2 bg-white opacity-0 hover:opacity-100 drop-shadow-lg">

                                            <h1 class="title-font text-md font-medium font-serif text-gray-900 mb-3">Water</h1>
                                            <p class="text-sm">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>
            </div>


        </>
    )
}

export default ApplySubList