import React from 'react';
import { Routes, Route } from "react-router-dom";
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
import ContentCard from './components/ContentCard';
import Graph from './components/Graph';

function App() {
  return (
    <>
      <div >
        <Navbar /><br/>
        {/* <ContentArea /> */}
        {/* <Sidebar /> */}
        {/* <ContentCard /> */}

        <UserSidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<About />} />
          <Route path="/property" element={<PropertyPage />} />
          <Route path="/trade" element={<TradePage />} />
          <Route path="/water" element={<WaterPage />} />
          <Route path="/building" element={<BuildingPage />} />
          <Route path="/birth" element={< Birth_DeathPage/>} />
          <Route path="/advertisement" element={<AdvertisementPage/>} />
          <Route path="/solidWaste" element={< SolidWastePage/>} />
          <Route path="/appliedLicense" element={<AppliedLicenses />} />
          <Route path="/firmDetail" element={<FirmDetails/>} />
          <Route path="/ownerDetail" element={<OwnerDetails/>} />
          <Route path="/downloads" element={<Downloads/>} />
          <Route path="/newapply" element={<Trade_NewApply />} />
        </Routes>

      </div>


    </>
  );
}

export default App;
