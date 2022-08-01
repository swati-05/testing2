import React, { useState } from 'react';
import {
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import './App.css';
import About from './components/About';
import ContentArea from './components/ContentArea';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import UserSidebar from './components/UserSidebar';
import PropertyPage from './components/PropertyPage';
import TradePage from './components/TradePage';
import WaterPage from './components/WaterPage';
import BuildingPage from './components/BuildingPage';
import Birth_DeathPage from './components/Birth_DeathPage';
import AdvertisementPage from './components/AdvertisementPage';
import SolidWastePage from './components/SolidWastePage';
import AppliedLicenses from './customerDetail/AppliedLicenses';
import FirmDetails from './customerDetail/FirmDetails';
import OwnerDetails from './customerDetail/OwnerDetails';
import Downloads from './components/Downloads';
import Trade_NewApply from './components/Trade_NewApply';
import Citizen_RegisterForm from './Citizen_RegisterForm';
import Landing_Navbar from './Pages/Landing/Landing_Navbar';
import NotFound from './components/NotFound';
import GrevanshesPage from './Pages/Landing/GrevanshesPage';
import CitizenDetailPage from './Pages/citizen/CitizenDetailPage';
import CitizenViewDetail from './Pages/citizen/CitizenViewDetail';
import LandingPage from './components/LandingPage';
import CitizenAppliedLicenseDetail from './Pages/citizen/CitizenAppliedLicenseDetail';
import DashboardNavbar from './Pages/citizen/DashboardNavbar';
import CitizenDashboardPage from './components/CitizenDashboardPage';
import TestComponent from './components/testDelete/TestComponent';
import ProgressCard from './Pages/citizen/ProgressCard';
import Complain_Grivance from './components/Complain_Grivance';
import ApplySubList from './Pages/citizen/ApplySubList';
import CitizenWelcome from './Pages/citizen/CitizenWelcome';
import DownloadPage from './components/DownloadPage';
import SideNav from './Pages/citizen/SideNav';
import SidenavContent from './components/testDelete/SidenavContent';

import SliderImage from './Pages/Landing/SliderImage';
import SliderCard from './Pages/Landing/SliderCard';
import NewsComponent from './Pages/Landing/NewsComponent';

import { contextVar } from './components/ContextVar';
import AboutJharkhand from './Pages/Landing/AboutJharkhand';
import LeadersGallery from './Pages/Landing/LeadersGallery';



function App() {
  const [ulbId, setulbId] = useState(0);
  const [ulbData, setulbData] = useState({
    "news": [
      {
        "header": "Jharkhand News",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
        "date": "09/04/2022",
        "isArchived": 1,
        "ulbid": 1,
        "id": 1
      },
      {
        "header": "Jharkhand News",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
        "date": "09/04/2022",
        "isArchived": 1,
        "ulbid": 1,
        "id": 1
      }
    ],
    "events": [
      {
        "header": "Jharkhand events",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
        "date": "09/04/2022",
        "isArchived": 1,
        "ulbid": 1,
        "id": 1
      },
      {
        "header": "Jharkhand events",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
        "date": "09/04/2022",
        "isArchived": 1,
        "ulbid": 1,
        "id": 1
      }
    ],
    "notice": [
      {
        "header": "Jharkhand notice",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
        "date": "09/04/2022",
        "isArchived": 1,
        "ulbid": 1,
        "id": 1
      },
      {
        "header": "Jharkhand notice",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
        "date": "09/04/2022",
        "isArchived": 1,
        "ulbid": 1,
        "id": 1
      }
    ],
    "images": [
      {
         
        "imgPath": "https://media.istockphoto.com/photos/patratu-valley-ranchi-beautiful-place-in-jharkhand-picture-id1323460129?b=1&k=20&m=1323460129&s=170667a&w=0&h=JfpWzEX_Rba9QY934SeAhiHPbnntttCsuHn0lk3qQS0=",
        "id": 1
    },
    {
        
        "imgPath":" https://media.istockphoto.com/photos/swami-vivekananda-memorial-at-sunrise-located-at-ranchi-jharkhand-picture-id1325410596?b=1&k=20&m=1325410596&s=170667a&w=0&h=9CEIBzAv5eOz4Bk617fZGzDl0cF0O6J8z5677hSkiY8=",
        "id": 2
    },
    {
       
        "imgPath": " https://images.moneycontrol.com/static-mcnews/2018/06/1280px-Ranchi_9238.jpg?impolicy=website&width=770&height=431",
        "id": 3
    },
    {
       
        "imgPath": " https://upload.wikimedia.org/wikipedia/commons/4/4c/Jharkhand_Legislative_Assembly_%28Jharkhand_Vidhan_Sabha%29_%28%E0%A4%9D%E0%A4%BE%E0%A4%B0%E0%A4%96%E0%A4%82%E0%A4%A1_%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE%29.png",
        "id": 4
    }
    ]
  })



  return (
    <>
      <contextVar.Provider value={{ ulbidfun: setulbId, ulbdatafun: setulbData, ulbdata: ulbData }}>
        <div className={`sm:w-full transition-all  `}>
          {/* <SidenavContent/> */}
          {/* <Navbar/>
        <SideNav/> */}
          {/* <ApplySubList /> */}
          {/* <ProgressCard />  */}
          {/* <CitizenDetailPage /> */}
          {/* <GrevanshesForm /> */}
          {/* <Landing_Navbar /> */}

          {/* <Navbar /><br/> */}
          {/* <ContentArea /> */}
          {/* <Sidebar /> */}
          {/* <ContentCard /> */}

          {/* <UserSidebar /> */}
          {/* <Citizen_RegisterForm /> */}
          {/* <DashboardNavbar /> */}
<CitizenWelcome />
          <Routes>

            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/home" element={<Home />} />
          <Route path="/form" element={<About />} /> */}
            <Route path="/property" element={<PropertyPage />} />
            <Route path="/trade" element={<TradePage />} />
            <Route path="/water" element={<WaterPage />} />
            <Route path="/building" element={<BuildingPage />} />
            <Route path="/birth" element={< Birth_DeathPage />} />
            <Route path="/advertisement" element={<AdvertisementPage />} />
            <Route path="/solidWaste" element={< SolidWastePage />} />
            <Route path="/appliedLicense" element={<AppliedLicenses />} />
            <Route path="/firmDetail" element={<FirmDetails />} />
            <Route path="/ownerDetail" element={<OwnerDetails />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/apply" element={<CitizenWelcome />} />
            <Route path="/grivancePage" element={<Complain_Grivance />} />
            <Route path="appliedLicenseDetail" element={<CitizenAppliedLicenseDetail />} />
            <Route path="/test/:userId" element={<CitizenViewDetail />} />
            <Route path="/citizenDashboard" element={<CitizenDashboardPage />} />
            <Route path="/test" element={<TestComponent />} />
            <Route path="/citizenDashboard/citizenAccount" element={<CitizenDetailPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="*" element={<NotFound />} />



          </Routes>
        </div>
      </contextVar.Provider >


    </>
  );
}

export default App;
