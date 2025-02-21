import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Hand2Plate</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/donate">Donate</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;