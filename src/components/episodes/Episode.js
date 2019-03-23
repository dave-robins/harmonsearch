import React from 'react'
// import { Link } from 'react-router-dom'

const linkStyle = {
  color: '#000000'
}

const Episode = (props) => {
  const { episode } = props
  
  return (
    <div className="card mb-3 shadow-sm">
      <h5 class="card-header"><a href={episode.url} style={linkStyle}>{episode.number}: {episode.title}</a></h5>
      <div className="card-body">
        <p className="card-subtitle mb-2 text-muted">{episode.pubDate}</p>
        <p class="card-text">{episode.description}</p>
        {/* <a href={episode.url} class="btn btn-primary">Listen</a> */}
      </div>
    </div>
  )
}

export default Episode