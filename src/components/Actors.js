import React from "react";
import { actors } from "../data";

function Actors() {

  const allActors = actors.map((actor) => (
    <div key={actor.name}>
      <div>Actor: {actor.name}</div>
      <div>Starred In:</div>
      <ul>
        {actor.movies.map((movie)=> (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (<div>
          <h1>Actors Page</h1>
          {allActors}
          </div>);
}

export default Actors;
