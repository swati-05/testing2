import React from 'react'

function Trade_renewal() {
    return (
        <>
              <div class="container mx-auto">
        <div class="flex h-full">
            <div class=" shadow-2xl p-6 rounded-2xl border-2 border-gray-50" style={{"backgroundColor":"#40bfff"}}>
                <div class="flex flex-col h-12 w-12">
                    <div>
                        <h2 class="font-bold text-white text-center text-xs mt-0">RENEWAL</h2>
                    </div>
                    <div>
                        <div class="flex flex-row space-x-4 items-center justify-center ">
                            <div id="icon" >
                                <span>                              
                                    <svg  class="w-10 h-10 fill-stroke text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                        <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clip-rule="evenodd" />
                                        </svg>
                                </span>
                            </div>
                            {/* <div id="temp">
                              
                                <h4 class="text-xl">122</h4>
                                
                            </div> */}
                        </div>
                    </div>
                    {/* <div class="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
                        <a href="#" class="text-indigo-600 text-xs font-medium">View more</a>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Trade_renewal