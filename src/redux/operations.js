import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL =
  "https://65d64b7ef6967ba8e3bde0b7.mockapi.io/api/advert/";

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/cars?&page=1&limit=12");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchMoreCars = createAsyncThunk(
  "cars/fetchMore",
  async (page, thunkAPI) => {
    try {
      const resp = await axios.get(`/cars?&page=${page}&limit=12`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarDetails = createAsyncThunk(
  "cars/carDetails",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.get(`/cars/${id}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
