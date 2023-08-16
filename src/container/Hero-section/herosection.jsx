/* eslint-disable react/no-children-prop */
// import React from 'react'
import Button from "../../components/Button/button";
import styles from "./herosection.module.css";

const Herosection = () => {
  return (
    <div className={styles.background}>
      <div className={styles.background__card}>
        <Button children="Technology"/>
        <p className={styles.background__title}>The Impact of Technology on the Workplace: How Technology is Changing</p>
      </div>
    </div>
  );
};

export default Herosection;
