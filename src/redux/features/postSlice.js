import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//https://jsonplaceholder.typicode.com/posts

export const getPosts = createAsyncThunk("post/getUsers", async (url) => {
  const response = await axios.get(url);
  return response.data;
});

const initialState = {
  loading: false,
  posts: [],
  error: "",
};
const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.error = "";
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getPosts.rejected, (state, action) => {
        console.log(action);
        state.error = action.error?.message;
        state.posts = [];
        state.loading = false;
      });
  },
});

export const postReducer = postSlice.reducer;
export const postActios = postSlice.actions;
