import convert from 'xml-js'
import moment from 'moment'

const formatXml = (data => {
  var json = convert.xml2js(data);
  const episodeArray = formatEpisodes(json)
  // let unwrapped = (json.elements[0].elements[0].elements)
  // let filtered = unwrapped.filter((episode) => episode.name === "item")
  return episodeArray
})

const formatEpisodes = (json => {
  const episodes = []
  const filtered = (json.elements[0].elements[0].elements).filter((episode) => episode.name === "item")
  filtered.map((ep, index) => {
    const episode = {
      title: getParam(ep.elements, "title"),
      description: trimDescription(getParam(ep.elements, "description")),
      pubDate: moment(getParam(ep.elements, "pubDate")).format("MMMM Do, YYYY"),
      duration: getParam(ep.elements, "itunes:duration"),
      url: getLink(ep.elements),
      number: (filtered.length - index).toString(),
    }
    episodes.push(episode)
    return episode
  })
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

export default formatXml