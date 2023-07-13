import noMoviesResponse from "../mocks/example-no-results.json";
export async function searchMovies({ query }) {
  if (query === "") return null;

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}&s=${query}`);
    const moviesObj = await response.json();
    console.log(moviesObj);

    if (moviesObj.Response === "False") return moviesObj.Error;

    return moviesObj.Search.map?.((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster,
    }));
  } catch (error) {
    console.log(error);
    throw new Error("There is an error searching the movies");
  }
}
