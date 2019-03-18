import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Spinner from './components/layout/Spinner'
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Details from './components/episodes/Details'
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
          <hr class="line"/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route exact path="/details/episode/:id" component={Details}/>
            </Switch>
          </div>
          <div class="footer">
            <hr class="line"/>
            <p>©2019 David Robins</p>
          </div>
        </React.Fragment>
      </Router>
      </Provider>
    )
  }
}

export default App;
