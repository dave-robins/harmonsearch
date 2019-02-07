import React, { Component } from 'react'
import convert from 'xml-js';

const Context = React.createContext()

const episode = {
  title: "",
  description: "",
  pubDate: "",
  duration: "",
  url: ""
}
/* map over episode list, unwrap each "item", set to episode, 
* append to new array, pass array into state
*/

export class Provider extends Component {
    state = {
        episode_list: [],
        heading: 'Recent Episodes'
    }

componentDidMount(){
    fetch('https://feeds.megaphone.fm/harmontown')
      .then(res => res.text())
      .then(data => {
        var newJson = convert.xml2js(data);
        let unwrapped = (newJson.elements[0].elements[0].elements)
        let filtered = unwrapped.filter((episode) => episode.name === "item")
        this.setState({episode_list: filtered})
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