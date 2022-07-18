import React from 'react'

function ContentCard() {
  return (
    <>
    <div class=" ml-16 mt-6">

<div class="grid grid-cols-12 max-w-5xl gap-4">


  <div class="grid col-span-4 relative">
    <a class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9" href="">


      <p class="text-2xl font-bold text-gray-500 group-hover:text-gray-700"> View repositories with Code in Jira </p>

      <p class="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6"> Include an issue key in a commit, branch name, or PR, and it will automatically update in Jira. </p>


      <div class="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0"> </div>

    </a>
  </div>


  <div class="grid col-span-4 relative">
    <a class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9" href="">


      <p class="text-2xl font-bold text-gray-500 group-hover:text-gray-700"> Development status right in context </p>

  
      <p class="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6"> View and create branches and pull requests and view commits right inside the Jira issue development panel. </p>


      <div class="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0"> </div>

    </a>
  </div>


  <div class="grid col-span-4 relative">
    <a class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9" href="">


      <p class="text-2xl font-bold text-gray-500 group-hover:text-gray-700"> End-to-end DevOps visibility </p>

      <p class="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6"> Visualize and measure progress from idea through to production across all tools. </p>

 
      <div class="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0"> </div>

    </a>
  </div>

</div>

</div>
    </>
  )
}

export default ContentCard