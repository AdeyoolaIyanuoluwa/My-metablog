import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../services/axios";
import { failed, successful } from "../../authentication/Toast/toastify";

export const userSignup = createAsyncThunk(
  "validation/signup",
  async ({ first_name, last_name, email_address, password }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("users/signup", {
        first_name,
        last_name,
        email_address,
        password,
      });
      successful(`${data.message}`);
      return data;
    } catch (error) {
      failed(error.response?.data?.message);
      return rejectWithValue(error.response.data);
    }
  }
);
export const userLogin = createAsyncThunk(
  "validation/login",
  async ({email_address,password}, {rejectWithValue})=>{
    try{
      const {data} = await instance.post("users/login", {email_address,password});
      // if(res.data.token){
      //   localStorage.setItem('userInfo',res.data.token)
      // }
      localStorage.setItem('userInfo', JSON.stringify(data?.data));
      localStorage.setItem('userToken', data?.data?.token);
      instance.defaults.headers.common['Authorization'] = `Bearer ${data?.data?.token}`; 
      successful(`${data.message}`);
      return data
    } catch (error){
      failed(error.response?.data?.message);
      return rejectWithValue(error.response.data)
    }
  }
);