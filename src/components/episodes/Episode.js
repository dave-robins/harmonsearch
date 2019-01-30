import React from 'react'
import { Link } from 'react-router-dom'

const getParam = (item, param) => {
  const idObject = item.filter((element) => {
      return element.name === param
  })
  return idObject[0].elements[0].text
}

const trimDescription = (text) => {
  const arr = text.replace("<br>", "").split("<br>")
  return arr[0]
}

const Episode = (props) => {
  const { episode } = props

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5>{getParam(episode, "title")}</h5>
        <p>{trimDescription(getParam(props.episode, "description"))}</p>
        <Link 
          to={`details/episode/${(getParam(episode, "title")).replace(/ /g, '_')}`}
          className="btn btn-dark btn-block"
        >
          <i className="fas fa-chevron-right"></i> View Details
        </Link>
      </div>
    </div>
  )
}

export default Episode