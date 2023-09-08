/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import styles from "./viewPost.module.css";
import Button from "../../components/Button/button";
import avatar from "../../assets/image.png";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { readPost } from "../../features/post/addpostactions";
import { useParams } from "react-router-dom";
import { getPost } from "../../features/post/addpostslice";
import Loader from "../../Loader/loader";

const PostComponent = ({ subtitle, title, authorsName, date, cover, post }) => {
  return (
    <div>
      <div className={styles.button}>
        <Button children={subtitle} mainbutton={true} />
        {/* <Button children={subtitle} mainbutton={true} /> */}

      </div>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.name}>
        <img src={avatar} alt="avatar" />
        <p>{authorsName}</p>
        <p>{date}</p>
      </div>

      <div className={styles.image}>
        <img className={styles.image} src={cover} />
      </div>

      <div className={styles.post}>
        <p>{post}</p>
      </div>
    </div>
  );
};

const ViewPost = () => {
  const date = moment().format("MMMM Do, YYYY");
  const dispatch = useDispatch();
  const postParams = useParams();
  const postId = postParams.postId;
  const posts = useSelector(getPost);
  console.log(posts?.posts?.data?.data?.posts);
  const data = posts?.posts?.data?.data?.posts;

  useEffect(() => {
    dispatch(readPost({ postId }));
  }, [dispatch, postId]);

  return (
    <div className={styles.maincontainer}>
      {posts.loading && (
        <div>
          <Loader />
        </div>
      )}
      {!posts.loading && posts.error ? <div>Error: {posts.error}</div> : null}
      {data?.map((post) => (
        <>
          <PostComponent
            subtitle={post.subtitle}
            title={post.title}
            cover={post.cover}
            authorsName={`${post.first_name} ${post.last_name}`}
            post={post.post}
            date={post.to_char}
          />
        </>
      ))}

      {/* <div className={styles.button}>
       <Button children={data && data[0]?.subtitle} mainbutton={true}/>
       </div>
       <div className={styles.title}>
            <p>{data && data[0]?.title}</p>
       </div>
       <div className={styles.name}>
            <img src={avatar} alt="avatar" />
           <p>
           {data && data[0].first_name} {data && data[0].last_name} 
           </p>
           <p>{data && data[0]?.to_char}</p>
           </div>

           <div className={styles.image}>
            <img className={styles.image} src={data && data[0]?.cover}/>
           </div>

           <div className={styles.post}>
                <p>{data && data[0]?.post}</p>
           </div> */}
    </div>
  );
};

export default ViewPost;
