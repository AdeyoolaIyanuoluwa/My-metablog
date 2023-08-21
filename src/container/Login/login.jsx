/* eslint-disable react/no-children-prop */
// import React from 'react'
import Input from "../../components/Input/input";
import styles from "./login.module.css";
import hide from "../../assets/Hide.png";
import Button from "../../components/Button/button";
const Login = () => {
  const handlechange = () => {};
  return (
    <div className={styles.signin_container}>
      <div className={styles.signin_container_heading}>
        <h1 className={styles.signin_container_heading_h1}>
          Great to see you again
        </h1>
        <p className={styles.signin_container_heading_p}>
          Please login to your account
        </p>
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

      <Button children="Login" mainbutton={false} />
      <div className={styles.span}>
        <span>Don’t have an account? Sign Up|Reset Password</span>
      </div>
    </div>
  );
};

export default Login;
