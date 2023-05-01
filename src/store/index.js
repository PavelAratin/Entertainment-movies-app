import { configureStore } from "@reduxjs/toolkit";
import siteSearchReducer from './siteSearchSlice';
import favoriteSlice from "./favoriteSlice";

export default configureStore({
  reducer: {
    siteSearch: siteSearchReducer,
    favoriteMovie: favoriteSlice,
  }
})