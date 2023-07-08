import moviesResponse from "../mocks/example-with-results.json";
import noMoviesResponse from "../mocks/example-no-results.json";

export function useMovies() {
  const movies = moviesResponse.Search;
  const hasMovies = movies?.length > 0;

  const moviesFormatted = movies.map?.((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    img: movie.Poster,
  }));

  return { movies: moviesFormatted, hasMovies };
}
