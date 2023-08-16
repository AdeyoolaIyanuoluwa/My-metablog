/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";


const Navlink = ({  title }) => {
  return (
    <div>
    
          {/* <Link className={styles.navbar__logo}>
            <img className="image" src={image} alt="" />
          </Link> */}
          <div className={styles.navbar__link}>
            <Link className="nav-link">{title}</Link>
            {/* <Link className="nav-link">{title}</Link>
            <Link className="nav-link">{title}</Link>
            <Link className="nav-link">{title}</Link> */}
            {/* <Link className="nav-link">Blog</Link>
            <Link className="nav-link">Single Post</Link>
            <Link className="nav-link">Pages</Link>
            <Link className="nav-link">Contact</Link> */}
          </div>
          <div className={styles.navbar__button}>
            <button>Create</button>
            <button>on/off</button>
          </div>
     
    </div>
  );
};

export default Navlink;
