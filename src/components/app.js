import React, { Component } from 'react';

import MovieList from '../containers/movies-list';
import MovieDetails from '../containers/movie-details';

export default class App extends Component {
  render() {
    return (
      <div>
        <MovieList />
        <MovieDetails />
      </div>
    );
  }
}
