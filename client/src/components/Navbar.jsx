import React from 'react'
import {Link} from 'react-router-dom'
import "../styles.css"
function Navbar(){
  return (
    <header className="main-header">
      <nav className="nav">
          <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/About">ABOUT</Link></li>
          <li><Link to= "/Upload">UPLOAD</Link></li>
          </ul>
      </nav>
    </header>
    
  )
}

export default Navbar
