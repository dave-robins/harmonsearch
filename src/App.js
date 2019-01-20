import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
// const xml = require("xml-parse");

fetch('https://feeds.megaphone.fm/harmontown')
      .then(response => response.text())
      .then(data => console.log(/*xml.parse*/(data)))

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
