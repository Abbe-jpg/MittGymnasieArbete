import React from 'react';
import './Nav.css';

const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            Albin
            <strong>Gymnasie</strong>
          </p>
          <a
          href="#welcome-section"
            onClick={props.toggleMenu}
            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
