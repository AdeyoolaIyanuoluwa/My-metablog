/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/button";
import styles from "./landingpage.module.css";
import avatar from "../../assets/image.png";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import {
  allpost,
  getLatestPost,
  readPost,
} from "../../features/post/addpostactions";
import { getPost } from "../../features/post/addpostslice";
import Card from "../../components/Card/card";
import Loader from "../../Loader/loader";
import ReactPaginate from "react-paginate";
import useSecondRunEffect from "../../hooks/useSecondrun";

const Langingpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const date = moment().format("MMMM Do, YYYY");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const all = useSelector(getPost);

  const queries = {
    page,
    perPage: 2,
  };
  // console.log(all);
  const data = all.posts?.data?.data;
  const [search, setSearch] = useState("");
  const [authorsName, setAuthorsName] = useState(true);
  const [paginate, setPaginate] = useState(true);

  // useEffect(() => {
  //   dispatch(allpost({ page: page }));
  // }, [dispatch, page]);
  useEffect(() => {
    dispatch(getLatestPost());
  }, [dispatch]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  useSecondRunEffect(() => {
    console.log("here");
    dispatch(allpost(queries));
  }, [page]);

  return (
    <div>
      <div className={styles.background}>
        <div className={styles.background__card}>
          <Button children="Technology" mainbutton={true} />
          <p className={styles.background__title}>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>
          <div className={styles.name}>
            <img src={avatar} alt="avatar" />
            <p>
              {`
            ${userInfo?.user.first_name} ${userInfo?.user.last_name} 
           `}
            </p>
            <p>{`${date}`}</p>
          </div>
        </div>
      </div>

      <div className={styles.blog}>
        <div className={styles.blog__posts}>
          <h1
            className={styles.blog__h1}
            onClick={() => {
              dispatch(getLatestPost());
              setAuthorsName(true);
              setPaginate(false);
            }}
          >
            Latest Posts
          </h1>
          <h1
            className={styles.blog__h1}
            onClick={() => {
              dispatch(allpost({ ...queries, page: 1 }));
              setAuthorsName(false);
              setPaginate(true);
            }}
          >
            All Posts
          </h1>
        </div>
        <form>
          <input
            type="text"
            placeholder="search post...."
            className={styles.blog__searchinput}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <div className={styles.blog__cardcontainer}>
          {all.loading && (
            <div>
              <Loader />
            </div>
          )}
          {!all.loading && all.error ? <div>Error: {all.error}</div> : null}
          {data && data?.length === 0 && (
            <div>
              <h1>No Post Available</h1>
            </div>
          )}
          {!all.loading && data && data?.length ? (
            <div className={styles.blog__card}>
              {data
                .filter((post) => {
                  return search === ""
                    ? post
                    : post.title.toLowerCase().includes(search);
                })
                .map((post) => (
                  <Card
                    key={post.id}
                    cover={post.cover}
                    title={post.title}
                    subtitle={post.subtitle}
                    content={post.post.substring(0, 155) + "....."}
                    authorsName={
                      authorsName
                        ? `
                    ${post.first_name} ${post.last_name}
                   `
                        : ""
                    }
                    datecreated={
                      authorsName ? `${post.to_char?.substring(0, 13)} ` : ""
                    }
                    onClick={() => {
                      dispatch(readPost(post.id));
                      navigate(`/viewpost/${post.id}`);
                    }}
                    avat={
                      authorsName
                        ? `
                            ${post.first_name
                              ?.substring(0, 1)
                              .toUpperCase()}${post.last_name
                            ?.substring(0, 1)
                            .toUpperCase()}
                 `
                        : ""
                    }
                  />
                ))}
            </div>
          ) : null}
        </div>
        {paginate ? (
          <ReactPaginate pageCount={10} onPageChange={handlePageClick} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Langingpage;
