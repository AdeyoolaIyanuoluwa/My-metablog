/* eslint-disable react/no-children-prop */
// import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/button";
import styles from "./landingpage.module.css";
import avatar from "../../assets/image.png"
import Card from "../../components/Card/card";
const Langingpage = () => {
  const navigate = useNavigate()
  // const [month, year] = "01/2022".split("/");
  // const date = new Date(parseInt(year), parseInt(month) - 1)
  const data = JSON.parse(localStorage.getItem('userInfo'))
  const createpost = ()=>{
    navigate("/create")
  }
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.background__card}>
          <Button children="CREATE POST" mainbutton={false}onclick={createpost} />
          <p className={styles.background__title}>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>
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
      <div className={styles.blog}>
        <h1 className={styles.blog__h1}>Latest Posts</h1>
        <div>
            <Card/>
        </div>
      </div>
    </div>
  );
};

export default Langingpage;
