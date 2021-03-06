import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Episode from './Episode'
import expandIcon from '../../expand.svg'

class Episodes extends Component {
  state = {
    loading: true,
    visible: 3,
    toggle: "expandDown",
    value: false
  }

  seeAll() {
    if (this.state.visible){
      this.setState({
        visible: null,
        toggle: "expandUp",
        value: true
      })
    } else {
      this.setState({
        visible: 3,
        toggle: "expandDown",
        value: false
      })
    }
  }

  seeAll = this.seeAll.bind(this);

  renderEpisodes = (list) => {
    const initialList = this.state.visible ? list.slice(0, this.state.visible) : list
    return initialList.map(item => (
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
                <div className="fade-in">
                  { this.renderEpisodes(episodeList) }
                </div>
                <div className={this.state.toggle}>
                  { console.log("toggle: ", this.state.toggle) }
                  <input type="image" src={expandIcon} onClick={this.seeAll} alt="Expand" />
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
