import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navebar">
      <div className="logo">
        <span className="logo-icon">OL</span>
        <span className="logo-text">Oasis Library</span>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Category">Category</Link></li>
        <li><Link to="/Audiobook">AudioBook</Link></li>
        <li><Link to="/Aboutus">About Us</Link></li>
        <li><Link to="/Conatct">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
