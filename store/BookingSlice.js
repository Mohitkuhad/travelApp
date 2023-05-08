import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    booked: (state, action) => {
      state.bookings.push(action.payload);
    },
    canceled: (state, action) => {
      state.bookings = state.bookings.filter((item) => item !== action.payload);
    },
  },
});

export default bookingSlice.reducer;
export const { booked, canceled } = bookingSlice.actions;
