import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favorites: [] },
  reducers: {
    changeFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    addFavorite: (state, action) => {
      const movie = action.payload;
      if (!state.favorites.some(fav => fav.id === movie.id)) {
        state.favorites.push(movie);
      }
    },
    removeFavorite: (state, action) => {
      const idToRemove = action.payload;
      state.favorites = state.favorites.filter(fav => fav.id !== idToRemove);
    }
  }
});

export const { changeFavorites, addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
