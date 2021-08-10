import React from 'react';
import PropTypes from 'prop-types';
import './coin.scss';

const Coin = ({ name, image, symbol, current_price, market_cap, total_volume, price_change_percentage_24h, circulating_supply, market_cap_rank }) => (
  <article className="coin">
    <p className="coin__header">
      #{market_cap_rank}
      <img src={image} className="coin__header-img" />
    </p>
    <p className="coin__content">Name: {name}</p>
    <p className="coin__content">Symbol: {symbol.toUpperCase()}</p>
    <p className="coin__content">Current Price: {current_price} €</p>
    <p className="coin__content">Market Cap: {market_cap} €</p>
    <p className="coin__content">Volume 24h: {total_volume} €</p>
    <p className="coin__content">
      Price change 24h:
      <span className={price_change_percentage_24h > 0 ? 'coin__content--pos' : 'coin__content--neg'}>
         {price_change_percentage_24h} %
      </span>
    </p>
    <p className="coin__content">Circ supply: {circulating_supply}</p>
  </article>
);

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  current_price: PropTypes.number.isRequired,
  market_cap: PropTypes.number.isRequired,
  total_volume: PropTypes.number.isRequired,
  price_change_percentage_24h: PropTypes.number.isRequired,
  circulating_supply: PropTypes.number.isRequired,
  market_cap_rank: PropTypes.number.isRequired,
}

export default Coin;