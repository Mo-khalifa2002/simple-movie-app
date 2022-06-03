import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./MovieReducers";

export const store = configureStore({
  reducer: {
    movies: MovieReducer,
  },
});
