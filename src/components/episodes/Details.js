import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'

const keyAsTitle = (item) => {
  const key = item.replace(/_/g, ' ')
  return key
}

const getDescription = (list, id) => {
  const match = list.filter(episode => (
    episode.elements[0].elements[0].text === keyAsTitle(id)
  ))
  const description = match[0].elements[1].elements[0].text
  return description
}

class Details extends Component {
  state = {
    episode: {},
    details: {}
  }

  render() {
    return (
      <div class="about-text">
        <h1>About page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

export default Details