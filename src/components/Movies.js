import React from 'react';
import { movies } from '../data';

let movieList = movies.map(movie => {
  return (
    <div key={movie.title}>
      title: {movie.title}<br/>
      time: {movie.time}<br/>
      <ul value='genres'>
          {movie.genres.map(genre => {
            return <li key={genre}>{genre}</li>
          })}
      </ul>
    </div>
  )
})

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movieList}
    </div>
  );
};

export default Movies;
