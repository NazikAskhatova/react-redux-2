import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import postsSlice from "./postsSlice";

const store = configureStore({
    reducer: {
        users: usersSlice,
        posts: postsSlice
    }
});

export default store;