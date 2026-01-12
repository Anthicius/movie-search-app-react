import React from "react";

const MovieCard = ({ movieData }) => {
  return (
    <div className="movie">
      <img src={movieData.Poster} alt="Movie Poster Image" />
      <div className="movie-info">
        <h3>{movieData.Title}</h3>
        <small>
          {movieData.Released} {movieData.Genre}
        </small>
        <p>{movieData.Plot}</p>
        <ul>
            {movieData.Ratings.map(rating => 
            <li key={rating.Source}>
                <p>{rating.Source}: {rating.Value}</p>
            </li>)}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
