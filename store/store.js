import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./LikeSlice";

const store = configureStore({
    reducer: {
        like: likeReducer
    }
})

export default store