import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchBar from 'src/containers/SearchBar';
import icon from 'src/assets/icon.png';
import './header.scss';

const Header = ({ resetFilter, toggleIsMenuOpen }) => (
  <header className="header">
    <Link to="/">
      <img src={icon} className="rapidcoin__logo" onClick={resetFilter} />
    </Link>
    <div className="header__menu">
      <SearchBar />
      <Link to="/"  className="header__menu-desktopBtn">All Coins</Link>
      <Link to="/trendings"  className="header__menu-desktopBtn">Trending</Link>
      <Link to="/platforms"  className="header__menu-desktopBtn">Finance Platforms</Link>
      <button
        type="button"
        className="header__menu-mobileBtn"
        onClick={toggleIsMenuOpen}>
          <i className="fas fa-bars" />
      </button>
    </div>

  </header>
);

Header.propTypes = {
  resetFilter: PropTypes.func.isRequired,
  toggleIsMenuOpen: PropTypes.func.isRequired,
}

export default Header;
