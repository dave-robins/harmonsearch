import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <p>https://feeds.megaphone.fm/harmontown</p>
      </div>
    );
  }
}

export default App;
