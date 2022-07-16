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

function App() {
  return (
    <>
      <div className='bg-slate-100'>
        <Navbar /><br/>
        {/* <ContentArea /> */}
        {/* <Sidebar /> */}
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
        </Routes>

      </div>


    </>
  );
}

export default App;
