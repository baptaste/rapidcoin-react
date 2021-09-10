import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchBar from 'src/containers/SearchBar';
// import icon from 'src/assets/icon.png';
import './header.scss';

const Header = ({ resetFilter, toggleIsMenuOpen, themeToggler, theme }) => {
  const location = useLocation();

  return (
    <header className="header">
    <Link to="/">
      <i className="fas fa-coins rapidcoin__logo" onClick={resetFilter} />
    </Link>
    <div className="header__menu">
      {location.pathname === '/' && <SearchBar />}
      <NavLink exact to="/"  className="header__menu-desktopBtn" activeClassName="header__menu-desktopBtn--active">All Coins</NavLink>
      <NavLink exact to="/trendings"  className="header__menu-desktopBtn" activeClassName="header__menu-desktopBtn--active">Trending</NavLink>
      <NavLink exact to="/platforms"  className="header__menu-desktopBtn" activeClassName="header__menu-desktopBtn--active">Finance Platforms</NavLink>
      <button onClick={themeToggler}>
        {theme === 'light' ? <i className="fas fa-moon" /> : <i className="fas fa-sun" />}
      </button>
      <button
        type="button"
        className="header__menu-mobileBtn"
        onClick={toggleIsMenuOpen}>
          <i className="fas fa-bars" />
      </button>
    </div>

  </header>
  );
};



Header.propTypes = {
  resetFilter: PropTypes.func.isRequired,
  toggleIsMenuOpen: PropTypes.func.isRequired,
}

export default Header;
