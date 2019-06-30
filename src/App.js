import React, { Component } from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Daye</h2>
        </div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
