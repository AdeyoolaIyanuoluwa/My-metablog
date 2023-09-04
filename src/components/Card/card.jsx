/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Button from "../Button/button";
import styles from "./card.module.css";
import avatar from "../../assets/image.png";
const Card = ({ title, subtitle, content, cover, onClick , authorsName,datecreated}) => {

  return (
    <div onClick={onClick}>
      <div className={styles.cardcontainer}>
        <div className={styles.imagecontainer}>
          <img className={styles.image} src={cover} alt="blog image" />
        </div>

        <div className={styles.cardcontainer__title}>
          <div className={styles.button}>
            <Button children={subtitle} mainbutton={true} />
          </div>
          <div>
            <p className={styles.title}>{title}</p>

            <p>{content}</p>
          </div>
        </div>
        <div className={styles.name}>
        <img src={avatar} alt="avatar" />
          <p>{authorsName}</p>
          <p>{datecreated}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
