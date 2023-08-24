import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../services/axios";
import { failed, successful } from "../../authentication/Toast/toastify";

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