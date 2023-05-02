import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: []
  },
  reducers: {
    toggleFavoriteAction(state, action) {
      if (state.favorites.some(favorite => favorite.movieId === action.payload)) {
        state.favorites = state.favorites.filter(favorite => favorite.movieId !== action.payload)
      }
      else {
        state.favorites.push({
          movieId: action.payload
        })
      }
    }
  }
})

export const { toggleFavoriteAction } = favoriteSlice.actions;
export default favoriteSlice.reducer;