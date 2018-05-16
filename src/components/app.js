import React, { Component } from 'react';

import MovieList from '../containers/movies-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <MovieList />
      </div>
    );
  }
}
