/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
// import React from 'react'
import Button from "../Button/button";
import styles from "./card.module.css";
import avatar from "../../assets/image.png"
const Card = ({ title, subtitle, cover }) => {
    const data = JSON.parse(localStorage.getItem('userInfo'))
  return (
    <div>
      <div className={styles.cardcontainer}>
        <div className={styles.imagecontainer}>
          <img className={styles.image} src={cover} alt="blog image" />
        </div>

        <div className={styles.cardcontainer__title}>
          <Button children="Technology" mainbutton={true} />
          <div>
            <p className={styles.title}>{title}</p>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className={styles.name}>
            <img src={avatar} alt="avatar" />
           <p>
           {`
            ${data.user.first_name} ${data.user.last_name} 
           `}
           </p>
           {/* <p>{`${date}`}</p> */}
           </div>
      </div>
    </div>
  );
};

export default Card;
