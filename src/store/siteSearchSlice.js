import { createSlice } from "@reduxjs/toolkit";
import { getValidNameCharacter } from "@/utils/utils";

const siteSearchSlice = createSlice({
  name: 'siteSearch',
  initialState: {
    searchValue: null
  },
  reducers: {
    getInputSearch(state, action) {
      state.searchValue = getValidNameCharacter(action.payload).toLowerCase()
    }
  }
})

export const { getInputSearch } = siteSearchSlice.actions;
export default siteSearchSlice.reducer;