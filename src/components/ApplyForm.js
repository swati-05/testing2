import React from 'react'

function ApplyForm() {
  return (
    <>
<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-4 md:gap-6">
    {/* <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p class="mt-1 text-sm text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
      </div>
    </div> */}
    
    <div class=" ml-12 mt-5 md:mt-0 md:col-span-3">
      
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
        
          <div class="px-4 py-5 bg-white sm:p-6 drop-shadow-sm">
          <span className='text-2xl text-blue-500 '>Apply New Licence</span>
          <hr className='mt-4 pb-4'/>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first_name" class=" text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300  bg-slate-100  py-2" />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300  bg-slate-100  py-2"/>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300  bg-slate-100  py-2"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Country / Region</label>
                <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-slate-100">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div class="col-span-6">
                <label for="street_address" class="block text-sm font-medium text-gray-700">Street address</label>
                <input type="text" name="street_address" id="street_address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300  bg-slate-100  py-2"/>
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                <input type="text" name="city" id="city" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300  bg-slate-100  py-2"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="state" class="block text-sm font-medium text-gray-700">State / Province</label>
                <input type="text" name="state" id="state" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300  bg-slate-100  py-2"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal_code" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300  bg-slate-100  py-2"/>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save/Next
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


    </>
  )
}

export default ApplyForm