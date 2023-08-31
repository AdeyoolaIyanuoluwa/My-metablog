/* eslint-disable react/no-children-prop */
// import React from 'react'
import styles from "./createpost.module.css";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { createpostSchema } from "./createpostSchema";
import { addpost } from "../../features/post/addpostactions";
import {  useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Createpost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, userInfo } = useSelector((state) => state.posts);
  const [image, setimage] = useState({ preview: "",raw: "" });


  useEffect(() => {
    if(userInfo?.status === "successful"){
        navigate("/landingpage")
    }
  }, [navigate, userInfo?.status])
  
  const handleimage = (e) => {
    if (e.target.files.length) {
      console.log(e.target.files);
      setimage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
      localStorage.setItem(
        "imagepreview",
        JSON.stringify({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        })
      );
    }
  };
  const initialValues = {
    title: "",
    subtitle: "",
    post: "",
    cover: ""
  };
  const formik = useFormik({
    initialValues,
    createpostSchema,
    onSubmit: (value) => {
      dispatch(
        addpost({
          title: value.title,
          subtitle: value.subtitle,
          cover: image.raw,
          post: value.post,
        })
      );
    },
  });
  return (
    <div className={styles.body}>
      <div className={styles.input_box}>
        <h1 className={styles.input_box_heading}>CREATE POST</h1>

        <form onSubmit={formik.handleSubmit}>
          <Input
            type="name"
            placeholder="ADD TITLE "
            maininput={false}
            onchange={formik.handleChange}
            name="title"
          />
          <Input
            type="name"
            placeholder="ADD SUBTITLE "
            maininput={false}
            onchange={formik.handleChange}
            name="subtitle"
          />
          <textarea
            className={styles.input_box__textarea}
            placeholder="ADD POST"
            onChange={formik.handleChange}
            name="post"
          ></textarea>

          <Input
            type="file"
            placeholder="image"
            name="cover"
            // useref={cover}
            maininput={true}
            onchange={handleimage}
          />
          <div className={styles.image_container}>
            <img className={styles.image} src={image.preview} />
          </div>
          <Button children="CREATE" type="submit" loading={loading}/>
        </form>
      </div>
    </div>
  );
};

export default Createpost;
