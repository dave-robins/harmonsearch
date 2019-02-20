import React, { Component } from 'react'
import formatXml from './Utilities'

const Context = React.createContext()

const reducer = (state, action) => {
  switch(action.type){
    case 'SEARCH':
      return {
        ...state,
        masterList: action.payload,
        heading: 'Search Results'
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
      masterList: [],
      heading: 'Recent Episodes',
      dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount(){
      fetch('https://feeds.megaphone.fm/harmontown')
        .then(res => res.text())
        .then(data => {
          this.setState({
            masterList: formatXml(data)
          })
        })
  }

  render() {
      return (
          <Context.Provider value={this.state}>
              {this.props.children}
          </Context.Provider>
      )
  }
}

export const Consumer = Context.Consumer