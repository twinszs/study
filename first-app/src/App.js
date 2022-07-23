import React from 'react';
import './App.css';
import Header from './header/header.js'

class App extends React.Component {
  state = {
    helloMessage: "영화 소개 프로젝트",
  }

  render () {
    return (
      <div className="App">
        <Header 
          helloMessage={this.state.helloMessage}
        />
        <div style={{ color: 'red' }}>
          <span>메인 컨텐츠 !</span>
        </div>
      </div>
    );
  }
}

export default App;
