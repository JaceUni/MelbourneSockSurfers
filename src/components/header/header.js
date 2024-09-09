import React from 'react';
//import logo from '../../assets/images/logo.png';    // Create variable called 'logo' that holds URL of image
import logo from `${process.env.PUBLIC_URL}/assets/images/logo.png`;    // Above line wouldn't show image on website, had to consult ChatGPT for resolution which provided this fix.
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>    {/* Use variable 'logo', apply to CSS backgroundImage */}
      <div className="headtext">
        Home of Melbourne's<br />Best Sliders
      </div>
    </header>
  );
}

export default Header;
