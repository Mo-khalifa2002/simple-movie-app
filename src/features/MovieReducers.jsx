import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const response = await axios.get(`?apiKey=6453f1bc&s=friends&type=series`);
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=6453f1bc&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    addShows: (state, { payload }) => {
      state.shows = payload;
    },
  },
  // extraReducers: {
  //   [fetchAsyncShows.pending]: () => {
  //     console.log("Pending");
  //   },
  //   [fetchAsyncShows.rejected]: () => {
  //     console.log("Rejected!");
  //   },
  //   [fetchAsyncShows.fulfilled]: (state, { payload }) => {
  //     console.log("Fetched Successfully!");
  //     return { ...state, shows: payload };
  //   },
  [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
    console.log("Fetched Successfully!");
    return { ...state, selectMovieOrShow: payload };
  },
  // },
});

// Action creators are generated for each case reducer function
export const { addMovies } = movieSlice.actions;

export const selectAllMovies = (state) => state.movies.movies;
export const selectAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export const { removeSelectedMovieOrShow } = movieSlice.actions;

export default movieSlice.reducer;
