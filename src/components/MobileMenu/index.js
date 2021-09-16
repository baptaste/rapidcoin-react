import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './menu.scss';
import { getYear } from 'src/utils';

const MobileMenu = ({ isMenuOpen, hideMenu, resetFilter, themeToggler, theme }) => {
  const year = getYear();

  return (
    <div className={isMenuOpen ? "menu menu--open" : "menu"}>
    <div className="menu__header">
      <Link to="/" className="home-menu-btn">
        <i className="fas fa-coins rapidcoin__logo" onClick={resetFilter} />
      </Link>
      <button onClick={themeToggler} className="theme-toggler--mobile">
          {theme === 'light' ? <i className="fas fa-moon" /> : <i className="fas fa-lightbulb" />}
      </button>
      <button
        type="button"
        className="close-menu-btn"
        onClick={hideMenu}>
        <i className="fas fa-times"></i>
      </button>
    </div>

    <nav className="menu__nav">
    <Link to="/" className="menu__nav-link" onClick={hideMenu}>
        Home
      </Link>
      <Link to="/trendings" className="menu__nav-link" onClick={hideMenu}>
        Trending
      </Link>
      <Link to="/platforms" className="menu__nav-link" onClick={hideMenu}>
        Finance platforms
      </Link>
    </nav>

    <div className="menu__footer">
      <p>© {year} Rapidcoin. All rights reserved</p>
      <a href="https://github.com/baptaste/rapidcoin-react" target="_blank">
        <i className="fab fa-github"></i> Source code
      </a>
    </div>
  </div>
  );
};

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  hideMenu: PropTypes.func.isRequired,
}

export default MobileMenu;