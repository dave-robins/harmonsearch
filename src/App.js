import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import About from './components/episodes/About'
import { Provider } from './context'
import './App.css'

class App extends Component {

  render() {
    return (
      <div>
      <Provider>
        <Router>
          <div>
            <div className="header">
              <Navbar/>
            </div>
            <div className="content">
              <Switch>
                <Route path="/" component={Index}/>
                <Route path="/about" component={About}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
      </div>
    )
  }
}

export default App;
