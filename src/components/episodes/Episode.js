import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

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

const linkStyle = {
  color: '#000000'
}

const Episode = (props) => {
  const { episode } = props
  const title = getParam(episode, "title")
  const description = trimDescription(getParam(episode, "description"))
  const pubDate = moment(getParam(episode, "pubDate")).format("l")
  const url = getLink(episode)
  
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5><a href={url} style={linkStyle}> {title}</a></h5>
        <i>{pubDate}</i>
        <p>{description}</p>
        <Link 
          to={`details/episode/${title.replace(/ /g, '_')}`}
          className="btn btn-dark btn-block"
        >
          <i className="fas fa-chevron-right"></i> View Details
        </Link>
      </div>
    </div>
  )
}

export default Episode