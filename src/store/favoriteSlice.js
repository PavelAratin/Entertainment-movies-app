import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: []
  },
  reducers: {
    addFavoriteAction(state, action) {
      console.log('state',state);
      console.log('action',action);
    }
  }
})

export const { addFavoriteAction } = favoriteSlice.actions;
export default favoriteSlice.reducer;