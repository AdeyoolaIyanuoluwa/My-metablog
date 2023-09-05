/* eslint-disable react/no-children-prop */
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../assets/Logo (1).png";
import Button from "../Button/button";
// import instance from "../../../services/axios";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn");
  // const token = localStorage.getItem("userToken")
 

  const signin = () => {
    navigate("/login");
    // location.reload()
  };
  const logout =()=>{
        localStorage.clear()
        // delete instance.defaults.headers.common['Authorization']
        navigate("/login")
        location.reload()
  }
  return (
    <div>
      <nav>
        <ul className={styles.navbar}>
          <li className={styles.navbar__logo}>
            <img className="image" src={logo} alt="" />
          </li>
          <div className={styles.navbar__link}>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/landingpage">
              Blogs
            </Link>
            <Link className="nav-link">Single Post</Link>
            <Link className="nav-link">Pages</Link>
            <Link className="nav-link">Contact</Link>
          </div>
          {loggedIn ? ( 
            <Button children="LOG OUT" mainbutton={true} onclick={logout}/>
          ) : (
            <div className={styles.navbar__button}>
              <Button children="SIGN IN" onclick={signin} mainbutton={true} />
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
