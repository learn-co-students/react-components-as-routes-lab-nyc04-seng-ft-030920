import React from 'react';
import { directors } from '../data';

let directorsList = directors.map(director => {
  return (
    <div key={director.name}>
      name: {director.name}<br/>
      <ul value='movies'>
          {director.movies.map(title => {
            return <li key={title}>{title}</li>
          })}
      </ul>
    </div>
  )
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors
