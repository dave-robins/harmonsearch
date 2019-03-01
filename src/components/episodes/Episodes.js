import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Episode from './Episode'

class Episodes extends Component {
  state = {loading: true}

  renderEpisodes = (list) => {
    if (list && list.length > 0){
    return list.map(item => (
      <Episode 
        key={item.title.replace(/ /g, '_')}
        episode={item}
      />
    ))
    } else {return <p className ="text-center mb-4"> 0 Episodes Found</p>}
  }

  componentDidMount() {
    setTimeout(() => this.setState({loading: false}), 200)
    console.log("set to false")
  }
  
  render() {
    return (
      <Consumer>
        {value => {
          const { episodeList, heading } = value
          if(episodeList === undefined || this.state.loading) {
              return <Spinner />
          } else {
            return (
              <React.Fragment>
                <h3 className ="text-center mb-4">{heading}</h3>
                <div>
                  { this.renderEpisodes(episodeList) }
                </div>
              </React.Fragment>
            )
          }
        }}
      </Consumer>
    )
  }
}

export default Episodes