import React from 'react';
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


function App() {
  return (
    <>
    {/* <SliderCard />
    <NewsComponent/> */}
    {/* <SliderImage /> */}
  
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

      
       

    </>
  );
}

export default App;
