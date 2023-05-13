import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./LikeSlice";
import userReducer from './UserSlice';

const store = configureStore({
    reducer: {
        like: likeReducer,
        user: userReducer,
    }
})

export default store