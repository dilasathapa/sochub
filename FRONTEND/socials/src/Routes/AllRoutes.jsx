import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Components/Auth/Register";
import Landingpage from "../Components/Landingpage";
import LoginForm from "../Components/Auth/Login";
import Home from "../Components/Home";

const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Landingpage />}></Route>
            <Route path="/registration" element={<Register />} ></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/feed" element={<Home />}></Route>
        </Routes>
        </>
    )
}

export default AllRoutes