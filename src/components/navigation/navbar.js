import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="nav">
      <a href="javascript:void(0);" className="menubutton">
        <span className="navline"></span>
        <span className="navline"></span>
        <span className="navline"></span>
      </a>
      <div className="navlink">
        <ul>
          <li><a href="#top">Home</a></li>
          <li><a href="#results">Results</a></li>
          <li><a href="#upcoming">Events</a></li>
          <li><a href="#carousel">Gallery</a></li>
          <li><a href="#vid">Video</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
        </ul>
        <div className="search">Search&nbsp;
          <form action="#">
            <input type="text" name="search" />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
