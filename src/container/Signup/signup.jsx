/* eslint-disable react/no-children-prop */
// import React from 'react'
import styles from "./signup.module.css";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import hide from "../../assets/Hide.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  const handlechange = () => {};
  const signup=()=>{
      navigate("/login")
  }
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_container_heading}>
        <h1 className={styles.signup_container_heading_h1}>
          Enter your email to sign up
        </h1>
        <p className={styles.signup_container_heading_p}>
          Sign up to get started
        </p>
      </div>
      <div>
        <div className={styles.signup_container_name}>
          <div className={styles.signup_container_name_box}>
            <div>First name</div>
            <input
              type="text"
              onChange={handlechange}
              name="firstname"
              value=""
              className={styles.signup_container_name_input}
            />
          </div>
          <div>
            <div>Last name</div>
            <input
              type="text"
              onChange={handlechange}
              name="lastname"
              value=""
              className={styles.signup_container_name_input}
            />
          </div>
        </div>

        <p>Email</p>
        <Input
          maininput={false}
          name=""
          value=""
          onchange={handlechange}
          type="text"
          placeholder="Enter Email"
        />
        <p>Password</p>
        <div className={styles.icon}>
          <Input
            maininput={false}
            name=""
            value=""
            onchange={handlechange}
            type="text"
            placeholder="*************"
          />
          <img src={hide} alt="hideicon" className={styles.hideicon} />
        </div>

        <Button children="Sign Up" mainbutton={false} onclick={signup}/>
        <span>Already have an account?Login</span>
      </div>
    </div>
  );
};

export default Signup;
