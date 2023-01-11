import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className="sticky">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="Vegetarian Recipes" />
        </Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/search">Search Now</Link>
      </div>
    </nav>
  );
}

export default Navbar;