import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Episode from './Episode'

const titleAsKey = (item) => {
    const titleObject = item.elements.filter((element) => {
        return element.name === "title"
    })
    const key = titleObject[0].elements[0].text.replace(/ /g, '_')
    return key
}

class Episodes extends Component {
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
                <h3 className ="text-center mb-4">{heading}</h3>
                <div>
                  {episode_list.map(item => (
                    <Episode 
                      key={titleAsKey(item)}
                      episode={item.elements}
                    />
                  ))}
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