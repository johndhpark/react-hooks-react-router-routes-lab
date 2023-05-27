import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(({ name, movies }, actorIdx) => {
        return (
          <div key={actorIdx}>
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

export default Actors;
