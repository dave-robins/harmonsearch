import React from 'react'

const linkStyle = {
  color: '#000000'
}

const Episode = (props) => {
  const { episode } = props
  
  return (
    <div className="card mb-3 shadow-sm">
      <h5 className="card-header"><a href={episode.url} style={linkStyle}>{episode.number}: {episode.title}</a></h5>
      <div className="card-body">
        <p className="card-subtitle mb-2 text-muted">{episode.pubDate}</p>
        <p className="card-text">{episode.description}</p>
      </div>
    </div>
  )
}

export default Episode