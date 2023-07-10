import React from "react";

const MoviesResult = ({ movies }) => {
  return (
    <>
      <ul className="w-full grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
        {movies.map((movie) => (
          <li key={movie.id}>
            <h1 className="font-bold">{movie.title}</h1>
            <h2>{movie.year}</h2>
            <img src={movie.img} alt={movie.title} className="mt-4" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesResult;
