import React from 'react';
import { actors } from '../data';

let actorList = actors.map(actor => {
  return (
    <div key={actor.name}>
      name: {actor.name}<br/>
      <ul value='movies'>
          {actor.movies.map(title => {
            return <li key={title}>{title}</li>
          })}
      </ul>
    </div>
  )
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
);
};

export default Actors;
