import React from "react";

const MoviesResult = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h1>{movie.title}</h1>
            <h2>{movie.year}</h2>
            <img src={movie.img} alt={movie.title} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesResult;
