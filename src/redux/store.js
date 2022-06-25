import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./features/postSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export default store;
