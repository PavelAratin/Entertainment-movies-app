import { configureStore } from "@reduxjs/toolkit";
import siteSearchReducer from './siteSearchSlice';
import favoriteSlice from "./favoriteSlice";
import loginOrAuthSlice from "./loginOrAuthSlice";

export default configureStore({
  reducer: {
    siteSearch: siteSearchReducer,
    favoriteMovie: favoriteSlice,
    loginOrauth: loginOrAuthSlice
  }
})