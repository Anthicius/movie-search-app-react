import { useEffect, useState } from "react";
import MovieSearch from "./Components/MovieSearch";

function App() {
  const [movieData, setMovieData] = useState(null);
  const [movieTitleSearch, setMovieTitleSearch] = useState("");
  const [error, setError] = useState(false)

  const handleSearch = (searchTerm) => {
    if(searchTerm.trim().length > 0){
    setMovieTitleSearch(searchTerm);
    }
  }

  useEffect(() => {
    const load = async () => {
      try {
        if(movieTitleSearch.length === 0){
          return;
        }
        const response = await fetch(
          `https://www.omdbapi.com/?t=${movieTitleSearch}&apikey=d74835ef`
        );
        const data = await response.json();
        if(data.Response === "False"){
          return setError(true)
        } else{
          setMovieData(data);
          setError(false)
        }
      } catch (err) {
        console.log(err);
      }
    };
    load();
  }, [movieTitleSearch]);

  return <>
  <MovieSearch onSearch={handleSearch}/>
  {!error && <h1>Movie not found</h1>}
  {movieData && <h1>{movieData.Title}</h1>}
  </>;
}

export default App;
