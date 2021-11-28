import React from 'react'
import { Link } from 'react-router-dom';
import './suggestions.scss';


const Suggestions = ({ searchValue, trendingCoins, suggestedCoins, hideSuggestions, getCoinId }) => {
  return (
    <div className="search-suggestions">
      <button onClick={hideSuggestions} className="close-menu-btn suggestions-btn" aria-label="Close suggestions">
      <i className="fas fa-times" />
      </button>
      {searchValue === '' && trendingCoins !== suggestedCoins ? (
        <div className="suggestionsHeader flex-align-center textBold">Trending
        <i className="fab fa-hotjar" title="Trending" />
      </div>
      ) : (
        <div className="suggestionsHeader flex-align-center textBold">
          {suggestedCoins.length !== 0 ? 'Cryptocurrencies' : `No results for '${searchValue}'`}
        </div>
      )}
      {searchValue === '' && trendingCoins !== suggestedCoins ? (
        trendingCoins.map((coin) => {
          const getCurrentCoinId = () => (
            getCoinId(coin)
          );
          return (
            <Link
              onClick={getCurrentCoinId}
              to={`/coin/${coin.id}`}
              className="suggestion" key={coin.id}
            >
              <img src={coin.thumb} className="coin-suggested__img" />
              <p className="coin-suggested">
                {coin.name} ({coin.symbol.toUpperCase()}) <span>#{coin.market_cap_rank}</span>
              </p>
            </Link>
          )})
      ) : (
        suggestedCoins.map((coin) => {
          const getCurrentCoinId = () => (
            getCoinId(coin)
          );
          const trendyCoin = trendingCoins.find((trend) => trend.id === coin.id);
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
              {trendyCoin && <i className="fab fa-hotjar" title="Trending" />}
            </Link>
          )}
        ))}
    </div>
  );
};

export default Suggestions;