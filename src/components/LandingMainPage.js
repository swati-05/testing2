import React,{useState} from 'react'
import Leaders from '../Pages/Landing/Leaders'
import SectionOurDomain from '../Pages/Landing/SectionOurDomain'
import SliderImage from '../Pages/Landing/SliderImage'
import TopNavbar from '../Pages/Landing/TopNavbar'
import Footer from './Footer'
import LandingNav from '../Pages/Landing/LandingNav'
import axios from 'axios'
import AboutJharkhand from '../Pages/Landing/AboutJharkhand'
import LeadersGallery from '../Pages/Landing/LeadersGallery'

function LandingMainPage() {

    // const [newsList, setNewsList] = useState([])

    // const getUlbData = (ulbId) => {
    //     axios.get(`http://localhost:3333/news?ulbid=${ulbId}`)
    //     .then(function (response) {
    //         console.log('news data via select ', response);
    //         setNewsList(response.data)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    
    // }
    return (
        <>    
            <div>
                <div > <TopNavbar /> </div>
                <div><LandingNav   /></div>
                <div className=''><SliderImage /></div>
                <div><SectionOurDomain /></div>
                <AboutJharkhand />
                <div><LeadersGallery /></div>
                <div><Footer /> </div>
            </div>
        </>
    )
}

export default LandingMainPage