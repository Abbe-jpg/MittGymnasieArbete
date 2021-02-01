import React from 'react';
import './Menu.css';

const Menu = props => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              HEM
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              OM OSS
            </a>
          </li>
          <li>
            <a href="#product" onClick={props.toggleMenu}>
              HANDLA
            </a>
          </li>
          <li>
            <a href="#upload-form" onClick={props.toggleMenu}>
              LÄGG UPP EGEN ANNONS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              KONTAKTA OSS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
