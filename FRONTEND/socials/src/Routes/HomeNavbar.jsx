import React from "react";
import reactlogo from "./../assets/react.svg"
import { Link } from "react-router-dom";
import LoginForm from "../Components/Auth/Login";
import styles from "./../Styles/Landing-nav.module.css"

const HomeNavbar = () => {
    return (
        <>
            <div className={styles.landing_nav_parent}>
                {/* hello */}
                <Link><img src={reactlogo} alt="logo" /></Link>
                <div>
                    <Link to="/registration">Register</Link>
                    <LoginForm />

                </div>
            </div>
        </>
    )
}

export default HomeNavbar