import MoviesResult from "./components/MoviesResult";
import MoviesNoResult from "./components/MoviesNoResult";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies, hasMovies } = useMovies();

  return (
    <>
      <header>
        <form>
          <div className="flex justify-center items-center mt-20">
            <input
              type="text"
              name="movie-name"
              className="border border-gray-400 rounded-lg mr-4 p-1"
              placeholder="E.g Avengers"
            />
            <input
              type="submit"
              value="Search"
              className="p-1 border border-gray-400 text-white rounded-lg"
            />
          </div>
        </form>
      </header>
      <main className="w-full flex justify-center mt-4 text-white">
        {hasMovies ? <MoviesResult movies={movies} /> : <MoviesNoResult />}
      </main>
    </>
  );
}

export default App;
