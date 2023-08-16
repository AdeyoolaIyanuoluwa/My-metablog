/* eslint-disable react/no-children-prop */
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../assets/Logo (1).png";
import Button from "../Button/button";

const Navbar = () => {
  const navigate = useNavigate()
  const signup=()=>{
    navigate("/Signup")
  }
  return (
    <div>
      <nav>
        <ul className={styles.navbar}>
          <li className={styles.navbar__logo}>
            <img className="image" src={logo} alt="" />
          </li>
          <div className={styles.navbar__link}>
            <Link className="nav-link" to="/products">
              Home
            </Link>
            <Link className="nav-link">Blog</Link>
            <Link className="nav-link">Single Post</Link>
            <Link className="nav-link">Pages</Link>
            <Link className="nav-link">Contact</Link>
          </div>
          <div className={styles.navbar__button}>
             <Button children= "SIGN UP" onclick={signup} mainbutton={true}/>
              {/* <button>on/off</button> */}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
