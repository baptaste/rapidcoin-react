import React from 'react';

import './coin.scss';

const Coin = ({ id, name, image, symbol, current_price, market_cap, total_volume, price_change_percentage_24h, circulating_supply, market_cap_rank }) => (
  <div className="coin">
    <p className="coin__header">
      #{market_cap_rank}
      <img src={image} className="coin__header-img" />
    </p>
    <p className="coin__content">Name: {name}</p>
    <p className="coin__content">Symbol: {symbol}</p>
    <p className="coin__content">Price: {current_price} €</p>
    <p className="coin__content">Market Cap: {market_cap} €</p>
    <p className="coin__content">Volume 24h: {total_volume} €</p>
    <p className="coin__content">
      Price change 24h:
      <span className={price_change_percentage_24h > 0 ? 'coin__content--pos' : 'coin__content--neg'}>
         {price_change_percentage_24h} %
      </span>
    </p>
    <p className="coin__content">Circ supply: {circulating_supply}</p>
  </div>
);

export default Coin;