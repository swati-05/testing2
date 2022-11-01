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
import NotFound from './components/NotFound';
import CitizenDetailPage from './Pages/citizen/CitizenDetailPage';
import CitizenAppliedLicenseDetailTbl from './Pages/citizen/CitizenAppliedLicenseDetailTbl';
import TestComponent from './components/testDelete/TestComponent';
import ComplainGrivanceMainPage from './components/ComplainGrivanceMainPage'
import CitizenWelcome from './Pages/citizen/CitizenWelcome';
import DownloadPage from './components/DownloadPage';
import { contextVar } from './components/ContextVar';
import CitizenLicenseFullDetail from './Pages/citizen/CitizenLicenseFullDetail';
import CitizenSafApplicationFormIndex from './Pages/CitizenPropertyEntryForm/CitizenSafApplicationForm/CitizenSafApplicationFormIndex'
import LandingMainPage from './components/LandingMainPage';
import CitizenMainPage from './components/CitizenMainPage'
import CitizenSelfAdvtDetailForm from './Pages/citizenAdvertisementForm/citizenSelfAdvertisement/CitizenSelfAdvtDetailForm';
import { newsData } from './StaticData'
import Register from './Pages/Registration/Register';
import About from './components/About';
<<<<<<< HEAD
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
import CitizenInfo from './citizen/CitizenInfo';
import CitizenDashboard from './components/citizendashboard/CitizenDashboard';
=======
import CitizenSafEntryScreen from './Pages/CitizenPropertyEntryForm/CitizenSafApplicationForm/CitizenSafEntryScreen';
import Login from './Pages/CitizenLogin/Login';
import Logout from './Pages/CitizenLogin/Logout';
import Demo from './Pages/CitizenLogin/Demo'
import Protected from './Pages/CitizenLogin/Protected';

import CitizenChatBot from './components/CitizenChatBot';
import ResetPassword from './Pages/CitizenLogin/ResetPassword';
import CitizenObjectionFormIndex from './Pages/CitizenPropertyEntryForm/CitizenObjectionEntryForm/CitizenObjectionFormIndex';
import CitizenTaxCalculator from './Pages/CitizenPropertyEntryForm/TaxCalculator/CitizenTaxCalculator';
>>>>>>> f6ed9c4f9024af3f7442f0703815f285d4430549

function App() {
  // const [ulbId, setulbId] = useState(0);
  // const [ulbData, setulbData] = useState({
  //   "news": [
  //     {
  //       "header": "Jharkhand News Jharkhand News",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand News Jharkhand News",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand News Jharkhand News",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand News Jharkhand News",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand News Jharkhand News",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand News Jharkhand News",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     }
  //   ],
  //   "events": [
  //     {
  //       "header": "Jharkhand events",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand events",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     }
  //   ],
  //   "notice": [
  //     {
  //       "header": "Jharkhand notice",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand notice",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     }
  //   ],
  //   "images": [
  //     {

  //       "imgPath": "https://media.istockphoto.com/photos/patratu-valley-ranchi-beautiful-place-in-jharkhand-picture-id1323460129?b=1&k=20&m=1323460129&s=170667a&w=0&h=JfpWzEX_Rba9QY934SeAhiHPbnntttCsuHn0lk3qQS0=",
  //       "id": 1
  //   },
  //   {

  //       "imgPath":" https://media.istockphoto.com/photos/swami-vivekananda-memorial-at-sunrise-located-at-ranchi-jharkhand-picture-id1325410596?b=1&k=20&m=1325410596&s=170667a&w=0&h=9CEIBzAv5eOz4Bk617fZGzDl0cF0O6J8z5677hSkiY8=",
  //       "id": 2
  //   },
  //   {

  //       "imgPath": " https://images.moneycontrol.com/static-mcnews/2018/06/1280px-Ranchi_9238.jpg?impolicy=website&width=770&height=431",
  //       "id": 3
  //   },
  //   {

  //       "imgPath": " https://upload.wikimedia.org/wikipedia/commons/4/4c/Jharkhand_Legislative_Assembly_%28Jharkhand_Vidhan_Sabha%29_%28%E0%A4%9D%E0%A4%BE%E0%A4%B0%E0%A4%96%E0%A4%82%E0%A4%A1_%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE%29.png",
  //       "id": 4
  //   }
  //   ]
  // })
  const [ulbData, setulbData] = useState(newsData)



  return (
    <>
      <div className=''>
        {/* <Navbar /><br/> */}
        {/* <ContentArea /> */}
        {/* <Sidebar /> */}
        {/* <UserSidebar /> */}
        {/* <CitizenInfo /> */}
        <CitizenDashboard/>
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
