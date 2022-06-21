import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadUsers = createAsyncThunk(
  "users/load",
  async (arg, thunkAPI) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: {
    [loadUsers.fulfilled]: (state, payload) => {
      console.log(payload);
    },
  },
});

export default usersSlice.reducer;
