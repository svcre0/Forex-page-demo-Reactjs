import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      
      <div className="logo">
        <img src="/Assets/royal_logo_4x.png" alt="Logo" />
      </div>

      <nav className="nav-links">
        <Link to="/home" className="header-homeLink">Home</Link>
        <Link to="/profile" className="header-optionLink">Profile</Link>
        <Link to="/settings" className="header-optionLink">Settings</Link>

      </nav>

    </header>
  );
}

export default Header;

