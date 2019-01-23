import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import convert from 'xml-js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

fetch('https://feeds.megaphone.fm/harmontown')
      .then(response => response.text())
      .then(function(data){
        console.log(convert.xml2json(data, {compact: true, spaces: 2}));
      })

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
