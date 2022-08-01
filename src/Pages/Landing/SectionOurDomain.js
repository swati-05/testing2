import React from 'react'
import DownloadButton from '../../components/DownloadButton'
import DownloadPage from '../../components/DownloadPage'
import Downloads from '../../components/Downloads'
import KnowledageTab from './KnowledageTab'
import OurDomainContent from './OurDomainContent'
import OurDomain from './OurDomainContent'
import TestingFile from './OurDomainContent'
import OurDomainContent2 from './OurDomainContent2'
import SliderCard from './SliderCard'

function SectionOurDomain(props) {

  let  newsData = props.newsData
    console.log("news",props.newsData)

    return (
        <>
           
            <div class="grid grid-cols-7 gap-4 bg-red-500 border ">
                <div class=" col-span-2  ml-10 ">
                 <KnowledageTab newsData ={props.newsData} />
                </div>
                <div class="col-span-3  ml-6 mr-8 ">
                    {/* <OurDomainContent /> */}
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