/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-children-prop */
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../assets/Logo (1).png";
import Button from "../Button/button";
import { FaBars } from "react-icons/fa";
// import instance from "../../../services/axios";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn");

  const signin = () => {
    navigate("/login");
  };
  const logout = () => {
    localStorage.clear();
    navigate("/login");
    // location.reload()
  };
  const createpost = () => {
    navigate("/create");
  };
  return (
    <div>
      <nav>
          <label htmlFor={styles.check} className={styles.checkbtn}>
            <i><FaBars/></i>
          </label>
        <ul className={styles.navbar}>
          <li className={styles.navbar__logo}>
            <img className={styles.logo} src={logo} alt="" />
          </li>
              <input type="checkbox" id={styles.check}/>
          <div className={styles.navbar__link}>
            <Link className={styles.nav_link} to="/">
              Home
            </Link>
            <Link className={styles.nav_link} to="/landingpage">
              Blogs
            </Link>
            <Link className={styles.nav_link} to="/landingpage">
              Single Post
            </Link>
            <Link className={styles.nav_link} to="/landingpage">
              Pages
            </Link>
            {/* <Link className="nav-link" to="/landingpage">
              Contact
            </Link> */}
          
          {loggedIn ? (
            <>
              <button className={styles.createpostbtn} onClick={createpost}>CREATE POST</button>
              <Button children="LOG OUT" mainbutton={true} onclick={logout} />
            </>
          ) : (
            <>
              <Button children="SIGN IN" onclick={signin} mainbutton={true} />
              <button className={styles.createpostbtn} onClick={createpost}>CREATE POST</button>
            </>
          )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
