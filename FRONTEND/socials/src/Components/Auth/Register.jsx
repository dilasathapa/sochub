import React from "react";
import {useForm} from "react-hook-form"
import Navbar from "../../Routes/Navbar";
import registerpic from "./../../assets/illustrations/registrationpic.svg"
import styles from "../../Styles/Register.module.css"
import logo from "../../assets/react.svg"


const Register = () => {

    const {register, handleSubmit, formState : {errors, isSubmitSuccessful, isSubmitted}} = useForm();
    
    function submitData(data){
        console.log(data)
    }

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
                            <form onSubmit={handleSubmit(submitData)}>
                                <label htmlFor="user_emailID">emailID or username</label> 
                                <input type="text" id="user_emailID" placeholder="enter emailID" 
                                {
                                    ...register("user_emailID", {
                                        required : "your emailID is reuired"
                                    })
                                }
                                />

                                <label htmlFor="user_password">password</label>
                                <input type="password" id="user_password" placeholder="enter your password" 
                                {
                                    ...register("user_password", {
                                        required : "your password is required"
                                    })
                                }
                                />



                                <button type="submit" className={styles.register_button}>Register</button>
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