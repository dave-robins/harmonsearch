import React, { Component } from 'react'
import formatXml from './Utilities'

const Context = React.createContext()

const reducer = (state, action) => {
  switch(action.type){
    case 'SEARCH':
      return {
        ...state,
        episodeList: action.payload,
        heading: 'Search Results'
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
      masterList: [],
      episodeList: [],
      heading: 'Recent Episodes',
      dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount(){
      fetch('https://feeds.megaphone.fm/harmontown')
        .then(res => res.text())
        .then(data => {
          const array = formatXml(data)
          this.setState({
            masterList: array,
            episodeList: array
          })
        })
  }

  render() {
    console.log("episode ", this.state.episodeList)
    console.log("master ", this.state.masterList)
      return (
          <Context.Provider value={this.state}>
              {this.props.children}
          </Context.Provider>
      )
  }
}

export const Consumer = Context.Consumer