import React from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
  color: '#000000'
}

const Episode = (props) => {
  const { episode } = props
  
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5><a href={episode.url} style={linkStyle}>{episode.number}: {episode.title}</a></h5>
        <i>{episode.pubDate}</i>
        <p>{episode.description}</p>
        <Link 
          to={`details/episode/${episode.title.replace(/ /g, '_')}`}
          className="btn btn-dark btn-block"
        >
          <i className="fas fa-chevron-right"></i> View Details
        </Link>
      </div>
    </div>
  )
}

export default Episode