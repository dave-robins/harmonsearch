import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Spinner from './components/layout/Spinner'
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import About from './components/episodes/About'
import { Provider } from './context'
import './App.css'

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({loading: false}), 500)
  }

  render() {
    const { loading } = this.state;
    if(loading) {
      console.log("test test")
      return <Spinner/>
    }

    return (
      <Provider>
      <Router>
        <React.Fragment>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route exact path="/about" component={About}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
      </Provider>
    )
  }
}

export default App;
