import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCarDetails } from "./operations";

const initialState = {
  cars: [],
  carDetails: {},
  isLoading: false,
  isError: false,
};
const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
};

const carsSlice = createSlice({
  name: "cars",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
        state.isError = false;
      })
      .addCase(fetchAllCars.rejected, handleRejected)
      .addCase(fetchCarDetails.pending, handlePending)
      .addCase(fetchCarDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carDetails = action.payload;
        state.isError = false;
      })
      .addCase(fetchCarDetails.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
