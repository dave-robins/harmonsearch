import React, { Component } from 'react'
import { Consumer } from '../../context'

let episodesArr = []

class Search extends Component {
  state = {
    trackTitle: ''
  }

  search = (dispatch, e) => {
    e.preventDefault()

    console.log("dispatch: ", dispatch)
    const arr = episodesArr.filter(episode => {
      let values = Object.values(episode)
      let filtered = values.filter(value => value.includes(this.state.trackTitle))
      if (filtered && filtered.length) {return episode}
    })
    dispatch({
      type: 'SEARCH',
      payload: arr
    })
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          episodesArr = value.masterList
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-microphone"></i> Search Bar
              </h1>
              <p className="lead text-center">Search for an episode</p>
              <form onSubmit={this.search.bind(this, dispatch)}>
                <div className="form-group">
                  <input 
                    type="text" 
                    autoComplete="off"
                    className="form-control form-control-lg" 
                    placeholder="Enter text"
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Search