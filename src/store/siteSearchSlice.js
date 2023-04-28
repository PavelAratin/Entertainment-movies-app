import { createSlice } from "@reduxjs/toolkit";

const siteSearchSlice = createSlice({
  name: 'siteSearh',
  initialState: {
    searchValue: null
  },
  reducers: {
    getInputSearch(state, action) {
      // console.log('state', state);
      // console.log('action', action);
      state.searchValue = action.payload.toLowerCase()
    }
  }
})

export const { getInputSearch } = siteSearchSlice.actions;
export default siteSearchSlice.reducer;