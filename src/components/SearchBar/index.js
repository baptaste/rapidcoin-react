import React from 'react';
import PropTypes from 'prop-types';

import './searchbar.scss';

const SearchBar = ({ searchValue, onSearchChange, onSearchSubmit, }) => (

  <form onSubmit={onSearchSubmit} className="search">
    <input
      className="search__input"
      focus="true"
      placeholder="Search crypto..."
      value={searchValue}
      onChange={(evt) => onSearchChange(evt.target.value)}
      />
    <i className="fas fa-search" onClick={onSearchSubmit} />
  </form>

);

SearchBar.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;