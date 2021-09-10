import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import './searchbar.scss';

const SearchBar = ({ searchValue, onSearchChange, onSearchSubmit, filteredCoins, coin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleInput = () => setIsOpen(!isOpen);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const history = useHistory();

  useEffect(() => {
    // in order to force redirect towards results page
    // if a new research just happened (when filteredCoins[0] has changed)
    if (filteredCoins[0] !== coin) history.goBack();
  }, [filteredCoins[0]]);

  return (
    <div className="form__container">
      <form onSubmit={onSearchSubmit} className="form">
      <input
        className={isOpen ? 'form__input form__input--open' : 'form__input'}
        ref={inputRef}
        placeholder="Search crypto..."
        value={searchValue}
        onChange={(evt) => onSearchChange(evt.target.value)}
        />
        <i className="fas fa-search" onClick={toggleInput} />
      </form>

    </div>
  );


};

SearchBar.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;