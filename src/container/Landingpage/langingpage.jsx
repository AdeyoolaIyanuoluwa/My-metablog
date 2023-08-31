/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/button";
import styles from "./landingpage.module.css";
import avatar from "../../assets/image.png";
// import Card from "../../components/Card/card";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { allpost } from "../../features/post/addpostactions";
import { getPost } from "../../features/post/addpostslice";
import Card from "../../components/Card/card";
import Loader from "../../Loader/loader";

const Langingpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setpage] = useState(1);
  const date = moment().format("MMMM Do, YYYY");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const all = useSelector(getPost);
  const data = all.posts?.data?.data;
  // console.log(all.posts?.data?.data);
  const createpost = () => {
    navigate("/create");
  };

  useEffect(() => {
    dispatch(allpost({ page: page }));
  }, [dispatch, page]);

  return (
    <div>
      <div className={styles.background}>
        <div className={styles.background__card}>
          <Button
            children="CREATE POST"
            mainbutton={false}
            onclick={createpost}
          />
          <p className={styles.background__title}>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>
          <div className={styles.name}>
            <img src={avatar} alt="avatar" />
            <p>
              {`
            ${userInfo.user.first_name} ${userInfo.user.last_name} 
           `}
            </p>
            <p>{`${date}`}</p>
          </div>
        </div>
      </div>

      <div className={styles.blog}>
        <h1 className={styles.blog__h1}>Latest Posts</h1>

        <div className={styles.blog__cardcontainer}>
          {all.loading && <div><Loader/></div>}
          {!all.loading && all.error ? <div>Error: {all.error}</div> : null}
          {/* {console.log(all.posts)} */}
          {!all.loading && all.posts?.data?.data.length ? (
            <div className={styles.blog__card}>
              {data.map((post) => (
                <Card
                  key={post.id}
                  cover={post.cover}
                  title={post.title}
                  subtitle={post.subtitle}
                  content={post.post.substring(0, 155)}
                  authorsName={`
                  ${userInfo.user.first_name} ${userInfo.user.last_name} 
                 `}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Langingpage;
