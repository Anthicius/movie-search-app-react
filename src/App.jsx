import { useEffect, useState } from "react";
import MovieSearch from "./Components/MovieSearch";
import MovieCard from "./Components/MovieCard";

function App() {
  const [movieData, setMovieData] = useState(null);
  const [movieTitleSearch, setMovieTitleSearch] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("movie-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("movie-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim().length > 0) {
      setMovieTitleSearch(searchTerm);
    }
  };

  const handleAddFavorite = (movie) => {
    setFavorites((prev) =>
      prev.some((m) => m.imdbID === movie.imdbID) ? prev : [...prev, movie]
    );
  };

  const handleRemoveFavorite = (movie) => {
    setFavorites((prev) => prev.filter((m) => m.imdbID !== movie.imdbID));
  };

  useEffect(() => {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    const load = async () => {
      if (movieTitleSearch.length === 0) return;

      setIsLoading(true);
      setError(false);

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?t=${movieTitleSearch}&apikey=${apiKey}`
        );
        const data = await response.json();

        if (data.Response === "False") {
          setMovieData(null);
          setError(true);
        } else {
          setMovieData(data);
          console.log(movieData)
          setError(false);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [movieTitleSearch]);

  return (
    <>
      <MovieSearch onSearch={handleSearch} />

      {isLoading && <h2>Loading...</h2>}
      {error && <h1>Movie not found</h1>}
      {!isLoading && movieData && (
        <MovieCard
          movieData={movieData}
          onAction={handleAddFavorite}
          actionLabel="Favorite"
          className="featured"
        />
      )}

      <h2>Favorites:</h2>
      {favorites.length > 0 ? (
        <ul className="favorites-grid">
          {favorites.map((favorite) => (
            <li key={favorite.imdbID}>
              <MovieCard
                movieData={favorite}
                onAction={handleRemoveFavorite}
                actionLabel="Remove"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ opacity: 0.5 }}>No favorites added yet.</p>
      )}
    </>
  );
}

export default App;
