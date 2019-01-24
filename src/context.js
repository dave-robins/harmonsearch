import React, { Component } from 'react'
import convert from 'xml-js';
const Context = React.createContext()

export class Provider extends Component {
    state = {
        episode_list: [],
        heading: 'Top 10 Tracks'
    }

componentDidMount(){
    fetch('https://feeds.megaphone.fm/harmontown')
      .then(res => res.text())
      .then(data => {
        const newJson = convert.xml2json(data, {compact: true, spaces: 2})
        console.log(newJson);
        this.setState({episode_list: newJson.rss})
      })
}

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer