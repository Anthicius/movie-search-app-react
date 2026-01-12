import { useEffect, useState } from "react";
import MovieSearch from "./Components/MovieSearch";
import MovieCard from "./Components/MovieCard";

function App() {
  const [movieData, setMovieData] = useState(null);
  const [movieTitleSearch, setMovieTitleSearch] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim().length > 0) {
      setMovieTitleSearch(searchTerm);
    }
  };

  useEffect(() => {
    const load = async () => {
      setIsLoading(true)
      try {
        if (movieTitleSearch.length === 0) {
          setIsLoading(false)
          return;
        }
        const response = await fetch(
          `https://www.omdbapi.com/?t=${movieTitleSearch}&apikey=${apiKey}`
        );
        const data = await response.json();
        if (data.Response === "False") {
          setMovieData(null);
          setIsLoading(false)
          return setError(true);
        } else {
          setMovieData(data);
          setIsLoading(false)
          setError(false);
        }
      } catch (err) {
        setIsLoading(false)
        console.log(err);
      }
    };
    load();
  }, [movieTitleSearch]);

  return (
    <>
      <MovieSearch onSearch={handleSearch} />
      {isLoading && <h2>Loading...</h2>}
      {error && <h1>Movie not found</h1>}
      {movieData && <MovieCard movieData={movieData}/>}
      {console.log(movieData)}
    </>
  );
}

export default App;
