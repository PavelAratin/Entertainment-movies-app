import { createSlice } from "@reduxjs/toolkit";

const siteSearchSlice = createSlice({
  name: 'siteSearch',
  initialState: {
    searchValue: null
  },
  reducers: {
    getInputSearch(state, action) {
      state.searchValue = action.payload.toLowerCase()
    }
  }
})

export const { getInputSearch } = siteSearchSlice.actions;
export default siteSearchSlice.reducer;