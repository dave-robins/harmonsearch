import React, { Component } from 'react'
import { Consumer } from '../../context'
import { debounce, map } from 'lodash'

let episodesArr = []

class Search extends Component {
  state = {
    searchedText: ''
  }

  search = debounce((dispatch) => {

    // eslint-disable-next-line
    const filteredArr = episodesArr.filter(episode => {
      let values = Object.values(episode)
      let filtered = this.matchValue(values)
      if (filtered && filtered.length) {return episode}
    })
    dispatch({
      type: 'SEARCH',
      payload: filteredArr
    })
  }, 250)

  matchValue = (values) => {
    let searchText = this.state.searchedText.split(" ")
    let filtered = values.filter(val => {
      val = typeof val === 'string' ? val.toLowerCase() : val
      let includedCheck = map(searchText, word => {
        return val.includes(`${word} `.toLowerCase())
      })
      return includedCheck.includes(true)
    })
    return filtered
  }

  onChange = (dispatch, e) => {
    window.scrollTo(0,0)
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
                <div className="form-group shadow-sm">
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
