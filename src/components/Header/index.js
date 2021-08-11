import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SearchBar from 'src/containers/SearchBar';
import icon from 'src/assets/icon.png';
import './header.scss';

const Header = ({ resetFilter }) => (
  <header className="header">
    <Link
      to="/"
    >
      <img src={icon} className="rapidcoin__logo" onClick={resetFilter} />
    </Link>
    <SearchBar />
  </header>
);

export default Header;
