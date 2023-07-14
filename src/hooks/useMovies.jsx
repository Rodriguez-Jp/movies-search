import moviesResponse from "../mocks/example-with-results.json";
import noMoviesResponse from "../mocks/example-no-results.json";
import { searchMovies } from "../services/searchMovies";
import { useRef, useState } from "react";

export function useMovies({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const previousSearch = useRef(query);

  const getMovies = async ({ query }) => {
    if (previousSearch.current === query) return;
    try {
      setLoading(true);
      const newMovies = await searchMovies({ query });
      setMovies(newMovies);
      previousSearch.current = query;
    } catch (error) {
      throw new Error("There was a problem searching the movie");
    } finally {
      setLoading(false);
    }
  };

  return { movies, getMovies, loading };
}
