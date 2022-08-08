 //////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - OurDomainContent2
//    DESCRIPTION - OurDomainContent2 Component containing domains in landingPage
//////////////////////////////////////////////////////////////////////////////////////


import { useState } from 'react'
import prop_img from './prop.jpg'
import bm from './bm.jpg'

function OurDomainContent2() {
    const [contentStyle, setcontentStyle] = useState('-left-40')
    return (
        <>

            <div className="grid grid-cols-12">
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/real-estate-searching_52683-46407.jpg?w=740&t=st=1659594868~exp=1659595468~hmac=93d688f9e341442af8050c8b1adf543da1d76b1df5a277be34dd28bc3fd39b28' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>

                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Property</h1>
                        </div>

                        {/* <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div> */}

                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200 " onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/successful-partnership-negotiation-partners-handshaking_335657-2453.jpg?w=740&t=st=1659593504~exp=1659594104~hmac=6242bdcc25cd27e6b5368c09ea84aee84da3653dc98d1cf4510569b9fc971eb6' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Trade</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>
                        {/* <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div> */}
                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/bloggers-advertising-referrals-young-people-with-gadgets-loudspeakers-announcing-news-attracting-target-audience-vector-illustration-marketing-promotion-communication_74855-8244.jpg?t=st=1659594287~exp=1659594887~hmac=285b3c4de1ec111a568628448d0959932602161df6bf010cfc3aad47c6d1f269' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-10'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200 border-t border-white">
                            <h1 className="title-font text-sm font-medium text-gray-800">Advertisement</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>
                        {/* <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div> */}
                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/building-concept-illustration_114360-4469.jpg?w=740&t=st=1659600603~exp=1659601203~hmac=73157c68dcc27ee3db479dcbe336ccb090081c43f9f6d0dabb4122c730c323d2' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Building Plans & Approval</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>
                        {/* <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div> */}
                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/vector-clean-shiny-blue-drop-with-circles-water-close-up-front-view_1284-48012.jpg?w=740&t=st=1659594024~exp=1659594624~hmac=c260f1254b7d3695a9a0b4ed4ff4c7d0c96a497d9c97c37690617008ff35dcde' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Water</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>
                        {/* <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div> */}
                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/trash-waste-concept-with-food-glass-paper-realistic_1284-33139.jpg?w=740&t=st=1659358143~exp=1659358743~hmac=5785d86f7fef6d711f0f05f10ba7542bfdf377f613982f971e62285a0bac9a51' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Solid Waste & Management</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>
                        {/* <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div> */}
                    </div>
                </div>
                <div className="p-2 col-span-12 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/vintage-achievement-certificate-template-vector-professional-design-beige_53876-157582.jpg?w=740&t=st=1659594660~exp=1659595260~hmac=fda76c07c9c807c69ab10368ab5d76205a7ff780e84cbff975ebb2431f62dece' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-indigo-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Birth & Death Certificate</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>
                        {/* <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurDomainContent2