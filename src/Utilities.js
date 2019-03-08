import convert from 'xml-js'
import moment from 'moment'
import htmlToText from 'html-to-text'

const formatXml = (data => {
  var json = convert.xml2js(data);
  const episodeArray = formatEpisodes(json)
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
      number: ((filtered.length-1) - index).toString(),
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
  const full = htmlToText.fromString(text)
  const edited = full.replace("Learn more about your ad choices. Visit megaphone.fm/adchoices", "").trim()
  return edited.replace("[https://megaphone.fm/adchoices]", "")
}

export default formatXml