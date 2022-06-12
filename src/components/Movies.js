import React from "react";
import { movies } from "../data";

function Movies() {

  const allMovies = movies.map((movie) =>(
    <div key={movie.title}>
      <div>Movie Title: {movie.title}</div>
      <div>Movie Length: {movie.time} minutes</div>
      <div>Movie Genres:</div>
      <ul>
        {movie.genres.map((genre) =>(
          <li key={genre}>{genre}</li> ))}  
      </ul> 
    </div>
  ));


  return  (<div>
            <h1>Movies Page</h1>
            {allMovies}
          </div>);
}

export default Movies;
