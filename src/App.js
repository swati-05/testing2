//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - App
//    DESCRIPTION - App Component
//    Changed - By Dipu (Added Proteched Links)
//////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { Routes, Route, Link, Outlet, } from "react-router-dom";
import './App.css';

import CitizenDashboard from './components/citizendashboard/CitizenDashboard';
import ApplyForm from './components/WaterFormComponent/ApplyForm';

function App() {
 




  return (
    <>
      {/* <CitizenDashboard/> */}
      <ApplyForm/>
      <div className=''>
        {/* <Navbar /><br/> */}
        {/* <ContentArea /> */}
        {/* <Sidebar /> */}
        {/* <UserSidebar /> */}
        {/* <CitizenInfo /> */}
      
        {/* <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<About />} />
          <Route path="/property" element={<PropertyPage />} />
          <Route path="/trade" element={<TradePage />} />
          <Route path="/water" element={<WaterPage />} />
          <Route path="/building" element={<BuildingPage />} />
          <Route path="/birth" element={< Birth_DeathPage/>} />
          <Route path="/advertisement" element={<AdvertisementPage/>} />
          <Route path="/solidWaste" element={< SolidWastePage/>} />
        </Routes> */}

      </div>


    </>
  );
}

export default App;
