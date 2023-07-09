import MoviesResult from "./components/MoviesResult";
import MoviesNoResult from "./components/MoviesNoResult";
import { useMovies } from "./hooks/useMovies";
import { useEffect, useState } from "react";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { movies, hasMovies } = useMovies();
  const { query, setQuery, error } = useSearch();

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    console.log(query);
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center mt-20">
            <input
              type="text"
              name="movie-name"
              className="border border-gray-400 rounded-lg mr-4 p-1"
              placeholder="E.g Avengers"
              onChange={handleChange}
            />
            <input
              type="submit"
              value="Search"
              className="p-1 border border-gray-400 text-white rounded-lg"
            />
          </div>
        </form>
        {error && <p className="text-red-500 text-xl text-center">{error}</p>}
      </header>
      <main className="w-full flex justify-center mt-4 text-white">
        {hasMovies ? <MoviesResult movies={movies} /> : <MoviesNoResult />}
      </main>
    </>
  );
}

export default App;
