import React from 'react'

import KnowledageTab from './KnowledageTab'
import OurDomainContent2 from './OurDomainContent2'
import SliderCard from './SliderCard'

function SectionOurDomain(props) {

  let  newsData = props.newsData
    console.log("news",props.newsData)

    return (
        <>
           
            <div class="grid grid-cols-7 gap-4 bg-white border p-3">
                <div class=" col-span-2  ml-10 ">
                 <KnowledageTab newsData ={props.newsData} />
                </div>
                <div class="col-span-3  ml-6 mr-8 ">
                 
                    <OurDomainContent2 />
                </div>
                <div class=" col-span-2 mr-8 ">
                    <SliderCard />
                </div>
            </div>

        </>
    )
}

export default SectionOurDomain