import React from "react";
import { Route, Routes } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  return (
    <div>
      <MoviesList movies={movies} />
      <Routes>
        <Route path=":movieId" element={<MovieShow movies={movies} />} />
        <Route path="/" element={<h3>Choose a movie from the list above</h3>} />
      </Routes>
    </div>
  );
}

export default MoviesPage;
