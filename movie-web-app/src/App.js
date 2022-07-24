import React from 'react';
import './App.css';
import Header from './header/header.js';
import MovieList from './movie-list/movie-list.js';

import data from './data.json';

class App extends React.Component {
  state = {
    movieData: data,
    headerMessage: "영화 소개 프로젝트",
  }

  render () {
    return (
      <div className="App">
        <Header 
          headerMessage={this.state.headerMessage}
        />
        <MovieList
          movieData={this.state.movieData.data}
        />
      </div>
    );
  }
}

export default App;
