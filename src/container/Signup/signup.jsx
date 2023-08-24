/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
// import React from 'react'
import styles from "./signup.module.css";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import hide from "../../assets/Hide.png";
// import { faEye} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "./signupSchema";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userSignup } from "../../features/Register/validationactions";

const Signup = () => {
  const { loading, userInfo } = useSelector((state) => state.validation);
  console.log(loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  useEffect(() => {
    if (userInfo?.status === "success") {
      navigate("/login");
    }
  }, [navigate, userInfo?.status]);

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: (value) => {
      console.log(value);
      dispatch(
        userSignup({
          first_name: value.firstname,
          last_name: value.lastname,
          email_address: value.email,
          password: value.password,
        })
      );
      // navigate("/login");
    },
  });
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
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.signup_container_name}>
          <div className={styles.signup_container_name_box}>
            
            <p>First name</p>
            <Input
            maininput={false}
            name="firstname"
            value={formik.first_name}
            onchange={formik.handleChange}
            onBlur={formik.onBlur}
            type="text"
              placeholder="Enter Name"
              // className={styles.signup_container_name_input}
            />
            <p className={styles.error}>{formik.errors.firstname}</p>
          </div>



          <div>
           <div>Last name</div>
            <Input
            maininput={false}
            name="lastname"
            value={formik.last_name}
            onchange={formik.handleChange}
            onBlur={formik.onBlur}
            type="text"
            placeholder="Enter Name"
              // className={styles.signup_container_name_input}
            />
            <p className={styles.error}>{formik.errors.lastname}</p>
          </div>
        </div>

        <p>Email</p>
        <Input
          maininput={false}
          name="email"
          value={formik.email_address}
          onchange={formik.handleChange}
          onBlur={formik.onBlur}
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
          {/* <faEye/> */}
          <img src={hide} alt="hideicon" className={styles.hideicon} />
          <p className={styles.error}>{formik.errors.password}</p>
        </div>

        <Button children="Sign Up" mainbutton={false} type="submit" loading={loading}  />
        <div className={styles.span}>
          <span>
            Already have an account?
            <Link to="/login" className={styles.span__login}>
              Login
            </Link>
          </span>
        </div>
      </form>
      {/* </Formik> */}
    </div>
  );
};

export default Signup;
