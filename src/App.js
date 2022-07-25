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
import Navbar from './components/Navbar';
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


function App() {
  return (
    <>
      <div >
        {/* <CitizenDetailPage /> */}
        {/* <GrevanshesForm /> */}
        {/* <Landing_Navbar /> */}

        {/* <Navbar /><br/> */}
        {/* <ContentArea /> */}
        {/* <Sidebar /> */}
        {/* <ContentCard /> */}

        {/* <UserSidebar /> */}
        {/* <Citizen_RegisterForm /> */}
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<About />} />
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
          <Route path="/newapply" element={<Trade_NewApply />} />
          <Route path="/grivancePage" element={<GrevanshesPage />} />
          <Route path="appliedLicenseDetail" element={<CitizenAppliedLicenseDetail />} >
          <Route path=":userId" element={<CitizenViewDetail />} />
          </Route>
          <Route path="/citizenDashboard" element={<CitizenDetailPage />} />
          <Route path="*" element={<NotFound />} />
          
          {/* <Outlet /> */}
        </Routes>

      </div>


    </>
  );
}

export default App;
