import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to ="/">JobsHub</Link>
      </div>
      <ul className="nav-links">
      <li><Link to="/">Job</Link></li>
  
        <li><Link to = "/about">About</Link></li>
        <li><li><Link to="/contact">Contact</Link></li></li>
        <li><Link to = "/blog">Blog</Link></li>
        <li><Link to = "/login">Login/Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
