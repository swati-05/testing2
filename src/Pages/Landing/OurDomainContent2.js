import {useState} from 'react'
import prop_img from './prop.jpg'
import bm from './bm.jpg'

function OurDomainContent2() {
    const [contentStyle, setcontentStyle] = useState('-left-40')
    return (
        <>
         
                    <div className="grid grid-cols-12">
                        <div className="p-2 col-span-4 h-40">
                            
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={()=> setcontentStyle('left-10')} onMouseLeave={()=> setcontentStyle('-left-40')}>
                                <img className='absolute w-full h-full top-0 left-0' src={prop_img} alt="" />
                            <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-10'></div>
                                    <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-blue-200">
                                        
                                        <h1 className="title-font text-sm font-medium text-gray-800">Advertisement</h1>
                                        
                                        <div className="flex items-center flex-wrap ">
                                           
                                        </div>
                                    </div>

                                    <div className={`absolute ${contentStyle} bg-gray-300  py-4 text-xs w-3/5 text-center  top-10 text-white duration-75`}>More About Advertisement</div>

                            </div>
                        </div>
                        <div className="p-2 col-span-4 h-40">
                            
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200">
                                <img className='absolute w-full h-full top-0 left-0' src={bm} alt="" />
                            <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-10'></div>
                                    <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-green-200">
                                        
                                        <h1 className="title-font text-sm font-medium text-gray-800">Advertisement</h1>
                                        
                                        <div className="flex items-center flex-wrap ">
                                           
                                        </div>
                                    </div>

                            </div>
                        </div>
                        <div className="p-2 col-span-4 h-40">
                            
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200">
                                <img className='absolute w-full h-full top-0 left-0' src={prop_img} alt="" />
                            <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-10'></div>
                                    <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-red-200 border-t border-white">
                                        
                                        <h1 className="title-font text-sm font-medium text-gray-800">Advertisement</h1>
                                        
                                        <div className="flex items-center flex-wrap ">
                                           
                                        </div>
                                    </div>

                            </div>
                        </div>
                        <div className="p-2 col-span-4 h-40">
                            
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200">
                                <img className='absolute w-full h-full top-0 left-0' src={prop_img} alt="" />
                            <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-10'></div>
                                    <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-blue-200">
                                        
                                        <h1 className="title-font text-sm font-medium text-gray-800">Advertisement</h1>
                                        
                                        <div className="flex items-center flex-wrap ">
                                           
                                        </div>
                                    </div>

                            </div>
                        </div>
                        <div className="p-2 col-span-4 h-40">
                            
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200">
                                <img className='absolute w-full h-full top-0 left-0' src={prop_img} alt="" />
                            <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-10'></div>
                                    <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-green-200">
                                        
                                        <h1 className="title-font text-sm font-medium text-gray-800">Advertisement</h1>
                                        
                                        <div className="flex items-center flex-wrap ">
                                           
                                        </div>
                                    </div>

                            </div>
                        </div>
                        <div className="p-2 col-span-4 h-40">
                            
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200">
                                <img className='absolute w-full h-full top-0 left-0' src={prop_img} alt="" />
                            <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-10'></div>
                                    <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-red-200">
                                        
                                        <h1 className="title-font text-sm font-medium text-gray-800">Advertisement</h1>
                                        
                                        <div className="flex items-center flex-wrap ">
                                           
                                        </div>
                                    </div>

                            </div>
                        </div>
                        <div className="p-2 col-span-12 h-40">
                            
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200">
                                <img className='absolute w-full h-full top-0 left-0' src={prop_img} alt="" />
                            <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-10'></div>
                                    <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-yellow-200">
                                        
                                        <h1 className="title-font text-sm font-medium text-gray-800">Advertisement</h1>
                                        
                                        <div className="flex items-center flex-wrap ">
                                           
                                        </div>
                                    </div>

                            </div>
                        </div>
                      
                        
                      
                        
                        
                        
                        
                    </div>
               
        </>
    )
}

export default OurDomainContent2