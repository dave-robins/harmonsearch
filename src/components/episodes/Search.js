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
      let filtered = values.filter(value => {
        value = typeof value === 'string' ? value.toLowerCase() : value
        return value.includes(this.state.searchedText.toLowerCase())
      })
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
          )
        }}
      </Consumer>
    )
  }
}

export default Search