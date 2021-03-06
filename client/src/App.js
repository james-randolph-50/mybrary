import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfoDisplay from './components/InfoDisplay';
import InfoEntry from './components/InfoEntry';
import UserService from './services/UserService';
import {getUsers} from './actions/users'

  class App extends Component {

    componentDidMount() {
      getUsers()
    }
  
  render() {
    return (
      <div className="App">
        <h1>MyBrary: Track the Books You've Read</h1>
          <div className="navbar">
           <Navbar />
          </div>
          <div className="info-display">
            <InfoDisplay />
          </div>
          <div className="info-entry">
             <InfoEntry />
          </div>
      </div>
    );
  }
}

export default App;
