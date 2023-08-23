/* eslint-disable react/no-children-prop */
import { useEffect } from "react";
import Input from "../../components/Input/input";
import styles from "./login.module.css";
import hide from "../../assets/Hide.png";
import Button from "../../components/Button/button";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/Register/validationactions";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "./loginSchema";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.validation);

  useEffect(() => {
    if (userInfo?.data?.token) {
      navigate("/");
    }
  }, [navigate, userInfo?.data?.token]);

  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    loginSchema,
    onSubmit: (value) => {
      dispatch(
        userLogin({
          email_address: value.email,
          password: value.password,
        })
      );
    },
  });
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

      <form onSubmit={formik.handleSubmit}>
        <p>Email</p>
        <Input
          maininput={false}
          name="email"
          value={formik.email_address}
          onchange={formik.handleChange}
          type="email"
          placeholder="Enter Email"
        />

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
        </div>

        <Button children="Login" mainbutton={false} />
      </form>
      <div className={styles.span}>
        <span>Don’t have an account? Sign Up|Reset Password</span>
      </div>
    </div>
  );
};

export default Login;
