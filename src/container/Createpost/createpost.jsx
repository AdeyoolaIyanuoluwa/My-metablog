/* eslint-disable react/no-children-prop */
// import React from 'react'
import styles from "./createpost.module.css";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";-
// import { useDispatch } from "react-redux";
import { useFormik } from "formik";

const  Createpost= () => {
  // const dispatch = useDispatch()  
  const formik = useFormik({

  })
  return (
    <div className={styles.body}>
      <div className={styles.input_box}>
        <h1 className={styles.input_box_heading}>CREATE POST</h1>

       <form onSubmit={handleSubmit}>
       <Input
          type="name"
          placeholder="ADD TITLE "
          maininput={false}
          onchange={handleonchange}
        />
        <Input
          type="name"
          placeholder="ADD SUBTITLE "
          maininput={false}
          onchange={handleonchange}
        />
        {/* <Input type="name" placeholder="Add Post" className={styles.post} /> */}
        <textarea
          className={styles.input_box__textarea}
          placeholder="ADD POST"
        ></textarea>
        <Input
          type="file"
          placeholder="image"
          name="cover"
          useref={cover}
          maininput={true}
        />
        <Button children="CREATE" onclick={create} type="submit"/>
       </form>
      </div>
    </div>
  );
};

export default Createpost;
