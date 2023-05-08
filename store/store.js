import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./LikeSlice";
import bookReducer from "./BookingSlice";

const store = configureStore({
    reducer: {
        like: likeReducer,
        book: bookReducer
    }
})

export default store