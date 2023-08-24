import { createSlice } from "@reduxjs/toolkit"
import { addpost } from "./addpostactions"


const initialState = {
    posts:[]
};

const addpostslice = createSlice({
    name: 'post',
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
    }
});

export default addpostslice.reducer;
