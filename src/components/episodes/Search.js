import React, { Component } from 'react'
import { Consumer } from '../../context'

let heresTheList = []

class Search extends Component {
  state = {
    trackTitle: '',
    searchList: []
  }

  search = () => {
    const arr = heresTheList.map(episode => {
      let values = Object.values(episode).filter(value => value.includes(this.state.trackTitle))
      // console.log("values", values)
      console.log(values.find(value => {value.includes("Schrab")}))
    })
    // console.log(arr)
  }

  findEpisode = (e) => {
    e.preventDefault()
    console.log(e)
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
    this.search()
  }

  render() {
    return (
      <Consumer>
        {value => {
          heresTheList = value.masterList
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-microphone"></i> Search Bar
              </h1>
              <p className="lead text-center">Search for an episode</p>
              <form>
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Enter text"
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                {/* <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
                  Search
                </button> */}
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Search