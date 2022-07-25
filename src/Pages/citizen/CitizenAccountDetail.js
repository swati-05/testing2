import React from 'react'

function CitizenAccountDetail() {
    return (
        <>
            <div>
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="mt-5 md:mt-0 md:col-span-4">
                        <form action="#" method="POST">
                            <div class="shadow sm:rounded-md sm:overflow-hidden">
                                <div class="px-4 py-5 bg-slate-100 space-y-6 sm:p-6">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700"> Photo </label>
                                        <div class="mt-1 flex items-center">
                                            <span class="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100">
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2kMLJq1Pqc1Z_rebo235x4YyJuC0luJZUCQ&usqp=CAU' />
                                            </span>
                                            <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-grey-100 rounded-md p-2" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-4">
                                            <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                                            <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                          
                                            <label for="mobile" class="block text-sm font-medium text-gray-700">Mobile No.</label>
                                            <input type="text" name="mobile" id="email-address" autocomplete="mobile" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
                                        </div>

                                        <div class="col-span-6">
                                            <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address..."></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button class=" p-2.5 bg-indigo-800 rounded-xl hover:rounded-3xl hover:bg-indigo-800 transition-all duration-300 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
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

export default CitizenAccountDetail