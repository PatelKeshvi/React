import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">HOME</Link>
      <Link to="/login" className="navbar-link">LOGIN</Link>
      <Link to="/signup" className="navbar-link">SIGNUP</Link>
      <Link to="/details" className="navbar-link">DETAILS</Link>
    </div>
  );
}

export default Navbar;
