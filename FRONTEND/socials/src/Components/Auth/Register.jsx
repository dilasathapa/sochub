import React from "react";
import {useForm} from "react-hook-form"
import Navbar from "../../Routes/HomeNavbar";
import registerpic from "./../../assets/illustrations/registrationpic.svg"
import styles from "../../Styles/Register.module.css"
import logo from "../../assets/react.svg"
import { useNavigate } from "react-router-dom";
import LoginForm from "./Login";



const Register = () => {

    const {register, handleSubmit, formState : {errors, isSubmitSuccessful, isSubmitted}} = useForm();
    const navigate = useNavigate();
    
    function submitData(user_data){
        console.log(user_data)
        let payload = JSON.stringify(user_data)
        fetch("http://localhost:8081/user/register",{
            headers : {
                "Content-Type" : "application/json"
            },
            method : 'POST',
            body : payload
        }).then((res)=>res.json())
        .then(()=>navigate('/feed'))
        .catch((e)=>console.log("error", e))
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
                                <label htmlFor="email">emailID or username</label> 
                                <input type="text" id="email" placeholder="enter emailID" 
                                {
                                    ...register("email", {
                                        required : "your emailID is reuired"
                                    })
                                }
                                />

                                <label htmlFor="password">password</label>
                                <input type="password" id="password" placeholder="enter your password" 
                                {
                                    ...register("password", {
                                        required : "your password is required"
                                    })
                                }
                                />



                                <button type="submit" className={styles.register_button}>Sign Up</button>
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