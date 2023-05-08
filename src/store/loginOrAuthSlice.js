import { createSlice } from "@reduxjs/toolkit";

const loginOrAuthSlice = createSlice({
  name: 'loginOrAuth',
  initialState: {
    loginOrAuth: []
  },
  reducers: {
    getLoginOrAuthAction(state, action) {
      console.log(state);
      console.log(action);
    }
  }
})

export const { getLoginOrAuthAction } = loginOrAuthSlice.actions;
export default loginOrAuthSlice.reducer;