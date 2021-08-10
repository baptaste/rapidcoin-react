import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Coin from '../Coin';
import './coins.scss';

const Coins = ({ coins, getCoinId, filteredCoins }) => (
    <main className="coins">
      {/* all coins */}
      {filteredCoins.length === 0 &&
      coins.map((coin) => {
        const getCurrentCoinId = () => (
          getCoinId(coin)
        );
        return (
          <Link
          key={coin.id}
          className="coins__link"
          onClick={getCurrentCoinId}
          to={`/coin/${coin.id}`}
          >
            <Coin
              {...coin}
            />
        </Link>
        );
      })}
      {/* filtered coins */}
      {filteredCoins.length !== 0 &&
      filteredCoins.map((coin) => {
        const getCurrentCoinId = () => (
          getCoinId(coin)
        );
        return (
          <Link
          key={coin.id}
          className="coins__link"
          onClick={getCurrentCoinId}
          to={`/coin/${coin.id}`}
          >
            <Coin
              {...coin}
            />
        </Link>
        );
      })}

  </main>
);


Coins.propTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      current_price: PropTypes.number.isRequired,
      market_cap: PropTypes.number.isRequired,
      total_volume: PropTypes.number.isRequired,
      price_change_percentage_24h: PropTypes.number.isRequired,
      circulating_supply: PropTypes.number.isRequired,
      market_cap_rank: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Coins;
