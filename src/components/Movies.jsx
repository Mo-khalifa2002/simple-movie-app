import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllMovies, selectAllShows } from "../features/MovieReducers";
import Hero from "./Hero";
import MovieCard from "./MovieCard";

const Movies = () => {
  const movies = useSelector(selectAllMovies);
  const shows = useSelector(selectAllShows);
  console.log(movies);

  let renderMovies = "";
  let renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>error</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>there is an error</h3>
      </div>
    );
  return (
    <div className="movie-wrapper container">
      <div className="movie-list">
        {/* <h2><Hero /></h2> */}
        <h2 className="text-center mb-5">Movies</h2>
        <div className="row">
          <div className="movie-container">{renderMovies}</div>
        </div>
      </div>

      <div className="show-list">
        <h2 className="text-center mb-5">Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default Movies;
