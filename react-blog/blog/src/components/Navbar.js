import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/welcome">Welcome</Link>
      <Link to="/entries">Entries</Link>
    </nav>
  )
}

export default Navbar;
