import React from 'react';
import './Footer.css';

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <p>© {new Date().getFullYear()} Albin bruggeman.</p>
             </div>
    </footer>
  );
};

export default Footer;
