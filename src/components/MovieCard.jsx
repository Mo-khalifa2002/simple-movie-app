import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div>
      <div className="movie-card text-decoration-none list-unstyled">
        <Link to={`movie/:${data.imdbID}`}>
          <img src={data.Poster} className="card-img-top" alt={data.title} />
          <div className="card-body">
            <h5 className="card-title mb-4">{data.Title}</h5>
            <a className="btn">{data.Year}</a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
