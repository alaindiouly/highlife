import './Navbar.css';
import logo from '../../discogs-white.png'
import {Link} from "react-router-dom";
import React from 'react';


function Navbar () {
  return (
    <div className="header">
      <Link to="/" className="header__search">Search</Link>
      <a href="https://www.discogs.com">
        <img src={logo} alt="logo" className="header__logo"/>
      </a>
      <Link to="/collection" className="header__collection">Collection</Link>
    </div>
  );
}

export default Navbar;