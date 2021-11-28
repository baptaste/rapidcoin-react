import React from 'react';
import Suggestions from 'src/containers/Suggestions';
import PropTypes from 'prop-types';

import './searchbar.scss';

const SearchBar = ({ searchValue, onSearchChange, onSearchSubmit, isSearching, handleIsSearching }) => {
  return (
    <div className="form__container">
      <form onSubmit={onSearchSubmit} className="form">
      <input
        className={isSearching ? 'form__input form__input--open' : 'form__input'}
        placeholder="Search crypto"
        value={searchValue}
        onChange={(evt) => onSearchChange(evt.target.value)}
        onClick={handleIsSearching}
        />
        <i className="fas fa-search" onClick={handleIsSearching} aria-label="Search" />
      </form>
      {isSearching && <Suggestions />}
    </div>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;