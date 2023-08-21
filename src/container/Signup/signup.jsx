/* eslint-disable react/no-children-prop */
// import React from 'react'
import styles from "./signup.module.css";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import hide from "../../assets/Hide.png";
// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "./signupSchema";

const Signup = () => {


  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  // const navigate = useNavigate();
  // const handlechange = () => {};
  // const signup = () => {
  //   navigate("/login");
  // };

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <div className={styles.signup_container}>
      {/* <Formik initialValues={initialValues} validationSchema={signupSchema} onSubmit={(values)}> */}
      {/* {(formik) =>{}} */}
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
              onChange={formik.handleChange}
              name="firstname"
              value={formik.firstname}
              className={styles.signup_container_name_input}
            />
            <p className={styles.error}>{formik.errors.firstname}</p>
          </div>
          <div>
            <div>Last name</div>
            <input
              type="text"
              onChange={formik.handleChange}
              name="lastname"
              value={formik.lastname}
              className={styles.signup_container_name_input}
            />
             <p className={styles.error}>{formik.errors.lastname}</p>
          </div>
        </div>

        <p>Email</p>
        <Input
          maininput={false}
          name="email"
          value={formik.email}
          onchange={formik.handleChange}
          type="text"
          placeholder="Enter Email"
        />
         <p className={styles.error}>{formik.errors.email}</p>
        <p>Password</p>
        <div className={styles.icon}>
          <Input
            maininput={false}
            name="password"
            value={formik.password}
            onchange={formik.handleChange}
            type="text"
            placeholder="*************"
          />
          <img src={hide} alt="hideicon" className={styles.hideicon} />
          <p className={styles.error}>{formik.errors.password}</p>
        </div>

        <Button
          children="Sign Up"
          mainbutton={false}
          onclick={formik.handleSubmit}
        />
        <div className={styles.span}>
          <span>Already have an account?Login</span>
        </div>
      </div>
      {/* </Formik> */}
    </div>
  );
};

export default Signup;
