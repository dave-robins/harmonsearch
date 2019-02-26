import React from 'react'
import logo from '../../main.png'

const Navbar = () => {
  return ( 
  <nav>
    <span>
      <a href="/"> <img class="img-fluid" src={logo} alt=""/></a>
    </span>
  </nav>
  )
}

export default  Navbar