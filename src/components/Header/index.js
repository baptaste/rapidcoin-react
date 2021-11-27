import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchBar from 'src/containers/SearchBar';
import './header.scss';

const Header = ({
  resetFilter,
  toggleIsMenuOpen,
  toggleCurrency,
  isCurrencyTogglerClicked,
  toggleCurrenciesButton,
  isEUR,
  themeToggler,
  theme
}) => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="header__nav">

        <div className="header__menu">
          <Link to="/" title="Home">
            <i className="fas fa-coins rapidcoin__logo" onClick={resetFilter} aria-label="Home" />
          </Link>
          <NavLink exact to="/" onClick={resetFilter} className="header__menu-desktopBtn" activeClassName="header__menu-desktopBtn--active">Home</NavLink>
          <NavLink exact to="/trendings"  className="header__menu-desktopBtn" activeClassName="header__menu-desktopBtn--active">Trending</NavLink>
          <NavLink exact to="/platforms"  className="header__menu-desktopBtn" activeClassName="header__menu-desktopBtn--active">Finance Platforms</NavLink>
        </div>

        <div className="header__menu right">
        {location.pathname === '/' && <SearchBar />}
          {/* currency toggler */}
          <span className="currency-symbol">{isEUR ? (
            <i className="fas fa-euro-sign"></i>
          ) : (
            <i className="fas fa-dollar-sign"></i>
          )}</span>

          <div className="select-currencies">
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
            </div>
            )}
          </div>

          <button onClick={themeToggler} className="theme-toggler" aria-label="Toggle light mode">
            {theme === 'light' ? <i className="fas fa-moon" /> : <i className="fas fa-lightbulb" />}
          </button>
          <button
            type="button"
            className="header__menu-mobileBtn"
            onClick={toggleIsMenuOpen}
            aria-label="Open Mobile Menu"
            >
              <div className="header__menu-mobileBtn--topBar"></div>
              <div className="header__menu-mobileBtn--subBar"></div>
          </button>
        </div>

    </nav>
  </header>
  );
};



Header.propTypes = {
  resetFilter: PropTypes.func.isRequired,
  toggleIsMenuOpen: PropTypes.func.isRequired,
}

export default Header;
