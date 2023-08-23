/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userSignup } from "./validationactions";

const userToken = localStorage.getItem('userToken')
const userInfo = localStorage.getItem(('userInfo'))

const initialState = {
  loading: false,
  userInfo,
  userToken,
  error: null,
  success: false,
};

const validSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userSignup.pending, (state) => {
      state.loading = true;
      state.error = null;
    
    }),
    builder.addCase(userSignup.fulfilled, (state, {payload})=>{
      state.loading = false,
      state.userInfo = payload,
      state.success = true
    })
      builder.addCase(userSignup.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),

      // Login
      builder.addCase(userLogin.pending, (state)=>{
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(userLogin.fulfilled, (state, {payload})=>{
        state.loading = false,
        state.success = true,
        state.userInfo = payload,
        state.userToken = payload.token
      }),
      builder.addCase(userLogin.rejected,(state, {payload})=>{
        state.loading = false;
        state.error = payload;
      })
  }
});

export default validSlice.reducer;
