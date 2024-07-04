import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../Routes/HomeNavbar';
import registerpic from './../../assets/illustrations/registrationpic.svg';
import styles from '../../Styles/Register.module.css';
import logo from '../../assets/react.svg';
import { useNavigate } from 'react-router-dom';
import LoginForm from './Login'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const loginModalRef = useRef(null);
  const navigate = useNavigate();
  const [available, setAvailable] = useState(0);

  useEffect(()=>{
    if(available){
        if (loginModalRef.current) {
            loginModalRef.current.openLoginModal(); // Open the login modal
        }
    }
  },[available])

  const submitData = async (user_data) => {
    let payload = JSON.stringify(user_data);
    try {
      const res = await fetch('http://localhost:8082/user/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: payload,
      });
      const data = await res.json();
      console.log("data", data);
      if (data!=null) {
        if (loginModalRef.current) {
          loginModalRef.current.openLoginModal(); // Open the login modal
        }
      }
    } catch (e) {
      console.log('error', e);
    }
  };

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
                <label htmlFor="email">Email ID or Username</label>
                <input type="text" id="email" placeholder="Enter email ID"
                  {...register('email', { required: 'Your email ID is required' })}
                />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password"
                  {...register('password', { required: 'Your password is required' })}
                />
                <button type="submit" className={styles.register_button}>Sign Up</button>
              </form>
                <h1>have already registered? </h1>
                 <p onClick={()=>{setAvailable(available+1)}}>Login</p>
              <hr />
              <button className={styles.github_button}>Sign up with GitHub</button>
            </div>
          </div>
        </div>
        <LoginForm ref={loginModalRef} />
      </div>
    </>
  );
};

export default Register;
