import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Components/Auth/Register";
import Landingpage from "../Components/Landingpage";

const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Landingpage />}></Route>
            <Route path="/registration" element={<Register />} ></Route>
        </Routes>
        </>
    )
}

export default AllRoutes