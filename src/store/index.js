import { configureStore } from "@reduxjs/toolkit";
import siteSearchReducer from './siteSearchSlice';

export default configureStore({
  reducer: {
    siteSearch: siteSearchReducer
  }
})