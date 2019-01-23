import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component {
    state = {
        episodes_list: []
    }

    render() {
        return (
            <Context.Provider>
                {this.props.children}
            </Context.Provider>
        )
    }
}