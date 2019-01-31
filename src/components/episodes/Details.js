import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'

const keyAsTitle = (item) => {
  const key = item.replace(/_/g, ' ')
  return key
}

class Details extends Component {
  state = {
    episode: {},
    details: {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { episode_list, heading } = value
          if(episode_list === undefined || episode_list.length === 0) {
              return <Spinner />
          } else {
            return (
              <React.Fragment>
                <h3 className ="text-center mb-4">{keyAsTitle(this.props.match.params.id)}</h3>
                <div>
                  episode description
                </div>
              </React.Fragment>
            )
          }
        }}
      </Consumer>
    )
  }
}

export default Details