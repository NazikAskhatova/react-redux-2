import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import postsSlice from "./postsSlice";
import todosSlice from "./todosSlice";

const store = configureStore({
    reducer: {
        users: usersSlice,
        posts: postsSlice,
        todos: todosSlice
    }
});

export default store;