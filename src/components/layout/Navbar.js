import React from 'react'
import logo from '../../main.png'

const Navbar = () => {
  return ( 
  <nav>
    <span>
      <img className="img-fluid" src={logo} alt="Harmon Search"/>
      <div className="link-container">
        <a href="/" className="link-text">Search</a>
        <a href="/about" className="link-text">About</a>
      </div>
      <hr className="line"/>
    </span>
  </nav>
  )
}

export default Navbar