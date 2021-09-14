import React from 'react';

import './filtersbar.scss';

const FiltersBar = ({
  getCoins,
  getCoinsByPriceDESC,
  getCoinsByPriceASC,
  isFilterByPriceClicked,
  isCoinsFilteredDESC,
  isCoinsFilteredASC
}) => (
  <div className="filters-bar">
    <button type="button" className="goButton" onClick={getCoins}>#</button>

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
      className="goButton goButton__filter--price"
      onClick={getCoinsByPriceASC}>
      <i className="fas fa-sort-amount-down"></i> Price
    </button>}

    {isCoinsFilteredASC &&
      <button
      type="button"
      className="goButton goButton__filter--price"
      onClick={getCoinsByPriceDESC}>
      <i className="fas fa-sort-amount-up-alt"></i> Price
    </button>}
  </div>
);

export default FiltersBar;