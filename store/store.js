import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./LikeSlice";
import bookReducer from "./BookingSlice";
import userReducer from './UserSlice';

const store = configureStore({
    reducer: {
        like: likeReducer,
        book: bookReducer,
        user: userReducer,
    }
})

export default store