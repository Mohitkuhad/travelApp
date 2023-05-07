import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  liked: [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    liked: (state, action) => {
      state.liked.push(action.payload);
    },
    unliked: (state, action) => {
      state.liked = state.liked.filter((item) => item !== action.payload);
    },
  },
});

export default likeSlice.reducer;
export const { liked, unliked } = likeSlice.actions;
