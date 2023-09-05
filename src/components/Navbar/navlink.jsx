/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navlink = ({ display, title }) => {
  return (
    <div>
      {/* <Link className={styles.navbar__logo}>
            <img className="image" src={image} alt="" />
          </Link> */}

      {display && (
        <div className={styles.navbar__link}>
          <Link className={styles.nav_links}>{title}</Link>
        </div>
      )}

      {!display && (
        <div className={styles.navbar__link}>
          <Link className={styles.nav_links}>{title}</Link>
        </div>
      )}


      <div className={styles.navbar__button}>
        <button>Create</button>
        <button>on/off</button>
      </div>
    </div>
  );
};

export default Navlink;
