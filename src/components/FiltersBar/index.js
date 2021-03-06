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
  isFilterByMarketCapClicked,
  isMarketCapFilteredDESC,
  isMarketCapFilteredASC,
  getCoinsByMarketCapASC,
  getCoinsByMarketCapDESC,
  switchDashboard,
  isBlockDashboard,
  isSwitchDashboardClicked,
}) => (
  <div className="filters-bar">
    {/* default rank */}
    <button type="button" className="goButton goButton__filter" onClick={getCoins} title="Rank">Rank</button>

    {/* price filter */}
    {!isFilterByPriceClicked && (!isCoinsFilteredDESC && !isCoinsFilteredASC) &&
    <button
      type="button"
      className="goButton goButton__filter"
      // toggling calls to function between DESC & ASC coins prices
      onClick={isFilterByPriceClicked ? getCoinsByPriceASC : getCoinsByPriceDESC}>
      Price
    </button>}

    {isCoinsFilteredDESC &&
      <button
      type="button"
      className={isCoinsFilteredDESC ? 'goButton goButton__filter active' : 'goButton goButton__filter'}
      title="Descending"
      onClick={getCoinsByPriceASC}>
      <i className="fas fa-sort-amount-down" /> Price
    </button>}

    {isCoinsFilteredASC &&
      <button
      type="button"
      className={isCoinsFilteredASC ? 'goButton goButton__filter active' : 'goButton goButton__filter'}
      title="Ascending"
      onClick={getCoinsByPriceDESC}>
      <i className="fas fa-sort-amount-up-alt" /> Price
    </button>}

    {/* market cap filter */}
    {!isFilterByMarketCapClicked && (!isMarketCapFilteredDESC && !isMarketCapFilteredASC) &&
    <button
      type="button"
      className="goButton goButton__filter"
      // toggling calls to function between DESC & ASC market cap
      onClick={isFilterByMarketCapClicked ? getCoinsByMarketCapASC : getCoinsByMarketCapDESC}>
      Market Cap
    </button>}

    {isMarketCapFilteredDESC &&
      <button
      type="button"
      className={isMarketCapFilteredDESC ? 'goButton goButton__filter active' : 'goButton goButton__filter'}
      title="Descending"
      onClick={getCoinsByMarketCapASC}>
      <i className="fas fa-sort-amount-down" /> Market Cap
    </button>}

    {isMarketCapFilteredASC &&
      <button
      type="button"
      className={isMarketCapFilteredASC ? 'goButton goButton__filter active' : 'goButton goButton__filter'}
      title="Ascending"
      onClick={getCoinsByMarketCapDESC}>
      <i className="fas fa-sort-amount-up-alt" /> Market Cap
    </button>}

    {/* dashboard toggler */}
    <button type="button" className="goButton goButton__filter flex" onClick={switchDashboard} title="Switch">
      {isSwitchDashboardClicked && isBlockDashboard ? (
        <div className="dashboardButton flex-center-around">
          <i className="fas fa-th-list"></i>Table dashboard
        </div>
      ) : (
        <div className="dashboardButton flex-center-around">
          <i className="fas fa-square"></i>Block dashboard
        </div>
      )}
    </button>
  </div>
);

export default FiltersBar;