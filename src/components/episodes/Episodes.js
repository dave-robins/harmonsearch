import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Episode from './Episode'

class Episodes extends Component {
  state = {
    loading: true
  }

  renderEpisodes = (list) => {
    return list.map(item => (
      <Episode 
        key={item.title.replace(/ /g, '_')}
        episode={item}
      />
    ))
  }

  componentDidMount() {
    setTimeout(() => this.setState({loading: false}), 500)
  }
  
  render() {
    return (
      <Consumer>
        {value => {
          const { episodeList, heading } = value
          if(episodeList === undefined || this.state.loading || episodeList.length === 0) {
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