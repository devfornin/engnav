 import React, { Component } from 'react';
import './App.css';
import TextField from './TextField';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <NavBar /> {/* Moved NavBar outside of <h1> */}
          <h1>Welcome to the App</h1> {/* Heading should be separate */}
          <TextField />
        </div>
      </div>
    );
  }
}

export default App;
