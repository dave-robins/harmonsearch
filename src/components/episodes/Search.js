import React, { Component } from 'react'
import { Consumer } from '../../context'
import { debounce } from 'lodash'

let episodesArr = []

class Search extends Component {
  state = {
    searchedText: ''
  }

  search = debounce((dispatch) => {
    const arr = episodesArr.filter(episode => {
      let values = Object.values(episode)
      let filtered = values.filter(value => value.includes(this.state.searchedText))
      if (filtered && filtered.length) {return episode}
    })
    dispatch({
      type: 'SEARCH',
      payload: arr
    })
  }, 250)

  onChange = (dispatch, e) => {
    this.setState({[e.target.name]: e.target.value })
    e.preventDefault()
    dispatch({
      type: 'SEARCH',
      payload: []
    })
    this.search(dispatch)
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
              <form onSubmit={this.onChange.bind(this, dispatch)}>
                <div className="form-group">
                  <input 
                    type="text" 
                    autoComplete="off"
                    className="form-control form-control-lg" 
                    placeholder="Enter text"
                    name="searchedText"
                    value={this.state.searchedText}
                    onChange={this.onChange.bind(this, dispatch)}
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