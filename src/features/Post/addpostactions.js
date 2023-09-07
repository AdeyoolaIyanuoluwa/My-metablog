import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../services/axios";
import { failed, successful } from "../../authentication/Toast/toastify";
import queryFormatter from "../../utilities/queryformmatter";

export const addpost = createAsyncThunk(
  "post/added",
  async ({ cover, title, subtitle, post }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("blogs/add_post", {
        cover,
        title,
        subtitle,
        post,
      });
      successful(`${data.message}`);
      return data;
    } catch (error) {
      failed(`${error.response?.data?.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);

// export const allpost = createAsyncThunk("post/allpost", async () => {
//   return instance
//     .get("blog/all_post")
//     .then((response) => response.data)
// })
// export const allpost = createAsyncThunk("post/allpost", async () => {
//   return axios
//     .get("https://peach-blog.onrender.com/api/v1/blogs/all_posts")
//     .then((response) => response.data)
// })

export const allpost = createAsyncThunk("post/allpost", async ( params ) => {
  console.log(params)
  try {
    const data = await instance.get(`blogs/all_posts?${queryFormatter(params)}`)
    return data
  } catch (error) {
    return (error.response.data)
  }

})
export const getLatestPost = createAsyncThunk("post/latestPost", async () => {
  try {
    const data = await instance.get('/blogs/latest_posts')
    return data
  } catch (error) {
    return (error.response.data)
  }

})

export const readPost = createAsyncThunk('post/viewPost', async ({ postId }) => {
  try {
    const data = await instance.get(`blogs/view_post/${postId}`);
    return data
  } catch (error) {
    failed(`${error.response?.data?.message}`);
    return (error.response.data)
  }
})