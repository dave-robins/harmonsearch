import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import logo from '../src/icon.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
