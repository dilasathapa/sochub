import React from "react";
import Navbar from "../../Routes/Navbar";
import registerpic from "./../../assets/illustrations/registrationpic.svg"
import styles from "../../Styles/Register.module.css"
import logo from "../../assets/react.svg"

const Register = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className={styles.register_parent}>

                    <div>
                        <img src={registerpic} alt="registration pic" />
                    </div>
                    <div>
                        <div><img src={logo} alt="logo" /></div>
                        <div className={styles.form_container}>
                            <form>
                                <label htmlFor="user_emailID">emailID or username</label> 
                                <input type="text" id="user_emailID" placeholder="enter emailID" />

                                <label htmlFor="user_password">password</label>
                                <input type="password" id="user_password" placeholder="enter your password" />

                                <button className={styles.register_button}>Register</button>
                            </form>
                            <hr />
                            <button className={styles.github_button}>signup with github</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;