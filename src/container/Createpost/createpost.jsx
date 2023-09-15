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
import { getPost } from "../../features/post/addpostslice";
// import { Editor, convertToRaw } from "draft-js";
// import { EditorState } from "draft-js";
// import { convertFromRaw } from "draft-js";

const Createpost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, posts } = useSelector(getPost);
  const [image, setimage] = useState({ preview: "",raw: "" });
  // const [editorState, setEditorState] = useState(() =>{
  //   if (localStorage.getItem('editor-state')) {
  //     return EditorState.createWithContent(
  //       convertFromRaw(JSON.parse(localStorage.getItem('editor-state')))
  //     );
  //   }
  //   return EditorState.createEmpty();
  // })


  useEffect(() => {
    if(posts?.status === "Successful"){
        navigate("/landingpage")
    }
  }, [navigate, posts?.status])
  
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

  // const onEditorStateChange = (value) => {
  //   setEditorState(value);
  //   localStorage.setItem(
  //     'editor-state',
  //     JSON.stringify(convertToRaw(editorState.getCurrentContent()))
  //   );
  // };
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
          // post: JSON.stringify(convertToRaw(editorState.getCurrentContent()))
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
          {/* <Editor editorState={editorState} onEditorStateChange={onEditorStateChange}/> */}
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
