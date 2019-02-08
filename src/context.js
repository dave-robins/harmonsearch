import React, { Component } from 'react'
import convert from 'xml-js';

const Context = React.createContext()

const formatEpisodes = (json => {
  const episodes = []
  const filtered = (json.elements[0].elements[0].elements).filter((episode) => episode.name === "item")
  filtered.map(ep => {
    const episode = {
      title: getParam(ep.elements, "title"),
      description: trimDescription(getParam(ep.elements, "description")),
      pubDate: getParam(ep.elements, "pubDate"),
      duration: getParam(ep.elements, "itunes:duration"),
      url: getLink(ep.elements)
    }
    episodes.push(episode)
    return episode
  })
  console.log(episodes)
  return episodes
})

const getParam = (item, param) => {
  const idObject = item.filter((element) => {
      return element.name === param
  })
  return idObject[0].elements[0].text
}

const getLink = (item) => {
  const urlObject = item.filter((element) => {
    return element.name === "enclosure"
  })
  return urlObject[0].attributes.url
}

const trimDescription = (text) => {
  const arr = text.replace("<br>", "").split("<br>")
  return arr[0]
}

export class Provider extends Component {
  state = {
      episode_list: [],
      masterList: [],
      heading: 'Recent Episodes'
  }

  componentDidMount(){
      fetch('https://feeds.megaphone.fm/harmontown')
        .then(res => res.text())
        .then(data => {
          var json = convert.xml2js(data);
          const episodeArray = formatEpisodes(json)
          let unwrapped = (json.elements[0].elements[0].elements)
          let filtered = unwrapped.filter((episode) => episode.name === "item")
          this.setState({
            episode_list: filtered,
            masterList: episodeArray
          })
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