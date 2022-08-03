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
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-photo/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept_1387-310.jpg?w=740&t=st=1659358823~exp=1659359423~hmac=6e6f7cf045a717d81702af6a51d550d41be850642491c0b576eef3728452cea3' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>

                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Property</h1>
                        </div>

                        <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div>

                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200 " onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/business-growth-graph_53876-90457.jpg?w=740&t=st=1659358736~exp=1659359336~hmac=91d73849d48e1a7b1fb98ffb3230a5a5ef0296d2c02d67fecf05a36d2c114386' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Trade</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>
                        <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div>
                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-psd/city-light-billboard-mockup-template_1051-3305.jpg?w=740&t=st=1659358916~exp=1659359516~hmac=7a78b7fe967ef358c1c3f963715b7f08cc0695171fb442a36fa25d708bf072e0' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-10'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200 border-t border-white">
                            <h1 className="title-font text-sm font-medium text-gray-800">Advertisement</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>
                        <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div>
                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-psd/architecture-composition-with-paper-mockup_23-2147866488.jpg?w=740&t=st=1659358281~exp=1659358881~hmac=bef29a975601afe23d73ed26db553802b39de322aead0ed7d330d66e4220d689' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Building Plans & Approval</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>
                        <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div>
                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/vector-clean-shiny-blue-drop-with-circles-water-close-up-front-view_1284-48012.jpg?w=740&t=st=1659358401~exp=1659359001~hmac=4c576e320e99bffdfe1fd300f451680b284405098d6c2fa2e49534887ee55258' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Water</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>
                        <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div>
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
                        <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div>
                    </div>
                </div>
                <div className="p-2 col-span-12 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-photo/close-up-hand-completing-form_23-2149191372.jpg?w=740&t=st=1659358583~exp=1659359183~hmac=48ed7d221999c37b9e0ff84d8df59df2d6910f2554d99525db020e2947086ecf' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-indigo-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Birth & Death Certificate</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>
                        <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurDomainContent2