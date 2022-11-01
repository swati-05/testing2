//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 08 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - register.js
//    DESCRIPTION - Citizen Registration
//////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    const handleLogoutBtn = () => {

        localStorage.removeItem('token');
        navigate("/login")


        // useEffect(() => {
        //     const timer = setTimeout(() => {
        //         navigate("/login")
        //     }, 2000);
        //     return () => clearTimeout(timer);
        // }, []);
    }
    if (window.confirm("Are you sure you want to Log Out ?")){
        localStorage.removeItem('token');
        return  navigate("/login")
            
    }


    return (
        <div>

    

        </div>
    )
}

export default Logout