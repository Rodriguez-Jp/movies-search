import MoviesResult from "./components/MoviesResult";
import MoviesNoResult from "./components/MoviesNoResult";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import "./spinner.css";

function App() {
  const { query, setQuery, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ query });

  const handleChange = (e) => {
    e.preventDefault();
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  console.log(movies);

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
              className="p-1 border border-gray-400 text-white rounded-lg hover:bg-white hover:text-black cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </form>
        {error && <p className="text-red-500 text-xl text-center">{error}</p>}
      </header>
      <main className="max-w-4xl flex justify-center mt-4 text-white mx-auto">
        {!(typeof movies === "string") ? (
          !loading ? (
            <MoviesResult movies={movies} />
          ) : (
            <span className="loader"></span>
          )
        ) : (
          <MoviesNoResult />
        )}
      </main>
    </>
  );
}

export default App;
