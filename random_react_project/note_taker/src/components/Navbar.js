import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return(
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Navbar</span>
    <li className="nav-item active">
        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/features">Features</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/pricing">Pricing</Link>
      </li>
  </nav>
  )
}

export default Navbar;