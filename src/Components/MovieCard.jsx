import React from "react";

const MovieCard = ({ movieData, onAction, actionLabel }) => {
  return (
    <div className="movie">
      <img src={movieData.Poster==="N/A"? "https://placehold.co/300x450?text=No+Poster": movieData.Poster} alt="Movie Poster Image" onError={(e)=>e.target.src="https://placehold.co/300x450?text=No+Poster"}/>
      <div className="movie-info">
        <h3>{movieData.Title}</h3>
        <small>
          {movieData.Released==="N/A"?movieData.Year:movieData.Released} {movieData.Genre}
        </small>
        <p>{movieData.Plot}</p>
        <ul>
            {movieData.Ratings.map(rating => 
            <li key={rating.Source}>
                <p>{rating.Source}: {rating.Value}</p>
            </li>)}
        </ul>
        <button onClick={()=>onAction(movieData)}>{actionLabel}</button>
      </div>
    </div>
  );
};

export default MovieCard;
