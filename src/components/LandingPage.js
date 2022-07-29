import React from 'react'
import Leaders from '../Pages/Landing/Leaders'
import SectionOurDomain from '../Pages/Landing/SectionOurDomain'
import SliderImage from '../Pages/Landing/SliderImage'
import TopNavbar from '../Pages/Landing/TopNavbar'
import LandingNav from './testDelete/LandingNav'

function LandingPage() {
    return (
        <>
        
        
            {/* <Landing_Navbar /> */}
            
            
            <div>
                <div > <TopNavbar /> </div>
                <div><LandingNav /></div>
                <div className=''><SliderImage /></div>
                <div><SectionOurDomain /></div>
                <div><Leaders /></div>
            </div>
        </>
    )
}

export default LandingPage