import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Episode from './Episode'

class Episodes extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { masterList, heading } = value
          if(masterList === undefined || masterList.length === 0) {
              return <Spinner />
          } else {
            return (
              <React.Fragment>
                <h3 className ="text-center mb-4">{heading}</h3>
                <div>
                  {masterList.map(item => (
                    <Episode 
                      key={item.title.replace(/ /g, '_')}
                      episode={item}
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