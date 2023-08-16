/* eslint-disable react/prop-types */
// import React from 'react'
import styles from "./input.module.css";
const Input = ({ onchange, value, type, placeholder, name,useref,maininput }) => {
  return (
    <div>
      <input
        className={maininput ?styles.inputs:styles.secondinput}
        onChange={onchange}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        ref={useref}
        required
      />
    </div>
  );
};

export default Input;
