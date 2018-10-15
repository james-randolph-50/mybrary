import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MyBrary: Track the Books You've Read</h1>
          <div className="navbar">
            <p>navbar</p>
          </div>
          <div className="info-display">
            <p>User data will go here</p>
          </div>
          <div className="info-entry">
            <p>Form or something will go here</p>
          </div>
      </div>
    );
  }
}

export default App;
