import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-3 text-center">
      <p>&copy; {new Date().getFullYear()} Frankly Interpreting. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
