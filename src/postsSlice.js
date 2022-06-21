import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loadUsers } from "./usersSlice";

export const loadPosts = createAsyncThunk(
  "users/load",
  async (arg, thunkAPI) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: {
    [loadPosts.fulfilled]: (state, action) => {
      console.log(action);
      state.posts = action.payload; 
    },
  },
});

export default postsSlice.reducer;
