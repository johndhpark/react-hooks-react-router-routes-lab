import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(({ title, time, genres }, movieIdx) => (
        <div key={movieIdx}>
          <h3>{title}</h3>
          <h4>{time}</h4>
          <ul>
            {genres.map((genre, genreIdx) => (
              <li key={genreIdx}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
