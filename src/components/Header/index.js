import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchBar from 'src/containers/SearchBar';
import icon from 'src/assets/icon.png';
import './header.scss';

const Header = ({ resetFilter, toggleIsMenuOpen }) => (
  <header className="header">
    <Link
      to="/"
    >
      <img src={icon} className="rapidcoin__logo" onClick={resetFilter} />
    </Link>
    <SearchBar />
    <button
      type="button"
      className="header__menu-btn"
      onClick={toggleIsMenuOpen}>
      <i className="fas fa-bars"></i>
    </button>
  </header>
);

Header.propTypes = {
  resetFilter: PropTypes.func.isRequired,
  toggleIsMenuOpen: PropTypes.func.isRequired,
}

export default Header;
