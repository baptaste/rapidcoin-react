import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './menu.scss';
import { getYear } from 'src/utils';

const MobileMenu = ({ isMenuOpen, hideMenu, resetFilter, themeToggler, theme, toggleCurrenciesButton, isCurrencyTogglerClicked, toggleCurrency, isEUR, isUSD }) => {
  const year = getYear();

  return (
    <div className={isMenuOpen ? "menu menu--open" : "menu"}>
    <div className="menu__header">
      <Link to="/" className="home-menu-btn" title="Home">
        <i className="fas fa-coins rapidcoin__logo" onClick={resetFilter} aria-label="Home" />
      </Link>
      <div className="select-currencies">
      <span className="currency-symbol">{isEUR ? (
        <i className="fas fa-euro-sign"></i>
      ) : (
        <i className="fas fa-dollar-sign"></i>
      )}</span>
        <button
        type="button"
        className="select-currency-btn"
        aria-label="Select currency"
        onClick={toggleCurrenciesButton}
        >
          {isEUR ? 'EUR' :  'USD'}
          <i className="fas fa-caret-down"></i>
        </button>
        {isCurrencyTogglerClicked && (
          <div className="currencies-wrapper">
          <button type="button" aria-label="EUR" onClick={(e) => toggleCurrency(e.target.ariaLabel)}
            className="currency-btn">
              EUR
            </button>
            <button type="button" aria-label="USD" onClick={(e) => toggleCurrency(e.target.ariaLabel)}
            className="currency-btn">
              USD
          </button>
        </div>)}
      </div>
      <button onClick={themeToggler} className="theme-toggler--mobile" aria-label="Toggle light mode">
          {theme === 'light' ? <i className="fas fa-moon" /> : <i className="fas fa-lightbulb" />}
      </button>
      <button
        type="button"
        className="close-menu-btn"
        onClick={hideMenu}
        aria-label="Close Mobile Menu"
        >
        <i className="fas fa-times"></i>
      </button>
    </div>
    <nav className="menu__nav">
    <Link to="/" className="menu__nav-link" onClick={hideMenu}>
      Cryptocurrencies
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