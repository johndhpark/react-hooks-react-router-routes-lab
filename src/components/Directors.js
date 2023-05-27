import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(({ name, movies }, directorIdx) => {
        return (
          <div key={directorIdx}>
            <h3>{name}</h3>
            <ul>
              {movies.map((movie, movieIdx) => {
                return <li key={movieIdx}>{movie}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Directors;
