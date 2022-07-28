import React from 'react'
import Landing_Navbar from '../Pages/Landing/Landing_Navbar'
import Leaders from '../Pages/Landing/Leaders'
import SectionOurDomain from '../Pages/Landing/SectionOurDomain'
import Buttoncomponent from './testDelete/Buttoncomponent'
import SliderImage from '../Pages/Landing/SliderImage'

function LandingPage() {
    return (
        <>
        
        
            {/* <Landing_Navbar /> */}
            
            
            <div>
                <div><Buttoncomponent /></div>
                <div className=''><SliderImage /></div>
                <div><SectionOurDomain /></div>
                <div><Leaders /></div>
            </div>
        </>
    )
}

export default LandingPage