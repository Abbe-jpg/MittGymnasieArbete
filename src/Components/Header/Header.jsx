import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">Vi vill ändra</span>
          <span className="line">din uppfattning</span>
          <span className="line">
            <span className="color">om</span> Online shopping
          </span>
        </h1>
        <div className="buttons">
          <a href="#about">
            Om oss
          </a>
          <a href="#product" className="cta">
          Börja handla
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
