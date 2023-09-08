import { createSlice } from "@reduxjs/toolkit"
import { addpost, allpost, deletePost, getLatestPost, readPost } from "./addpostactions"


const initialState = {
  posts: [],
  loading: false,
  success: false,
  error: null
};

const addpostslice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addpost.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(addpost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
        state.success = true;3
      }),
      builder.addCase(addpost.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });


    // allpost
    builder.addCase(allpost.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(allpost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
        state.success = true;
      });
    builder.addCase(allpost.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    //viewpost
    builder.addCase(readPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(readPost.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
      state.error = null;
    });
    builder.addCase(readPost.rejected, (state, {payload})=>{
      state.loading = false;
      state.error = payload;

    })

    // getLatest POST
    builder.addCase(getLatestPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
    builder.addCase(getLatestPost.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
      state.latestPost = payload;
      state.success = true;
    }),
    builder.addCase(getLatestPost.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });


    //deletepost
    builder.addCase(deletePost.pending, (state)=>{
      state.loading= true;
      state.error = null
    })
    builder.addCase(deletePost.fulfilled, (state, {payload})=>{
      state.loading= true;
      state.posts = payload
      state.success = true
    })
    builder.addCase(deletePost.rejected, (state, {payload})=>{
      state.loading= false;
      state.error = payload
    })
  }
});




export const getPost = (state) => state.posts;
export default addpostslice.reducer;
