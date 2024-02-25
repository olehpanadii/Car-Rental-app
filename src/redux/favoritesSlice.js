import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  favoritesCars: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favoritesCars = [...state.favoritesCars, action.payload];
    },
    deleteFromFavorites(state, action) {
      state.favoritesCars = state.favoritesCars.filter(
        car => car.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
};
export const favoritesReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;
