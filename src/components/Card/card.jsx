/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
// import React from 'react'
import Button from "../Button/button";
import styles from "./card.module.css";
import avatar from "../../assets/image.png"
import moment from "moment";
const Card = ({ title, subtitle,content,cover,authorsName }) => {
    // const data = JSON.parse(localStorage.getItem('userInfo'))
    const date = moment().format('MMMM Do, YYYY')
  return (
    <div>
      <div className={styles.cardcontainer}>
        <div className={styles.imagecontainer}>
          <img className={styles.image} src={cover} alt="blog image" />
        </div>

        <div className={styles.cardcontainer__title}>
          <div className={styles.button}>
          <Button children={subtitle}mainbutton={true}/>
          </div>
          <div>
            <p className={styles.title}>{title}</p>
    
            <p>{content}</p>
          </div>
        </div>
        <div className={styles.name}>
            <img src={avatar} alt="avatar" />
           <p>{authorsName}
           {/* {`
            ${data.user.first_name} ${data.user.last_name} 
           `} */}
           </p>
           <p>{`${date}`}</p>
           </div>
      </div>
    </div>
  );
};

export default Card;
