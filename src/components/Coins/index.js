import React from 'react';
import PropTypes from 'prop-types';
import Coin from '../Coin';
import './coins.scss';

const Coins = ({ coins }) => (
  <main className="coins">
    {coins.map((coin) => (
      <Coin
        key={coin.id}
        {...coin}
      />
    ))};
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
