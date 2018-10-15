import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfoDisplay from './components/InfoDisplay';
import UserService from './services/UserService';

  class App extends Component {
    constructor() {
      super()

      this.state = {
        users: []
      }
    }

    componentDidMount() {
      UserService.fetchUsers().then(users => this.setState({ users }))
    }
  }
  render() {
    return (
      <div className="App">
        <h1>MyBrary: Track the Books You've Read</h1>
          <div className="navbar">
            <Navbar />
          </div>
          <div className="info-display">
            <InfoDisplay users={this.state.users}/>
          </div>
          <div className="info-entry">
            <InfoEntry />
          </div>
      </div>
    );
  }
}

export default App;
