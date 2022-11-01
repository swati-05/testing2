import { useState } from 'react'
import { Link } from 'react-router-dom'

function SidenavContent() {
  const [navWidth, setNavWidth] = useState('w-0')
  const toggleNav = () => {
    navWidth == 'w-0' ? setNavWidth('w-56') : setNavWidth('w-0')
  }
  return (
    <>


      <div class='flex flex-row'>

        <div>
          <aside class="w-36 h-full shadow-lg  px-1 absolute" style={{ 'backgroundColor': '#4f46e5' }}>
            <ul class="relative">
              <li class="relative">
                <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' className='h-20 ml-6 mt-6 ' />
              </li>
              <li class="relative">
                <h1 className='ml-5 mt-4 text-white'>Citizen Name</h1>
              </li>
              <li class="relative">
                <h1 className='ml-2 text-white text-sm'>citizen@gmail.com</h1>
              </li>
              <li class="relative">
                <button className='bg-cyan-400 ml-8 mt-6 w-14 h-12 rounded-lg shadow-md shadow-cyan-500 ' onClick={toggleNav}>
                  <div class="rounded-full  flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5  text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                  </div>

                </button>
              </li>
              <li class="relative">
                <Link to="/download">
                  <button className='bg-cyan-400 ml-8 mt-6 w-14 h-12 rounded-lg shadow-md shadow-cyan-500 '>
                    <div class="rounded-full  flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </button>
                </Link>
              </li>
              <li class="relative">
                <button className='bg-cyan-400 ml-8 mt-6 w-14 h-12 rounded-lg shadow-md shadow-cyan-500 '>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 ml-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg>
                </button>
              </li>
            </ul>
          </aside>

          <aside>
            <div className={`${navWidth} h-screen bg-slate-200 transition-all duration-1000 ml-36 drop-shadow-md rounded-md overflow-hidden`}>
              <div>
                <div className=' mt-10'>
                  <h1 className='font-normal ml-3'>Setting</h1>
                  <hr className=' border-gray-400 ml-3 mt-2' />
                </div>
                <div class="grid  gap-2 grid-cols-2 mt-2 ">

                  <Link to="/citizenDashboard/citizenAccount"> <div class=" flex flex-col w-24 h-20 mt-4 ml-3 items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                    <div class="rounded-full p-1 bg-indigo-200 flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="text-xs mt-1 text-center font-semibold">Account</p>
                  </div>
                  </Link>

                  <div class="p-2 flex flex-col w-24 h-20 mt-4  items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                    <div class="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                      <i class="fas fa-calculator fa-sm text-indigo-600"></i>
                    </div>
                    <p class="text-xs mt-1 text-center font-semibold">Calculator</p>
                  </div>
                </div>
                <div>
                  <div className=' mt-8'>
                    <h1 className='font-normal ml-3'>Services</h1>
                    <hr className=' border-gray-400 ml-3 mt-2' />
                  </div>
                  <div class="grid  gap-2 grid-cols-2 mt-5">
                    <Link to="/apply">
                      <div class="p-1 flex flex-col w-24 h-20 mt-1 ml-3 items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                        <div class="rounded-full p-1 bg-indigo-200 flex flex-col items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <p class="text-xs mt-1 text-center font-semibold">Apply</p>
                      </div>
                    </Link>

                    <div class="p-2 flex flex-col w-24 h-20 mt-1 items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                      <div class="rounded-full p-1 bg-indigo-200 flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <p class="text-xs mt-1 text-center font-semibold">Complain& Grivance</p>
                    </div>

                    <Link to="/download">
                      <div class="p-2 flex flex-col w-24 h-20 mt-1 ml-3 items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                        <div class="rounded-full p-1 bg-indigo-200 flex flex-col items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <p class="text-xs mt-1 text-center font-semibold">Download</p>
                      </div>
                    </Link>

                    <div class="p-2 flex flex-col w-24 h-20 mt-1 items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                      <div class="rounded-full p-1 bg-indigo-200 flex flex-col items-center">
                        <i class="fas fa-shopping-basket fa-sm text-indigo-600"></i>
                      </div>
                      <p class="text-xs mt-1 text-center font-semibold">Download</p>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </aside>
        </div>
        <div>
          <div className='bg-red-200 w-96  h-screen'>
          hello welcome to dashboard
          </div>
        </div>

      </div>
    </>
  )
}

export default SidenavContent