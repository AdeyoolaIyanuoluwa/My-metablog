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
            <Link className="nav-link" to="/landingpage">
              Single Post
            </Link>
            <Link className="nav-link" to="/landingpage">
              Pages
            </Link>
            {/* <Link className="nav-link" to="/landingpage">
              Contact
            </Link> */}
          </div>
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
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
