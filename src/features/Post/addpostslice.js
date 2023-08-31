import { createSlice } from "@reduxjs/toolkit"
import { addpost, allpost } from "./addpostactions"


const initialState = {
    posts: [],
    loading: false,
    success: false,
    error: null
};

const addpostslice = createSlice({
    name: 'posts',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
            builder.addCase(addpost.pending, (state) => {
                state.loading = true;
                state.error = null;
            }),
            builder.addCase(addpost.fulfilled, (state, {payload})=>{
                state.loading = false;
                state.posts = payload;
                state.success = true;
            }),
            builder.addCase(addpost.rejected, (state, {payload})=>{
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
    }
});

export const getPost = (state) => state.posts;
export default addpostslice.reducer;
