import React from 'react';

import './filtersbar.scss';

const FiltersBar = ({
  getCoins,
  getCoinsByPriceDESC,
  getCoinsByPriceASC,
  isFilterByPriceClicked,
  isCoinsFilteredDESC,
  isCoinsFilteredASC,
  toggleCurrency,
  isEUR,
}) => (
  <div className="filters-bar">
    <button type="button" className="goButton" onClick={getCoins} title="Rank">#</button>

    {!isFilterByPriceClicked && (!isCoinsFilteredDESC && !isCoinsFilteredASC) &&
    <button
      type="button"
      className="goButton"
      // toggling calls to function between DESC & ASC coins prices
      onClick={isFilterByPriceClicked ? getCoinsByPriceASC : getCoinsByPriceDESC}>
      Price
    </button>}

    {isCoinsFilteredDESC &&
      <button
      type="button"
      className={isCoinsFilteredDESC ? 'goButton goButton__filter-price--active' : 'goButton'}
      title="Desending price"
      onClick={getCoinsByPriceASC}>
      <i className="fas fa-sort-amount-down" /> Price
    </button>}

    {isCoinsFilteredASC &&
      <button
      type="button"
      className={isCoinsFilteredASC ? 'goButton goButton__filter-price--active' : 'goButton'}
      title="Ascending price"
      onClick={getCoinsByPriceDESC}>
      <i className="fas fa-sort-amount-up-alt" /> Price
    </button>}

    <button type="button" className="goButton" onClick={toggleCurrency} title="Currency">
      {isEUR ? '$' : '€'}
    </button>
  </div>
);

export default FiltersBar;