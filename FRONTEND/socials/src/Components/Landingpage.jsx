import React from "react";
import reactlogo from "./../assets/react.svg";
import LoginForm from "./Auth/Login";

const Landingpage = () => {
    return (
        <>
            <header>
                <div>
                    <img src={reactlogo} alt="logo" />
                </div>
                <div>
                    <button>Register</button>
                    <LoginForm />
                </div>
            </header>
        </>
    )
}

export default Landingpage;

