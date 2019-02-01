import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'

const keyAsTitle = (item) => {
  const key = item.replace(/_/g, ' ')
  return key
}

const getDescription = (list, id) => {
  const match = list.filter(episode => (
    episode.elements[0].elements[0].text === keyAsTitle(id)
  ))
  const description = match[0].elements[1].elements[0].text
  return description
}

class Details extends Component {
  state = {
    episode: {},
    details: {}
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { episode_list } = value
          if(episode_list === undefined || episode_list.length === 0) {
              return <Spinner />
          } else {
            return (
              <React.Fragment>
                <h3 className ="text-center mb-4">{keyAsTitle(this.props.match.params.id)}</h3>
                <div>
                  {getDescription(episode_list, this.props.match.params.id)}
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