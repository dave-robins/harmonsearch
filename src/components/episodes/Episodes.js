import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Episode from './Episode'

class Episodes extends Component {
  state = {
    loading: true,
    visible: 5
  }

  seeMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 4}
    })
  }

  seeMore = this.seeMore.bind(this);

  renderEpisodes = (list) => {
    return (list.slice(0, this.state.visible)).map(item => (
      <Episode 
        key={item.title.replace(/ /g, '_')}
        episode={item}
      />
    ))
  }

  componentDidMount() {
    setTimeout(() => this.setState({loading: false}), 500)
  }

  // this.setState({ visible: 5 })
  
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
                {this.state.visible < episodeList.length &&
                  <button onClick={this.seeMore} type="button">See More</button>
                }
              </React.Fragment>
            )
          }
        }}
      </Consumer>
    )
  }
}

export default Episodes