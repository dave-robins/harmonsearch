import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Episode from './Episode'

const getTitle = (item) => {
    const idObject = item.elements.filter((element) => {
        // console.log(element.name)
        return element.name === "title"
    })
    return idObject[0].elements[0].text
}

class Episodes extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    console.log("here's the value:")
                    console.log(value)
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
                                        key={getTitle(item)} 
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