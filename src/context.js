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
        var newJson = convert.xml2js(data);
        console.log(newJson.elements[0].elements[0].elements[15].elements[0].elements[0].text)
        console.log(newJson);
        this.setState({episode_list: newJson.elements[0].elements[0].elements})
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