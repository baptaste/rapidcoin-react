import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './searchbar.scss';

const SearchBar = ({ searchValue, onSearchChange, onSearchSubmit, suggestedCoins, getCoinId, hideSuggestions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleInput = () => setIsOpen(!isOpen);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="form__container">
      <form onSubmit={onSearchSubmit} className="form">
      <input
        className={isOpen ? 'form__input form__input--open' : 'form__input'}
        ref={inputRef}
        placeholder="Search crypto"
        value={searchValue}
        onChange={(evt) => onSearchChange(evt.target.value)}
        />
        <i className="fas fa-search" onClick={toggleInput} aria-label="Search" />
      </form>
      {searchValue !== '' && suggestedCoins.length !== 0 && (
         <div className="search-suggestions">
           <button onClick={hideSuggestions} className="close-menu-btn suggestions-btn" aria-label="Close suggestions">
           <i className="fas fa-times" />
            </button>
         {suggestedCoins.map((coin) => {
            const getCurrentCoinId = () => {
              return getCoinId(coin);
            }
          return (
             <Link
             onClick={getCurrentCoinId}
             to={`/coin/${coin.id}`}
             className="suggestion" key={coin.id}
             >
             <img src={coin.image} className="coin-suggested__img" />
             <p className="coin-suggested">
               {coin.name} ({coin.symbol.toUpperCase()}) <span>#{coin.market_cap_rank}</span>
              </p>
              </Link>
          )}
         )}
         </div>
      )}
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