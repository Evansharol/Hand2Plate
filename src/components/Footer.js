import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Hand2Plate. All rights reserved.</p>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/donate">Donate</a>
        <a href="/contact">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;