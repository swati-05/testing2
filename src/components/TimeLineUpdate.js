import React from 'react'

function TimeLineUpdate() {
  return (
    <>
    <div class="container  max-w-sm rounded overflow-hidden px-4 py-5 sm:p-6">
        <h1 className='text-2xl text-blue-500 '>Application Timelime</h1>
        <hr className='mt-4 pb-4'/>
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
          >
        
            <div class="flex flex-row-reverse md:contents">
              <div
                class=" col-end-5 p-2 rounded-xl  shadow-md w-40 h-10" style={{"backgroundColor":"#56ca00"}} >
                <h3 class="font-semibold text-sm mb-1 text-center">Completed</h3> 
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 pointer-events-none" style={{"backgroundColor":"#56ca00"}}></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full  shadow "style={{"backgroundColor":"#56ca00"}}
                ></div>
              </div>
            </div>
      
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 pointer-events-none" style={{"backgroundColor":"#ff4c51"}}></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full shadow" style={{"backgroundColor":"#ff4c51"}}
                ></div>
              </div>
              <div
                class="bg-blue-500 col-start-6 col-end-10 p-2 rounded-xl my-4 mr-auto shadow-md w-40 h-10"style={{"backgroundColor":"#ff4c51"}}
              >
                <h3 class="font-semibold text-lg  text-center">pending</h3>
                
              </div>
            </div>
        
            <div class="flex flex-row-reverse md:contents">
              <div
                class=" col-start-1 col-end-5 p-2 rounded-xl my-4 ml-auto shadow-md w-40 h-10"style={{"backgroundColor":"#ffc53b"}} 
              >
                <h3 class="font-semibold text-lg  text-center">process</h3>
                
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 pointer-events-none" style={{"backgroundColor":"#ffc53b"}}></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full shadow" style={{"backgroundColor":"#ffc53b"}}
                ></div>
              </div>
            </div>
         
            <div class="flex flex-row-reverse md:contents">
              <div
                class=" col-start-1 col-end-5 p-2 rounded-xl my-4 ml-auto shadow-md w-40 h-10" style={{"backgroundColor":"#ffc53b"}}
              >
                <h3 class="font-semibold text-lg mb-1"></h3>
                
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 pointer-events-none" style={{"backgroundColor":"#ffc53b"}}></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full shadow" style={{"backgroundColor":"#ffc53b"}}
                ></div>
              </div>
            </div>
       
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 pointer-events-none" style={{"backgroundColor":"#ffc53b"}}></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full shadow" style={{"backgroundColor":"#ffc53b"}}
                ></div>
              </div>
              <div
                class=" col-start-6 col-end-10 p-2 rounded-xl my-4 mr-auto shadow-md w-40 h-10"style={{"backgroundColor":"#ffc53b"}}
              >
                <h3 class="font-semibold text-lg mb-1"></h3>
                
              </div>
            </div>
          </div>
        </div>

        
    </>
  )
}

export default TimeLineUpdate