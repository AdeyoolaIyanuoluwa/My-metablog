// import React from 'react'
import styles from "./button.module.css";
import Loader from "../../assets/loading.svg";

// eslint-disable-next-line react/prop-types
const Button = ({ children, onclick, mainbutton, type, loading, disabled }) => {
  return (
    <div>
      <button
        className={mainbutton ? styles.mainbutton : styles.subbutton}
        onClick={onclick}
        type={type}
        disabled={disabled}
      >
        {!loading ? (
          children
        ) : (
          <img src={Loader} alt="" className={styles.spinner} />
        )}
      </button>
    </div>
  );
};

export default Button;
