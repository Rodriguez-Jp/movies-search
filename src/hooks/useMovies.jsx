import moviesResponse from "../mocks/example-with-results.json";
import noMoviesResponse from "../mocks/example-no-results.json";
import { useState } from "react";

export function useMovies() {
  const [responseMovies, setResponseMovies] = useState([]);

  const getMovies = async (query) => {
    if (query) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}&s=${query}`
        );
        const moviesObj = await response.json();
        setResponseMovies(moviesObj.Search);
      } catch (error) {
        console.log(error);
      }
    } else {
      setResponseMovies(noMoviesResponse);
    }
  };

  const hasMovies = responseMovies?.length > 0;

  console.log(responseMovies);

  const moviesFormatted = responseMovies.map?.((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    img: movie.Poster,
  }));

  console.log(moviesFormatted);

  return { movies: moviesFormatted, hasMovies, getMovies };
}
