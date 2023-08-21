import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userinfo,
  userToken,
  error: null,
  success: false,
};

const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {}
})